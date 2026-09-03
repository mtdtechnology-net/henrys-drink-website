import "server-only";
import crypto from "node:crypto";

const languageIds = {
  en: 1,
  fr: 2,
  pt: 3,
} as const;

export type SupportedLocale = keyof typeof languageIds;

type PrestaShopLocalizedValue =
  | string
  | {
      id?: number;
      value?: string;
    }
  | Array<{
      id?: number;
      value?: string;
    }>;

type PrestaShopProductResponse = {
  product: {
    id: number | string;
    name: PrestaShopLocalizedValue;
    description: PrestaShopLocalizedValue;
    description_short: PrestaShopLocalizedValue;
    price: number | string;
    active: number | string;
    available_for_order: number | string;
    associations?: {
      images?: Array<{
        id: number | string;
      }>;
      stock_availables?: Array<{
        id: number | string;
        id_product_attribute?: number | string;
      }>;
    };
  };
};

type PrestaShopStockResponse = {
  stock_available: {
    id: number | string;
    id_product: number | string;
    quantity: number | string;
  };
};

export type PrestaShopProduct = {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  stock: number;
  availableForOrder: boolean;
  imageId: number | null;
};

function getConfiguration() {
  const apiUrl = process.env.PRESTASHOP_API_URL;
  const apiKey = process.env.PRESTASHOP_API_KEY;

  if (!apiUrl) {
    throw new Error("PRESTASHOP_API_URL is not configured");
  }

  if (!apiKey) {
    throw new Error("PRESTASHOP_API_KEY is not configured");
  }

  return {
    apiUrl: apiUrl.replace(/\/$/, ""),
    apiKey,
  };
}

function getLocale(locale: string): SupportedLocale {
  if (locale === "fr" || locale === "pt") {
    return locale;
  }

  return "en";
}

function readLocalizedValue(value: PrestaShopLocalizedValue): string {
  if (typeof value === "string") {
    return value;
  }

  if (Array.isArray(value)) {
    return value[0]?.value ?? "";
  }

  return value?.value ?? "";
}

async function prestaShopFetch<T>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  const { apiUrl, apiKey } = getConfiguration();

  const response = await fetch(`${apiUrl}${path}`, {
    ...options,
    headers: {
      Accept: "application/json",
      Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString("base64")}`,
      ...options?.headers,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const body = await response.text();

    throw new Error(
      `PrestaShop request failed (${response.status}): ${body}`,
    );
  }

  return response.json() as Promise<T>;
}

export async function getPrestaShopProduct(
  productId: number,
  locale: string,
): Promise<PrestaShopProduct> {
  const selectedLocale = getLocale(locale);
  const languageId = languageIds[selectedLocale];

  const data = await prestaShopFetch<PrestaShopProductResponse>(
    `/products/${productId}?language=${languageId}&output_format=JSON`,
  );

  const product = data.product;
  const stockReference = product.associations?.stock_availables?.[0];

  let stock = 0;

  if (stockReference) {
    const stockData = await prestaShopFetch<PrestaShopStockResponse>(
      `/stock_availables/${stockReference.id}?output_format=JSON`,
    );

    stock = Number(stockData.stock_available.quantity);
  }

  const imageId = product.associations?.images?.[0]?.id;

  return {
    id: Number(product.id),
    name: readLocalizedValue(product.name),
    description: readLocalizedValue(product.description),
    shortDescription: readLocalizedValue(product.description_short),
    price: Number(product.price),
    stock,
    availableForOrder:
      Number(product.active) === 1 &&
      Number(product.available_for_order) === 1 &&
      stock > 0,
    imageId: imageId ? Number(imageId) : null,
  };
}

export async function getPrestaShopProductImage(
  productId: number,
  imageId: number,
): Promise<{
  body: ArrayBuffer;
  contentType: string;
}> {
  const { apiUrl, apiKey } = getConfiguration();

  const response = await fetch(
    `${apiUrl}/images/products/${productId}/${imageId}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString("base64")}`,
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(
      `Could not load product image (${response.status})`,
    );
  }

  return {
    body: await response.arrayBuffer(),
    contentType: response.headers.get("content-type") ?? "image/jpeg",
  };
}

// ---------------------------------------------------------------------------
// Order creation helpers (used by the Stripe webhook and success page)
// ---------------------------------------------------------------------------

export type CheckoutLineItem = {
  productId: number;
  quantity: number;
};

export type CreateOrderPayment = {
  module: string;
  payment: string;
  transactionId?: string;
  totalPaid: number;
  paymentMethod?: string;
};

export type CreateOrderInput = {
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
  };
  address: {
    address1: string;
    address2?: string;
    postalCode: string;
    city: string;
    country: string;
  };
  locale: string;
  items: CheckoutLineItem[];
  reference: string;
  payment: CreateOrderPayment;
  orderStateId: number;
};

function xml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

async function prestaGet(path: string) {
  const { apiUrl, apiKey } = getConfiguration();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  const response = await fetch(`${apiUrl}${normalizedPath}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString("base64")}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `PrestaShop GET ${path} failed: ${response.status} ${await response.text()}`,
    );
  }

  return response.json();
}

async function prestaPost(
  resource: string,
  singular: string,
  body: string,
): Promise<number> {
  const { apiUrl, apiKey } = getConfiguration();

  const response = await fetch(`${apiUrl}/${resource}?output_format=JSON`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString("base64")}`,
      "Content-Type": "application/xml",
      Accept: "application/json",
    },
    body,
    cache: "no-store",
  });

  const text = await response.text();

  if (!response.ok) {
    throw new Error(
      `PrestaShop POST ${resource} failed: ${response.status} ${text}`,
    );
  }

  try {
    const data = JSON.parse(text);

    const id = Number(
      data?.[singular]?.id ??
        data?.prestashop?.[singular]?.id ??
        data?.[`${singular}s`]?.[0]?.id ??
        data?.prestashop?.[`${singular}s`]?.[0]?.id,
    );

    if (id) {
      return id;
    }
  } catch {
    // fall through to regex/location parsing
  }

  const match =
    text.match(/<id[^>]*><!\[CDATA\[(\d+)\]\]><\/id>/) ??
    text.match(/<id[^>]*>(\d+)<\/id>/);

  if (match) {
    return Number(match[1]);
  }

  const location = response.headers.get("location");
  const locationId = location?.match(
    new RegExp(`/${resource}/(\\d+)(?:[/?]|$)`),
  )?.[1];

  if (locationId) {
    return Number(locationId);
  }

  console.error(`Unexpected PrestaShop POST ${resource} response:`, {
    status: response.status,
    location,
    text,
  });

  throw new Error(`Could not read created ${singular} ID`);
}

async function getFirstId(resource: string, query: string) {
  const data = await prestaGet(
    `${resource}?${query}&display=[id]&output_format=JSON`,
  );

  const rows = data?.[resource];

  if (!Array.isArray(rows) || !rows.length) {
    return null;
  }

  return Number(rows[0].id);
}

function localizedValue(
  values: Array<{ id: number; value: string }> | string,
  languageId: number,
) {
  if (typeof values === "string") {
    return values;
  }

  return (
    values?.find((value) => Number(value.id) === languageId)?.value ??
    values?.[0]?.value ??
    ""
  );
}

/**
 * Creates a full PrestaShop order (customer -> address -> cart -> order ->
 * order_detail -> order_history -> order_payment) via the webservice.
 *
 * This runs AFTER Stripe confirms payment, so the order only ever exists as a
 * paid order in PrestaShop.
 */
export async function createPrestaShopOrder(
  input: CreateOrderInput,
): Promise<{ orderId: number; reference: string; subtotal: number; shipping: number; total: number }> {
  const { customer, address, locale, items, reference, payment, orderStateId } = input;

  const customerCountry =
    address.country === "Portugal"
      ? "PT"
      : address.country === "France"
        ? "FR"
        : "FR";

  const languageId =
    (await getFirstId("languages", `filter[iso_code]=${encodeURIComponent(locale)}`)) ??
    1;

  const currencyId =
    (await getFirstId("currencies", "filter[iso_code]=EUR")) ?? 1;

  const countryId = await getFirstId(
    "countries",
    `filter[iso_code]=${customerCountry}`,
  );

  if (!countryId) {
    throw new Error(
      `Country ${customerCountry} was not found in PrestaShop.`,
    );
  }

  const carrierId = await getFirstId(
    "carriers",
    "filter[active]=1&filter[deleted]=0",
  );

  if (!carrierId) {
    throw new Error(
      "No active carrier was found in PrestaShop. Configure a carrier first.",
    );
  }

  let customerId = await getFirstId(
    "customers",
    `filter[email]=${encodeURIComponent(customer.email)}`,
  );

  if (!customerId) {
    const password =
      crypto.randomBytes(18).toString("base64url") + "Aa1!";

    customerId = await prestaPost(
      "customers",
      "customer",
      `<?xml version="1.0" encoding="UTF-8"?>
<prestashop>
  <customer>
    <id_lang>${languageId}</id_lang>
    <passwd>${xml(password)}</passwd>
    <lastname>${xml(customer.lastName)}</lastname>
    <firstname>${xml(customer.firstName)}</firstname>
    <email>${xml(customer.email)}</email>
    <active>1</active>
    <is_guest>1</is_guest>
    <id_shop>1</id_shop>
    <id_shop_group>1</id_shop_group>
    <id_default_group>3</id_default_group>
<associations>
  <groups>
    <group>
      <id>3</id>
    </group>
  </groups>
</associations>
  </customer>
</prestashop>`,
    );
  }

  const addressId = await prestaPost(
    "addresses",
    "address",
    `<?xml version="1.0" encoding="UTF-8"?>
<prestashop>
  <address>
    <id_customer>${customerId}</id_customer>
    <id_country>${countryId}</id_country>
    <alias>Checkout</alias>
    <lastname>${xml(customer.lastName)}</lastname>
    <firstname>${xml(customer.firstName)}</firstname>
    <address1>${xml(address.address1)}</address1>
    <address2>${xml(address.address2)}</address2>
    <postcode>${xml(address.postalCode)}</postcode>
    <city>${xml(address.city)}</city>
    <phone>${xml(customer.phone)}</phone>
    <active>1</active>
  </address>
</prestashop>`,
  );

  const products = await Promise.all(
    items.map(async (item) => {
      const data = await prestaGet(
        `products/${item.productId}?output_format=JSON`,
      );

      const product = data.product;

      return {
        id: Number(product.id),
        name: localizedValue(product.name, languageId),
        quantity: Math.max(1, Number(item.quantity)),
        price: Number(product.price),
      };
    }),
  );

  const subtotal = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = 15;
  const total = subtotal + shipping;

  const cartRows = products
    .map(
      (product) => `
      <cart_row>
        <id_product>${product.id}</id_product>
        <id_product_attribute>0</id_product_attribute>
        <id_address_delivery>${addressId}</id_address_delivery>
        <quantity>${product.quantity}</quantity>
      </cart_row>`,
    )
    .join("");

  const prestaCartId = await prestaPost(
    "carts",
    "cart",
    `<?xml version="1.0" encoding="UTF-8"?>
<prestashop>
  <cart>
    <id_address_delivery>${addressId}</id_address_delivery>
    <id_address_invoice>${addressId}</id_address_invoice>
    <id_currency>${currencyId}</id_currency>
    <id_customer>${customerId}</id_customer>
    <id_lang>${languageId}</id_lang>
    <id_carrier>${carrierId}</id_carrier>
    <id_shop>1</id_shop>
    <associations>
      <cart_rows>
        ${cartRows}
      </cart_rows>
    </associations>
  </cart>
</prestashop>`,
  );

  const orderId = await prestaPost(
    "orders",
    "order",
    `<?xml version="1.0" encoding="UTF-8"?>
<prestashop>
  <order>
    <id_address_delivery>${addressId}</id_address_delivery>
    <id_address_invoice>${addressId}</id_address_invoice>
    <id_cart>${prestaCartId}</id_cart>
    <id_currency>${currencyId}</id_currency>
    <id_lang>${languageId}</id_lang>
    <id_customer>${customerId}</id_customer>
    <id_carrier>${carrierId}</id_carrier>
    <id_shop>1</id_shop>
    <reference>${xml(reference)}</reference>

    <module>${xml(payment.module)}</module>
    <payment>${xml(payment.payment)}</payment>
    <total_paid>${total.toFixed(6)}</total_paid>
    <total_paid_tax_incl>${total.toFixed(6)}</total_paid_tax_incl>
    <total_paid_tax_excl>${total.toFixed(6)}</total_paid_tax_excl>
    <total_paid_real>${payment.totalPaid.toFixed(6)}</total_paid_real>

    <total_products>${subtotal.toFixed(6)}</total_products>
    <total_products_wt>${subtotal.toFixed(6)}</total_products_wt>

    <total_shipping>${shipping.toFixed(6)}</total_shipping>
    <total_shipping_tax_incl>${shipping.toFixed(6)}</total_shipping_tax_incl>
    <total_shipping_tax_excl>${shipping.toFixed(6)}</total_shipping_tax_excl>

    <total_discounts>0.000000</total_discounts>
    <total_discounts_tax_incl>0.000000</total_discounts_tax_incl>
    <total_discounts_tax_excl>0.000000</total_discounts_tax_excl>

    <total_wrapping>0.000000</total_wrapping>
    <total_wrapping_tax_incl>0.000000</total_wrapping_tax_incl>
    <total_wrapping_tax_excl>0.000000</total_wrapping_tax_excl>

    <conversion_rate>1.000000</conversion_rate>
  </order>
</prestashop>`,
  );

  // PrestaShop's PaymentModule::validateOrder regenerates the order reference
  // when it creates the order, so fetch the real reference to use for the
  // payment record and for showing the customer.
  const createdOrder = await prestaGet(`orders/${orderId}?output_format=JSON`);
  const realReference = String(
    createdOrder?.order?.reference ?? reference,
  );

  await prestaPost(
    "order_histories",
    "order_history",
    `<?xml version="1.0" encoding="UTF-8"?>
<prestashop>
  <order_history>
    <id_employee>0</id_employee>
    <id_order>${orderId}</id_order>
    <id_order_state>${orderStateId}</id_order_state>
  </order_history>
</prestashop>`,
  );

  if (payment.transactionId) {
    try {
      await prestaPost(
        "order_payments",
        "order_payment",
        `<?xml version="1.0" encoding="UTF-8"?>
<prestashop>
  <order_payment>
    <order_reference>${xml(realReference)}</order_reference>
    <id_currency>${currencyId}</id_currency>
    <amount>${payment.totalPaid.toFixed(6)}</amount>
    <payment_method>${xml(payment.paymentMethod ?? payment.payment)}</payment_method>
    <transaction_id>${xml(payment.transactionId)}</transaction_id>
  </order_payment>
</prestashop>`,
      );
    } catch (error) {
      if (isDuplicatePaymentError(error)) {
        throw new DuplicatePaymentError(payment.transactionId);
      }
      throw error;
    }
  }

  return { orderId, reference: realReference, subtotal, shipping, total };
}

export class DuplicatePaymentError extends Error {
  transactionId: string;
  constructor(transactionId: string) {
    super(`Payment already processed: ${transactionId}`);
    this.name = "DuplicatePaymentError";
    this.transactionId = transactionId;
  }
}

function isDuplicatePaymentError(error: unknown): boolean {
  if (!(error instanceof Error)) {
    return false;
  }
  const message =
    error.message ??
    `${error.name ?? ""} ${(error as { stack?: string }).stack ?? ""}`;
  return (
    message.includes("Duplicate entry") ||
    message.includes("1062") ||
    message.includes("ux_transaction")
  );
}

export async function findOrderReferenceByTransactionId(transactionId: string) {
  const data = await prestaGet(
    `order_payments?filter[transaction_id]=${encodeURIComponent(
      transactionId,
    )}&display=[id,order_reference]&output_format=JSON`,
  );

  const rows = Array.isArray(data?.order_payments) ? data.order_payments : [];

  if (!rows.length) {
    return null;
  }

  return {
    paymentId: Number(rows[0].id),
    orderReference: rows[0].order_reference ?? null,
  };
}

export type StripeSessionLike = {
  client_reference_id?: string | null;
  payment_intent?: string | { id?: string } | null;
  amount_total?: number | null;
  payment_status?: string | null;
  metadata?: Record<string, string> | null;
};

/**
 * Creates a PrestaShop order from a completed Stripe checkout session.
 * Shared by the webhook and the success-page endpoint so the logic never
 * diverges. Guarantees a single order per Stripe payment: it pre-checks for an
 * existing payment, and the UNIQUE index on order_payment.transaction_id is the
 * final write-time barrier that makes a duplicate order impossible even under
 * concurrent calls.
 */
export async function createOrderFromStripeSession(
  session: StripeSessionLike,
): Promise<{
  created: boolean;
  duplicate: boolean;
  orderId?: number;
  reference?: string;
  total: number;
}> {
  const rawPaymentIntent = session.payment_intent;
  const transactionId =
    typeof rawPaymentIntent === "string"
      ? rawPaymentIntent
      : typeof rawPaymentIntent === "object" &&
          rawPaymentIntent !== null &&
          typeof rawPaymentIntent.id === "string"
        ? rawPaymentIntent.id
        : "";

  const amountTotal = (session.amount_total ?? 0) / 100;

  const total = Number.isFinite(amountTotal) ? amountTotal : 0;

  if (!transactionId) {
    throw new Error("Payment is missing a payment_intent");
  }

  const existing = await findOrderReferenceByTransactionId(transactionId);

  if (existing?.orderReference) {
    return {
      created: false,
      duplicate: true,
      reference: existing.orderReference,
      total,
    };
  }

  const metadata = session.metadata ?? {};
  const reference = String(
    session.client_reference_id ?? metadata.reference ?? "",
  );

  const items = (() => {
    try {
      return JSON.parse(metadata.items ?? "[]");
    } catch {
      return [];
    }
  })().filter(
    (item: unknown) =>
      item &&
      typeof (item as { productId: unknown }).productId !== "undefined",
  );

  try {
    const result = await createPrestaShopOrder({
      customer: {
        firstName: metadata.firstName ?? "",
        lastName: metadata.lastName ?? "",
        email: metadata.email ?? "",
        phone: metadata.phone ?? "",
      },
      address: {
        address1: metadata.address ?? "",
        address2: metadata.addressComplement ?? "",
        postalCode: metadata.postalCode ?? "",
        city: metadata.city ?? "",
        country: metadata.country ?? "France",
      },
      locale: metadata.locale ?? "en",
      items,
      reference,
      orderStateId: 2,
      payment: {
        module: "ps_stripe",
        payment: "Stripe",
        paymentMethod: "Card",
        transactionId,
        totalPaid: total,
      },
    });

    return {
      created: true,
      duplicate: false,
      orderId: result.orderId,
      reference: result.reference,
      total,
    };
  } catch (error) {
    if (error instanceof DuplicatePaymentError) {
      const existingReference =
        (await findOrderReferenceByTransactionId(transactionId))
          ?.orderReference ?? reference;
      return {
        created: false,
        duplicate: true,
        reference: existingReference,
        total,
      };
    }
    throw error;
  }
}
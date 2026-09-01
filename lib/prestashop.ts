import "server-only";

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
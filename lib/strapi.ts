const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  "https://henrys-drinks-admin-panel.dev.digitalbarn.de";

async function fetchStrapiSingle(
  endpoint: string,
  locale: string = "en"
) {
  const url = new URL(`${STRAPI_URL}/api/${endpoint}`);

  url.searchParams.set("locale", locale);
  url.searchParams.set("populate", "*");

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const token = process.env.STRAPI_API_TOKEN;

  if (token && token !== "undefined") {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const res = await fetch(url.toString(), {
      method: "GET",
      headers,
      cache: "no-store",
    });

    if (!res.ok) {
      const body = await res.text();

      console.error("=== STRAPI ERROR ===");
      console.error("Status:", res.status);
      console.error("URL:", url.toString());
      console.error("Response:", body);
      console.error("====================");

      return null;
    }

    const json = await res.json();

    return json?.data?.attributes || json?.data || null;
  } catch (error) {
    console.error("Failed to fetch from Strapi:", error);
    return null;
  }
}

export async function getHeritagePage(
  locale: string = "en"
) {
  return fetchStrapiSingle(
    "heritage-page",
    locale
  );
}

export async function getBordeauxHeritagePage(
  locale: string = "en"
) {
  return fetchStrapiSingle(
    "bordeaux-heritage-page",
    locale
  );
}

export async function getParisianNightPage(
  locale: string = "en"
) {
  return fetchStrapiSingle(
    "parisian-night-page",
    locale
  );
}

export async function getNightlifePage(
  locale: string = "en"
) {
  return fetchStrapiSingle(
    "nightlife-page",
    locale
  );
}

export async function getProductPage(
  locale: string = "en"
) {
  return fetchStrapiSingle(
    "product-page",
    locale
  );
}

export async function getContactPage(
  locale: string = "en"
) {
  return fetchStrapiSingle(
    "contact-page",
    locale
  );
}

export async function getPrivacyPolicyPage(
  locale: string = "en"
) {
  return fetchStrapiSingle(
    "privacy-policy-page", 
    locale
  );
}

export async function getShippingPolicyPage(
  locale: string = "en"
) {
  return fetchStrapiSingle(
    "shipping-policy-page",
     locale
  );
}

export async function getGlobalData(
  locale: string = "en")
   {
  return fetchStrapiSingle(
    "global",
     locale
    );
}
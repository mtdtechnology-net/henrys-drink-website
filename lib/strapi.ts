import { strapi, type StrapiClient } from "@strapi/client";

export function getStrapiClient(): StrapiClient {
  return strapi({
    baseURL: `${process.env.NEXT_PUBLIC_STRAPI_URL}/api`,
    auth: process.env.STRAPI_API_TOKEN,
  });
}

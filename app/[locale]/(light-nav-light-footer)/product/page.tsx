import { getProductPage } from "@/lib/strapi";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { ProductPageClient } from "@/components/product/ProductPageClient";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const res = await getProductPage(locale);

  const strapiData = res?.data?.attributes || res?.attributes || res;

  return (
    <ProductPageClient
      data={strapiData}
      addToCartButton={
        <AddToCartButton
          productId={1}
          locale={locale}
          buttonText={strapiData?.AddProductButton}
        />
      }
    />
  );
}

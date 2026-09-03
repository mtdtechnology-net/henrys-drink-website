import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { ProductPageClient } from "@/components/product/ProductPageClient";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <ProductPageClient
      addToCartButton={<AddToCartButton productId={1} locale={locale} />}
    />
  );
}
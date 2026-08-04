import { Footer } from "@/components/footer/Footer";

export default function LightFooterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      <Footer
        theme="light"
        privacyHref="/privacy-policy"
        shippingHref="/shipping-delivery"
      />
    </>
  );
}
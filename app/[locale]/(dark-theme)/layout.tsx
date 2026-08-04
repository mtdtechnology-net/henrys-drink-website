import { Footer } from "@/components/footer/Footer";

export default function DarkFooterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      <Footer
        theme="dark"
        privacyHref="/privacy-policy"
        shippingHref="/shipping-delivery"
      />
    </>
  );
}
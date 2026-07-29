import { Footer } from "@/components/footer/Footer";

export default function HeritagePage() {
  return (
    <main className="min-h-screen w-full bg-[url('/image.svg')] bg-cover bg-center bg-no-repeat text-white">
      <h1 className="p-8 text-3xl font-bold">My Heritage Page</h1>
      <Footer
  theme="dark"
  privacyHref="/privacy-policy"
  shippingHref="/shipping-delivery"
/>
<Footer
  theme="light"
  privacyHref="/privacy-policy"
  shippingHref="/shipping-delivery"
/>
    </main>
    
  );
}

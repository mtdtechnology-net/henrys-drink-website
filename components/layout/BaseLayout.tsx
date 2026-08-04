import { Footer } from "@/components/footer/Footer";
import { Navbar, NavbarTheme } from "@/components/navbar/Navbar";

interface BaseLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
  navTheme?: NavbarTheme;
  navBackgroundTheme?: NavbarTheme;
  footerTheme?: "light" | "dark";
  showFooter?: boolean;
}

export default async function BaseLayout({
  children,
  params,
  navTheme = "light",
  navBackgroundTheme = "dark",
  footerTheme = "light",
  showFooter = true,
}: BaseLayoutProps) {
  const { locale } = await params;

  return (
    <>
      <Navbar
        itemCount={0}
        locale={locale}
        theme={navTheme}
        background_theme={navBackgroundTheme}
      />

      {children}

      {showFooter && (
        <Footer
          theme={footerTheme}
          privacyHref={`/${locale}/privacy-policy`}
          shippingHref={`/${locale}/shipping-delivery`}
        />
      )}
    </>
  );
}
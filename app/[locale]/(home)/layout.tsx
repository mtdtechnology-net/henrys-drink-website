import BaseLayout from "@/components/layout/BaseLayout";

export default function LightNavLightFooterLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  return (
    <BaseLayout
      params={params}
      navTheme="dark"
      showFooter={false}
    >
      {children}
    </BaseLayout>
  );
}
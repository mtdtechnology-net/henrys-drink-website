import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "fr", "pt"];
const defaultLocale = "en";

function getPreferredLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") || "";
  const browserLocales = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].split("-")[0].trim());

  const matched = browserLocales.find((lang) => locales.includes(lang));
  return matched || defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );
  if (pathnameHasLocale) return;

  const locale = getPreferredLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};

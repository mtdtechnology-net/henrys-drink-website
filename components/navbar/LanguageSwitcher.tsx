"use client";

import { usePathname, useRouter } from "next/navigation";

const locales = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "pt", label: "Português" },
];

interface LanguageSwitcherProps {
  currentLocale: string;
  textColor: string; 
  className: string;
}

export function LanguageSwitcher({ currentLocale, textColor, className }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  return (
    <select
      value={currentLocale}
      onChange={(e) => switchLocale(e.target.value)}
      className={`bg-transparent outline-none cursor-pointer ${textColor} ${className}`}
    >
      {locales.map((l) => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  );
}

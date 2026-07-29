"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const locales = [
  { code: "en", label: "En" },
  { code: "fr", label: "Fr" },
  { code: "pt", label: "Pt" },
];

interface LanguageSwitcherProps {
  currentLocale: string;
  textColor: string;
  className: string;
}

export function LanguageSwitcher({
  currentLocale,
  textColor,
  className,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const current = locales.find((l) => l.code === currentLocale) ?? locales[0];

  function switchLocale(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
    setIsOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`flex items-center gap-1 cursor-pointer ${textColor} ${className}`}
      >
        {current.label}
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            d="M1 1L4 4L7 1"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <ul
          style={{
            backgroundColor: "rgba(223, 223, 223, 0.8)",
            backdropFilter: "blur(10px)",
          }}
          role="listbox"
          className={`absolute right-0 top-full mt-2 min-w-[3rem] overflow-hidden rounded-md border border-white/20 backdrop-blur-md ${className}`}
        >
          {locales.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                onClick={() => switchLocale(l.code)}
                className={`block w-full px-3 py-1.5 text-left hover:bg-white/10 transition-colors ${
                  l.code === currentLocale ? "opacity-100" : "opacity-70"
                } ${textColor}`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface NavLogoProps {
  signatureUrl: string;
  href?: string;
  className?: string;
}

export const NavLogo = ({ signatureUrl, href = "/", className = "" }: NavLogoProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="flex items-center justify-center">
      <Image
        src={signatureUrl}
        alt="Signature Logo"
        width={100}
        height={100}
        priority
        className={`
          h-[clamp(2.5rem,5.5vw,4.5rem)]
          w-auto object-contain shrink-0
          transition-transform duration-300 ease-in-out hover:scale-110
          ${isActive ? "scale-105" : ""}
          ${className}
        `}
      />
    </Link>
  );
};
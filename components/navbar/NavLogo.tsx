"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface NavLogoProps {
  signatureUrl: string;
  href?: string;
}

export const NavLogo = ({ signatureUrl, href = "/" }: NavLogoProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="flex items-center justify-center">
      <Image
        src={signatureUrl}
        alt="Signature Logo"
        width={45}
        height={58}
        className={`w-auto h-auto object-contain flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-110 ${
          isActive ? "scale-105" : ""
        }`}
      />
    </Link>
  );
};
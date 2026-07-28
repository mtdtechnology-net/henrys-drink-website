"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const NavLogo = ({
  signatureUrl,
  href = "/",
}: {
  signatureUrl: string;
  href?: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <Image
        src={signatureUrl}
        alt="Signature Logo"
        width={45}
        height={58}
        className={`object-contain flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-110 ${
          isActive ? "scale-105" : ""
        }`}
      />
    </Link>
  );
};

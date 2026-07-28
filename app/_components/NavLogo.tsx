'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavLogo = ({ signatureUrl, href = '/' }: { signatureUrl: string; href?: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
    >
      <img
        src={signatureUrl}
        alt="Signature Logo"
        className={`w-[45px] h-[58px] object-contain flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-110 ${
        isActive ? 'scale-105' : ''
        }`}
      />
    </Link>
  );
};
import Link from 'next/link';

interface NavbarTextItemProps {
  text: string;
  href: string;
  textColor: string;
  className: string;
}

export const NavbarTextItem = ({ text, href= '/', textColor, className }: NavbarTextItemProps) => (
  <Link
    href={href}
    className={`cursor-pointer hover:scale-105 active:scale-95 ${textColor} ${className}`}
  >
    {text}
  </Link>
);


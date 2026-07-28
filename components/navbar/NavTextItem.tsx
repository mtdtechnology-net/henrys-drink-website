import Link from 'next/link';

interface NavbarTextItemProps {
  text: string;
  href: string;
}

export const NavbarTextItem = ({ text, href= '/' }: NavbarTextItemProps) => (
  <Link
    href={href}
    className="cursor-pointer hover:opacity-80 transition-opacity font-['Inter_Variable',sans-serif] text-[18px] italic font-normal text-[#442F0E] 
    transition-all duration-200 ease-in-out hover:scale-105 hover:opacity-80 active:scale-95"
  >
    {text}
  </Link>
);
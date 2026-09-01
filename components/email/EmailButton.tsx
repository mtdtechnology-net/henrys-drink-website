import React from 'react';
import { Link } from '@react-email/components';

export const EmailButton = ({
  children = 'Button',
  href = '#',
}: {
  children?: React.ReactNode;
  href?: string;
}) => {
  return (
    <Link
      href={href}
      className="bg-[#442F0E]/30 text-white rounded-full py-[10px] px-6 text-[13px] font-bold inline-block no-underline whitespace-nowrap font-['Comfortaa','Noto_Serif',sans-serif]"
    >
      {children}
    </Link>
  );
};
import React from 'react';
import { Link, Img } from '@react-email/components';

interface EmailNavLogoProps {
  signatureUrl: string;
  href?: string;
}

export const EmailNavLogo = ({
  signatureUrl,
  href = "#",
}: EmailNavLogoProps) => {
  return (
    <Link href={href}>
      <Img
        src={signatureUrl}
        alt="Logo"
        width="46" 
        height="59" 
        className="mx-auto block"
      />
    </Link>
  );
};

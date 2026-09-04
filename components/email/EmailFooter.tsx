import { Column, Img, Link, Row, Section, Text, Tailwind } from '@react-email/components';
import { EmailButton } from './EmailButton';

export interface EmailFooterProps {
  bgImageUrl: string;
  instagramSrc: string;
  linkedinSrc: string;
  showButton?: boolean;
  buttonText?: string;
  contactLabel?: string;
  contactEmail?: string;
  operatingHours?: string;
}

export const EmailFooter = ({
  bgImageUrl,
  instagramSrc,
  linkedinSrc,
  showButton = true,
  buttonText = "Discover Henry's",
  contactLabel = "Contact",
  contactEmail = "contact@henrysdrink.com",
  operatingHours = "MONDAY — FRIDAY · 09:00 - 19:00",
}: EmailFooterProps) => {
  const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || '#';

  return (
    <Tailwind>
      <Section className="relative w-full max-w-[600px] my-0 mx-auto">
        <Img
          src={bgImageUrl}
          alt=""
          width="600"
          height="260"
          className="block w-full border-0 h-[260px]"
        />
        <Section className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-center py-[40px] px-[20px]">
          {showButton && (
            <Section className="pb-[16px]">
              <EmailButton href={siteUrl}>
                {buttonText}
              </EmailButton>
            </Section>
          )}

          <Section className="pb-[16px]">
            <Text className="text-[#F3EDE6] text-[12px] leading-[20px] font-['Geist','Noto_Serif',sans-serif] m-0 font-light uppercase pb-[4px] [text-shadow:0px_1px_3px_rgba(0,0,0,0.8)]">
              {contactLabel}
            </Text>
            <Text className="text-[#F3EDE6] text-[14px] leading-[20px] font-['Noto_Serif',sans-serif] m-0 [text-shadow:0px_1px_3px_rgba(0,0,0,0.8)]">
              {contactEmail}
            </Text>
            <Text className="text-[#F3EDE6] text-[11px] leading-[20px] font-['Geist','Noto_Serif',sans-serif] m-0 [text-shadow:0px_1px_3px_rgba(0,0,0,0.8)]">
              {operatingHours}
            </Text>
          </Section>

          <Row align="center" className="w-auto">
            <Column className="pr-[6px]">
              <Link href="https://instagram.com" target="_blank">
                <Img src={instagramSrc} alt="Instagram" width="22" height="22" className="block border-0" />
              </Link>
            </Column>
            <Column className="pl-[6px]">
              <Link href="https://linkedin.com" target="_blank">
                <Img src={linkedinSrc} alt="LinkedIn" width="22" height="22" className="block border-0" />
              </Link>
            </Column>
          </Row>
        </Section>
      </Section>
    </Tailwind>
  );
};
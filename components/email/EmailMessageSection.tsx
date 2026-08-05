import { Section, Heading, Text, Font } from '@react-email/components';

export interface EmailMessageSectionProps {
  title?: string;
  description?: string;
}

export const EmailMessageSection = ({
  title = "Merci pour votre commande",
  description,
}: EmailMessageSectionProps) => {
  return (
    <Section className="text-center py-6 px-4">
      {/* Load external Google Fonts inside the email HTML <head> */}
      <Font
        fontFamily="Pinyon Script"
        fallbackFontFamily="cursive"
        webFont={{
          url: 'https://fonts.gstatic.com/s/pinyonscript/v22/6xKtdSScptB8d1W9aC25-6yq67zJ.woff2',
          format: 'woff2',
        }}
      />
      <Font
        fontFamily="Noto Serif"
        fallbackFontFamily="Georgia"
        webFont={{
          url: 'https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J2tBN8xAql5WT5617B5M.woff2',
          format: 'woff2',
        }}
      />

      {/* Title Specs using Tailwind */}
      <Heading
        as="h1"
        className="text-[#95000D] text-[51px] leading-[100%] font-normal tracking-normal m-0 mb-4 text-center"
        style={{ fontFamily: "'Pinyon Script', cursive" }}
      >
        {title}
      </Heading>

      {/* Description Specs using Tailwind */}
      {description && (
        <Text
          className="text-[#442F0E] text-[14px] leading-[160%] font-normal tracking-normal m-0 text-center"
          style={{ fontFamily: "'Noto Serif', Georgia, serif" }}
        >
          {description}
        </Text>
      )}
    </Section>
  );
};
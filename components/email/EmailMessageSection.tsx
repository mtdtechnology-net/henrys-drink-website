import { Section, Heading, Text, Font } from '@react-email/components';

export interface EmailMessageSectionProps {
  title?: string;
  description?: string;
  firstName?: string;
}

export const EmailMessageSection = ({
  title = "Merci pour votre commande",
  description,
  firstName,
}: EmailMessageSectionProps) => {
  return (
    <Section className="text-center py-6 px-8 pb-8">
      <Font
        fontFamily="Pinyon Script"
        fallbackFontFamily="cursive"
        webFont={{
          url: 'https://fonts.gstatic.com/s/pinyonscript/v24/6xKpdSJbL9-e9LuoeQiDRQR8WOraOqTimDdT9g.woff2',
          format: 'woff2',
        }}
      />
      <Font
        fontFamily="Noto Serif"
        fallbackFontFamily="Georgia"
        webFont={{
          url: 'https://fonts.gstatic.com/s/notoserif/v33/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZqFCTyscKpKrCzi0iNaA.woff2',
          format: 'woff2',
        }}
      />

      <Heading
        as="h1"
        className="text-[#95000D] text-[51px] leading-[100%] font-normal tracking-normal m-0 mb-8 text-center font-['Pinyon_Script',cursive]"
      >
        {title}
      </Heading>

      {firstName && (
        <Text
          className="text-[#442F0E] text-[15px] leading-[160%] font-normal tracking-normal m-0 mb-4 text-center font-['Noto_Serif',Georgia,serif]"
        >
          Bonjour {firstName},
        </Text>
      )}

      {description && (
        <Text
          className="text-[#442F0E] text-[14px] leading-[160%] font-normal tracking-normal m-0 text-center font-['Noto_Serif',Georgia,serif]"
        >
          {description}
        </Text>
      )}
    </Section>
  );
};
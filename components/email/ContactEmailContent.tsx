import {
  Section,
  Text,
  Img,
  Font,
} from '@react-email/components';
import { EmailButton } from './EmailButton';

export type ContactEmailContentProps = {
  photoText?: string;
  buttonText?: string;
};

export const ContactEmailContent = ({
  photoText = "Chaque belle histoire commence par une conversation.",
  buttonText = "Découvrir Henry's",
}: ContactEmailContentProps) => {

  const imageURL = "/email/poza-email.png";
  const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || '#';

  return (
    <Section className="relative w-full ">
      <Font
        fontFamily="Pinyon Script"
        fallbackFontFamily="cursive"
        webFont={{
          url: 'https://fonts.gstatic.com/s/pinyonscript/v24/6xKpdSJbL9-e9LuoeQiDRQR8WOraOqTimDdT9g.woff2',
          format: 'woff2',
        }}
      />
      <Img
        src={imageURL}
        alt=""
        width="600"
        height="400"
        className="block w-full"
      />
      <Section className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-center py-[40px] px-[20px]">
        <Section className="pb-[16px]">
          <Text className="text-[32px]/[81%] text-white font-light">
            {photoText}
          </Text>
        </Section>

        <Section className="pb-[16px]">
          <EmailButton href={siteUrl}>
            {buttonText}
          </EmailButton>
        </Section>
      </Section>
    </Section>
  );
};
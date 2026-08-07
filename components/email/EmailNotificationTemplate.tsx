import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';
import type { ReactNode } from 'react';
import { EmailHeader } from './EmailHeader';
import { EmailFooter } from './EmailFooter';
import { EmailMessageSection } from './EmailMessageSection';

export interface NotificationTemplateProps {
  userEmail: string;
  title: string;
  description: string;
  locale: string;
  content?: ReactNode;
  firstName?: string;
  showFooterButton?: boolean;
}

const imageSrcs = {
  header: "/email/blueSignature.png",
  footer: "/email/Footer.png",
  instagram: "/email/instagram.png",
  linkedin: "/email/linkedin.png",
};

export const EmailNotificationTemplate = ({
  userEmail,
  title,
  description,
  content,
  firstName,
  showFooterButton,
}: NotificationTemplateProps) => (
  <Tailwind>
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Noto+Serif&family=Comfortaa:wght@700&display=swap"
          rel="stylesheet"
        />
        <style>{`@font-face {
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/comfortaa/v47/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4Y_LDr4fIB1Zyc61YBlG.woff2) format('woff2');
}`}</style>
      </Head>
      <Body className="bg-[#f4f4f5] font-sans text-black py-10 px-2 my-0 mx-auto">
        <Container className="max-w-[600px] mx-auto">

          <Section className="bg-white">
            <EmailHeader signatureLogoUrl={imageSrcs.header} />

            <EmailMessageSection title={title} description={description} firstName={firstName} />

            {content && (
              <Section className="">
                {content}
              </Section>
            )}

            <EmailFooter
              bgImageUrl={imageSrcs.footer}
              instagramSrc={imageSrcs.instagram}
              linkedinSrc={imageSrcs.linkedin}
              showButton={showFooterButton}
            />
          </Section>

        </Container>
      </Body>
    </Html>
  </Tailwind>
);
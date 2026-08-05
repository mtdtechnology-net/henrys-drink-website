import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';
import { EmailHeader } from './EmailHeader';
import { EmailFooter } from './EmailFooter';
import type { EmailImageSrcs } from '@/lib/services/email-images';
import { EmailMessageSection } from './EmailMessageSection';

export interface NotificationTemplateProps {
  userEmail: string;
  message?: string;
  itemCount?: number;
  locale: string;
  imageSrcs: EmailImageSrcs;
}

export const EmailNotificationTemplate = ({
  userEmail,
  message,
  itemCount = 3,
  imageSrcs,
}: NotificationTemplateProps) => (
  <Tailwind>
    <Html>
      <Head />
      <Body className="bg-[#f4f4f5] font-sans text-black py-10 px-2 my-0 mx-auto">
        {/* Outer Layout Container */}
        <Container className="max-w-[600px] mx-auto">
          
          {/* Main Card Element */}
          <Section className="bg-white rounded-lg border border-solid border-[#e4e4e7] overflow-hidden shadow-sm">
            <EmailHeader signatureLogoUrl={imageSrcs.header} />

            <EmailMessageSection description={message} />


            <EmailFooter
              imageUrl={imageSrcs.footer}
              instagramSrc={imageSrcs.instagram}
              linkedinSrc={imageSrcs.linkedin}
            />
          </Section>

        </Container>
      </Body>
    </Html>
  </Tailwind>
);
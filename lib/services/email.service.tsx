import { Resend } from 'resend';
import { Html, Head, Body } from '@react-email/components';
import { EmailNotificationTemplate, NotificationTemplateProps } from '@/components/email/EmailNotificationTemplate';
import { getEmailImages } from './email-images';

const resend = new Resend(process.env.RESEND_API_KEY);

export type SendNotificationEmailProps = Omit<NotificationTemplateProps, 'imageSrcs'> & {
  to: string;
  subject: string;
};

export async function sendNotificationEmail(props: SendNotificationEmailProps) {
  const { srcs, attachments } = await getEmailImages('cid');

  return await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: props.to,
    subject: props.subject,
    react: (
      <Html>
        <Head />
        <Body>
          <EmailNotificationTemplate {...props} imageSrcs={srcs} />
        </Body>
      </Html>
    ),
    attachments,
  });
}

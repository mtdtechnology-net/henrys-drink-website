import path from 'node:path';
import { Resend } from 'resend';
import { Html, Head, Body } from '@react-email/components';
import { EmailNotificationTemplate, NotificationTemplateProps } from '@/components/email/EmailNotificationTemplate';
import { toCidAttachment } from './email-attachments';

const resend = new Resend(process.env.RESEND_API_KEY);

const imageFiles = {
  header: 'blueSignature.png',
  footer: 'Footer.png',
  instagram: 'instagram.png',
  linkedin: 'linkedin.png',
} as const;

const emailImagesDir = path.join(process.cwd(), 'public', 'email');

export type SendNotificationEmailProps = Omit<NotificationTemplateProps, 'imageSrcs'> & {
  to: string;
  subject: string;
};

export async function sendNotificationEmail(props: SendNotificationEmailProps) {
  const attachments = await Promise.all(
    Object.values(imageFiles).map((filename) =>
      toCidAttachment(path.join(emailImagesDir, filename)),
    ),
  );

  const srcs = Object.fromEntries(
    (Object.entries(imageFiles) as [keyof typeof imageFiles, string][]).map(([key, filename]) => [
      key,
      `cid:${filename}`,
    ]),
  ) as Record<keyof typeof imageFiles, string>;

  const attachmentBytes = attachments.reduce((sum, a) => sum + a.content.byteLength, 0);
  console.log('[EMAIL] sending', {
    to: props.to,
    from: 'onboarding@resend.dev',
    subject: props.subject,
    attachments: attachments.map((a) => ({ filename: a.filename, bytes: a.content.byteLength })),
    attachmentTotalBytes: attachmentBytes,
  });

  const result = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: props.to,
    subject: props.subject,
    react: (
      <Html>
        <Head />
        <Body>
          <EmailNotificationTemplate {...props} />
        </Body>
      </Html>
    ),
    attachments,
  });

  console.log('[EMAIL] resend response:', JSON.stringify(result));

  if (result.error) {
    console.error('[EMAIL] resend rejected:', JSON.stringify(result.error));
    throw new Error(`Resend email failed: ${result.error.message} (status ${result.error.statusCode ?? 'n/a'})`);
  }

  return result;
}

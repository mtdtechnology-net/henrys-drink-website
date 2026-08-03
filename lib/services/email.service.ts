import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface NotificationEmailOptions {
  to: string;
  subject: string;
  message: string;
}

export async function sendNotificationEmail({
  to,
  subject,
  message,
}: NotificationEmailOptions) {
  return await resend.emails.send({
    from: 'onboarding@resend.dev',
    to,
    subject,
    html: `<p>${message}</p>`,
  });
}
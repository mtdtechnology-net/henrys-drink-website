import { Resend } from 'resend';
import { NotificationTemplate } from '@/components/email/NotificationTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface NotificationEmailOptions {
  to: string;
  subject: string;
  message?: string;
  itemCount?: number;
}

export async function sendNotificationEmail({
  to,
  subject,
  message,
  itemCount,
}: NotificationEmailOptions) {
  return await resend.emails.send({
    from: 'onboarding@resend.dev', 
    to,
    subject,
    react: NotificationTemplate({
      userEmail: to,
      message,
      itemCount,
    }),
  });
}
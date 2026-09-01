import { render } from "@react-email/render";
import { EmailNotificationTemplate } from "@/components/email/EmailNotificationTemplate";
import { ConfirmationEmailContent } from "@/components/email/ConfirmationEmailContent";
import { ContactEmailContent } from "@/components/email/ContactEmailContent";

export default async function EmailPreviewPage() {
  const html = await render(
    <EmailNotificationTemplate
      userEmail="test@example.com"
      title="Merci de nous avoir contactés."
      showFooterButton={false}
      locale="en"
      description={`Nous vous remercions pour votre message. 

Notre équipe l'a bien reçu et reviendra vers vous dans les plus brefs délais. En attendant, nous vous invitons à découvrir l'univers de Henry's, son histoire, son héritage bordelais et ses expériences uniques.

Nous avons hâte d'échanger avec vous.`}
      content=<ContactEmailContent />
    />
  );

  return (
    <div className="w-full min-h-screen bg-gray-100 p-8 flex justify-center">
      <iframe
        title="Email Preview"
        srcDoc={html}
        className="w-full max-w-[650px] h-[800px] bg-white border shadow-md rounded-lg"
      />
    </div>
  );
}
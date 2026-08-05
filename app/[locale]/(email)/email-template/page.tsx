import { render } from "@react-email/render";
import { EmailNotificationTemplate } from "@/components/email/EmailNotificationTemplate";
import { getEmailImages } from "@/lib/services/email-images";

export default async function EmailPreviewPage() {
  const { srcs } = await getEmailImages("data-uri");

  const html = await render(
    <EmailNotificationTemplate
      userEmail="test@example.com"
      message="Merci pour votre commande!"
      itemCount={1}
      locale="en"
      imageSrcs={srcs}
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
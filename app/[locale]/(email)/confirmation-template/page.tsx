import { render } from "@react-email/render";
import { EmailNotificationTemplate } from "@/components/email/EmailNotificationTemplate";
import { ConfirmationEmailContent } from "@/components/email/ConfirmationEmailContent";

export default async function EmailPreviewPage() {
  const html = await render(
    <EmailNotificationTemplate
      userEmail="test@example.com"
      title="Merci pour votre commande"
      firstName="Jean"
      locale="en"
      description={"Votre commande a bien été enregistrée. Nous préparons vos précieux flacons avec le plus grand soin dans nos caves de Bordeaux pour une expédition imminente."} 
      content=<ConfirmationEmailContent 
        quantity={1} 
        productsAmount={290.00} 
        shippingTotal={15.00} 
        recipientName={"Jean Dupont"} 
        addressLine={"18 Roue de la Devise"} 
        city={"Bordeaux"} 
        postalCode={"33000"} 
        country={"France"}/>
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
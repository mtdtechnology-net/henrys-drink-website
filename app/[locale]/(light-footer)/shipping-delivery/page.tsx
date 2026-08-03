import { Comfortaa, Roboto } from "next/font/google";
import { Footer } from "@/components/footer/Footer";
const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export default function ShippingDeliveryPage() {
  return (
    <main className="min-h-screen bg-[#fffcf9] text-[#442f0e]">
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-28 pt-[clamp(7rem,14vh,11rem)] sm:px-10 lg:px-8">
        {/* Page heading */}
        <header className="mb-[clamp(3.5rem,7vh,5.5rem)] text-center">
          <p
            className={`${roboto.className} mb-5 text-[14px] uppercase leading-none text-[#b30012] sm:text-[15px]`}
          >
            Legal &amp; Policies
          </p>

          <h1
            className={`${comfortaa.className} m-0 text-[clamp(2.75rem,5vw,4.25rem)] font-normal leading-[1.1] tracking-[-0.035em]`}
          >
            Shipping policy
          </h1>

          <div className="mx-auto mt-6 h-[2px] w-[125px] bg-[#b30012]" />
        </header>

        {/* Shipping information */}
        <div
          className={`${roboto.className} space-y-10 text-[17px] font-normal leading-[1.7] text-[#442f0e]/80 sm:text-[18px]`}
        >
          <PolicySection title="Zones de livraison">
            <p>
              Henrys expédie ses produits en France et à l’international grâce à
              son partenaire logistique Pelican.
            </p>
          </PolicySection>

          <PolicySection title="Délais de livraison">
            <p>
              Le délai moyen est d’une semaine ouvrée minimum à compter de la
              confirmation de commande.
            </p>

            <p>
              Les délais peuvent varier selon le pays de destination et ne sont
              pas garantis.
            </p>

            <p>
              Henrys ne saurait être tenu responsable d’éventuels retards liés
              au transporteur, aux douanes ou à des cas de force majeure.
            </p>
          </PolicySection>

          <PolicySection title="Frais de livraison">
            <div className="space-y-6">
              <div>
                <p>
                  Les frais de livraison sont calculés lors de la commande en
                  fonction de la destination et du mode d’expédition.
                </p>

                <p>
                  Livraison réservée aux personnes majeures. Conformément à la
                  législation en vigueur, nos produits contenant de l’alcool ne
                  peuvent être vendus et livrés qu’à des personnes majeures
                  (18 ans et plus).
                </p>
              </div>

              <div>
                <p>
                  Le transporteur peut être amené à vérifier l’âge du
                  destinataire lors de la livraison.
                </p>

                <p>
                  Produits endommagés, perdus ou non conformes. Si le colis
                  arrive endommagé, incomplet ou non conforme, le client doit le
                  signaler immédiatement au transporteur et contacter notre
                  service client à{" "}
                  <a
                    href="mailto:henrysdrink@gmail.com"
                    className="underline underline-offset-2 transition-colors hover:text-[#b30012]"
                  >
                    henrysdrink@gmail.com
                  </a>
                  .
                </p>
              </div>

              <p>
                En cas de perte ou de dommage confirmé, Henrys s’engage à
                rembourser ou renvoyer le colis selon la préférence du client.
              </p>
            </div>
          </PolicySection>

          <PolicySection title="Douanes et taxes locales">
            <p>
              Pour les livraisons en dehors de l’Union européenne, des frais de
              douane ou taxes locales peuvent s’appliquer et restent à la
              charge du client.
            </p>
          </PolicySection>
        </div>
      </article>
    </main>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2
        className={`${comfortaa.className} mb-4 text-[24px] font-medium leading-tight text-[#442f0e] sm:text-[27px]`}
      >
        {title}
      </h2>

      {children}
    </section>
  );
}
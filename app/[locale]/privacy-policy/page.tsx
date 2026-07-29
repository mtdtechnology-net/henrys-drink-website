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

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fffcf9] text-[#442f0e]">
      <article className="mx-auto w-full max-w-[850px] px-6 pb-24 pt-[clamp(7rem,14vh,11rem)] sm:px-10 lg:px-0">
        {/* Page heading */}
        <header className="mb-[clamp(3rem,7vh,5rem)] text-center">
          <p
            className={`${roboto.className} mb-4 text-[11px] font-normal uppercase leading-none text-[#b30012] sm:text-[12px]`}
          >
            Legal &amp; Policies
          </p>

          <h1
            className={`${comfortaa.className} m-0 text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.15] tracking-[-0.035em]`}
          >
            Politique de confidentialité
          </h1>

          <div className="mx-auto mt-5 h-[2px] w-[80px] bg-[#b30012]" />
        </header>

        {/* Policy text */}
        <div
  className={`${roboto.className} space-y-10 text-[17px] font-normal leading-[1.7] text-[#442f0e]/80 sm:text-[18px]`}
>
          <section>
            <p>
              La société SAS MBE, immatriculée au RCS sous le numéro 989 982
              921, dont le siège social est situé 65 Impasse des Mouilles, Parc
              de Montfleuri, 69400 Gleizé, France, accorde une grande importance
              à la protection de vos données personnelles.
            </p>

            <p className="mt-1">
              La présente politique a pour objectif de vous informer de manière
              transparente sur la manière dont nous collectons, utilisons et
              protégeons vos informations, conformément au Règlement Général
              sur la Protection des Données (RGPD) et à la législation française
              applicable.
            </p>
          </section>

          <PolicySection title="Responsable du traitement">
            <p>Le responsable du traitement de vos données est :</p>

            <p className="mt-1">
              SAS MBE
              <br />
              65 Impasse des Mouilles, Parc de Montfleuri, 69400 Gleizé –
              France
              <br />
              Contact RGPD :{" "}
              <a
                href="mailto:henrysdrink@gmail.com"
                className="underline underline-offset-2 hover:text-[#b30012]"
              >
                henrysdrink@gmail.com
              </a>
            </p>
          </PolicySection>

          <PolicySection title="Données personnelles collectées">
            <p>
              Nous collectons uniquement les données nécessaires dans le cadre
              de notre activité :
            </p>

            <ul className="mt-1 list-none">
              <li>Identité : prénom, nom</li>
              <li>Coordonnées : adresse postale, email, téléphone</li>
              <li>Contenu des messages envoyés via le formulaire de contact</li>
              <li>Inscription à la newsletter</li>
              <li>
                Données de navigation : horaires de connexion, pages consultées,
                activité sur le site via Google Analytics et cookies similaires
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="Finalités de la collecte">
            <p>Vos données sont utilisées pour :</p>

            <PolicyList
              items={[
                "Répondre à vos demandes via le formulaire de contact",
                "Gérer vos inscriptions à la newsletter",
                "Améliorer la navigation et l’expérience utilisateur sur le site",
                "Réaliser des analyses statistiques avec Google Analytics",
                "Respecter nos obligations légales et réglementaires",
              ]}
            />
          </PolicySection>

          <PolicySection title="Durée de conservation">
            <PolicyList
              items={[
                "Données liées aux prospects (formulaire, newsletter) : 5 ans après le dernier contact",
                "Données clients : 5 ans après la fin de la relation contractuelle, ou plus si la loi française l’exige",
                "Données de navigation (cookies/Analytics) : selon les paramètres de Google, généralement 14 mois",
              ]}
            />
          </PolicySection>

          <PolicySection title="Partage et hébergement des données">
            <p>Vos données peuvent être traitées par :</p>

            <PolicyList
              items={[
                "Notre prestataire web : AGORATECH (SIRET 979 819 125)",
                "Notre hébergeur : Wix.com Ltd., situé hors Union européenne. Wix applique des garanties de conformité pour protéger vos données.",
                "Nos partenaires techniques (paiement, newsletter, transporteurs, si applicable)",
                "Nous ne revendons jamais vos données personnelles à des tiers.",
              ]}
            />
          </PolicySection>

          <PolicySection title="Vos droits">
            <p>
              Conformément au RGPD et à la loi Informatique et Libertés, vous
              disposez des droits suivants :
            </p>

            <PolicyList
              items={[
                "Accès : obtenir une copie de vos données personnelles",
                "Rectification : corriger vos données si elles sont inexactes ou incomplètes",
                "Suppression : demander l’effacement de vos données",
                "Opposition : refuser l’utilisation de vos données pour certains traitements",
                "Portabilité : recevoir vos données dans un format structuré",
              ]}
            />

            <p className="mt-1">
              Vous pouvez exercer vos droits en écrivant à :{" "}
              <a
                href="mailto:henrysdrink@gmail.com"
                className="underline underline-offset-2 hover:text-[#b30012]"
              >
                henrysdrink@gmail.com
              </a>
              .
              <br />
              Une réponse vous sera apportée dans un délai de 30 jours maximum.
            </p>
          </PolicySection>

          <PolicySection title="Cookies et suivi">
            <p>
              Notre site utilise Google Analytics pour analyser la fréquentation
              et améliorer l’expérience utilisateur.
            </p>

            <p className="mt-1">
              Vous pouvez gérer ou refuser l’utilisation des cookies directement
              depuis votre navigateur.
            </p>
          </PolicySection>

          <PolicySection title="Sécurité">
            <p>
              Nous mettons en œuvre toutes les mesures techniques et
              organisationnelles nécessaires pour protéger vos données
              personnelles contre tout accès non autorisé, perte, altération ou
              divulgation.
            </p>
          </PolicySection>

          <PolicySection title="Évolutions de la politique">
            <p>
              La présente politique de confidentialité peut être mise à jour à
              tout moment. Nous vous invitons à la consulter régulièrement.
            </p>
          </PolicySection>
          
        </div>
        
      </article>
      <Footer
  theme="light"
  privacyHref="/privacy-policy"
  shippingHref="/shipping-delivery"
/>
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
        className={`${comfortaa.className} mb-3 text-[18px] font-medium leading-tight text-[#442f0e] sm:text-[20px]`}
      >
        {title}
      </h2>

      {children}
    </section>
  );
}

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="mt-1 list-disc space-y-0.5 pl-5 marker:text-[#442f0e]/70">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
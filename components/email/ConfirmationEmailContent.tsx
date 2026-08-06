import {
  Section,
  Text,
  Tailwind,
  Column,
  Row,
  Hr,
} from '@react-email/components';

export type ConfirmationEmailContentProps = Record<string, never>;

export const ConfirmationEmailContent = ({ }: ConfirmationEmailContentProps) => {
  return (
    <Tailwind>
      <Column>
        <Hr className="border-t-2 border-[#F7F2E8] w-full w-[calc(100%-64px)] mx-auto" />

        <Section className="mb-4 w-[calc(100%-64px)] my-6 mx-auto">
          <Text className="pb-4 text-[#325175] font-['Comfortaa','Noto_Serif',sans-serif] font-light text-[13px] my-0">
            DÉTAILS DE LA COMMANDE
          </Text>

          <Row className="mb-4">
            <Column>
              <Text className="text-[#442F0E] font-['Geist','Noto_Serif',sans-serif] font-bold text-[13px] my-0 ">
                The Signature Apéritif
              </Text>

              <Text className="text-[#7A6E60] font-['Geist','Noto_Serif',sans-serif] text-[10px] my-0 ">
                Bordeaux · Quantité 1
              </Text>

            </Column>

            <Column align="right" >
              <Text className="text-[#442F0E] font-['Geist','Noto_Serif',sans-serif] font-extrabold text-[13px] my-0">
                290,00 €
              </Text>
            </Column>
          </Row>

          <Hr className="border-t border-[#F7F2E8] w-full" />

          <Section className="w-full">
            <Row className="py-2">
              <Column>
                <Text className="m-0 text-left font-['Geist','Noto_Serif',sans-serif] text-xs text-[#7A6E60]">Sous-total</Text>
              </Column>
              <Column align="right">
                <Text className="m-0 text-right font-['Geist','Noto_Serif',sans-serif] text-xs text-[#442F0E]">290,00 € </Text>
              </Column>
            </Row>

            <Row className="py-1">
              <Column>
                <Text className="m-0 text-left font-['Geist','Noto_Serif',sans-serif] text-xs text-[#7A6E60]">Livraison (Bordeaux Heritage Express)</Text>
              </Column>
              <Column align="right">
                <Text className="m-0 text-right font-['Geist','Noto_Serif',sans-serif] text-xs text-[#442F0E]">15,00 €</Text>
              </Column>
            </Row>

            <Hr className="border-t border-[#F7F2E8] w-full" />

            <Row className="pt-3">
              <Column>
                <Text className="m-0 pt-2 text-left font-['Comfortaa','Noto_Serif',sans-serif] text-bold text-xs text-[#325175] text-[13px]">TOTAL</Text>
              </Column>
              <Column align="right">
                <Text className="m-0 mt-2 text-right font-['Geist','Noto_Serif',sans-serif] font-bold text-xs text-[#95000D] text-[16px]">305,00 €</Text>
              </Column>
            </Row>
          </Section>

        </Section>

        <Hr className="border-t-2 border-[#F7F2E8] w-full w-[calc(100%-64px)] mx-auto" />


        <Section className="mb-4 w-[calc(100%-64px)] my-6 mx-auto">
          <Column>
            <Text className="pb-5 text-[#325175] font-['Comfortaa','Noto_Serif',sans-serif] font-light text-[13px] my-0">
              ADRESSE DE LIVRAISON
            </Text>

            <Section className="bg-white border border-solid border-[#F0E7D5] rounded-xl p-6 max-w-[580px] mx-auto">
              <Column>
                <Text className="text-[#442F0E] font-['Geist','Noto_Serif',sans-serif] font-bold text-[13px] my-0 ">
                  Jean Dupont
                </Text>

                <Text className="m-0 text-left font-['Geist','Noto_Serif',sans-serif] text-xs text-[#7A6E60]">
                  18 Rue de la Devise
                </Text>

                <Text className="m-0 text-left font-['Geist','Noto_Serif',sans-serif] text-xs text-[#7A6E60]">
                  33000 Bordeaux
                </Text>

                <Text className="m-0 text-left font-['Geist','Noto_Serif',sans-serif] text-xs text-[#7A6E60]">
                  France
                </Text>

              </Column>

            </Section>
          </Column>
        </Section>


      </Column>

    </Tailwind>
  );
};
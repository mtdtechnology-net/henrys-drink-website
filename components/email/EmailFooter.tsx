import { Container, Section, Row, Column, Text, Link, Img } from '@react-email/components';
import { EmailButton } from './EmailButton';

export interface EmailFooterProps {
    imageUrl: string;
    instagramSrc: string;
    linkedinSrc: string;
}

export const EmailFooter = ({ imageUrl, instagramSrc, linkedinSrc }: EmailFooterProps) => {
    const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || '#';

    return (
        <Container className="w-full max-w-[600px] my-0 mx-auto">
            <Section
                className="py-[40px] px-[20px] bg-center bg-no-repeat bg-cover align-middle text-center"
                style={{ backgroundImage: `url('${imageUrl}')` }}
            >
                <Container className="w-full max-w-[400px]">
                    <Section className="pb-[16px]">
                        <EmailButton href={siteUrl}>
                            Découvrir Henry&apos;s
                        </EmailButton>
                    </Section>

                    <Section className="pb-[16px]">
                        <Text className="text-white text-[12px] leading-[20px] font-sans m-0 font-bold uppercase pb-[4px] [text-shadow:0px_1px_3px_rgba(0,0,0,0.8)]">
                            Contact
                        </Text>
                        <Text className="text-white text-[12px] leading-[20px] font-sans m-0 [text-shadow:0px_1px_3px_rgba(0,0,0,0.8)]">
                            contact@henrysdrink.com
                        </Text>
                        <Text className="text-white text-[12px] leading-[20px] font-sans m-0 [text-shadow:0px_1px_3px_rgba(0,0,0,0.8)]">
                            LUNDI — VENDREDI · 09:00 - 19:00
                        </Text>
                    </Section>

                    <Section>
                        <Row align="center" className="w-auto">
                            <Column className="pr-[6px]">
                                <Link href="https://instagram.com" target="_blank">
                                    <Img src={instagramSrc} alt="Instagram" width="22" height="22" className="block border-0" />
                                </Link>
                            </Column>
                            <Column className="pl-[6px]">
                                <Link href="https://linkedin.com" target="_blank">
                                    <Img src={linkedinSrc} alt="LinkedIn" width="22" height="22" className="block border-0" />
                                </Link>
                            </Column>
                        </Row>
                    </Section>
                </Container>
            </Section>
        </Container>
    );
};
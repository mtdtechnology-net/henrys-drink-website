import { Container, Section } from '@react-email/components';
import { EmailNavLogo } from './EmailHeaderLogo';

export interface EmailHeaderProps {
    signatureLogoUrl: string;
}

export const EmailHeader = ({ signatureLogoUrl }: EmailHeaderProps) => {
    const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || '#';

    return (
        <Container className="w-full mx-auto" align="center">
            <Section className="py-[24px]" align="center">
                <EmailNavLogo signatureUrl={signatureLogoUrl} href={siteUrl} />
            </Section>
        </Container>
    );
};
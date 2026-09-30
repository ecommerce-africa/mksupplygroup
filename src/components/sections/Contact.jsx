import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Section from '../ui/Section';
import WhatsAppButton from '../ui/WhatsAppButton';
import ContactForm from '../forms/ContactForm';
import { company } from '../../data/company';

const contactLinkSx = { color: 'text.primary', textDecoration: 'none', '&:hover': { color: 'brand.green600' } };

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Section id="contact">
      <Box
        sx={{
          bgcolor: 'brand.citrus100',
          borderRadius: '12px',
          p: { xs: '24px 20px', md: 8 },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
          gap: { xs: 2, md: 8 },
        }}
      >
        <Stack gap={2}>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, lineHeight: { xs: '34px', md: '46px' } }}>{t('contact.title')}</Typography>
          <Typography sx={{ fontSize: { xs: 16, md: 18 }, lineHeight: { xs: '24px', md: '28px' } }}>{t('contact.text')}</Typography>
          <Stack gap={1.5} sx={{ display: { xs: 'none', md: 'flex' }, mt: 2, fontSize: 16 }}>
            <Box component="a" href={company.phoneHref} sx={contactLinkSx}>{company.phoneDisplay}</Box>
            <Box component="a" href={`mailto:${company.email}`} sx={contactLinkSx}>{company.email}</Box>
            <span>{company.street}, {company.postcodeCity}</span>
          </Stack>
          <WhatsAppButton label={t('cta.whatsapp')} sx={{ alignSelf: { xs: 'stretch', md: 'flex-start' }, mt: { md: 1 } }} />
        </Stack>
        <ContactForm />
      </Box>
    </Section>
  );
}

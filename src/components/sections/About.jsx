import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';
import { sectionTitleSx } from '../ui/SectionHeader';

export default function About() {
  const { t } = useTranslation();
  const facts = t('about.facts', { returnObjects: true });
  const bodySx = { fontSize: { xs: 16, md: 18 }, lineHeight: { xs: '24px', md: '28px' } };

  return (
    <Section id="about-us" bgcolor="brand.surface200">
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: { xs: 2, md: 8 }, alignItems: 'center' }}>
        <Stack gap={2}>
          <Eyebrow>{t('about.eyebrow')}</Eyebrow>
          <Typography variant="h2" sx={sectionTitleSx}>{t('about.title')}</Typography>
          <Typography sx={bodySx}>{t('about.p1')}</Typography>
          <Typography sx={{ ...bodySx, color: 'text.secondary' }}>{t('about.p2')}</Typography>
        </Stack>
        <Box component="dl" sx={{ bgcolor: 'brand.green900', borderRadius: '12px', py: 2, px: { xs: 2.5, md: 5 }, display: 'flex', flexDirection: 'column' }}>
          {facts.map((fact) => (
            <Box key={fact.label} sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, py: 2, borderBottom: '1px solid', borderColor: 'brand.footerLine' }}>
              <Typography component="dt" sx={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', color: 'brand.citrus400', textTransform: 'uppercase' }}>
                {fact.label}
              </Typography>
              <Typography component="dd" sx={{ fontSize: 18, lineHeight: '26px', color: '#ffffff' }}>{fact.value}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Section>
  );
}

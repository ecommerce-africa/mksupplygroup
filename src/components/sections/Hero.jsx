import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react';
import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';
import heroImage from '../../assets/images/hero-warehouse.jpg';

export default function Hero() {
  const { t } = useTranslation();
  const titleLines = t('hero.title', { returnObjects: true });
  const checks = t('hero.checks', { returnObjects: true });

  return (
    <Section id="top" py={{ xs: 5, md: 12 }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: { xs: 3, md: 8 }, alignItems: 'center' }}>
        <Stack gap={{ xs: 2.5, md: 3 }}>
          <Eyebrow>{t('hero.eyebrow')}</Eyebrow>
          <Typography variant="h1" sx={{ fontSize: { xs: 44, md: 72 }, lineHeight: { xs: '48px', md: '74px' } }}>
            {titleLines.map((line) => (
              <Box component="span" key={line} sx={{ display: 'block' }}>{line}</Box>
            ))}
          </Typography>
          <Typography sx={{ display: { xs: 'none', md: 'block' }, fontSize: 20, lineHeight: '30px', color: 'text.secondary', maxWidth: 540 }}>
            {t('hero.text')}
          </Typography>
          <Typography sx={{ display: { xs: 'block', md: 'none' }, fontSize: 17, lineHeight: '26px', color: 'text.secondary' }}>
            {t('hero.textShort')}
          </Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} gap={{ xs: 1.5, md: 2 }} sx={{ mt: { md: 1 } }}>
            <Button href="#contact" variant="contained" color="primary" size="large">
              {t('cta.quote')}
            </Button>
            <Button href="#contact" variant="outlined" color="primary" size="large">
              {t('cta.priceList')}
            </Button>
          </Stack>
          <Stack direction="row" gap={4} sx={{ display: { xs: 'none', md: 'flex' }, mt: 2 }}>
            {checks.map((item) => (
              <Stack key={item} direction="row" alignItems="center" gap={1} sx={{ fontSize: 15 }}>
                <Box component={Icon} icon="mk:check" width={20} sx={{ color: 'brand.green600' }} />
                <span>{item}</span>
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Box sx={{ position: 'relative', height: { xs: 260, md: 520 } }}>
          <Box sx={{ position: 'absolute', right: 0, top: 0, width: { xs: 96, md: 200 }, height: { xs: 96, md: 200 }, borderRadius: '12px', bgcolor: 'brand.citrus400' }} />
          <Box
            component="img"
            src={heroImage}
            alt=""
            sx={{
              position: 'absolute',
              left: 0,
              top: { xs: 16, md: 32 },
              width: { xs: 'calc(100% - 16px)', md: 'calc(100% - 32px)' },
              height: { xs: 244, md: 488 },
              objectFit: 'cover',
              borderRadius: '12px',
              display: 'block',
            }}
          />
        </Box>
      </Box>
    </Section>
  );
}

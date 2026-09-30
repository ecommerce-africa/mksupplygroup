import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Section from '../ui/Section';

export default function Stats() {
  const { t } = useTranslation();
  const stats = t('stats', { returnObjects: true });

  return (
    <Section bgcolor="brand.green900" py={{ xs: 4, md: 6 }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', md: 'repeat(4, minmax(0, 1fr))' }, gap: { xs: '24px 16px', md: 3 } }}>
        {stats.map((stat) => (
          <Box key={stat.value} sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '2px', md: 0.5 } }}>
            <Typography variant="h2" component="span" sx={{ fontSize: { xs: 28, md: 44 }, lineHeight: { xs: '32px', md: '48px' }, color: 'brand.citrus400' }}>
              {stat.value}
            </Typography>
            <Typography sx={{ fontSize: { xs: 14, md: 15 }, lineHeight: '20px', color: '#ffffff' }}>{stat.label}</Typography>
          </Box>
        ))}
      </Box>
    </Section>
  );
}

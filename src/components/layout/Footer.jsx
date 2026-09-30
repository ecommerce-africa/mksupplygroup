import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Logo from './Logo';
import { company } from '../../data/company';

const linkSx = { color: '#ffffff', textDecoration: 'none', '&:hover': { color: 'brand.citrus400' } };
const headingSx = { fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', color: 'brand.citrus400' };
const columnSx = { display: 'flex', flexDirection: 'column', gap: 1.25, fontSize: 15 };

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Box component="footer" sx={{ bgcolor: 'brand.green900', color: '#ffffff' }}>
      <Box sx={{ maxWidth: 1440, mx: 'auto', px: { xs: 2, md: 5, lg: 10 }, py: { xs: 5, md: 8 }, display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 6 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(4, minmax(0, 1fr))' }, gap: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Logo textSize={20} />
            <Typography sx={{ fontSize: 15, lineHeight: '22px', color: 'brand.footerText' }}>{t('footer.tagline')}</Typography>
          </Box>
          <Box sx={columnSx}>
            <Box component="span" sx={headingSx}>{t('footer.products')}</Box>
            <Box component="a" href="#juices" sx={linkSx}>{t('categories.juices.title')}</Box>
            <Box component="a" href="#water" sx={linkSx}>{t('categories.water.title')}</Box>
          </Box>
          <Box sx={columnSx}>
            <Box component="span" sx={headingSx}>{t('footer.company')}</Box>
            <Box component="a" href="#about-us" sx={linkSx}>{t('footer.aboutUs')}</Box>
            <Box component="a" href="#sectors" sx={linkSx}>{t('footer.sectors')}</Box>
            <Box component="a" href="#contact" sx={linkSx}>{t('footer.contactLink')}</Box>
          </Box>
          <Box sx={columnSx}>
            <Box component="span" sx={headingSx}>{t('footer.contact')}</Box>
            <Box component="a" href={`mailto:${company.email}`} sx={linkSx}>{company.email}</Box>
            <Box component="a" href={company.phoneHref} sx={linkSx}>{company.phoneDisplay}</Box>
            <Box component="a" href={company.whatsappHref} target="_blank" rel="noopener noreferrer" sx={linkSx}>WhatsApp</Box>
            <Box component="span">{company.street}<br />{company.postcodeCity}</Box>
          </Box>
        </Box>
        <Box
          sx={{
            borderTop: '1px solid',
            borderColor: 'brand.footerLine',
            pt: { xs: 2, md: 3 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: { xs: 1, md: 3 },
            fontSize: { xs: 13, md: 14 },
            lineHeight: '20px',
            color: 'brand.footerText',
          }}
        >
          <span>{t('footer.legal')}</span>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 2, md: 3 } }}>
            <Box component="a" href="#privacy" sx={{ color: 'brand.footerText' }}>{t('footer.privacy')}</Box>
            <Box component="a" href="#terms" sx={{ color: 'brand.footerText' }}>{t('footer.terms')}</Box>
            <span>{t('footer.wholesale')}</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SizeBadge from './SizeBadge';

// Mobile product row: thumbnail left, details right, whole row links to the form
export default function ProductRow({ name, size, ean = '', feature = '', image, wellColor }) {
  const { t } = useTranslation();
  const fullName = `${name} ${size}`;

  // "PET bottle · Nata de coco jelly" or "PET bottle · EAN 123…"
  function detailLine() {
    if (feature) {
      return `${t('products.pet')} · ${feature}`;
    }
    if (ean) {
      return `${t('products.pet')} · EAN ${ean}`;
    }
    return t('products.pet');
  }

  return (
    <Box
      component="a"
      href="#contact"
      sx={{
        display: 'flex',
        gap: '14px',
        p: 1.5,
        border: '1px solid',
        borderColor: 'brand.line',
        borderRadius: '12px',
        bgcolor: '#ffffff',
        textDecoration: 'none',
        color: 'text.primary',
        '&:hover': { color: 'text.primary' },
      }}
    >
      <Box sx={{ width: 96, height: 112, flexShrink: 0, borderRadius: '6px', bgcolor: `brand.${wellColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box component="img" src={image} alt={fullName} loading="lazy" sx={{ width: 104, height: 104, objectFit: 'contain' }} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, minWidth: 0 }}>
        <Box><SizeBadge size={size} small /></Box>
        <Typography variant="h3" sx={{ fontSize: 16, lineHeight: '22px' }}>{fullName}</Typography>
        <Typography sx={{ fontSize: 12, lineHeight: '16px', color: 'text.secondary' }}>{detailLine()}</Typography>
        <Typography component="span" sx={{ fontSize: 14, fontWeight: 600, color: 'brand.green600', mt: 'auto' }}>
          {t('products.requestPrice')} →
        </Typography>
      </Box>
    </Box>
  );
}

ProductRow.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  ean: PropTypes.string,
  feature: PropTypes.string,
  image: PropTypes.string.isRequired,
  wellColor: PropTypes.string.isRequired,
};
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SizeBadge from './SizeBadge';

function Spec({ label, value }) {
  return (
    <Box>
      <Typography component="dt" sx={{ fontSize: 14, lineHeight: '20px', color: 'text.secondary' }}>{label}</Typography>
      <Typography component="dd" sx={{ fontSize: 14, lineHeight: '20px', fontWeight: 600 }}>{value}</Typography>
    </Box>
  );
}

Spec.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

// Desktop product card: image well, size badge, specs and "Request price"
export default function ProductCard({ name, category, size, ean = '', feature = '', image, wellColor }) {
  const { t } = useTranslation();
  const fullName = `${name} ${size}`;

  // Third spec: "Contains …" when the product has a feature, otherwise the barcode
  function renderThirdSpec() {
    if (feature) {
      return <Spec label={t('products.contains')} value={feature} />;
    }
    if (ean) {
      return <Spec label={t('products.barcode')} value={ean} />;
    }
    return null;
  }

  return (
    <Box
      component="article"
      sx={{ display: 'flex', flexDirection: 'column', border: '1px solid', borderColor: 'brand.line', borderRadius: '12px', overflow: 'hidden', bgcolor: '#ffffff' }}
    >
      <Box sx={{ position: 'relative', height: 280, bgcolor: `brand.${wellColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box component="img" src={image} alt={fullName} loading="lazy" sx={{ width: 260, height: 260, objectFit: 'contain' }} />
        <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
          <SizeBadge size={size} />
        </Box>
      </Box>
      <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2, flexGrow: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography variant="h3" sx={{ fontSize: 20, lineHeight: '28px' }}>{fullName}</Typography>
          <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>{category}</Typography>
        </Box>
        <Box component="dl" sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px 16px' }}>
          <Spec label={t('products.pack')} value={t('products.pet')} />
          <Spec label={t('products.origin')} value={t('products.originValue')} />
          {renderThirdSpec()}
        </Box>
        <Button href="#contact" variant="contained" color="primary" fullWidth sx={{ mt: 'auto' }}>
          {t('products.requestPrice')}
        </Button>
      </Box>
    </Box>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  ean: PropTypes.string,
  feature: PropTypes.string,
  image: PropTypes.string.isRequired,
  wellColor: PropTypes.string.isRequired,
};
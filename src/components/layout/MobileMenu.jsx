import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import WhatsAppButton from '../ui/WhatsAppButton';
import { navItems } from './navItems';
import { fonts } from '../../theme';

export default function MobileMenu({ open, onClose }) {
  const { t } = useTranslation();

  return (
    <Drawer
      anchor="top"
      open={open}
      onClose={onClose}
      sx={{ zIndex: (theme) => theme.zIndex.appBar - 1 }}
      PaperProps={{ sx: { top: 64, bgcolor: 'brand.green900', px: 2, pt: 1, pb: 3, borderRadius: 0 } }}
    >
      <Box component="nav" aria-label="Menu" sx={{ display: 'flex', flexDirection: 'column' }}>
        {navItems.map((item) => (
          <Box
            key={item.key}
            component="a"
            href={item.href}
            onClick={onClose}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 56,
              color: '#ffffff',
              textDecoration: 'none',
              fontFamily: fonts.display,
              fontWeight: 700,
              fontSize: 24,
              borderBottom: '1px solid',
              borderColor: 'brand.footerLine',
              '&:hover': { color: 'brand.citrus400' },
            }}
          >
            {t(`nav.${item.key}`)}
          </Box>
        ))}
        <Button href="#contact" onClick={onClose} variant="contained" color="secondary" fullWidth sx={{ mt: 3, minHeight: 52 }}>
          {t('cta.quote')}
        </Button>
        <WhatsAppButton label={t('cta.whatsapp')} variant="outlineLight" fullWidth sx={{ mt: 1.5 }} />
      </Box>
    </Drawer>
  );
}

MobileMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

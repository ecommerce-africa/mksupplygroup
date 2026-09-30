import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { Icon } from '@iconify/react';
import { company } from '../../data/company';

export default function WhatsAppButton({ label, variant = 'filled', fullWidth = false, sx = {} }) {
  let colors = { bgcolor: 'brand.green600', color: '#ffffff', '&:hover': { bgcolor: 'brand.green900', color: '#ffffff' } };
  if (variant === 'outlineLight') {
    colors = { border: '2px solid #ffffff', color: '#ffffff', '&:hover': { bgcolor: 'rgba(255,255,255,0.08)', color: '#ffffff' } };
  }
  return (
    <Button
      href={company.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      fullWidth={fullWidth}
      startIcon={<Icon icon="mk:whatsapp" width={22} />}
      sx={{ minHeight: 52, ...colors, ...sx }}
    >
      {label}
    </Button>
  );
}

WhatsAppButton.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['filled', 'outlineLight']),
  fullWidth: PropTypes.bool,
  sx: PropTypes.object,
};

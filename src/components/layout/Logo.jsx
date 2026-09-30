import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import logoMark from '../../assets/images/logo-mark.svg';
import { fonts } from '../../theme';

export default function Logo({ size = 40, textSize = 22, gap = 1.5, href = '#top' }) {
  return (
    <Box component="a" href={href} sx={{ display: 'flex', alignItems: 'center', gap, textDecoration: 'none', '&:hover': { color: '#ffffff' } }}>
      <Box component="img" src={logoMark} alt="" sx={{ width: size, height: size }} />
      <Box component="span" sx={{ fontFamily: fonts.display, fontWeight: 800, fontSize: textSize, color: '#ffffff', letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>
        MK Supply Group
      </Box>
    </Box>
  );
}

Logo.propTypes = {
  size: PropTypes.number,
  textSize: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  gap: PropTypes.number,
  href: PropTypes.string,
};

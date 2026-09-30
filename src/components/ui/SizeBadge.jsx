import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

export default function SizeBadge({ size, small = false }) {
  let fontSize = 12;
  let padding = '4px 10px';
  if (small) {
    fontSize = 11;
    padding = '2px 8px';
  }
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-block',
        bgcolor: 'brand.green900',
        color: '#ffffff',
        fontSize,
        fontWeight: 600,
        letterSpacing: '0.08em',
        p: padding,
        borderRadius: '6px',
        lineHeight: 1.4,
      }}
    >
      {size.toUpperCase()}
    </Box>
  );
}

SizeBadge.propTypes = {
  size: PropTypes.string.isRequired,
  small: PropTypes.bool,
};


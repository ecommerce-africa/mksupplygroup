import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

// Full-width band with centred content (max 1440px, 80px side padding on desktop)
export default function Section({ id = undefined, bgcolor = 'transparent', py = { xs: 6, md: 12 }, children, sx = {} }) {
  return (
    <Box
      component="section"
      id={id}
      sx={{ bgcolor, scrollMarginTop: { xs: 64, md: 80 }, ...sx }}
    >
      <Box sx={{ maxWidth: 1440, mx: 'auto', px: { xs: 2, md: 5, lg: 10 }, py }}>
        {children}
      </Box>
    </Box>
  );
}

Section.propTypes = {
  id: PropTypes.string,
  bgcolor: PropTypes.string,
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};


import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

export default function Eyebrow({ children, color = 'brand.green600' }) {
  return (
    <Typography variant="overline" component="p" sx={{ color, display: 'block' }}>
      {children}
    </Typography>
  );
}

Eyebrow.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};


import PropTypes from 'prop-types';
import Link from '@mui/material/Link';

// Green, bold "→" style link used across sections
export default function TextLink({ href, children, sx = {} }) {
  return (
    <Link href={href} sx={{ fontWeight: 600, fontSize: { xs: 15, md: 16 }, color: 'brand.green600', ...sx }}>
      {children}
    </Link>
  );
}

TextLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};


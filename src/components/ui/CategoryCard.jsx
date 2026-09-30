import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { fonts } from '../../theme';

const cardSx = {
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid',
  borderColor: 'brand.line',
  borderRadius: '12px',
  overflow: 'hidden',
  textDecoration: 'none',
  color: 'text.primary',
};

const imageHeight = { xs: 200, md: 240 };

function ActiveCard({ title, subtitle, cta, image, href }) {
  return (
    <Box
      component="a"
      href={href}
      sx={{
        ...cardSx,
        bgcolor: '#ffffff',
        transition: 'box-shadow 160ms ease, transform 160ms ease',
        '&:hover': { boxShadow: '0 1px 2px rgba(20,32,27,0.06), 0 4px 12px rgba(20,32,27,0.06)', color: 'text.primary' },
      }}
    >
      <Box component="img" src={image} alt="" loading="lazy" sx={{ width: '100%', height: imageHeight, objectFit: 'cover', display: 'block' }} />
      <Box sx={{ p: { xs: '14px', md: '20px' }, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography variant="h3" sx={{ fontSize: { xs: 17, md: 20 }, lineHeight: 1.35 }}>{title}</Typography>
        <Typography sx={{ fontSize: 14, lineHeight: '20px', color: 'text.secondary' }}>{subtitle}</Typography>
        <Typography component="span" sx={{ fontSize: 15, fontWeight: 600, color: 'brand.green600', mt: 0.5 }}>{cta}</Typography>
      </Box>
    </Box>
  );
}

ActiveCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

function ComingSoonCard({ title, subtitle, image, watermark }) {
  return (
    <Box aria-disabled="true" sx={{ ...cardSx, bgcolor: 'brand.surfaceMuted', color: 'text.secondary' }}>
      <Box sx={{ position: 'relative', height: imageHeight, overflow: 'hidden' }}>
        <Box
          component="img"
          src={image}
          alt=""
          loading="lazy"
          sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(1)', opacity: 0.45 }}
        />
        <Box
          component="span"
          aria-hidden="true"
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: fonts.display,
            fontWeight: 800,
            fontSize: { xs: 30, md: 40 },
            letterSpacing: '0.12em',
            color: 'text.primary',
            opacity: 0.5,
            transform: 'rotate(-12deg)',
            whiteSpace: 'nowrap',
          }}
        >
          {watermark}
        </Box>
      </Box>
      <Box sx={{ p: { xs: '14px', md: '20px' }, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography variant="h3" sx={{ fontSize: { xs: 17, md: 20 }, lineHeight: 1.35, color: 'text.secondary' }}>{title}</Typography>
        <Typography sx={{ fontSize: 14, lineHeight: '20px' }}>{subtitle}</Typography>
      </Box>
    </Box>
  );
}

ComingSoonCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  watermark: PropTypes.string.isRequired,
};

export default function CategoryCard({ comingSoon = false, href = null, cta = '', watermark = '', ...rest }) {
  if (comingSoon) {
    return <ComingSoonCard watermark={watermark} {...rest} />;
  }
  return <ActiveCard href={href} cta={cta} {...rest} />;
}

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  comingSoon: PropTypes.bool,
  href: PropTypes.string,
  cta: PropTypes.string,
  watermark: PropTypes.string,
};

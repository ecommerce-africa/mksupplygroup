import PropTypes from 'prop-types';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import { SUPPORTED_LANGUAGES } from '../../i18n';

const PILL_WIDTH = 44;
const PILL_HEIGHT = 36;
const GAP = 2;
const PAD = 3;

const pillSx = {
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: PILL_WIDTH,
  height: PILL_HEIGHT,
  borderRadius: '999px',
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: '0.04em',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  transition: 'color 200ms ease, background-color 200ms ease',
};

// Swap (or add) the language segment while keeping the rest of the path, query and hash.
function buildLocalizedPath(location, code) {
  const parts = location.pathname.split('/').filter(Boolean);
  if (parts.length > 0 && SUPPORTED_LANGUAGES.includes(parts[0])) {
    parts.shift();
  }
  parts.unshift(code);
  return `/${parts.join('/')}${location.search}${location.hash}`;
}

function getActiveIndex(lang) {
  const index = SUPPORTED_LANGUAGES.indexOf(lang);
  if (index === -1) {
    return 0;
  }
  return index;
}

// EN | NL pill with a sliding indicator. The active language is highlighted; the other links to the same page in that language.
export default function LanguageSwitch({ lang }) {
  const { t } = useTranslation();
  const location = useLocation();
  const offset = getActiveIndex(lang) * (PILL_WIDTH + GAP);

  function renderPill(code) {
    if (code === lang) {
      return (
        <Box
          key={code}
          component="span"
          aria-current="page"
          lang={code}
          sx={{ ...pillSx, color: 'brand.green900' }}
        >
          {code.toUpperCase()}
        </Box>
      );
    }
    return (
      <Box
        key={code}
        component={RouterLink}
        to={buildLocalizedPath(location, code)}
        hrefLang={code}
        lang={code}
        aria-label={t(`language.${code}`)}
        sx={{
          ...pillSx,
          color: 'rgba(255,255,255,0.85)',
          '&:hover': { color: '#ffffff', bgcolor: 'rgba(255,255,255,0.12)' },
          '&:focus-visible': { outline: '2px solid #ffffff', outlineOffset: '2px' },
        }}
      >
        {code.toUpperCase()}
      </Box>
    );
  }

  return (
    <Box
      role="group"
      aria-label={t('language.label')}
      sx={{
        position: 'relative',
        display: 'inline-flex',
        gap: `${GAP}px`,
        p: `${PAD}px`,
        border: '1px solid rgba(255,255,255,0.4)',
        borderRadius: '999px',
        bgcolor: 'rgba(255,255,255,0.06)',
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          top: PAD,
          left: PAD,
          width: PILL_WIDTH,
          height: PILL_HEIGHT,
          borderRadius: '999px',
          bgcolor: '#ffffff',
          boxShadow: '0 1px 3px rgba(0,0,0,0.18)',
          transform: `translateX(${offset}px)`,
          transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
          '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
        }}
      />
      {SUPPORTED_LANGUAGES.map(renderPill)}
    </Box>
  );
}

LanguageSwitch.propTypes = {
  lang: PropTypes.string.isRequired,
};
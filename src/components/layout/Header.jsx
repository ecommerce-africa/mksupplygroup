import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Icon } from '@iconify/react';
import Logo from './Logo';
import LanguageSwitch from './LanguageSwitch';
import MobileMenu from './MobileMenu';
import { navItems } from './navItems';
import useIsDesktop from '../../hooks/useIsDesktop';

export default function Header({ lang }) {
  const { t } = useTranslation();
  const isDesktop = useIsDesktop();
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((open) => !open);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function renderMenuIcon() {
    if (menuOpen) {
      return <Icon icon="mk:close" width={24} />;
    }
    return <Icon icon="mk:menu" width={24} />;
  }

  function renderMenuLabel() {
    if (menuOpen) {
      return t('menu.close');
    }
    return t('menu.open');
  }

  function renderDesktop() {
    return (
      <>
        <Logo />
        <Box component="nav" sx={{ display: 'flex', alignItems: 'center', gap: { md: 3, lg: 4.5 } }}>
          {navItems.map((item) => (
            <Box
              key={item.key}
              component="a"
              href={item.href}
              sx={{ color: '#ffffff', textDecoration: 'none', fontSize: 16, fontWeight: 600, '&:hover': { color: 'brand.citrus400' } }}
            >
              {t(`nav.${item.key}`)}
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <LanguageSwitch lang={lang} />
          <Button href="#contact" variant="contained" color="secondary">
            {t('cta.quote')}
          </Button>
        </Box>
      </>
    );
  }

  function renderMobile() {
    return (
      <>
        <Logo size={32} textSize={{ xs: 15, sm: 17 }} gap={1} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <LanguageSwitch lang={lang} />
          <IconButton onClick={toggleMenu} aria-label={renderMenuLabel()} aria-expanded={menuOpen} sx={{ color: '#ffffff', width: 44, height: 44 }}>
            {renderMenuIcon()}
          </IconButton>
        </Box>
        <MobileMenu open={menuOpen} onClose={closeMenu} />
      </>
    );
  }

  function renderContent() {
    if (isDesktop) {
      return renderDesktop();
    }
    return renderMobile();
  }

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'brand.green900', zIndex: (theme) => theme.zIndex.drawer + 2 }}>
      <Box
        sx={{
          height: { xs: 64, md: 80 },
          maxWidth: 1440,
          width: '100%',
          mx: 'auto',
          pl: { xs: 2, md: 5, lg: 10 },
          pr: { xs: 1.5, md: 5, lg: 10 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxSizing: 'border-box',
        }}
      >
        {renderContent()}
      </Box>
    </AppBar>
  );
}

Header.propTypes = {
  lang: PropTypes.string.isRequired,
};

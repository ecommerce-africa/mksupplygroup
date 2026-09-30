import { useEffect } from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Header from './Header';
import Footer from './Footer';
import { DEFAULT_LANGUAGE, isSupportedLanguage } from '../../i18n';

// Wraps every page under /en or /nl and keeps i18next in sync with the URL
export default function LanguageLayout() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const supported = isSupportedLanguage(lang);

  useEffect(() => {
    if (supported && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, supported, i18n]);

  if (!supported) {
    return <Navigate to={`/${DEFAULT_LANGUAGE}`} replace />;
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header lang={lang} />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

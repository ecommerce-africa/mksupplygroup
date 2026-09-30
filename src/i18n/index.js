import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import nl from './locales/nl.json';

export const SUPPORTED_LANGUAGES = ['en', 'nl'];
export const DEFAULT_LANGUAGE = 'en';

export function isSupportedLanguage(lang) {
  return SUPPORTED_LANGUAGES.includes(lang);
}

// Dutch browsers land on /nl, everyone else on /en
export function getPreferredLanguage() {
  if (typeof navigator === 'undefined') {
    return DEFAULT_LANGUAGE;
  }
  const browserLang = (navigator.language || '').toLowerCase();
  if (browserLang.startsWith('nl')) {
    return 'nl';
  }
  return DEFAULT_LANGUAGE;
}

// Start in the language from the URL (/en or /nl) so the first render is already correct
function getInitialLanguage() {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }
  const firstSegment = window.location.pathname.split('/')[1];
  if (isSupportedLanguage(firstSegment)) {
    return firstSegment;
  }
  return getPreferredLanguage();
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    nl: { translation: nl },
  },
  lng: getInitialLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false },
});

export default i18n;

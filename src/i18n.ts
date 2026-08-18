
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ca from './locales/ca.json';
import es from './locales/es.json';
import en from './locales/en.json';

const getLanguageFromPath = (): string => {
  const path = window.location.pathname;

  if (path === '/es' || path.startsWith('/es/')) {
    return 'es';
  }

  if (path === '/en' || path.startsWith('/en/')) {
    return 'en';
  }

  return 'ca';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ca: { translation: ca },
      es: { translation: es },
      en: { translation: en },
    },

    // La URL és la font principal de l'idioma.
    // Català és l'idioma per defecte.
    lng: getLanguageFromPath(),
    fallbackLng: 'ca',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

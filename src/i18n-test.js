import i18n from 'i18next';
import en from './locales/en.json';
import es from './locales/es.json';
// const reactI18nextModule = require('react-i18next');

i18n.init({
   fallbackLng: 'en',
   lng: 'en',
   debug: true,
   saveMissing: false,
   interpolation: {
      escapeValue: false, // React already does escaping
   },
   resources: {
      en: { translation: en },
      es: { translation: es },
   },
   react: {
      wait: false,
      nsMode: 'fallback',
   },
});

export default i18n;

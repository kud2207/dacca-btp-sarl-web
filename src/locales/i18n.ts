// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'; 
import fr from './fr.json'
import en from './en.json'

const enTranslations =en
const frTranslations= fr

i18n
  .use(initReactI18next)
  .init({ 
    resources: {
      en: { translation: enTranslations },
      fr: { translation: frTranslations }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });


export default i18n;
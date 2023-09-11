// i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require('./public/locales/en.json')
    },
    fr: {
      translation: require('./public/locales/fr.json')
    }
  },
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false
  }
})

export default i18n

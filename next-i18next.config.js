const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  localePath: path.resolve('./public/locales'),
  ns: ['common', 'about', 'contact', 'projects'],
  defaultNS: 'common',
  fallbackLng: 'en',
  fallbackNS: 'common',
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
    caches: ['localStorage', 'cookie'],
  },
};

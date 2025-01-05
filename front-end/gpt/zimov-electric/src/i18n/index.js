import { createI18n } from "vue-i18n";

const messages = {
  en: {
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    contacts: "Contacts",
  },
  it: {
    home: "Home",
    services: "Servizi",
    portfolio: "Portfolio",
    contacts: "Contatti",
  },
};

const i18n = createI18n({
  locale: "it", // default language
  fallbackLocale: "it",
  messages,
});

export default i18n;

import { createI18n } from "vue-i18n";

const messages = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      contacts: "Contacts",
    },
    hero: {
      title: "Professional Electrical Services",
      subtitle:
        "Expert electrical solutions for residential and commercial properties",
      button: "View Our Services",
    },
    about: {
      title: "About Us",
      missionTitle: "Our Mission",
      missionDescription:
        "To provide exceptional electrical services with the highest standards of safety, quality, and customer satisfaction.",
      values: {
        excellence: {
          title: "Excellence",
          description: "Delivering superior quality in every project",
        },
        safety: {
          title: "Safety",
          description: "Maintaining the highest safety standards",
        },
        reliability: {
          title: "Reliability",
          description: "Consistent and dependable service delivery",
        },
        innovation: {
          title: "Innovation",
          description: "Embracing modern electrical solutions",
        },
      },
    },
    competencies: {
      title: "Core Competencies",
      items: {
        installation: {
          title: "Electrical Installation",
          description:
            "Professional installation services for residential and commercial properties",
        },
        maintenance: {
          title: "Maintenance & Repairs",
          description: "Regular maintenance and emergency repair services",
        },
        commercial: {
          title: "Commercial Services",
          description:
            "Specialized solutions for businesses and industrial facilities",
        },
        residential: {
          title: "Residential Services",
          description: "Complete electrical solutions for homes and apartments",
        },
        power: {
          title: "Power Systems",
          description:
            "Installation and maintenance of power distribution systems",
        },
        lighting: {
          title: "Lighting Solutions",
          description:
            "Modern lighting installation and energy-efficient upgrades",
        },
      },
    },
    services: {
      title: "Our Services",
      learnMore: "Learn more",
      items: {
        electrical: {
          title: "Electrical Systems for Private Individuals",
          description:
            "Complete electrical solutions for homes including installations, repairs, and upgrades",
        },
        photovoltaic: {
          title: "Photovoltaic Systems",
          description:
            "Sustainable solar power solutions for homes and businesses",
        },
        automation: {
          title: "Home Automation",
          description: "Smart home solutions for modern living",
        },
        companies: {
          title: "Solutions for Companies",
          description:
            "Professional electrical services for businesses and commercial properties",
        },
      },
    },
  },
  it: {
    nav: {
      home: "Home",
      services: "Servizi",
      portfolio: "Portfolio",
      contacts: "Contatti",
    },
    hero: {
      title: "Servizi Elettrici Professionali",
      subtitle:
        "Soluzioni elettriche esperte per proprietà residenziali e commerciali",
      button: "Visualizza i nostri servizi",
    },
    about: {
      title: "Chi Siamo",
      missionTitle: "La Nostra Missione",
      missionDescription:
        "Fornire servizi elettrici eccezionali con i più alti standard di sicurezza, qualità e soddisfazione del cliente.",
      values: {
        excellence: {
          title: "Eccellenza",
          description: "Garantire una qualità superiore in ogni progetto",
        },
        safety: {
          title: "Sicurezza",
          description: "Mantenere i più alti standard di sicurezza",
        },
        reliability: {
          title: "Affidabilità",
          description: "Servizio coerente e affidabile",
        },
        innovation: {
          title: "Innovazione",
          description: "Adottare soluzioni elettriche moderne",
        },
      },
    },
    competencies: {
      title: "Competenze Chiave",
      items: {
        installation: {
          title: "Installazione Elettrica",
          description:
            "Servizi di installazione professionale per proprietà residenziali e commerciali",
        },
        maintenance: {
          title: "Manutenzione e Riparazioni",
          description:
            "Servizi di manutenzione regolare e riparazioni di emergenza",
        },
        commercial: {
          title: "Servizi Commerciali",
          description:
            "Soluzioni specializzate per aziende e strutture industriali",
        },
        residential: {
          title: "Servizi Residenziali",
          description: "Soluzioni elettriche complete per case e appartamenti",
        },
        power: {
          title: "Sistemi di Alimentazione",
          description:
            "Installazione e manutenzione di sistemi di distribuzione di alimentazione",
        },
        lighting: {
          title: "Soluzioni di Illuminazione",
          description:
            "Installazione di illuminazione moderna e aggiornamenti efficienti dal punto di vista energetico",
        },
      },
    },
    services: {
      title: "I Nostri Servizi",
      learnMore: "Scopri di più",
      items: {
        electrical: {
          title: "Impianti Elettrici per Privati",
          description:
            "Soluzioni elettriche complete per case, inclusa installazione, riparazioni e aggiornamenti",
        },
        photovoltaic: {
          title: "Sistemi Fotovoltaici",
          description: "Soluzioni solari sostenibili per case e aziende",
        },
        automation: {
          title: "Domotica",
          description: "Soluzioni smart per la vita moderna",
        },
        companies: {
          title: "Soluzioni per Aziende",
          description:
            "Servizi elettrici professionali per aziende e proprietà commerciali",
        },
      },
    },
  },
};

const i18n = createI18n({
  locale: "it", // default language
  fallbackLocale: "it",
  messages,
});

export default i18n;

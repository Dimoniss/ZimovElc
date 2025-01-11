import { createI18n } from "vue-i18n";

const messages = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      contacts: "Contacts",
      servicesItems: {
        electrical: "Electrical",
        photovoltaic: "Photovoltaic",
        automation: "Automation",
        companies: "Companies",
      },
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
      keyFeatures: "Key Features",
      electrical: {
        title: "Electrical Systems for Private Individuals",
        description:
          "Our residential electrical services cover everything from basic wiring to complete home electrical system installations. We ensure your home's electrical system is safe, efficient, and up to code.",
        features: [
          "Electrical system installation and upgrades",
          "Safety inspections and code compliance",
          "Indoor and outdoor lighting installation",
          "Circuit breaker panel services",
          "Emergency electrical repairs",
        ],
        cta: "Schedule a Consultation",
      },
      photovoltaic: {
        title: "Photovoltaic Systems",
        description:
          "Transform your energy consumption with our state-of-the-art photovoltaic systems. We provide complete solar solutions from design to installation and maintenance.",
        features: [
          "Solar panel installation",
          "Energy consumption analysis",
          "Maintenance and monitoring services",
          "System design and planning",
          "Battery storage solutions",
        ],
        cta: "Get Solar Estimate",
      },
      automation: {
        title: "Home Automation",
        description:
          "Experience the convenience of smart home automation. Our solutions include remote control, motion detection, and energy monitoring.",
        features: [
          "Remote control",
          "Motion detection",
          "Energy monitoring",
          "Smart home integration",
          "Security systems",
          "Smart lighting",
        ],
        cta: "Get Automation Estimate",
      },
      companies: {
        title: "Solutions for Companies",
        description:
          "We offer comprehensive electrical services for businesses and commercial properties. Our experienced professionals provide customized solutions to meet your specific needs.",
        features: [
          "Electrical system installation and upgrades",
          "Safety inspections and code compliance",
          "Maintenance and monitoring services",
          "System design and planning",
          "Circuit breaker panel services",
          "Emergency electrical repairs",
        ],
      },
    },
    portfolio: {
      title: "Our Projects",
      learnMore: "Learn More",
      projects: {
        office: {
          title: "Modern Office Building",
          description:
            "Complete electrical installation for a 10-story commercial building",
        },
        smartHome: {
          title: "Smart Home Integration",
          description:
            "Smart electrical system installation for luxury residential property",
        },
        industrial: {
          title: "Industrial Facility",
          description: "Power system upgrade for manufacturing facility",
        },
      },
    },
    contact: {
      title: "Contact Us",
      name: "Name",
      email: "Email",
      message: "Message",
      button: "Send Message",
      successMessage: "Message sent successfully!",
    },
  },
  it: {
    nav: {
      home: "Home",
      services: "Servizi",
      portfolio: "Portfolio",
      contacts: "Contatti",
      servicesItems: {
        electrical: "Elettrico",
        photovoltaic: "Fotovoltaico",
        automation: "Automazione",
        companies: "Aziende",
      },
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
      keyFeatures: "Caratteristiche Principali",
      electrical: {
        title: "Impianti Elettrici per Privati",
        description:
          "I nostri servizi elettrici residenziali coprono tutto, dai cablaggi di base alle installazioni complete degli impianti elettrici domestici. Garantiamo che il tuo impianto elettrico sia sicuro, efficiente e a norma.",
        features: [
          "Installazione e aggiornamento di impianti elettrici",
          "Ispezioni di sicurezza e conformità normativa",
          "Installazione di illuminazione interna ed esterna",
          "Servizi per quadri elettrici",
          "Riparazioni elettriche di emergenza",
        ],
        cta: "Pianifica una consulenza",
      },
      photovoltaic: {
        title: "Sistemi Fotovoltaici",
        description:
          "Offriamo soluzioni solari sostenibili per case e aziende. Siamo esperti nella realizzazione di sistemi fotovoltaici per la produzione di energia elettrica sostenibile.",
        features: [
          "Installazione di pannelli solari",
          "Analisi del consumo energetico",
          "Manutenzione e servizi di monitoraggio",
          "Progettazione e pianificazione del sistema",
          "Soluzioni per l'accumulo di energia",
        ],
        cta: "Richiedi un immagine di sistema fotovoltaico",
      },
      automation: {
        title: "Domotica",
        description:
          "Offriamo soluzioni per la domotica moderna. Siamo esperti nella realizzazione di sistemi domotici per la gestione della casa e dell'azienda.",
        features: [
          "Controllo remoto",
          "Rilevamento di movimento",
          "Monitoraggio energetico",
          "Integrazione con casa intelligente",
          "Sistemi di sicurezza",
          "Illuminazione intelligente",
        ],
        cta: "Richiedi un immagine di sistema domotico",
      },
      companies: {
        title: "Soluzioni per Aziende",
        description:
          "Offriamo soluzioni elettriche professionali per aziende e proprietà commerciali. Siamo esperti nella realizzazione di impianti elettrici per aziende e strutture industriali.",
        features: [
          "Installazione e aggiornamento di impianti elettrici",
          "Ispezioni di sicurezza e conformità normativa",
          "Manutenzione e monitoraggio dei servizi",
          "Progettazione e pianificazione del sistema",
          "Servizi per quadri elettrici",
          "Riparazioni elettriche di emergenza",
        ],
        cta: "Richiedi un immagine di sistema fotovoltaico",
      },
    },
    portfolio: {
      title: "I Nostri Progetti",
      learnMore: "Scopri di più",
      projects: {
        office: {
          title: "Edificio per Uffici Moderno",
          description:
            "Installazione elettrica completa per un edificio commerciale di 10 piani",
        },
        smartHome: {
          title: "Integrazione Domotica",
          description:
            "Installazione di sistema elettrico intelligente per proprietà residenziale di lusso",
        },
        industrial: {
          title: "Struttura Industriale",
          description:
            "Aggiornamento del sistema elettrico per una struttura di produzione",
        },
      },
    },
    contact: {
      title: "Contattaci",
      name: "Nome",
      email: "Email",
      message: "Messaggio",
      button: "Invia Messaggio",
      successMessage: "Messaggio inviato con successo!",
    },
  },
};

const i18n = createI18n({
  locale: "it", // default language
  fallbackLocale: "it",
  messages,
});

export default i18n;

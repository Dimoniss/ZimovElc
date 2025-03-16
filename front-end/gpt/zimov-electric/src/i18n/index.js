import { createI18n } from "vue-i18n";

const messages = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      contacts: "Contacts",
      servicesItems: {
        electrical: "Electrical Works",
        telecommunications: "Telecommunications",
        securitySystems: "Security Systems",
        specialServices: "Special Services",
      },
    },
    materials: {
      title: "Materials used",
    },
    hero: {
      title: "Professional and Reliable Electrical Services",
      subtitle:
        "Expert electrical solutions for residential, commercial, and industrial properties. We are committed to delivering safety, efficiency, and innovation in every project.",
      description:
        "Our team of qualified technicians works with precision and attention to detail to meet the specific needs of our clients. From installations to repairs, we handle every electrical aspect with a professional approach.",
      button: "Discover More About Our Services",
    },
    about: {
      title: "About Us",
      missionTitle: "Our Mission",
      values: {
        excellence: {
          title: "Excellence",
          description:
            "We are committed to delivering superior quality in every project we undertake. Our dedication to excellence is reflected in our attention to detail, use of premium materials, and adoption of the most innovative technologies. Every task is carried out with precision, ensuring results that exceed our clients' expectations.",
        },
        safety: {
          title: "Safety",
          description:
            "Safety is our top priority in every project. We strictly adhere to the highest safety standards, implementing advanced protocols and using certified materials to protect people and property. Every task is carried out with care to ensure a secure and reliable environment.",
        },
        reliability: {
          title: "Reliability",
          description:
            "Our mission is to provide consistent and dependable service delivery every time. With our expertise and professionalism, we ensure timely and high-quality results, building trust with our clients. Every project is managed with precision and a commitment to meeting expectations.",
        },
        innovation: {
          title: "Innovation",
          description:
            "We are dedicated to adopting modern and cutting-edge electrical solutions. By leveraging the most innovative technologies, we enhance the efficiency, sustainability, and safety of our projects. Our ability to integrate new ideas allows us to provide tailored solutions that meet the ever-evolving needs of our clients.",
        },
        professionalism: {
          title: "Professionalism",
          description:
            "We are a team of highly skilled professionals dedicated to delivering top-quality solutions in every project we undertake. Our attention to detail and commitment to excellence set us apart in our field.",
        },
      },
    },
    competencies: {
      title: "Core Competencies",
      items: {
        installation: {
          title: "Electrical Installation",
          description:
            "We provide professional electrical installation services for residential and commercial properties. Our team of experts handles everything from new installations to complex systems, ensuring safety, efficiency, and compliance with the highest standards. We use high-quality materials and advanced technologies to deliver durable and reliable results.",
        },
        maintenance: {
          title: "Maintenance and Repairs",
          description:
            "We provide comprehensive regular maintenance and emergency repair services for residential and commercial electrical systems. Our team is available for prompt and precise interventions, ensuring that every system remains safe, efficient, and compliant with standards. With a proactive approach, we identify and address issues before they escalate.",
        },
        commercial: {
          title: "Commercial Services",
          description:
            "We provide specialized solutions for businesses and industrial facilities, tailored to meet the unique needs of each client. From installing complex systems to preventive maintenance, we ensure operational efficiency, safety, and compliance with regulatory standards. Our experienced team works with precision to deliver high-quality results that support the growth of your business.",
        },
        residential: {
          title: "Residential Services",
          description:
            "We provide comprehensive electrical solutions for houses and apartments, ensuring safety, efficiency, and comfort. Our team of professionals handles installations, maintenance, and repairs using modern technologies and high-quality materials. Whether upgrading your electrical system or installing new equipment, we ensure every detail is tailored to meet your home's needs.",
        },
        power: {
          title: "Power Systems",
          description:
            "We provide professional services for the installation and maintenance of power distribution systems. Our expert team designs and implements reliable and safe solutions to ensure efficient and consistent electricity distribution. We also optimize existing systems to maximize their efficiency and compliance with regulatory standards.",
        },
        lighting: {
          title: "Lighting Solutions",
          description:
            "We provide modern lighting installations and energy-efficient upgrades to enhance the aesthetics and functionality of any space. Whether for residential, commercial, or industrial lighting, we use advanced technologies to create tailored solutions that combine energy efficiency, sustainability, and innovative design.",
        },
      },
    },
    services: {
      title: "Our Services",
      learnMore: "Learn more",
      items: {
        electrical: {
          title: "Electrical Works",
          description:
            "We provide complete electrical solutions for homes and industries, including installations, maintenance, and upgrades. Our services cover smart automation, lighting, EV charging stations, and industrial power systems with a focus on efficiency and safety.",
          cta: "Schedule a Consultation",
          civili: {
            title: "Residential Electrical Systems",
            designAndInstall:
              "Design and installation of electrical systems for homes.",
            electricalPanels:
              "Assembly and testing of electrical panels, including load distribution and calculation.",
            cables:
              "Laying of electrical cables and wires according to usage objectives.",
            lightPoints:
              "Installation of outlets, switches, and light points, both traditional and smart (Internet-connected).",
            lightingSystems: "Customized indoor and outdoor lighting systems.",
            automationDoors:
              "Automation of gates, doors, windows, shutters, and motorized blinds.",
            electricStations:
              "Installation of charging stations for electric vehicles.",
            automationPanel:
              "Development of home automation systems for controlling lights, shutters, and climate systems.",
            renewableEnergySystems:
              "Design and installation of photovoltaic solar panels and other renewable energy systems.",
            certification:
              "Certification of compliance for electrical systems.",
          },
          industrial: {
            title: "Industrial Electrical Systems",
            designAndInstall:
              "Design and installation of electrical systems for industrial facilities.",
            lightPoints:
              "Implementation of high-efficiency industrial lighting systems.",
            industrialSystems:
              "Laying power and control cables for machinery and industrial systems.",
            electricalSafety:
              "Electrical safety solutions and fault prevention.",
          },
        },
        telecommunications: {
          title: "Telecommunications",
          description:
            "We provide comprehensive telecommunications solutions, including structured cabling, fiber optic networks, and wireless configurations to ensure seamless connectivity for homes and businesses.",
          cta: "Schedule a Consultation",
          designAndInstall:
            "Design and installation of structured cabling for Internet networks in homes, offices, and businesses.",
          wirelessNetworks: "Configuration of wired and wireless networks.",
          fiberOptic: "Development of fiber optic networks (FTTH, FTTO, FTTB).",
          starLink:
            "Installation of Internet connections using Starlink antennas.",
        },
        securitySystems: {
          title: "Security Systems",
          description:
            "We offer advanced security systems, including intrusion alarms, surveillance cameras, fire detection, and remote monitoring solutions for complete protection and peace of mind.",
          cta: "Schedule a Consultation",
          alarmSystems:
            "Installation of anti-intrusion alarm systems, including wireless options.",
          surveillance:
            "Mounting and configuration of surveillance cameras (CCTV and IP).",
          fireDetectionSystems: "Advanced smoke and fire detection systems.",
          remoteMonitoring:
            "Integration of security systems with smartphones for remote monitoring.",
        },
        special: {
          title: "Special Services",
          description:
            "Our Special Services include renewable energy, smart home automation, advanced diagnostics, EV charging, and creative lighting. We provide innovative and efficient solutions to enhance sustainability, security, and comfort.",
          renewableEnergySystems: {
            title: "Renewable Energy Systems",
            description:
              "We specialize in designing and installing renewable energy systems, including solar, wind, and biomass solutions, to enhance efficiency and promote sustainability.",
            designAndInstall:
              "Design and installation of photovoltaic, wind, and biomass systems.",
            analysisAndEfficiency:
              "Energy savings analysis and efficiency evaluations.",
          },
          smartHome: {
            title: "Home Automation and Smart Home",
            description:
              "We provide innovative home automation solutions, integrating smart systems for lighting, climate control, security, and IoT devices for a connected and convenient living experience.",
            systemsForControlling:
              "Installation of smart systems for controlling lights, shutters, climate, and security.",
            voiceAssistants:
              "Configuration of voice assistants (e.g., Alexa, Google Home) and IoT devices.",
          },
          maintenanceAndDiagnostics: {
            title: "Advanced Maintenance and Diagnostics",
            description:
              "We offer advanced maintenance and diagnostics services, including thermographic inspections and predictive analysis, to ensure optimal performance and prevent system failures.",
            thermographicInspection:
              "Thermographic inspections to identify thermal leaks and electrical issues.",
            predictiveAnalysis:
              "Predictive diagnostics to prevent failures and improve system efficiency.",
          },
          chargingInfrastructure: {
            title: "EV Charging Infrastructure",
            description:
              "We provide tailored EV charging infrastructure solutions, including the installation of home and commercial charging stations and consulting for efficient and scalable networks.",
            chargingStations:
              "Installation of home and commercial EV charging stations (Tesla and universal systems).",
            consulting:
              "Consulting for designing efficient and customized charging networks.",
          },
          lighting: {
            title: "Creative and LED Lighting",
            description:
              "We design and install customized creative and LED lighting solutions, combining energy efficiency with aesthetic appeal for homes, businesses, and special events.",
            design:
              "Design of custom lighting systems for interiors and exteriors.",
            energySavings:
              "LED solutions for energy savings and special decorations (gardens, events, venues).",
          },
        },
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
      name: "Full Name / Company Name",
      email: "Email",
      phone: "Phone",
      location: "Location (City/Area)",
      serviceType: "Type of Service Required",
      propertyType: "Property Type",
      existingSystem: "Do you already have an existing system?",
      certification: "Do you need certification?",
      material: "Do you already have materials in mind?",
      contactPreference: "Preferred Contact Method",
      details: "Additional Information",
      message: "Message",
      button: "Send Message",
      successMessage: "Message sent successfully!",
      services: {
        installation:
          "Electrical system installation (new construction/renovation)",
        maintenance: "Maintenance/Repair of existing system",
        lighting: "Installation of indoor/outdoor lighting",
        automation: "Automation for shutters/gates/garage",
        photovoltaic: "Photovoltaic system installation",
        chargingStation: "Installation of electric vehicle charging station",
        smartHome:
          "Home automation systems (lights, shutters, thermostats, etc.)",
        other: "Other (specify)",
      },

      propertyTypes: {
        apartment: "Apartment (specify floor)",
        house: "House/Villa",
        condo: "Condominium",
        office: "Office",
        shop: "Shop",
        warehouse: "Warehouse/Industrial Building",
        other: "Other (specify)",
      },

      existingSystems: {
        yesUpgrade: "Yes, and I want to upgrade/improve it",
        noNew: "No, I need a new system",
      },

      certifications: {
        electrical: "Yes, Electrical System Certification (DiCo)",
        photovoltaic: "Yes, Photovoltaic System Certification",
        charging: "Yes, Charging Station Certification",
        none: "No, certification is not needed",
      },

      materials: {
        own: "Yes, I have already chosen the materials",
        advice: "No, I prefer professional advice",
      },

      contactPreferences: {
        call: "Phone Call",
        whatsapp: "WhatsApp",
        email: "Email",
        morning: "Morning",
        afternoon: "Afternoon",
        noPreference: "No Preference",
      },
    },
  },
  it: {
    nav: {
      home: "Home",
      services: "Servizi",
      portfolio: "Portfolio",
      contacts: "Contatti",
      servicesItems: {
        electrical: "Lavori in Elettricità",
        telecommunications: "Telecomunicazioni",
        securitySystems: "Sistemi di Sicurezza",
        specialServices: "Servizi Speciali",
      },
    },
    materials: {
      title: "Materiali utilizzati",
    },
    hero: {
      title: "Servizi Elettrici Professionali e Affidabili",
      subtitle:
        "Offriamo soluzioni elettriche esperte per proprietà residenziali, commerciali e industriali. Ci impegniamo a garantire sicurezza, efficienza e innovazione in ogni progetto.",
      description:
        "Il nostro team di tecnici qualificati lavora con precisione e attenzione ai dettagli per soddisfare le esigenze specifiche dei nostri clienti. Dalle installazioni alle riparazioni, ci prendiamo cura di ogni aspetto elettrico con un approccio professionale.",
      button: "Scopri di più sui nostri servizi",
    },
    about: {
      title: "Chi Siamo",
      missionTitle: "La Nostra Missione",
      values: {
        excellence: {
          title: "Eccellenza",
          description:
            "Ci impegniamo a fornire una qualità superiore in ogni progetto che intraprendiamo. La nostra dedizione all'eccellenza si riflette nell'attenzione ai dettagli, nell'utilizzo di materiali di prima scelta e nell'adozione delle tecnologie più innovative. Ogni lavoro è svolto con precisione, garantendo risultati che superano le aspettative dei nostri clienti.",
        },
        safety: {
          title: "Sicurezza",
          description:
            "La sicurezza è la nostra priorità assoluta in ogni progetto. Rispettiamo rigorosamente i più alti standard di sicurezza, adottando protocolli avanzati e materiali certificati per proteggere le persone e le proprietà. Ogni lavoro è eseguito con attenzione per garantire un ambiente sicuro e affidabile.",
        },
        reliability: {
          title: "Affidabilità",
          description:
            "La nostra missione è garantire un servizio costante e su cui poter contare in ogni occasione. Grazie alla nostra esperienza e professionalità, assicuriamo risultati puntuali e di alta qualità, costruendo un rapporto di fiducia con i nostri clienti. Ogni progetto è gestito con precisione e rispetto degli impegni presi.",
        },
        innovation: {
          title: "Innovazione",
          description:
            "Siamo costantemente impegnati ad adottare soluzioni elettriche moderne e all'avanguardia. Utilizziamo le tecnologie più innovative per migliorare l'efficienza, la sostenibilità e la sicurezza dei nostri progetti. La nostra capacità di integrare nuove idee ci consente di offrire soluzioni su misura che soddisfano le esigenze in continua evoluzione dei nostri clienti.",
        },
        professionalism: {
          title: "Professionalità",
          description:
            "Siamo un team di professionisti altamente qualificati, dedicati a fornire soluzioni di alta qualità in ogni progetto che affrontiamo. La nostra attenzione ai dettagli e il nostro impegno verso l'eccellenza ci distinguono nel nostro settore.",
        },
      },
    },
    competencies: {
      title: "Competenze Chiave",
      items: {
        installation: {
          title: "Installazione Elettrica",
          description:
            "Offriamo servizi professionali di installazione elettrica per proprietà residenziali e commerciali. Il nostro team di esperti si occupa di tutto, dalle nuove installazioni ai sistemi complessi, garantendo sicurezza, efficienza e conformità agli standard più elevati. Utilizziamo materiali di alta qualità e tecnologie avanzate per assicurare un risultato duraturo e affidabile.",
        },
        maintenance: {
          title: "Manutenzione e Riparazioni",
          description:
            "Offriamo servizi completi di manutenzione regolare e riparazioni di emergenza per sistemi elettrici residenziali e commerciali. Il nostro team è disponibile per interventi tempestivi e accurati, assicurando che ogni impianto rimanga sicuro, efficiente e conforme agli standard. Con un approccio proattivo, identifichiamo e risolviamo i problemi prima che diventino critici.",
        },
        commercial: {
          title: "Servizi Commerciali",
          description:
            "Offriamo soluzioni specializzate per aziende e strutture industriali, progettate per soddisfare le esigenze uniche di ogni cliente. Dall'installazione di sistemi complessi alla manutenzione preventiva, garantiamo efficienza operativa, sicurezza e conformità agli standard normativi. Il nostro team esperto lavora con precisione per fornire risultati di alta qualità che supportano la crescita del tuo business.",
        },
        residential: {
          title: "Servizi Residenziali",
          description:
            "Offriamo soluzioni elettriche complete per case e appartamenti, garantendo sicurezza, efficienza e comfort. Il nostro team di professionisti si occupa di installazioni, manutenzioni e riparazioni, utilizzando tecnologie moderne e materiali di alta qualità. Che si tratti di rinnovare il sistema elettrico o installare nuovi impianti, ci assicuriamo che ogni dettaglio sia curato per soddisfare le esigenze della tua abitazione.",
        },
        power: {
          title: "Sistemi di Alimentazione",
          description:
            "Offriamo servizi professionali per l'installazione e la manutenzione di sistemi di distribuzione dell'energia. Il nostro team esperto progetta e implementa soluzioni affidabili e sicure per garantire una distribuzione efficiente e costante dell'elettricità. Ci occupiamo anche di ottimizzare i sistemi esistenti per massimizzare la loro efficienza e conformità agli standard normativi.",
        },
        lighting: {
          title: "Soluzioni di Illuminazione",
          description:
            "Offriamo installazioni di illuminazione moderna e aggiornamenti energeticamente efficienti per migliorare l'estetica e la funzionalità di ogni spazio. Che si tratti di illuminazione residenziale, commerciale o industriale, utilizziamo tecnologie avanzate per creare soluzioni personalizzate che combinano efficienza energetica, sostenibilità e design innovativo.",
        },
      },
    },
    services: {
      title: "I Nostri Servizi",
      learnMore: "Scopri di più",
      items: {
        electrical: {
          title: "Lavori in Elettricità",
          description:
            "Offriamo soluzioni elettriche complete per abitazioni e industrie, comprese installazioni, manutenzione e aggiornamenti. I nostri servizi includono automazione smart, illuminazione, colonnine di ricarica e sistemi industriali con attenzione a efficienza e sicurezza.",
          cta: "Pianifica una consulenza",
          civili: {
            title: "Impianti Elettrici Civili",
            designAndInstall:
              "Progettazione e installazione di impianti elettrici per abitazioni.",
            electricalPanels:
              "Realizzazione e collaudo di quadri elettrici, inclusa la suddivisione e il calcolo del carico.",
            cables:
              "Posa di cavi e fili elettrici in base agli obiettivi d’uso.",
            lightPoints:
              "Installazione di prese, interruttori e punti luce, sia tradizionali che smart (connessi a Internet).",
            lightingSystems:
              "Sistemi di illuminazione interna ed esterna personalizzati.",
            automationDoors:
              "Automazione di cancelli, porte, finestre, tapparelle e serrande motorizzate.",
            electricStations:
              "Installazione di colonnine di ricarica per veicoli elettrici.",
            automationPanel:
              "Realizzazione di sistemi di domotica per il controllo di luci, tapparelle e climatizzazione.",
            renewableEnergySystems:
              "Progettazione e installazione di pannelli solari fotovoltaici e altri sistemi di energia rinnovabile.",
            certification:
              "Certificazione di conformità degli impianti elettrici.",
          },
          industrial: {
            title: "Impianti Elettrici Industriali",
            designAndInstall:
              "Progettazione e installazione di impianti elettrici per fabbriche e stabilimenti industriali.",
            lightPoints:
              "Realizzazione di sistemi di illuminazione industriale ad alta efficienza.",
            industrialSystems:
              "Posa di cavi di potenza e controllo per macchinari e sistemi industriali.",
            electricalSafety:
              "Soluzioni per la sicurezza elettrica e la prevenzione di guasti.",
          },
        },
        telecommunications: {
          title: "Telecomunicazione",
          description:
            "Offriamo soluzioni complete di telecomunicazione, inclusi cablaggi strutturati, reti in fibra ottica e configurazioni wireless, per garantire una connettività senza interruzioni per abitazioni e aziende.",
          cta: "Pianifica una consulenza",
          designAndInstall:
            "Progettazione e installazione di cablaggi strutturati per reti Internet in case, uffici e aziende.",
          wirelessNetworks: "Configurazione di reti cablate e wireless.",
          fiberOptic:
            "Realizzazione di reti in fibra ottica (FTTH, FTTO, FTTB).",
          starLink:
            "Installazione di connessioni Internet basate su antenne Starlink..",
        },
        securitySystems: {
          title: "Sistemi di Sicurezza",
          description:
            "Offriamo sistemi di sicurezza avanzati, inclusi allarmi antintrusione, telecamere di sorveglianza, rilevamento incendi e soluzioni di monitoraggio remoto per una protezione completa e tranquillità.",
          cta: "Pianifica una consulenza",
          alarmSystems:
            "Installazione di sistemi di allarme antintrusione, anche wireless.",
          surveillance:
            "Montaggio e configurazione di telecamere di videosorveglianza (CCTV e IP).",
          fireDetectionSystems:
            "Sistemi avanzati di rilevamento fumo e incendi.",
          remoteMonitoring:
            "Integrazione dei sistemi di sicurezza con smartphone per il monitoraggio remoto.",
        },
        special: {
          title: "Servizi Speciali",
          description:
            "I nostri Servizi Speciali comprendono energia rinnovabile, domotica, diagnostica avanzata, ricarica EV e illuminazione creativa. Offriamo soluzioni innovative ed efficienti per migliorare sostenibilità, sicurezza e comfort.",
          renewableEnergySystems: {
            title: "Sistemi di Energia Rinnovabile",
            description:
              "Siamo specializzati nella progettazione e installazione di sistemi di energia rinnovabile, inclusi soluzioni solari, eoliche e a biomassa, per migliorare l'efficienza e promuovere la sostenibilità.",
            designAndInstall:
              "Progettazione e installazione di impianti fotovoltaici, eolici e a biomasse.",
            analysisAndEfficiency:
              "Analisi del risparmio energetico e dell’efficienza degli impianti.",
          },
          smartHome: {
            title: "Domotica e Smart Home",
            description:
              "Offriamo soluzioni innovative di domotica, integrando sistemi smart per l'illuminazione, il controllo del clima, la sicurezza e dispositivi IoT per un'esperienza abitativa connessa e confortevole.",
            systemsForControlling:
              "Installazione di sistemi smart per il controllo di luci, tapparelle, climatizzazione e sicurezza.",
            voiceAssistants:
              "Configurazione di assistenti vocali (es. Alexa, Google Home) e dispositivi IoT.",
          },
          maintenanceAndDiagnostics: {
            title: "Manutenzione e Diagnostica Avanzata",
            description:
              "Offriamo servizi avanzati di manutenzione e diagnostica, inclusi ispezioni termografiche e analisi predittive, per garantire prestazioni ottimali e prevenire guasti ai sistemi.",
            thermographicInspection:
              "Ispezioni termografiche per identificare dispersioni termiche e problemi elettrici.",
            predictiveAnalysis:
              "Diagnostica predittiva per prevenire guasti e migliorare l’efficienza degli impianti.",
          },
          chargingInfrastructure: {
            title: "Infrastrutture di Ricarica per Veicoli Elettrici (EV)",
            description:
              "Forniamo soluzioni personalizzate per infrastrutture di ricarica per veicoli elettrici, inclusa l'installazione di stazioni di ricarica domestiche e commerciali e consulenze per reti efficienti e scalabili.",
            chargingStations:
              "Installazione di colonnine di ricarica domestiche e aziendali (Tesla e sistemi universali).",
            consulting:
              "Consulenza per progettare reti di ricarica efficienti e personalizzate.",
          },
          lighting: {
            title: "Illuminazione Creativa e LED",
            description:
              "Progettiamo e installiamo soluzioni personalizzate di illuminazione creativa e a LED, combinando efficienza energetica e estetica per abitazioni, aziende ed eventi speciali.",
            design:
              "Progettazione di sistemi di illuminazione personalizzati per interni ed esterni.",
            energySavings:
              "Soluzioni a LED per risparmio energetico e decorazioni speciali (giardini, eventi, locali).",
          },
        },
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
      phone: "Telefono",
      location: "Comune di intervento",
      serviceType: "Tipo di Servizio Richiesto",
      propertyType: "Tipologia di Immobile",
      existingSystem: "Hai già un impianto esistente?",
      certification: "Hai bisogno di una certificazione?",
      material: "Hai già idea dei materiali da usare?",
      contactPreference: "Preferenze per il Contatto",
      details: "Altre informazioni",
      message: "Messaggio",
      button: "Invia Messaggio",
      successMessage: "Messaggio inviato con successo!",
      services: {
        installation:
          "Installazione impianto elettrico (nuova costruzione/ristrutturazione)",
        maintenance: "Manutenzione/Riparazione impianto esistente",
        lighting: "Installazione illuminazione interna/esterna",
        automation: "Automazione tapparelle/cancelli/garage",
        photovoltaic: "Installazione sistema fotovoltaico",
        chargingStation:
          "Installazione colonnina di ricarica per auto elettrica",
        smartHome:
          "Impianti domotici (controllo luci, tapparelle, termostati, ecc.)",
        other: "Altro (specifica)",
      },

      propertyTypes: {
        apartment: "Appartamento (indica il piano)",
        house: "Villetta / Casa indipendente",
        condo: "Condominio",
        office: "Ufficio",
        shop: "Negozio",
        warehouse: "Capannone / Magazzino",
        other: "Altro (specifica)",
      },

      existingSystems: {
        yesUpgrade: "Sì, e vorrei aggiornarlo/migliorarlo",
        noNew: "No, serve un impianto nuovo",
      },

      certifications: {
        electrical:
          "Sì, Dichiarazione di Conformità (DiCo) per impianto elettrico",
        photovoltaic: "Sì, certificazione per impianto fotovoltaico",
        charging: "Sì, certificazione per colonnina di ricarica",
        none: "No, non serve",
      },

      materials: {
        own: "Sì, ho già scelto io i materiali",
        advice: "No, preferisco un consiglio",
      },

      contactPreferences: {
        call: "Chiamata telefonica",
        whatsapp: "WhatsApp",
        email: "Email",
        morning: "Mattina",
        afternoon: "Pomeriggio",
        noPreference: "Indifferente",
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

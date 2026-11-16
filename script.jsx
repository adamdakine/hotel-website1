/**
 * ============================================================================
 * HÔTEL LA MAMOUNIA MARRAKECH - REACT JSX APPLICATION SOURCE
 * File: script.jsx
 * ============================================================================
 */

const { useState, useEffect, useRef, useMemo } = React;

    // --- LOCAL GENERATED & CURATED HIGH-RESOLUTION HOTEL LA MAMOUNIA ASSETS ---
    const ASSETS = {
      hero: "images/mamounia_hero_pool.jpg", // Iconic Outdoor Pool & Gardens
      gardens: "images/mamounia_gardens.jpg", // 8-hectare historic olive groves & orange trees
      architecture: "images/mamounia_architecture.jpg", // Moorish Colonnades & Arches
      churchillSuite: "images/mamounia_churchill_suite.jpg", // Winston Churchill Historic Suite
      alMamounSuite: "images/mamounia_al_mamoun_suite.jpg", // 212 m² Suite d'Exception Al Mamoun
      majorelleSuite: "images/mamounia_majorelle_suite.jpg", // Suite Majorelle Cobalt & Zellige
      riadPrive: "images/mamounia_riad_prive.jpg", // 700 m² Le Riad Privé dans les jardins
      spaIndoorPool: "images/mamounia_spa_pool.jpg", // Mythical 2,500 m² Spa Indoor Heated Pool
      spaRitual: "images/mamounia_spa_ritual.jpg", // Royal Moroccan Black Soap & Argan Oils
      diningMarocain: "images/mamounia_le_marocain.jpg", // Restaurant Le Marocain au cœur des jardins
      diningPierreHerme: "images/mamounia_pierre_herme.jpg", // Salon de Thé & Pâtisserie Pierre Hermé
      pavillonPiscine: "images/mamounia_pavillon_piscine.jpg", // Le Pavillon de la Piscine
      churchillBar: "images/mamounia_churchill_bar.jpg", // Le Mythique Bar Churchill
      marrakechMedina: "images/mamounia_medina.jpg" // Marrakech Medina & Historic Ramparts
    };

    // --- ACCURATE LA MAMOUNIA TRANSLATIONS (FR, EN, AR) ---
    const TRANSLATIONS = {
      fr: {
        dir: "ltr",
        brandName: "La Mamounia",
        brandSubtitle: "Marrakech • 1923",
        topBanner: "Palace Mythique du Royaume du Maroc • Plus d'un Siècle de Légende",
        preloader: {
          loading: "Éveil du Palace...",
          centenary: "1923 — 2026 • Le Plus Bel Endroit au Monde"
        },
        nav: {
          history: "Histoire",
          suites: "Suites",
          gastronomy: "Tables",
          spa: "Spa",
          gardens: "Jardins",
          experiences: "Séjours",
          gallery: "Galerie",
          bookBtn: "Réserver",
          
        },
        hero: {
          tagline: "Élu Meilleur Hôtel au Monde • Centenaire 1923",
          titleLine1: "L'Art de Vivre Impérial",
          titleLine2: "à La Mamounia",
          subtitle: "Un joyau mythique niché dans un parc d'oliviers et d'orangers de 8 hectares offert au XVIIIe siècle par le Sultan au Prince Al Mamoun. Lieu de prédilection de Winston Churchill et des grands de ce monde.",
          exploreSuites: "Découvrir les Suites",
          
          reserveNow: "Réserver un Séjour",
          scrollGuide: "Découvrir l'univers"
        },
        stats: [
          { number: "1923", label: "Fondation", detail: "Prost & Marchisio" },
          { number: "8 ha", label: "Jardins", detail: "1 200 oliviers séculaires" },
          { number: "2 500 m²", label: "Spa Majestueux", detail: "Hammam royal & bassins" },
          { number: "N°1", label: "Palace de Légende", detail: "Condé Nast Traveler" }
        ],
        historySection: {
          tag: "Héritage & Mémoire",
          title: "Des Jardins d'un Prince au Palace des Rois",
          p1: "L'histoire de La Mamounia s'enracine au XVIIIe siècle lorsque le Sultan alaouite Sidi Mohammed Ben Abdellah offrit en présent de mariage à son fils, le Prince Al Mamoun, un fabuleux verger de 13 hectares baptisé « Arsat Al Maamoun ».",
          p2: "En 1923, les architectes Henri Prost et Antoine Marchisio y érigent un hôtel d'exception, conjuguant la pureté géométrique de l'Art Déco et la virtuosité des artisans maâlems marocains. Winston Churchill en fera son havre d'hiver.",
          p3: "Récemment sublimée par le talent de Jouin Manku et Jacques Garcia, La Mamounia incarne l'élégance intemporelle où chaque recoin exhale les parfums de jasmin, de fleur d'oranger et de cèdre noble.",
          churchillQuote: "« C'est le plus bel endroit sur Terre. Les montagnes de l'Atlas se dressent comme des remparts de nacre sous le soleil d'or. »",
          churchillAuthor: "Sir Winston Churchill, Séjourna régulièrement à La Mamounia"
        },
        suitesSection: {
          tag: "Demeures Singulières",
          title: "Suites de Légende & Riads Privés",
          subtitle: "Chaque suite célèbre les personnalités et les arts qui ont forgé la légende de La Mamounia.",
          perNight: "par nuit",
          bookThis: "Réserver",
          viewPhotos: "Aperçu Photos",
          compareAll: "Comparer les 4 Demeures",
          amenitiesTitle: "Prestations d'Excellence"
        },
        roomsData: [
          {
            id: "suite-churchill",
            title: "Suite Winston Churchill",
            tagline: "Le Sanctuaire du Grand Homme d'État",
            area: "107 m²",
            view: "Jardins centenaires & Atlas",
            priceEur: 1850,
            badge: "Légende Historique",
            images: [ASSETS.churchillSuite, ASSETS.churchillBar, ASSETS.gardens],
            description: "La suite historique où le Premier Ministre britannique installait son chevalet pour peindre Marrakech. Décoration raffinée mêlant cuir patiné, fauteuils Chesterfield, boiseries d'acajou, bureau d'époque et terrasse panoramique privée sur les remparts.",
            amenities: ["Vue Panoramique Jardins", "Bureau Privé Winston Churchill", "Salon de Réception en Cuir", "Salle de Bain en Marbre", "Majordome Dédié 24/7", "Accueil Champagne & Fruits"]
          },
          {
            id: "suite-al-mamoun",
            title: "Suite d'Exception Al Mamoun",
            tagline: "Le Joyau Suprême du Palace",
            area: "212 m²",
            view: "Vue plongeante sur le grand bassin",
            priceEur: 2900,
            badge: "Suite Signature",
            images: [ASSETS.alMamounSuite, ASSETS.architecture, ASSETS.hero],
            description: "Nommée en hommage au Prince fondateur. Une démesure d'élégance orientale et baroque avec plafonds monumentaux en bois de cèdre ciselé, vaste salon d'apparat, salle à manger privée et immense terrasse face à la chaîne de l'Atlas.",
            amenities: ["Terrasse Royale Privée", "Plafonds en Cèdre Ciselé", "Grand Salon d'Apparat", "Double Baignoire en Marbre", "Service Majordome Personnalisé", "Transferts VIP Limousine"]
          },
          {
            id: "suite-majorelle",
            title: "Suite Signature Majorelle",
            tagline: "Harmonie Cobalt & Art Déco",
            area: "90 m²",
            view: "Vue sur la Palmeraie & Piscine",
            priceEur: 1400,
            badge: "Art & Raffinement",
            images: [ASSETS.majorelleSuite, ASSETS.architecture, ASSETS.gardens],
            description: "Hommage vibrant au peintre Jacques Majorelle qui passa de longues heures à contempler les contrastes de Marrakech. Sublimée par des nuances de bleu cobalt profond, des carreaux de zellige émeraude et un balcon privé sur la piscine.",
            amenities: ["Balcon Coursive Privé", "Zelliges d'Artistes de Fès", "Lit King Size Baldaquin", "Dressing Spacieux", "Petit-Déjeuner Gastronomique", "Produits d'Accueil Dédiés"]
          },
          {
            id: "riad-prive",
            title: "Le Riad Privé de La Mamounia",
            tagline: "L'Exclusivité Absolue au Cœur du Parc",
            area: "700 m²",
            view: "Jardin privatif & Piscine chauffée",
            priceEur: 4800,
            badge: "Ultra-Exclusif",
            images: [ASSETS.riadPrive, ASSETS.gardens, ASSETS.spaIndoorPool],
            description: "Demeure royale marocaine indépendante dissimulée au cœur des 8 hectares du parc. Composé de 3 suites indépendantes, d'un patio privé avec fontaine, d'une piscine extérieure privée chauffée et d'une équipe de majordomes et cuisiniers dédiés.",
            amenities: ["Piscine Chauffée Privée", "3 Grandes Suites Royales", "Patio Privatif avec Fontaine", "Chef Cuisinier & Majordome Privés", "Accès VIP Permanent au Spa", "Sécurité & Discrétion Absolues"]
          }
        ],
        experiencesSection: {
          tag: "Sur-Mesure",
          title: "Composez Votre Séjour Impérial",
          subtitle: "Trois itinéraires exclusifs orchestrés par notre Chef Concierge Clefs d'Or.",
          items: [
            {
              id: "churchill",
              title: "L'Échappée Churchill & Héritage",
              tag: "Histoire & Peinture",
              desc: "Immersion sur les traces de l'illustre Premier Ministre britannique. Peinture au lever du jour sur la terrasse, dégustation au Bar Churchill et dîner impérial au restaurant Le Marocain."
            },
            {
              id: "gourmet",
              title: "La Symphonie Étoilée",
              tag: "Haute Gastronomie",
              desc: "Un périple gustatif rare : atelier pâtisserie avec les créations Pierre Hermé, cueillette au potager bio du palace et dîner signature signé Simone Zanoni & Jean-Georges."
            },
            {
              id: "wellness",
              title: "Renaissance & Sérénité Royale",
              tag: "Spa & Hammam 2 500 m²",
              desc: "Bain de vapeur à l'eucalyptus, gommage traditionnel au savon noir, massage drainant à la fleur d'oranger et sieste au bord du grand bassin sous les oliviers séculaires."
            }
          ]
        },
        gastronomy: {
          tag: "Haute Gastronomie",
          title: "Les Tables d'Exception de La Mamounia",
          subtitle: "Une scène gastronomique orchestrée par les plus grands maîtres internationaux et marocains.",
          restaurants: [
            {
              name: "Le Marocain",
              chef: "Chef Exécutif Rachid Agouray",
              desc: "Niché au cœur des jardins dans un riad illuminé de lanternes traditionnelles. Pastilla au pigeonneau, épaule d'agneau confite aux fruits secs et couscous royal aux sept légumes.",
              time: "19h00 - 23h30"
            },
            {
              name: "L'Italien par Simone Zanoni",
              chef: "Chef Étoilé Simone Zanoni",
              desc: "Une trattoria chic et lumineuse sous verrière. Antipasti raffinés, pâtes fraîches faites main à la minute et poissons nobles sublimés avec les herbes du potager.",
              time: "Déjeuner & Dîner"
            },
            {
              name: "L'Asiatique par Jean-Georges",
              chef: "Chef Jean-Georges Vongerichten",
              desc: "Un voyage sensoriel reliant Bangkok à Tokyo. Dim sum délicats, canard laqué croustillant et sashimis créatifs servis dans un salon feutré aux bois sculptés.",
              time: "19h00 - 23h30"
            },
            {
              name: "Salon de Thé & Pâtisserie Pierre Hermé",
              chef: "Le Picasso de la Pâtisserie",
              desc: "Macarons exclusifs à la fleur d'oranger marocaine, croissant Ispahan aux framboises et roses, et cérémonial de thés d'exception servis sous les arcades.",
              time: "10h00 - 19h00"
            }
          ]
        },
        spaSection: {
          tag: "Culte du Bien-Être",
          title: "Le Spa Mythique de La Mamounia",
          subtitle: "Un espace impérial de 2 500 m² célèbre pour son bassin intérieur chauffé entouré de colonnes en marbre et de zelliges étincelants.",
          rituals: [
            {
              title: "Grand Rituel Hammam La Mamounia",
              duration: "120 min",
              price: "180 €",
              features: ["Bain de vapeur à l'eucalyptus frais", "Savon noir artisanal & gommage kessa", "Enveloppement purifiant au rhassoul", "Massage complet à l'huile d'argan bio"]
            },
            {
              title: "Éveil Céleste aux Roses de l'Ourika",
              duration: "90 min",
              price: "150 €",
              features: ["Bain d'immersion aux pétales de rose", "Gommage doux au sucre et amandes douces", "Massage relaxant à la fleur d'oranger", "Dégustation Pierre Hermé & thé"]
            },
            {
              title: "Soin Signature Détox & Éclat",
              duration: "60 min",
              price: "120 €",
              features: ["Nettoyage profond aux élixirs floraux", "Drainage lymphatique aux pierres tièdes", "Masque régénérant à la figue de barbarie"]
            }
          ]
        },
        gardensSection: {
          tag: "Parc Historique",
          title: "Les Jardins Légendaires (8 Hectares)",
          desc: "Huit hectares d'une luxuriante splendeur au pied des remparts historiques de Marrakech. Plus de 1 200 oliviers séculaires dont certains ont plus de 700 ans, 5 000 rosiers parfumés, des allées de palmiers dattiers et le potager secret où nos chefs cueillent leurs herbes fraîches.",
          bullet1: "Promenades poétiques au chant des oiseaux et des fontaines",
          bullet2: "Bassin de la piscine bordé de marbre blanc d'Italie",
          bullet3: "Pavillon de la Piscine pour un déjeuner ensoleillé"
        },
        gallerySection: {
          tag: "Mémoire Visuelle",
          title: "L'Album Iconique du Palace",
          subtitle: "Découvrez les espaces qui ont accueilli les personnalités les plus illustres.",
          filters: {
            all: "Tout",
            gardens: "Jardins & Piscine",
            suites: "Suites & Riads",
            spa: "Le Spa",
            dining: "Gastronomie"
          }
        },
        reviewsSection: {
          tag: "Livre d'Or",
          title: "Paroles d'Hôtes Illustres",
          items: [
            {
              name: "Sir Winston Churchill",
              role: "Premier Ministre & Peintre",
              quote: "« C'est le plus bel endroit sur Terre. Peindre les jardins de La Mamounia sous la lumière dorée de Marrakech fut l'une des plus grandes joies de ma vie. »",
              stay: "Hôte d'honneur régulier"
            },
            {
              name: "Alfred Hitchcock",
              role: "Cinéaste Légendaire",
              quote: "« L'atmosphère de La Mamounia est absolument inimitable. C'est ici même que m'est venue l'inspiration pour tourner 'L'Homme qui en savait trop'. »",
              stay: "Tournage & Séjour au Palace"
            },
            {
              name: "Condé Nast Traveler",
              role: "Distinction Mondiale",
              quote: "« Plus qu'un hôtel, La Mamounia est une légende vivante. L'excellence du service et la grandeur des jardins en font un sommet absolu. »",
              stay: "Élu Meilleur Hôtel du Monde"
            }
          ]
        },
        booking: {
          tag: "Réservation Directe",
          title: "Votre Séjour à La Mamounia",
          subtitle: "Bénéficiez du meilleur tarif officiel garanti, des transferts VIP offerts et d'un accueil princier personnalisé.",
          checkIn: "Arrivée",
          checkOut: "Départ",
          roomSelect: "Votre Hébergement",
          adults: "Adultes",
          children: "Enfants",
          extrasTitle: "Expériences Signature",
          extraTransfer: "Transfert VIP Aéroport Marrakech Ménara en Berline Maybach (A/R)",
          extraSpa: "Rituel Signature Hammam Duo & Massage aux Huiles Précieuses (2 pers.)",
          extraDinner: "Dîner de Gala aux Chandelles au restaurant Le Marocain (2 pers.)",
          guestName: "Nom et Prénom",
          guestPhone: "Numéro de Téléphone (WhatsApp)",
          guestEmail: "Adresse E-mail",
          guestRequests: "Souhaits personnels...",
          summaryTitle: "Récapitulatif de Votre Séjour",
          nights: "Nuit(s)",
          roomPrice: "Hébergement de prestige",
          breakfastIncluded: "Buffet au Pavillon de la Piscine",
          free: "Inclus & Offert",
          touristTax: "Taxe de séjour & redevance touristique",
          extrasTotal: "Expériences Signature",
          totalEstimated: "Montant Estimé",
          liveUpdateNote: "Mise à jour en direct",
          confirmOnlineBtn: "Confirmer la Réservation",
          confirmWaBtn: "Réserver via WhatsApp",
          guarantees: [
            "Garantie du Meilleur Tarif Officiel La Mamounia",
            "Accueil personnalisé avec lait d'amande & dattes mejhoul",
            "Conciergerie 'Clefs d'Or' disponible 24h/24"
          ]
        },
        modalSuccess: {
          title: "Votre Réservation à La Mamounia est Confirmée !",
          subtitle: "Le bureau de la Direction et notre Concierge Clefs d'Or finalisent les préparatifs de votre accueil princier.",
          bookingRef: "Dossier Officiel :",
          detailsTitle: "Détails du séjour",
          nameLabel: "Hôte d'Honneur :",
          datesLabel: "Dates :",
          roomLabel: "Suite / Riad :",
          totalLabel: "Montant total :",
          note: "Un carnet de voyage officiel avec vos accès VIP vous a été transmis. Notre majordome vous contactera sous peu par WhatsApp.",
          closeBtn: "Fermer",
          printBtn: "Imprimer"
        },
        
        faq: {
          tag: "Conciergerie",
          title: "Questions Fréquentes",
          items: [
            {
              q: "Où se situe exactement La Mamounia à Marrakech ?",
              a: "Avenue Bab Jdid, le long des remparts du XIIe siècle, à 5 minutes à pied de Jemaa El-Fna et de la Koutoubia, au cœur d'un parc privé de 8 hectares."
            },
            {
              q: "Le petit-déjeuner est-il inclus dans la réservation ?",
              a: "Oui, un somptueux petit-déjeuner buffet international et marocain au Pavillon de la Piscine est gracieusement inclus chaque matin."
            },
            {
              q: "Comment se déroule l'accueil à l'aéroport de Marrakech Ménara ?",
              a: "Un chauffeur privé vous accueille dès la sortie de l'avion avec service VIP Fast-Track aux formalités douanières, puis vous conduit au palace."
            },
            {
              q: "Les restaurants sont-ils ouverts aux clients extérieurs ?",
              a: "Nos restaurants étoilés ainsi que le Salon de Thé Pierre Hermé accueillent les résidents et visiteurs sur réservation préalable."
            },
            {
              q: "Y a-t-il un code vestimentaire (dress code) à La Mamounia ?",
              a: "Un style élégant est requis au sein du palace, particulièrement en soirée dans les bars et restaurants gastronomiques."
            }
          ]
        },
        footer: {
          aboutTitle: "La Mamounia Marrakech",
          aboutText: "Symbole de l'art de vivre et de l'hospitalité du Royaume du Maroc depuis 1923. Membre des The Leading Hotels of the World.",
          address: "Avenue Bab Jdid, 40040 Marrakech, Maroc",
          phone: "+212 5 24 38 86 00",
          whatsapp: "+212 6 00 12 34 56",
          email: "informations@mamounia.com",
          quickLinks: "Accès Rapide",
          newsletterTitle: "La Lettre de La Mamounia",
          newsletterText: "Inscrivez-vous pour recevoir les correspondances privées et invitations aux événements du palace.",
          newsletterPlaceholder: "Votre adresse e-mail...",
          subscribeBtn: "S'inscrire",
          subscribeSuccess: "Merci. Vous faites désormais partie du cercle privilégié de La Mamounia.",
          rights: "© 1923 - 2026 Hôtel La Mamounia Marrakech. Tous droits réservés."
        }
      },

      en: {
        dir: "ltr",
        brandName: "La Mamounia",
        brandSubtitle: "Marrakech • 1923",
        topBanner: "Legendary Moroccan Palace Hotel • Over a Century of Timeless Royalty",
        preloader: {
          loading: "Opening the Palace...",
          centenary: "1923 — 2026 • The Loveliest Spot in the World"
        },
        nav: {
          history: "History",
          suites: "Suites",
          gastronomy: "Dining",
          spa: "Spa",
          gardens: "Gardens",
          experiences: "Stays",
          gallery: "Gallery",
          bookBtn: "Reserve",
          
        },
        hero: {
          tagline: "Voted Best Hotel in the World • Centenary 1923",
          titleLine1: "Imperial Art of Living",
          titleLine2: "at La Mamounia",
          subtitle: "A legendary jewel nestled within 8 hectares of century-old orange and olive groves gifted in the 18th century by the Sultan to Prince Al Mamoun. Beloved haven of Sir Winston Churchill and world icons.",
          exploreSuites: "Explore Suites",
          
          reserveNow: "Book Your Stay",
          scrollGuide: "Scroll to explore"
        },
        stats: [
          { number: "1923", label: "Founded", detail: "Prost & Marchisio" },
          { number: "8 ha", label: "Gardens", detail: "1,200 olive trees" },
          { number: "2,500 m²", label: "Palatial Spa", detail: "Royal hammams & pools" },
          { number: "#1", label: "World Legend", detail: "Condé Nast Traveler" }
        ],
        historySection: {
          tag: "Heritage & Soul",
          title: "From a Prince’s Orchard to the Palace of Kings",
          p1: "The story of La Mamounia began in the 18th century when Sultan Sidi Mohammed Ben Abdellah presented his son, Prince Al Mamoun, with a magnificent 13-hectare orchard known as “Arsat Al Maamoun” as a wedding gift.",
          p2: "In 1923, visionary architects Henri Prost and Antoine Marchisio erected a palace blending Art Deco lines with exquisite Moroccan zellige. Sir Winston Churchill adopted it as his winter sanctuary, calling it “the loveliest spot in the whole world.”",
          p3: "Recently reimagined by Jouin Manku and Jacques Garcia, La Mamounia stands as an enduring emblem of luxury where jasmine blossoms and Atlas cedarwood scents welcome discerning travelers.",
          churchillQuote: "“It is the loveliest spot in the whole world. The Atlas Mountains rise like towers of mother-of-pearl beneath the golden sun.”",
          churchillAuthor: "Sir Winston Churchill, Frequent resident of La Mamounia"
        },
        suitesSection: {
          tag: "Private Sanctuaries",
          title: "Legendary Suites & Private Riads",
          subtitle: "Each residence commemorates the distinguished personalities and cultural arts of La Mamounia.",
          perNight: "per night",
          bookThis: "Book Suite",
          viewPhotos: "View Photos",
          compareAll: "Compare 4 Residences",
          amenitiesTitle: "Royal Amenities"
        },
        roomsData: [
          {
            id: "suite-churchill",
            title: "Winston Churchill Suite",
            tagline: "The Statesman’s Creative Haven",
            area: "107 sqm",
            view: "Historic gardens & Atlas Range",
            priceEur: 1850,
            badge: "Historic Legend",
            images: [ASSETS.churchillSuite, ASSETS.churchillBar, ASSETS.gardens],
            description: "The authentic suite where the British Prime Minister set up his easel to paint Marrakech landscapes. Decorated in British-Moroccan refinement with original mahogany woodwork, Chesterfield leather seating, antique desk, and expansive private terrace.",
            amenities: ["Panoramic Garden Terrace", "Churchill’s Executive Desk", "Chesterfield Salon", "White Marble En-Suite Bath", "24/7 Dedicated Butler", "Champagne & Fruit Welcome"]
          },
          {
            id: "suite-al-mamoun",
            title: "Al Mamoun Exceptional Suite",
            tagline: "The Crown Jewel of the Palace",
            area: "212 sqm",
            view: "Overlooking the legendary grand pool",
            priceEur: 2900,
            badge: "Signature Suite",
            images: [ASSETS.alMamounSuite, ASSETS.architecture, ASSETS.hero],
            description: "Named in tribute to Prince Al Mamoun. A masterpiece of orientalist baroque splendor featuring monumental carved cedar ceilings, stately formal reception salon, private dining room, and an expansive terrace facing the snow-capped Atlas.",
            amenities: ["Royal Private Terrace", "Hand-Carved Cedar Ceilings", "Grand Reception Salon", "Twin Marble Jacuzzi Baths", "Dedicated Butler Service", "Complimentary Limousine Transfers"]
          },
          {
            id: "suite-majorelle",
            title: "Majorelle Signature Suite",
            tagline: "Cobalt Elegance & Art Deco",
            area: "90 sqm",
            view: "Palmeraie & Swimming Pool",
            priceEur: 1400,
            badge: "Art & Refinement",
            images: [ASSETS.majorelleSuite, ASSETS.architecture, ASSETS.gardens],
            description: "An artistic tribute to orientalist painter Jacques Majorelle. Styled in rich cobalt and lapis lazuli hues with emerald zellige mosaic tilework and private balcony overlooking the palm trees.",
            amenities: ["Private Balcony", "Artisanal Fes Zellige", "King Size Four-Poster Bed", "Walk-in Dressing Room", "Gourmet Breakfast Included", "Luxury Bath Cosmetics"]
          },
          {
            id: "riad-prive",
            title: "La Mamounia Private Riad",
            tagline: "Ultimate Royal Sanctuary in the Park",
            area: "700 sqm",
            view: "Private walled garden & Heated pool",
            priceEur: 4800,
            badge: "Ultra-Exclusive",
            images: [ASSETS.riadPrive, ASSETS.gardens, ASSETS.spaIndoorPool],
            description: "A private traditional Moroccan palace discreetly nestled within the 8-hectare park. Features 3 en-suite master bedrooms, private courtyard with bubbling fountain, private heated outdoor pool, dedicated chef, and private butler staff.",
            amenities: ["Private Heated Pool", "3 Master Royal Suites", "Courtyard Patio & Fountain", "Private Chef & Butler Team", "Unlimited VIP Spa Access", "Complete Privacy & Discretion"]
          }
        ],
        experiencesSection: {
          tag: "Curated Itineraries",
          title: "Craft Your Imperial Journey",
          subtitle: "Three bespoke experiences designed by our Head Clefs d'Or Concierge.",
          items: [
            {
              id: "churchill",
              title: "The Churchill & Heritage Journey",
              tag: "History & Art",
              desc: "Follow the footsteps of the British Prime Minister: morning terrace painting session, afternoon cocktail at the Churchill Bar, and candlelit dinner at Le Marocain."
            },
            {
              id: "gourmet",
              title: "The Michelin & Pastry Odyssey",
              tag: "Haute Cuisine",
              desc: "A rare gastronomic escape: private Pierre Hermé pastry tasting, estate garden vegetable foraging with our chef, and dinners by Simone Zanoni and Jean-Georges."
            },
            {
              id: "wellness",
              title: "Royal Rebirth & Serenity",
              tag: "2,500 sqm Palatial Spa",
              desc: "Eucalyptus steam hammam, traditional black soap exfoliation, orange blossom massage, and tranquil afternoon lounging by the grand heated outdoor pool."
            }
          ]
        },
        gastronomy: {
          tag: "Fine Dining",
          title: "The Dining Experiences of La Mamounia",
          subtitle: "Fine dining created by international culinary visionaries and traditional Moroccan masters.",
          restaurants: [
            {
              name: "Le Marocain",
              chef: "Executive Chef Rachid Agouray",
              desc: "Located within a romantic lantern-lit riad inside the gardens. Savory pigeon pastilla, slow-braised lamb with prunes, and seven-vegetable royal couscous.",
              time: "7:00 PM - 11:30 PM"
            },
            {
              name: "L'Italien by Simone Zanoni",
              chef: "Michelin-Starred Chef Simone Zanoni",
              desc: "A sunlit winter garden conservatory serving seasonal antipasti, freshly hand-rolled pasta, and Mediterranean seafood paired with fresh herbs.",
              time: "Lunch & Dinner"
            },
            {
              name: "L'Asiatique by Jean-Georges",
              chef: "Chef Jean-Georges Vongerichten",
              desc: "A sensory voyage across Southeast Asia. Delicate dim sum, crispy glazed duck, and inventive raw crudos in an intimate setting of carved wooden latticework.",
              time: "7:00 PM - 11:30 PM"
            },
            {
              name: "Pierre Hermé Tea Salon & Pâtisserie",
              chef: "The Picasso of Pastry",
              desc: "Exclusive orange blossom macarons, Ispahan rose-raspberry pastries, and curated single-estate teas served under the grand marble colonnades.",
              time: "10:00 AM - 7:00 PM"
            }
          ]
        },
        spaSection: {
          tag: "Wellness Sanctuary",
          title: "The Mythical Spa at La Mamounia",
          subtitle: "A 2,500 m² temple of wellness renowned worldwide for its heated indoor pool surrounded by carved marble pillars and hand-laid turquoise tiles.",
          rituals: [
            {
              title: "The Grand Mamounia Hammam Ritual",
              duration: "120 min",
              price: "180 €",
              features: ["Eucalyptus-infused steam room", "Black olive soap & kessa exfoliation", "Atlas mountain purifying rhassoul clay wrap", "Full-body warm organic argan massage"]
            },
            {
              title: "Ourika Valley Rose Awakening",
              duration: "90 min",
              price: "150 €",
              features: ["Fresh rose petal immersion soak", "Gentle honey and almond polish", "Orange blossom lymphatic massage", "Pierre Hermé tea ceremony"]
            },
            {
              title: "Signature Detox & Radiant Facial",
              duration: "60 min",
              price: "120 €",
              features: ["Botanical floral elixir cleanse", "Warm stone lymphatic facial drainage", "Prickly pear seed regenerative mask"]
            }
          ]
        },
        gardensSection: {
          tag: "Historic 8-Ha Park",
          title: "The Legendary Gardens of La Mamounia",
          desc: "Eight hectares of pristine botanical wonder set against the historic 12th-century ramparts of Marrakech. More than 1,200 olive trees, 5,000 fragrant rose bushes, and private organic gardens providing daily herbs for our kitchens.",
          bullet1: "Romantic shaded promenades accompanied by singing birds",
          bullet2: "Grand swimming pool bordered by pure Italian white marble",
          bullet3: "Le Pavillon de la Piscine for sunny poolside lunches"
        },
        gallerySection: {
          tag: "Visual Memory",
          title: "The Iconic Palace Album",
          subtitle: "Discover the timeless spaces that welcomed the greatest figures of the 20th and 21st centuries.",
          filters: {
            all: "All",
            gardens: "Gardens & Pool",
            suites: "Suites & Riads",
            spa: "The Spa",
            dining: "Dining"
          }
        },
        reviewsSection: {
          tag: "Guest Book",
          title: "Words from World Leaders & Icons",
          items: [
            {
              name: "Sir Winston Churchill",
              role: "Prime Minister & Painter",
              quote: "“It is the loveliest spot in the whole world. Painting La Mamounia’s gardens in the golden Moroccan sunlight was one of the purest joys of my life.”",
              stay: "Frequent Resident"
            },
            {
              name: "Alfred Hitchcock",
              role: "Legendary Filmmaker",
              quote: "“The atmosphere at La Mamounia is utterly intoxicating. It was here that I found the inspiration to film 'The Man Who Knew Too Much'.”",
              stay: "Palace Guest"
            },
            {
              name: "Condé Nast Traveler",
              role: "Global Distinction",
              quote: "“More than a hotel, La Mamounia is a living legend. The service, gardens, and suites represent the absolute zenith of luxury hospitality.”",
              stay: "Voted #1 Hotel in the World"
            }
          ]
        },
        booking: {
          tag: "Direct Reservation",
          title: "Your Stay at La Mamounia",
          subtitle: "Enjoy guaranteed best official palace rates, complimentary VIP airport transfers, and royal arrival amenities.",
          checkIn: "Check-in",
          checkOut: "Check-out",
          roomSelect: "Your Residence",
          adults: "Adults",
          children: "Children",
          extrasTitle: "Signature Experiences",
          extraTransfer: "VIP Maybach Chauffeur Transfer from Marrakech Airport (Roundtrip)",
          extraSpa: "Signature Couple’s Hammam Ritual & Precious Oil Massage (2 guests)",
          extraDinner: "Candlelit Gala Tasting Menu at Le Marocain (2 guests)",
          guestName: "Full Name",
          guestPhone: "WhatsApp Phone Number",
          guestEmail: "Email Address",
          guestRequests: "Special wishes...",
          summaryTitle: "Reservation Summary",
          nights: "Night(s)",
          roomPrice: "Accommodation",
          breakfastIncluded: "Buffet Breakfast at Le Pavillon de la Piscine",
          free: "Included & Free",
          touristTax: "City tourist & hospitality tax",
          extrasTotal: "Signature Add-ons",
          totalEstimated: "Estimated Total",
          liveUpdateNote: "Live update",
          confirmOnlineBtn: "Confirm Reservation",
          confirmWaBtn: "Reserve via WhatsApp",
          guarantees: [
            "Official Best Rate Guarantee",
            "Personalized welcome with fresh almond milk & mejhoul dates",
            "24/7 Dedicated Clefs d'Or Concierge team"
          ]
        },
        modalSuccess: {
          title: "Your Reservation is Confirmed!",
          subtitle: "The General Management and our Clefs d'Or Concierge are finalizing your royal arrival arrangements.",
          bookingRef: "Official Dossier:",
          detailsTitle: "Summary of Stay",
          nameLabel: "Guest Name:",
          datesLabel: "Dates:",
          roomLabel: "Residence:",
          totalLabel: "Total Amount:",
          note: "An official itinerary with your VIP dining reservations has been prepared. Our head butler will reach out via WhatsApp shortly.",
          closeBtn: "Close",
          printBtn: "Print Voucher"
        },
        
        faq: {
          tag: "Concierge",
          title: "Frequently Asked Questions",
          items: [
            {
              q: "Where is La Mamounia located in Marrakech?",
              a: "Avenue Bab Jdid, along the 12th-century ramparts, a 5-minute walk from Jemaa El-Fna, within an 8-hectare private park."
            },
            {
              q: "Is breakfast included in the reservation?",
              a: "Yes, an extensive gourmet buffet breakfast served daily at Le Pavillon de la Piscine is complimentary for all guests."
            },
            {
              q: "How does airport arrival service work?",
              a: "A private chauffeur welcomes you at Marrakech Ménara Airport with VIP Fast-Track customs escort, followed by limousine transit to the palace."
            },
            {
              q: "Are the restaurants open to non-resident visitors?",
              a: "Yes, our fine dining restaurants and the Pierre Hermé Tea Salon welcome non-resident guests upon prior reservation."
            },
            {
              q: "What is the dress code at La Mamounia?",
              a: "An elegant, smart-casual dress code is respected within the hotel grounds, particularly in the evening."
            }
          ]
        },
        footer: {
          aboutTitle: "La Mamounia Marrakech",
          aboutText: "The quintessential symbol of Moroccan hospitality and timeless imperial elegance since 1923. Member of The Leading Hotels of the World.",
          address: "Avenue Bab Jdid, 40040 Marrakech, Morocco",
          phone: "+212 5 24 38 86 00",
          whatsapp: "+212 6 00 12 34 56",
          email: "informations@mamounia.com",
          quickLinks: "Quick Links",
          newsletterTitle: "The Mamounia Gazette",
          newsletterText: "Subscribe for private palace invitations and cultural exhibitions.",
          newsletterPlaceholder: "Your email address...",
          subscribeBtn: "Subscribe",
          subscribeSuccess: "Thank you. You have joined the private circle of La Mamounia.",
          rights: "© 1923 - 2026 Hôtel La Mamounia Marrakech. All rights reserved."
        }
      },

      ar: {
        dir: "rtl",
        brandName: "فندق المامونية",
        brandSubtitle: "مراكش • ١٩٢٣",
        topBanner: "قصر الأساطير بالمملكة المغربية • مائة عام ونيف من الفخامة الإمبراطورية",
        preloader: {
          loading: "فتح بوابات القصر...",
          centenary: "1923 — 2026 • أجمل بقعة على وجه الأرض"
        },
        nav: {
          history: "التاريخ",
          suites: "الأجنحة",
          gastronomy: "المطاعم",
          spa: "السبا",
          gardens: "الحدائق",
          experiences: "الإقامات",
          gallery: "الصور",
          bookBtn: "احجز الآن",
          
        },
        hero: {
          tagline: "أفضل فندق في العالم • مئوية المامونية 1923",
          titleLine1: "الأصالة الإمبراطورية",
          titleLine2: "في فندق المامونية",
          subtitle: "صرح أسطوري فريد يمتد وسط حدائق غناء بمساحة 8 هكتارات من أشجار الزيتون والبرتقال أهداها السلطان لنجله الأمير المأمون. الملاذ المفضل لونستون تشرشل وقادة العالم.",
          exploreSuites: "استكشف الأجنحة",
          
          reserveNow: "احجز الآن",
          scrollGuide: "مرر للاستكشاف"
        },
        stats: [
          { number: "1923", label: "سنة التأسيس", detail: "بروست ومارشيزيو" },
          { number: "8 هكتار", label: "حدائق تاريخية", detail: "1,200 شجرة زيتون" },
          { number: "2,500 م²", label: "سبا ملكي", detail: "حمام أصيل ومسابح" },
          { number: "الأول", label: "عالمياً", detail: "كوندي ناست ترافيلر" }
        ],
        historySection: {
          tag: "الأصالة والتاريخ",
          title: "من بساتين الأمير إلى قصر الملوك",
          p1: "تعود جذور قصر المامونية إلى القرن الثامن عشر حينما قدم السلطان العلوي سيدي محمد بن عبد الله بستاناً ملكياً بمساحة 13 هكتاراً كهدية زواج لابنه الأمير المأمون، وعُرفت تاريخياً باسم «عرصة المأمون».",
          p2: "وفي سنة 1923، شيّد المعماريان الفرنسيان هنري بروست وأنطوان مارشيزيو هذا الصرح الفريد، جامعَين بين طراز الآرت ديكو العصري وإبداع المعلمين الحرفيين المغاربة. وقد اتخذه ونستون تشرشل مقراً شتوياً لممارسة هواية الرسم.",
          p3: "وقد خضعت المامونية لتحديثات أنيقة تحافظ على روحها الملكية برؤية كبار المصممين، لتظل واحة ساحرة تفوح منها أريج زهر البرتقال والياسمين وخشب الأرز العطري.",
          churchillQuote: "«إنه أجمل بقعة على وجه الأرض، حيث تتسامى قمم جبال الأطلس كحصون من اللؤلؤ تحت شمس المغرب الذهبية.»",
          churchillAuthor: "السير ونستون تشرشل، رئيس وزراء بريطانيا الأسبق"
        },
        suitesSection: {
          tag: "ملاذات الملوك",
          title: "أجنحة الأساطير والرياض الخاصة",
          subtitle: "يحتفي كل جناح بالشخصيات التاريخية والفنون الرفيعة التي خلدت اسم المامونية عالمياً.",
          perNight: "في الليلة",
          bookThis: "احجز الجناح",
          viewPhotos: "معاينة الصور",
          compareAll: "مقارنة الـ 4 إقامات",
          amenitiesTitle: "المزايا المشمولة"
        },
        roomsData: [
          {
            id: "suite-churchill",
            title: "جناح ونستون تشرشل",
            tagline: "ملاذ الزعيم ومحترفه الفني",
            area: "107 م²",
            view: "إطلالة على الحدائق وجبال الأطلس",
            priceEur: 1850,
            badge: "أسطورة تاريخية",
            images: [ASSETS.churchillSuite, ASSETS.churchillBar, ASSETS.gardens],
            description: "الجناح التاريخي الأصلي الذي كان يقيم فيه رئيس الوزراء البريطاني لرسم لوحاته الشهيرة. يجمع بين الأناقة البريطانية العريقة واللمسات المغربية الفاخرة، مع مكتب أثري، وأرائك جلدية تشسترفيلد، وشرفة فسيحة خاصة.",
            amenities: ["شرفة بانورامية على الحدائق", "مكتب تشرشل التاريخي", "صالون استقبال جلدي فاخر", "حمام رخامي إمبراطوري", "مساعد شخصي متاح 24/7", "استقبال بالشامبانيا والفواكه"]
          },
          {
            id: "suite-al-mamoun",
            title: "جناح المأمون الاستثنائي",
            tagline: "الدرة الكبرى لقصر المامونية",
            area: "212 م²",
            view: "إطلالة ساحرة على المسبح والحدائق",
            priceEur: 2900,
            badge: "جناح القصر المميز",
            images: [ASSETS.alMamounSuite, ASSETS.architecture, ASSETS.hero],
            description: "سُمي تكريماً للأمير المأمون. يتميز بفخامة ملكية أندلسية وبوروكية آسرة، مع أسقف شاهقة من خشب الأرز المنقوش، وصالون استقبال شاسع، وغرفة طعام خاصة وشرفة رحبة تواجه قمم جبال الأطلس الثلجية.",
            amenities: ["شرفة ملكية فسيحة", "أسقف خشب أرز أندلسية", "صالون استقبال رحب", "حوض استحمام رخامي مزدوج", "خدمة الخادم الملكي الخاص", "توصيل بسيارات ليموزين VIP"]
          },
          {
            id: "suite-majorelle",
            title: "جناح ماجوريل التراثي",
            tagline: "سحر الأزرق النيلي والآرت ديكو",
            area: "90 م²",
            view: "إطلالة على واحة النخيل والمسبح",
            priceEur: 1400,
            badge: "فن وأصالة",
            images: [ASSETS.majorelleSuite, ASSETS.architecture, ASSETS.gardens],
            description: "تحية فنية مفعمة بالألوان للرسام جاك ماجوريل الذي عشق مراكش وسحرها. يزدان بدرجات الأزرق النيلي والزليج الفاسي الزمردي وشرفة هادئة مطلة على أشجار النخيل المعمرة.",
            amenities: ["شرفة خاصة بإطلالة خلابة", "زليج فاسي يدوي أصيل", "سرير ملكي بأعمدة", "خزانة ملابس فسيحة", "فطور فاخر مشمول", "مستحضرات عناية حصرية"]
          },
          {
            id: "riad-prive",
            title: "رياض المامونية الخاص",
            tagline: "الخصوصية الملكية المطلقة وسط الحدائق",
            area: "700 م²",
            view: "حديقة خاصة ومسبح دافئ مستقل",
            priceEur: 4800,
            badge: "فخامة حصرية للغاية",
            images: [ASSETS.riadPrive, ASSETS.gardens, ASSETS.spaIndoorPool],
            description: "قصر مغربي مستقل يقع في قلب الحدائق التاريخية البالغة 8 هكتارات. يتألف من 3 أجنحة نوم رئيسية، وفناء داخلي بكروم ونافورة، ومسبح خاص دافئ في الهواء الطلق، مع طاقم طهاة وخدم مكرسين لخدمتكم.",
            amenities: ["مسبح خارجي دافئ خاص", "3 أجنحة ملكية فسيحة", "فناء داخلي بنافورة رخامية", "طاهٍ وخادم شخصي خاص", "دخول غير محدود لسبا القصر", "حراسة وخصوصية تامة"]
          }
        ],
        experiencesSection: {
          tag: "برامج مخصصة",
          title: "صمم إقامتك الملكية في المامونية",
          subtitle: "ثلاثة برامج إقامة حصرية صممها رئيس كونسيرج المفاتيح الذهبية.",
          items: [
            {
              id: "churchill",
              title: "رحلة تشرشل والتراث الخالد",
              tag: "تاريخ وفنون",
              desc: "تجربة تحاكي إقامة الزعيم البريطاني: جلسة رسم صباحية في شرفة الجناح، وتذوق في بار تشرشل، وعشاء فاخر في مطعم المغربي."
            },
            {
              id: "gourmet",
              title: "سمفونية الطهي والنجوم العالمية",
              tag: "مطاعم عالمية",
              desc: "رحلة تذوق استثنائية: تجربة حلويات بيير هيرمي الفاخرة، وجولة في بستان القصر، وعشاء بتوقيع الشيفين سيموني زانوني وجان جورج."
            },
            {
              id: "wellness",
              title: "الولادة الجديدة والسكينة الإمبراطورية",
              tag: "سبا ملكي 2,500 م²",
              desc: "حمام بخار بالأوكالبتوس، فرك بالصابون البلدي، تدليك بزيت الأركان الدافئ، واسترخاء في المسبح الكبير تحت ظلال أشجار الزيتون."
            }
          ]
        },
        gastronomy: {
          tag: "فنون الطهي",
          title: "مطاعم النخبة في فندق المامونية",
          subtitle: "تجربة طهي استثنائية يقودها أشهر الطهاة العالميين وأمهر معلمي المطبخ المغربي الأصيل.",
          restaurants: [
            {
              name: "مطعم المغربي (Le Marocain)",
              chef: "رئيس الطهاة رشيد أڭوراي",
              desc: "يقع في رياض أندلسي رومانسي وسط الحدائق. بسطيلة الحمام التقليدية، طاجين لحم الغنم المعسل بالبرقوق، والكسكس بالسبع خضار على أنغام العود.",
              time: "19:00 - 23:30"
            },
            {
              name: "مطعم الإيطالي (L'Italien par Simone Zanoni)",
              chef: "الشيف سيموني زانوني",
              desc: "أجواء إيطالية مشرقة تحت قبة زجاجية وسط الحديقة، تقدم أطباق الباستا الطازجة ومأكولات البحر بأعشاب بستان المامونية.",
              time: "الغداء والعشاء"
            },
            {
              name: "مطعم الآسيوي (L'Asiatique par Jean-Georges)",
              chef: "الشيف جان جورج فونغريشتن",
              desc: "رحلة نكهات آسيوية تمتد من بانكوك إلى طوكيو، تقدم فطائر الديم سوم والبط المقرمش في صالون مزين بالخشب المنقوش والحرير.",
              time: "19:00 - 23:30"
            },
            {
              name: "صالون الشاي وبيير هيرمي (Pierre Hermé)",
              chef: "بيكاسو صناعة الحلويات",
              desc: "تشكيلة حصرية من ماكرون زهر الليمون المغربي، وكرواسان إصفهان بالورد، وجلسة شاي ملكية تحت أروقة القصر التاريخية.",
              time: "10:00 - 19:00"
            }
          ]
        },
        spaSection: {
          tag: "الصفاء والجمال",
          title: "سبا المامونية الأسطوري",
          subtitle: "مساحة إمبراطورية بمساحة 2,500 م² مخصصة للاسترخاء التام، يشتهر بمسبحه الداخلي الدافئ المحاط بأعمدة الرخام والزليج الفيروزي.",
          rituals: [
            {
              title: "طقس الحمام الملكي الكبير للمامونية",
              duration: "120 دقيقة",
              price: "180 €",
              features: ["حمام بخار بزيت الأوكالبتوس العطري", "فرك بالصابون البلدي والكيس المغربي", "قناع الغاسول الجبلي المنقي للأطلس", "تدليك استرخائي كامل بزيت الأركان الدافئ"]
            },
            {
              title: "إشراقة ورود وادي أوريكا",
              duration: "90 دقيقة",
              price: "150 €",
              features: ["مغطس ماء دافئ ببتلات الورد العطرية", "تقشير ناعم بالسكر وعسل الأطلس الحر", "تدليك استرخائي بماء زهر الليمون", "جلسة شاي وحلويات بيير هيرمي"]
            },
            {
              title: "علاج النضارة الديتوكس للوجه",
              duration: "60 دقيقة",
              price: "120 €",
              features: ["تنظيف عميق بإكسير الزهور الطبيعية", "تدليك بالأحجار الكريمة الدافئة", "قناع مجدد للبشرة بزيت بذور التين الشوكي"]
            }
          ]
        },
        gardensSection: {
          tag: "حدائق 8 هكتارات",
          title: "حدائق المامونية الأسطورية",
          desc: "ثمانية هكتارات من الخضرة الغناء بمحاذاة أسوار مراكش التاريخية. تضم أكثر من 1,200 شجرة زيتون يتجاوز عمر بعضها 700 عام، و5,000 شجيرة ورد عطرية، وممرات النخيل الباسق، وبستان الأعشاب الطبيعية.",
          bullet1: "ممرات شاعرية للاسترخاء على شقشقة الطيور وخرير النوافير",
          bullet2: "مسبح تاريخي فسيح مكسو برخام إيطاليا الأبيض النقي",
          bullet3: "بافيون المسبح لتناول وجبات الغداء تحت شمس مراكش الدافئة"
        },
        gallerySection: {
          tag: "ذاكرة القصر",
          title: "المعرض الفوتوغرافي للقصر",
          subtitle: "شاهد المعالم التي استقبلت أعظم قادة وفناني ومشاهير العالم.",
          filters: {
            all: "الكل",
            gardens: "الحدائق والمسبح",
            suites: "الأجنحة والرياض",
            spa: "السبا",
            dining: "المطاعم"
          }
        },
        reviewsSection: {
          tag: "السجل الذهبي",
          title: "شهادات كبار الشخصيات",
          items: [
            {
              name: "السير ونستون تشرشل",
              role: "رئيس وزراء بريطانيا وفنان",
              quote: "«إنه أبهى مكان في الوجود. كانت متعتي الكبرى هي الجلوس بحدائق المامونية للرسم تحت ضياء مراكش الذهبي الساحر.»",
              stay: "نزيل شرف دائم"
            },
            {
              name: "ألفريد هيتشكوك",
              role: "المخرج السينمائي العالمي",
              quote: "«سحر المامونية وأجواؤها لا مثيل لها في العالم. هنا تحديداً ولدت فكرة تصوير فيلمي الشهير 'الرجل الذي عرف أكثر من اللازم'.»",
              stay: "تصوير وإقامة سينمائية"
            },
            {
              name: "جوائز كوندي ناست العالمية",
              role: "وسام التميز الفندقي",
              quote: "«أكثر من مجرد فندق، المامونية أسطورة حية. فخامة الحدائق وجودة الخدمة تجعلها في قمة الضيافة العالمية بلا منازع.»",
              stay: "المصنف كأفضل فندق بالعالم"
            }
          ]
        },
        booking: {
          tag: "الحجز الرسمي",
          title: "إقامتك في فندق المامونية",
          subtitle: "تمتع بضمان أفضل سعر رسمي، وتوصيل خاص بسيارات الليموزين، واستقبال ملكي لا يُنسى.",
          checkIn: "الوصول",
          checkOut: "المغادرة",
          roomSelect: "إقامتك المختارة",
          adults: "البالغين",
          children: "الأطفال",
          extrasTitle: "تجارب حصرية",
          extraTransfer: "استقبال وتوصيل VIP بسيارة مايباخ من المطار (ذهاباً وإياباً)",
          extraSpa: "طقوس الحمام الملكي المزدوج والتدليك بالزيوت الثمينة (لشخصين)",
          extraDinner: "عشاء احتفالي رومانسي على ضوء الشموع في مطعم المغربي (لشخصين)",
          guestName: "الاسم الكامل",
          guestPhone: "رقم الهاتف مع واتساب",
          guestEmail: "البريد الإلكتروني",
          guestRequests: "طلبات خاصة...",
          summaryTitle: "ملخص حجز إقامتك",
          nights: "ليالٍ",
          roomPrice: "تكلفة الإقامة",
          breakfastIncluded: "بوفيه الفطور في بافيون المسبح",
          free: "مشمول مجاناً",
          touristTax: "الرسوم والضريبة السياحية",
          extrasTotal: "التجارب الإضافية",
          totalEstimated: "المبلغ الإجمالي",
          liveUpdateNote: "تحديث تلقائي",
          confirmOnlineBtn: "تأكيد الحجز",
          confirmWaBtn: "الحجز عبر واتساب",
          guarantees: [
            "ضمان أفضل سعر رسمي لفندق المامونية",
            "استقبال ملكي بالتمر المجهول وحليب اللوز المعطر",
            "طاقم كونسيرج المفاتيح الذهبية متاح 24/7"
          ]
        },
        modalSuccess: {
          title: "تم تأكيد طلب حجزك بنجاح!",
          subtitle: "يسعدنا الترحيب بك في قصر المامونية التاريخي. يقوم مكتب الإدارة ورئيس التشريفات بمراجعة تفاصيل استقبالك الآن.",
          bookingRef: "رقم الملف الرسمي:",
          detailsTitle: "تفاصيل الحجز",
          nameLabel: "الضيف الكريم:",
          datesLabel: "التواريخ:",
          roomLabel: "الجناح / الرياض:",
          totalLabel: "المبلغ الإجمالي:",
          note: "تم تجهيز دليل وصولك وبرنامج حجوزاتك. سيتواصل معك المساعد الخاص عبر تطبيق واتساب قريباً.",
          closeBtn: "إغلاق",
          printBtn: "طباعة"
        },
        
        faq: {
          tag: "كونسيرج",
          title: "الأسئلة الشائعة",
          items: [
            {
              q: "أين يقع فندق المامونية بالتحديد في مراكش؟",
              a: "شارع باب جديد، بمحاذاة أسوار القرن الثاني عشر، على بعد 5 دقائق من ساحة جامع الفنا، في قلب حديقة خاصة بمساحة 8 هكتارات."
            },
            {
              q: "هل وجبة الفطور مشمولة في سعر الحجز؟",
              a: "نعم بالتأكيد، بوفيه الفطور العالمي والمغربي الفاخر في بافيون المسبح مشمول ومجاني لجميع النزلاء."
            },
            {
              q: "كيف تتم خدمة الاستقبال والتوصيل من المطار؟",
              a: "ينتظركم سائق خاص عند بوابة المطار مع خدمة المسار السريع VIP في الجمارك، ثم التوصيل بسيارة ليموزين."
            },
            {
              q: "هل مطاعم المامونية مفتوحة لغير المقيمين؟",
              a: "نعم، ترحب مطاعمنا الحائزة على جوائز عالمية وصالون بيير هيرمي بكافة الزوار بالحجز المسبق."
            },
            {
              q: "ما هو اللباس المطلوب (Dress Code) داخل الفندق؟",
              a: "يُرجى الالتزام باللباس الأنيق داخل أروقة القصر، خاصة في المساء داخل المطاعم."
            }
          ]
        },
        footer: {
          aboutTitle: "فندق المامونية مراكش",
          aboutText: "الرمز الأبرز للضيافة المغربية الأصيلة والفخامة الإمبراطورية منذ عام 1923. عضو شرف في منظمة الفنادق الرائدة في العالم.",
          address: "شارع باب جديد، 40040 مراكش، المملكة المغربية",
          phone: "+212 5 24 38 86 00",
          whatsapp: "+212 6 00 12 34 56",
          email: "informations@mamounia.com",
          quickLinks: "روابط سريعة",
          newsletterTitle: "رسائل قصر المامونية",
          newsletterText: "اشترك لتصلك الدعوات الخاصة للمناسبات الثقافية والفعاليات الملكية.",
          newsletterPlaceholder: "بريدك الإلكتروني...",
          subscribeBtn: "اشتراك",
          subscribeSuccess: "شكراً لك! انضممت بنجاح لقائمة المراسلات الخاصة بفندق المامونية.",
          rights: "جميع الحقوق محفوظة © 1923 - 2026 فندق المامونية مراكش."
        }
      }
    };

    // --- CURRENCY CONVERSION CONFIGURATION ---
    const CURRENCIES = {
      EUR: { symbol: "€", label: "EUR (€)", rate: 1 },
      MAD: { symbol: "MAD", label: "MAD (درهم)", rate: 10.8 },
      USD: { symbol: "$", label: "USD ($)", rate: 1.08 }
    };

    // --- GALLERY IMAGES OF LA MAMOUNIA ---
    const GALLERY_ITEMS = [
      { id: 1, title: "Le Grand Bassin Olympique & Oliviers Centenaires", category: "gardens", image: ASSETS.hero },
      { id: 2, title: "Suite Historique Winston Churchill", category: "suites", image: ASSETS.churchillSuite },
      { id: 3, title: "Piscine Intérieure Chauffée du Spa (2 500 m²)", category: "spa", image: ASSETS.spaIndoorPool },
      { id: 4, title: "Restaurant Le Marocain au Cœur des Jardins", category: "dining", image: ASSETS.diningMarocain },
      { id: 5, title: "Les 8 Hectares d'Agrumes & Allées de Roses", category: "gardens", image: ASSETS.gardens },
      { id: 6, title: "Suite d'Exception Al Mamoun & Vue Atlas", category: "suites", image: ASSETS.alMamounSuite },
      { id: 7, title: "Rituels au Savon Noir & Huiles Précieuses", category: "spa", image: ASSETS.spaRitual },
      { id: 8, title: "Salon de Thé & Pâtisseries Pierre Hermé", category: "dining", image: ASSETS.diningPierreHerme },
      { id: 9, title: "Le Riad Privé & Piscine Chauffée Exclusifs", category: "suites", image: ASSETS.riadPrive },
      { id: 10, title: "Le Mythique Bar Churchill & Boiseries Nobles", category: "dining", image: ASSETS.churchillBar }
    ];

    
    // --- REUSABLE LA MAMOUNIA ROYAL PALACE CREST SVG ---
    const MamouniaCrest = ({ className = "w-6 h-6 text-mamounia-gold" }) => (
      <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        <path d="M50 4 L56 22 L75 14 L70 32 L89 36 L75 50 L89 64 L70 68 L75 86 L56 78 L50 96 L44 78 L25 86 L30 68 L11 64 L25 50 L11 36 L30 32 L25 14 L44 22 Z" opacity="0.95" />
        <circle cx="50" cy="50" r="16" fill="#FAF8F5" />
        <circle cx="50" cy="50" r="10" fill="currentColor" />
      </svg>
    );

    // --- CUSTOM HOOK: BIDIRECTIONAL SCROLL & EDITORIAL TEXT REVEAL ---
    function useScrollReveal() {
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-active', 'opacity-100', 'translate-y-0', 'scale-100');
                entry.target.classList.remove('opacity-0', 'translate-y-8', 'scale-95');
              } else {
                if (entry.boundingClientRect.top > 0) {
                  entry.target.classList.remove('is-active', 'opacity-100', 'translate-y-0', 'scale-100');
                  entry.target.classList.add('opacity-0', 'translate-y-8', 'scale-95');
                }
              }
            });
          },
          { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
        );

        const targets = document.querySelectorAll('.reveal-on-scroll, .reveal-text-line, .reveal-text-p, .reveal-gold-line');
        targets.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
      });
    }

    // --- MAIN REACT APPLICATION COMPONENT ---
    function App() {
      const [lang, setLang] = useState('fr');
      const [currency, setCurrency] = useState('EUR');
      const [loading, setLoading] = useState(true);
      const [preloaderProgress, setPreloaderProgress] = useState(0);
      const [isScrolled, setIsScrolled] = useState(false);
      
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      // Lenis Smooth Scroll Helper
      const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (window.lenis) {
          window.lenis.scrollTo(el, { offset: -70, duration: 1.25 });
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      };

      // Initialize Lenis Smooth Inertia Scrolling
      useEffect(() => {
        let lenisInstance = null;
        if (typeof Lenis !== 'undefined') {
          lenisInstance = new Lenis({
            duration: 1.25,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            smoothWheel: true,
            touchMultiplier: 1.4
          });
          window.lenis = lenisInstance;

          if (typeof ScrollTrigger !== 'undefined' && typeof gsap !== 'undefined') {
            lenisInstance.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time) => {
              lenisInstance.raf(time * 1000);
            });
            gsap.ticker.lagSmoothing(0);
          } else {
            let rafId;
            function raf(time) {
              lenisInstance.raf(time);
              rafId = requestAnimationFrame(raf);
            }
            rafId = requestAnimationFrame(raf);
          }
        }
        return () => {
          if (lenisInstance) {
            lenisInstance.destroy();
          }
        };
      }, []);


      // Lightbox State
      const [lightboxOpen, setLightboxOpen] = useState(false);
      const [lightboxIndex, setLightboxIndex] = useState(0);
      const [lightboxPhotos, setLightboxPhotos] = useState([]);

      

      // Compare Suites Modal State
      const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

      // Gallery Filter State
      const [activeGalleryFilter, setActiveGalleryFilter] = useState('all');

      // Selected Itinerary State
      const [activeItinerary, setActiveItinerary] = useState('churchill');

      // Reservation Form State
      const [checkIn, setCheckIn] = useState('');
      const [checkOut, setCheckOut] = useState('');
      const [selectedRoomId, setSelectedRoomId] = useState('suite-churchill');
      const [adults, setAdults] = useState(2);
      const [childrenCount, setChildrenCount] = useState(0);
      const [extraTransfer, setExtraTransfer] = useState(true);
      const [extraSpa, setExtraSpa] = useState(false);
      const [extraDinner, setExtraDinner] = useState(false);
      const [guestName, setGuestName] = useState('');
      const [guestPhone, setGuestPhone] = useState('');
      const [guestEmail, setGuestEmail] = useState('');
      const [guestRequests, setGuestRequests] = useState('');
      const [pricePulse, setPricePulse] = useState(false);

      // Success Modal State
      const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
      const [bookingReference, setBookingReference] = useState('');

      // Toast Notification State
      const [toastMessage, setToastMessage] = useState(null);

      const showToast = (msg) => {
        setToastMessage(msg);
        setTimeout(() => setToastMessage(null), 3500);
      };

      // Active room mini-carousel indexes
      const [roomSlideIndex, setRoomSlideIndex] = useState({
        'suite-churchill': 0,
        'suite-al-mamoun': 0,
        'suite-majorelle': 0,
        'riad-prive': 0
      });

      // Active translations
      const t = useMemo(() => TRANSLATIONS[lang] || TRANSLATIONS.fr, [lang]);

      // Initialize Dates (Check-in = today, Check-out = +3 days)
      useEffect(() => {
        const today = new Date();
        const future = new Date();
        future.setDate(today.getDate() + 3);

        const formatDate = (d) => d.toISOString().split('T')[0];
        setCheckIn(formatDate(today));
        setCheckOut(formatDate(future));
      }, []);

      // Scroll Reveal Hook
      useScrollReveal();

      // Handle Direction and Lang Attribute on change
      useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = t.dir;
      }, [lang, t]);

      // Navbar scroll listener
      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      // Preloader simulation (1.4s duration)
      useEffect(() => {
        const interval = setInterval(() => {
          setPreloaderProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval);
              setTimeout(() => setLoading(false), 250);
              return 100;
            }
            return prev + 6;
          });
        }, 45);
        return () => clearInterval(interval);
      }, []);

      // Currency price formatting helper
      const formatPrice = (eurAmount) => {
        const curr = CURRENCIES[currency] || CURRENCIES.EUR;
        const converted = Math.round(eurAmount * curr.rate);
        if (currency === 'MAD') {
          return `${converted.toLocaleString()} MAD`;
        }
        return `${curr.symbol}${converted.toLocaleString()}`;
      };

      // Calculate Nights
      const calculateNights = () => {
        if (!checkIn || !checkOut) return 1;
        const start = new Date(checkIn);
        const end = new Date(checkOut);
        const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
        return diff > 0 ? diff : 1;
      };

      // Calculate Total Price
      const nights = calculateNights();
      const selectedRoom = t.roomsData.find((r) => r.id === selectedRoomId) || t.roomsData[0];
      const roomBaseCost = selectedRoom.priceEur * nights;
      const touristTaxEur = 3.5 * nights * (parseInt(adults) + parseInt(childrenCount));
      const extrasCostEur =
        (extraTransfer ? 120 : 0) +
        (extraSpa ? 300 : 0) +
        (extraDinner ? 240 : 0);
      const totalEur = roomBaseCost + touristTaxEur + extrasCostEur;

      // Pulse price card on change
      useEffect(() => {
        setPricePulse(true);
        const timer = setTimeout(() => setPricePulse(false), 500);
        return () => clearTimeout(timer);
      }, [checkIn, checkOut, selectedRoomId, adults, childrenCount, extraTransfer, extraSpa, extraDinner, currency]);

      // Handle Select Room & Scroll down
      const handleSelectAndScroll = (roomId) => {
        setSelectedRoomId(roomId);
        const bookingElem = document.getElementById('reservation-section');
        if (bookingElem) {
          bookingElem.scrollIntoView({ behavior: 'smooth' });
        }
      };

      // Handle Room Slide Prev / Next
      const handleSlideChange = (roomId, direction, max) => {
        setRoomSlideIndex((prev) => {
          const current = prev[roomId] || 0;
          let next = direction === 'next' ? current + 1 : current - 1;
          if (next >= max) next = 0;
          if (next < 0) next = max - 1;
          return { ...prev, [roomId]: next };
        });
      };

      // Open Lightbox
      const openLightbox = (imagesList, startIndex = 0) => {
        setLightboxPhotos(imagesList);
        setLightboxIndex(startIndex);
        setLightboxOpen(true);
      };

      // Lightbox navigation
      const nextLightbox = () => {
        setLightboxIndex((prev) => (prev + 1) % lightboxPhotos.length);
      };
      const prevLightbox = () => {
        setLightboxIndex((prev) => (prev - 1 + lightboxPhotos.length) % lightboxPhotos.length);
      };

      // Keyboard support for Lightbox and Modals
      useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'Escape') {
            setLightboxOpen(false);
            setIsVirtualTourOpen(false);
            setIsCompareModalOpen(false);
          }
          if (lightboxOpen) {
            if (e.key === 'ArrowRight') nextLightbox();
            if (e.key === 'ArrowLeft') prevLightbox();
          }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [lightboxOpen, lightboxPhotos, isCompareModalOpen]);

      // Online Reservation Confirmation
      const handleConfirmOnline = (e) => {
        e.preventDefault();
        const randRef = `MAM-${Math.floor(1000 + Math.random() * 9000)}-RA`;
        setBookingReference(randRef);
        setIsSuccessModalOpen(true);

        if (window.confetti) {
          window.confetti({
            particleCount: 110,
            spread: 75,
            origin: { y: 0.6 },
            colors: ['#C5A059', '#1B4D3E', '#C26749', '#FAF8F5']
          });
        }
      };

      // WhatsApp Booking Direct Link
      const handleBookWhatsApp = () => {
        const roomName = selectedRoom.title;
        const totalFormatted = formatPrice(totalEur);
        const guest = guestName.trim() || (lang === 'fr' ? 'Hôte Privilège' : lang === 'ar' ? 'ضيف كريم' : 'Distinguished Guest');

        let text = '';
        if (lang === 'fr') {
          text = `Salam Alikoum La Mamounia Marrakech,\n\nJe souhaite réserver un séjour d'exception :\n` +
            `• Hôte : ${guest}\n` +
            `• Hébergement : ${roomName}\n` +
            `• Dates : Du ${checkIn} au ${checkOut} (${nights} nuits)\n` +
            `• Voyageurs : ${adults} Adulte(s), ${childrenCount} Enfant(s)\n` +
            `• Montant estimé : ${totalFormatted}\n` +
            (guestPhone ? `• Téléphone : ${guestPhone}\n` : '') +
            (extraTransfer ? `• Transfert VIP Maybach : Oui\n` : '') +
            (extraSpa ? `• Rituel Hammam & Spa Duo : Oui\n` : '') +
            (extraDinner ? `• Dîner Gastronomique Le Marocain : Oui\n` : '') +
            (guestRequests ? `• Souhaits particuliers : ${guestRequests}\n` : '') +
            `\nMerci de me confirmer la disponibilité et les modalités d'accueil princier.`;
        } else if (lang === 'ar') {
          text = `السلام عليكم فندق المامونية مراكش،\n\nأود تأكيد حجز إقامتي الملكية بالتفاصيل التالية:\n` +
            `• الاسم الكريم : ${guest}\n` +
            `• الجناح / الرياض : ${roomName}\n` +
            `• تواريخ الإقامة : من ${checkIn} إلى ${checkOut} (${nights} ليالٍ)\n` +
            `• النزلاء : ${adults} بالغين، ${childrenCount} أطفال\n` +
            `• المبلغ التقديري : ${totalFormatted}\n` +
            (guestPhone ? `• الهاتف : ${guestPhone}\n` : '') +
            (extraTransfer ? `• استقبال مايباخ VIP : نعم\n` : '') +
            (extraSpa ? `• طقوس السبا الملكي لشخصين : نعم\n` : '') +
            (extraDinner ? `• عشاء مطعم المغربي : نعم\n` : '') +
            (guestRequests ? `• طلبات خاصة : ${guestRequests}\n` : '') +
            `\nشكراً لكم ونتطلع لإقامة تليق بتاريخ المامونية.`;
        } else {
          text = `Greetings La Mamounia Marrakech,\n\nI wish to reserve an official palace stay:\n` +
            `• Guest Name: ${guest}\n` +
            `• Residence: ${roomName}\n` +
            `• Dates: From ${checkIn} to ${checkOut} (${nights} nights)\n` +
            `• Guests: ${adults} Adult(s), ${childrenCount} Child(ren)\n` +
            `• Estimated Total: ${totalFormatted}\n` +
            (guestPhone ? `• Phone: ${guestPhone}\n` : '') +
            (extraTransfer ? `• VIP Maybach Transfer: Yes\n` : '') +
            (extraSpa ? `• Royal Spa & Hammam Duo: Yes\n` : '') +
            (extraDinner ? `• Le Marocain Gala Dinner: Yes\n` : '') +
            (guestRequests ? `• Special Requests: ${guestRequests}\n` : '') +
            `\nKindly confirm availability and arrival arrangements.`;
        }

        const encoded = encodeURIComponent(text);
        window.open(`https://wa.me/212600123456?text=${encoded}`, '_blank');
      };

      // Filtered Gallery Items
      const filteredGallery = useMemo(() => {
        if (activeGalleryFilter === 'all') return GALLERY_ITEMS;
        return GALLERY_ITEMS.filter((item) => item.category === activeGalleryFilter);
      }, [activeGalleryFilter]);

      return (
        <div className="relative min-h-screen bg-mamounia-ivory text-mamounia-charcoal font-sans selection:bg-mamounia-gold selection:text-white overflow-hidden">
          {/* Subtle Palace Background Overlay */}
          <div className="fixed inset-0 bg-palace-pattern pointer-events-none z-0"></div>

          {/* Toast Notification Banner */}
          {toastMessage && (
            <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-white/95 border border-mamounia-gold/40 px-6 py-2.5 rounded-none text-xs text-mamounia-charcoal shadow-gold-soft flex items-center gap-2.5 animate-bounce">
              <MamouniaCrest className="w-4 h-4 text-mamounia-gold" />
              <span className="font-medium tracking-wide">{toastMessage}</span>
            </div>
          )}

          {/* =========================================================================
              1. LUXURY LIGHT PRELOADER (CENTENARY OF LA MAMOUNIA 1923 - 2026)
          ========================================================================= */}
          {loading && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-mamounia-ivory text-mamounia-charcoal transition-all duration-700">
              <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
                <div className="relative mb-5">
                  <div className="w-20 h-20 text-mamounia-gold animate-spin" style={{ animationDuration: '24s' }}>
                    <MamouniaCrest className="w-full h-full text-mamounia-gold drop-shadow-sm" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-xl font-bold tracking-widest text-mamounia-gold">M</span>
                  </div>
                </div>

                <span className="text-[10px] uppercase tracking-[0.3em] text-mamounia-muted font-semibold mb-1">
                  Palace d'Exception • Marrakech
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl tracking-[0.25em] uppercase font-light text-mamounia-charcoal mb-2">
              <span className="reveal-text-line"><span className="block">La Mamounia</span></span>
            </h2>
                <p className="font-serif italic text-xs text-mamounia-gold mb-6">
                  {t.preloader.centenary}
                </p>

                <div className="w-56 h-[3px] bg-mamounia-sand rounded-none overflow-hidden mb-2.5">
                  <div
                    className="h-full bg-gradient-to-r from-mamounia-gold to-mamounia-terracotta transition-all duration-75 ease-out"
                    style={{ width: `${preloaderProgress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between w-56 text-[10px] font-mono text-mamounia-muted">
                  <span>{t.preloader.loading}</span>
                  <span>{preloaderProgress}%</span>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              2. UNIQUE ARCHITECTURAL FLOATING "ROYAL ISLAND CAPSULE" NAVBAR
          ========================================================================= */}
          <nav className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-40 transition-all duration-500">
            <div className={`glass-capsule rounded-none transition-all duration-500 px-3.5 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between shadow-capsule ${
              isScrolled ? 'bg-white/95 border-mamounia-gold/45 py-2 shadow-2xl' : ''
            }`}>
              {/* Left Segment: Crest & Live Palace Micro-Pill */}
              <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
                <div className="w-9 h-9 rounded-none border border-mamounia-gold/40 flex items-center justify-center bg-white shadow-xs group-hover:border-mamounia-gold transition-all duration-300">
                  <MamouniaCrest className="w-5 h-5 text-mamounia-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="hidden sm:block">
                  <span className="font-serif text-lg tracking-[0.2em] text-mamounia-charcoal group-hover:text-mamounia-gold transition-colors block leading-none font-medium uppercase">
                    {t.brandName}
                  </span>
                  <span className="text-[9px] tracking-[0.22em] uppercase text-mamounia-muted block mt-0.5">
                    {t.brandSubtitle}
                  </span>
                </div>
              </a>

              {/* Center Segment: Numbered Luxury Micro-Links */}
              <div className="hidden lg:flex items-center gap-5 xl:gap-6 text-[11px] uppercase tracking-[0.16em] font-medium text-mamounia-charcoal/80">
                <a href="#history" onClick={(e) => { e.preventDefault(); scrollToSection('story'); setMobileMenuOpen(false); }} className="hover:text-mamounia-gold transition-colors relative group py-1">
                  <span>{t.nav.history}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-mamounia-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#suites" onClick={(e) => { e.preventDefault(); scrollToSection('suites'); setMobileMenuOpen(false); }} className="hover:text-mamounia-gold transition-colors relative group py-1">
                  <span>{t.nav.suites}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-mamounia-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#gastronomy" onClick={(e) => { e.preventDefault(); scrollToSection('gastronomy'); setMobileMenuOpen(false); }} className="hover:text-mamounia-gold transition-colors relative group py-1">
                  <span>{t.nav.gastronomy}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-mamounia-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#spa" onClick={(e) => { e.preventDefault(); scrollToSection('spa'); setMobileMenuOpen(false); }} className="hover:text-mamounia-gold transition-colors relative group py-1">
                  <span>{t.nav.spa}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-mamounia-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#gardens" onClick={(e) => { e.preventDefault(); scrollToSection('gardens'); setMobileMenuOpen(false); }} className="hover:text-mamounia-gold transition-colors relative group py-1">
                  <span>{t.nav.gardens}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-mamounia-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#experiences" onClick={(e) => { e.preventDefault(); scrollToSection('experiences'); setMobileMenuOpen(false); }} className="hover:text-mamounia-gold transition-colors relative group py-1">
                  <span>{t.nav.experiences}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-mamounia-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); setMobileMenuOpen(false); }} className="hover:text-mamounia-gold transition-colors relative group py-1">
                  <span>{t.nav.gallery}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-mamounia-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>

              {/* Right Segment: Watch-bezel Controls, Currency, Lang, CTA */}
              <div className="flex items-center gap-2 sm:gap-2.5">
                
                

                

                {/* Currency Selector Pill */}
                <select
                  value={currency}
                  onChange={(e) => {
                    setCurrency(e.target.value);
                    showToast(`Devise : ${e.target.value}`);
                  }}
                  className="bg-white border border-mamounia-sand text-[10px] font-mono text-mamounia-charcoal rounded-none px-2 py-1 focus:outline-none focus:border-mamounia-gold cursor-pointer shadow-2xs"
                >
                  <option value="EUR">EUR</option>
                  <option value="MAD">MAD</option>
                  <option value="USD">USD</option>
                </select>

                {/* Language Switcher Pill */}
                <div className="flex items-center bg-white border border-mamounia-sand rounded-none p-0.5 text-[10px] shadow-2xs">
                  {['fr', 'en', 'ar'].map((locale) => (
                    <button
                      key={locale}
                      onClick={() => setLang(locale)}
                      className={`px-2 py-0.5 rounded-none uppercase transition-all duration-200 ${
                        lang === locale
                          ? 'bg-mamounia-gold text-white font-bold'
                          : 'text-mamounia-muted hover:text-mamounia-charcoal'
                      }`}
                    >
                      {locale}
                    </button>
                  ))}
                </div>

                {/* Shimmering Royal CTA Button */}
                <a
                  href="#reservation-section" onClick={(e) => { e.preventDefault(); scrollToSection('reservation-section'); setMobileMenuOpen(false); }}
                  className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-none text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-mamounia-gold via-[#D8B772] to-mamounia-gold-dark text-white shadow-gold-soft hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <span>{t.nav.bookBtn}</span>
                  <i className={`fa-solid ${t.dir === 'rtl' ? 'fa-arrow-left' : 'fa-arrow-right'} text-[9px]`}></i>
                </a>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="flex items-center gap-2 px-3 py-1.5 border border-mamounia-gold/30 hover:border-mamounia-gold bg-white text-mamounia-charcoal hover:text-mamounia-gold transition-all duration-300 text-[11px] font-mono tracking-widest uppercase cursor-pointer"
                  aria-label="Ouvrir le menu royal"
                >
                  <i className="fa-solid fa-bars-staggered text-mamounia-gold text-xs"></i>
                  <span className="hidden sm:inline font-semibold">MENU</span>
                </button>
              </div>
            </div>

            {/* Mobile Drawer Menu */}
            
          </nav>

          {/* =========================================================================
              FULL-SCREEN RIGHT-SLIDING ROYAL PALACE MENU CURTAIN
          ========================================================================= */}
          <div
            className={`fixed inset-0 z-50 transition-all duration-700 ${
              mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
            }`}
          >
            {/* Animated Dimmed Backdrop */}
            <div
              onClick={() => setMobileMenuOpen(false)}
              className={`fixed inset-0 bg-black/65 backdrop-blur-md transition-opacity duration-700 ${
                mobileMenuOpen ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Right Sliding Curtain Drawer (Full Page on Mobile, 65vw on Desktop) */}
            <div
              className={`fixed top-0 bottom-0 right-0 w-full md:w-[75vw] lg:w-[65vw] max-w-full bg-[#FAF8F5] text-mamounia-charcoal shadow-2xl z-50 flex flex-col justify-between overflow-y-auto transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border-l border-mamounia-gold/30 ${
                mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              {/* Header: Crest, Live Weather & Close Button */}
              <div className="flex items-center justify-between p-5 sm:p-7 border-b border-mamounia-sand/80 bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 border border-mamounia-gold flex items-center justify-center bg-white shadow-xs">
                    <MamouniaCrest className="w-5 h-5 text-mamounia-gold" />
                  </div>
                  <div>
                    <span className="font-serif text-lg tracking-[0.2em] text-mamounia-charcoal uppercase block leading-none font-medium">
                      {t.brandName}
                    </span>
                    <span className="text-[9px] tracking-[0.22em] uppercase text-mamounia-muted block mt-1">
                      {t.brandSubtitle}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-5">
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1 border border-mamounia-gold/40 bg-mamounia-ivory text-[10px] uppercase font-mono tracking-wider">
                    <span className="w-2 h-2 bg-amber-500 animate-ping"></span>
                    <span>24°C Marrakech</span>
                  </div>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 border border-mamounia-gold/40 hover:border-mamounia-gold bg-mamounia-ivory hover:bg-white text-mamounia-charcoal hover:text-mamounia-gold flex items-center justify-center text-lg hover:rotate-90 transition-all duration-300 cursor-pointer"
                    aria-label="Fermer le menu"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>

              {/* Main Menu Body: Architectural Dual-Column or Stacked */}
              <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 flex-1 items-center">
                {/* Left Column (Desktop Heroic Photography & Churchill Quote) */}
                <div className="hidden lg:flex lg:col-span-5 flex-col justify-between h-full border-r border-mamounia-sand/80 pr-8">
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-mamounia-gold/40 shadow-sm">
                    <img
                      src={ASSETS.hero}
                      alt="La Mamounia Pool"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-widest text-white/90 font-mono">
                      Centenaire 1923 — 2026
                    </span>
                  </div>

                  <div className="mt-6">
                    <p className="font-serif italic text-base text-mamounia-charcoal leading-relaxed mb-3">
                      "C'est un des plus beaux endroits au monde... Le soleil brille, les orangers et les oliviers s'étendent à perte de vue."
                    </p>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-mamounia-gold font-semibold block">
                      — Sir Winston Churchill • 1943
                    </span>
                    <p className="text-[11px] text-mamounia-muted mt-2">
                      Avenue Bab Jdid, Marrakech • Conciergerie Clefs d'Or
                    </p>
                  </div>
                </div>

                {/* Right Column: Numbered Royal Menu Navigation Links */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-mamounia-gold uppercase mb-4 block">
                    Navigation Impériale
                  </span>

                  <nav className="flex flex-col gap-3 sm:gap-4">
                    {[
                      { num: "01", key: "story", label: t.nav.history, sub: "Centenaire & Histoire d'Exception" },
                      { num: "02", key: "suites", label: t.nav.suites, sub: "Suites Churchill, Majorelle & Riads" },
                      { num: "03", key: "gastronomy", label: t.nav.gastronomy, sub: "Le Marocain, Pierre Hermé & Pavillon" },
                      { num: "04", key: "spa", label: t.nav.spa, sub: "2 500 m² de Marbre & Rituels" },
                      { num: "05", key: "gardens", label: t.nav.gardens, sub: "8 Hectares d'Oliviers & Roseraie" },
                      { num: "06", key: "experiences", label: t.nav.experiences, sub: "Composez Votre Séjour Impérial" },
                      { num: "07", key: "gallery", label: t.nav.gallery, sub: "Photographies & Architecture" }
                    ].map((item, idx) => (
                      <a
                        key={idx}
                        href={`#${item.key}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.key);
                          setMobileMenuOpen(false);
                        }}
                        className="group flex items-baseline justify-between py-2 border-b border-mamounia-sand/60 hover:border-mamounia-gold transition-colors duration-300"
                      >
                        <div className="flex items-baseline gap-4 sm:gap-6">
                          <span className="text-xs font-mono text-mamounia-gold tracking-widest">
                            {item.num}
                          </span>
                          <div>
                            <span className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-mamounia-charcoal group-hover:text-mamounia-gold transition-colors duration-300 block">
                              {item.label}
                            </span>
                            <span className="text-[10px] text-mamounia-muted uppercase tracking-wider block mt-0.5 group-hover:text-mamounia-charcoal">
                              {item.sub}
                            </span>
                          </div>
                        </div>
                        <span className="text-mamounia-gold text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                          <i className={`fa-solid ${t.dir === 'rtl' ? 'fa-arrow-left' : 'fa-arrow-right'}`}></i>
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Bottom Bar: Currency, Language, WhatsApp & Booking CTA */}
              <div className="p-5 sm:p-7 bg-white border-t border-mamounia-sand/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
                  {/* Currency Selector */}
                  <div className="flex items-center border border-mamounia-sand text-[10px] font-mono">
                    {['EUR', 'MAD', 'USD'].map((curr) => (
                      <button
                        key={curr}
                        onClick={() => setCurrency(curr)}
                        className={`px-2.5 py-1.5 transition-colors ${
                          currency === curr ? 'bg-mamounia-gold text-white font-bold' : 'hover:bg-mamounia-ivory'
                        }`}
                      >
                        {curr}
                      </button>
                    ))}
                  </div>

                  {/* Language Switcher */}
                  <div className="flex items-center border border-mamounia-sand text-[10px] font-mono">
                    {['fr', 'en', 'ar'].map((l) => (
                      <button
                        key={l}
                        onClick={() => setLang(l)}
                        className={`px-2.5 py-1.5 uppercase transition-colors ${
                          lang === l ? 'bg-mamounia-gold text-white font-bold' : 'hover:bg-mamounia-ivory'
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://wa.me/212524388600?text=Bonjour,%20je%20souhaite%20r%C3%A9server%20%C3%A0%20La%20Mamounia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-4 py-2.5 border border-emerald-600/30 text-emerald-800 text-xs font-semibold uppercase tracking-wider hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <i className="fa-brands fa-whatsapp text-emerald-600 text-sm"></i>
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="#reservation-section"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('reservation-section');
                      setMobileMenuOpen(false);
                    }}
                    className="flex-1 sm:flex-none px-6 py-2.5 bg-mamounia-gold text-white text-xs font-semibold uppercase tracking-widest hover:bg-mamounia-gold-dark transition-all duration-300 sheen-button shadow-gold-soft text-center"
                  >
                    {t.nav.bookBtn}
                  </a>
                </div>
              </div>
            </div>
          </div>


          {/* =========================================================================
              3. HERO SECTION (REFINED AIRY EDITORIAL WITH KEN BURNS)
          ========================================================================= */}
          <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-32">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={ASSETS.hero}
                alt="La Mamounia Marrakech Grand Pool & Historic Gardens"
                className="w-full h-full object-cover object-center animate-kenburns transform will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mamounia-ivory via-white/55 to-white/70"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-white/70"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-8 pb-16">
              {/* Palace Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-white/90 border border-mamounia-gold/30 text-mamounia-charcoal text-[10px] sm:text-[11px] tracking-[0.25em] uppercase mb-6 shadow-2xs animate-subtle-pulse">
                <MamouniaCrest className="w-3 h-3 text-mamounia-gold" />
                <span className="font-semibold">{t.hero.tagline}</span>
                <MamouniaCrest className="w-3 h-3 text-mamounia-gold" />
              </div>

              {/* Editorial Title */}
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-mamounia-charcoal tracking-tight leading-[1.1] mb-5">
                <span className="reveal-text-line"><span className="block">{t.hero.titleLine1}</span></span>
                <span className="reveal-text-line"><span className="block text-gold-gradient italic font-normal mt-1">{t.hero.titleLine2}</span></span>
              </h1>

              {/* Subtitle with Generous Air */}
              <p className="reveal-text-p max-w-xl mx-auto text-xs sm:text-sm text-mamounia-muted font-light leading-relaxed mb-8">
                {t.hero.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <a
                  href="#suites" onClick={(e) => { e.preventDefault(); scrollToSection('suites'); setMobileMenuOpen(false); }}
                  className="w-full sm:w-auto px-7 py-3 rounded-none text-xs font-semibold uppercase tracking-widest bg-mamounia-gold text-white shadow-gold-soft hover:bg-mamounia-gold-dark hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5"
                >
                  <span>{t.hero.exploreSuites}</span>
                  <i className={`fa-solid ${t.dir === 'rtl' ? 'fa-arrow-left' : 'fa-arrow-right'} text-[10px]`}></i>
                </a>

                

                <a
                  href="#reservation-section" onClick={(e) => { e.preventDefault(); scrollToSection('reservation-section'); setMobileMenuOpen(false); }}
                  className="w-full sm:w-auto px-7 py-3 rounded-none text-xs font-semibold uppercase tracking-widest bg-white text-mamounia-charcoal border border-mamounia-sand hover:border-mamounia-gold hover:text-mamounia-gold transition-all duration-300 shadow-2xs flex items-center justify-center gap-2"
                >
                  <i className="fa-regular fa-calendar-check text-mamounia-gold"></i>
                  <span>{t.hero.reserveNow}</span>
                </a>
              </div>
            </div>

            {/* Bouncing Scroll Guide */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-mamounia-muted text-[10px] tracking-widest uppercase">
              <span>{t.hero.scrollGuide}</span>
              <div className="w-4 h-7 rounded-none border border-mamounia-gold/40 flex items-start justify-center p-1 bg-white/60">
                <div className="w-1 h-2 bg-mamounia-gold rounded-none animate-bounce"></div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              4. CENTENARY EXPERIENCE & STATS BAR (BREATHING ROOM)
          ========================================================================= */}
          <section className="relative z-20 -mt-8 max-w-5xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-none p-5 sm:p-7 border border-mamounia-gold/25 shadow-palace">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-mamounia-sand rtl:divide-x-reverse">
                {t.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center pt-3 sm:pt-0">
                    <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-gradient mb-0.5">
                      {stat.number}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-mamounia-charcoal">
                      {stat.label}
                    </span>
                    <span className="text-[10px] text-mamounia-muted">
                      {stat.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =========================================================================
              5. HISTOIRE & LÉGENDE DE LA MAMOUNIA (GENEROUS EDITORIAL WHITE SPACE)
          ========================================================================= */}
          <section id="history" className="py-28 sm:py-36 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Left Visual Composition */}
                <div className="lg:col-span-6 relative">
                  <div className="relative mx-auto max-w-md lg:max-w-none">
                    <div className="relative rounded-none-[120px] rounded-none-2xl overflow-hidden border-2 border-mamounia-gold/30 shadow-palace h-[380px] sm:h-[440px]">
                      <img
                        src={ASSETS.gardens}
                        alt="Jardins Centenaires de La Mamounia"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    <div className="absolute -bottom-6 -right-4 sm:-right-6 w-44 sm:w-52 h-52 sm:h-60 rounded-none overflow-hidden border-2 border-white shadow-xl hidden sm:block">
                      <img
                        src={ASSETS.architecture}
                        alt="Colonnades et stucs ciselés"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    <div className="absolute -top-5 -left-4 sm:-left-5 w-16 h-16 rounded-none bg-white border border-mamounia-gold flex items-center justify-center shadow-gold-soft">
                      <div className="text-center">
                        <span className="text-[8px] uppercase font-bold text-mamounia-gold block leading-none">Depuis</span>
                        <span className="font-serif font-bold text-base text-mamounia-charcoal block">1923</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Text Editorial */}
                <div className="lg:col-span-6">
                  <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-mamounia-gold mb-2.5 font-semibold">
                    <span className="w-5 h-[1.5px] bg-mamounia-gold"></span>
                    <span>{t.historySection.tag}</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-4xl font-light leading-tight mb-5 text-mamounia-charcoal">
              <span className="reveal-text-line"><span className="block">{t.historySection.title}</span></span>
            </h2>

                  <p className="text-xs sm:text-sm text-mamounia-muted font-light leading-relaxed mb-3">
                    {t.historySection.p1}
                  </p>

                  <p className="text-xs sm:text-sm text-mamounia-muted font-light leading-relaxed mb-3">
                    {t.historySection.p2}
                  </p>

                  <p className="text-xs sm:text-sm text-mamounia-muted font-light leading-relaxed mb-6">
                    {t.historySection.p3}
                  </p>

                  <blockquote className="p-4 sm:p-5 rounded-none bg-mamounia-cream border-l-4 border-mamounia-gold rtl:border-l-0 rtl:border-r-4">
                    <p className="font-serif text-base sm:text-lg italic text-mamounia-charcoal mb-1.5">
                      {t.historySection.churchillQuote}
                    </p>
                    <cite className="block text-[10px] uppercase tracking-wider text-mamounia-gold font-sans not-italic font-semibold">
                      — {t.historySection.churchillAuthor}
                    </cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              6. SUITES & RIADS SHOWCASE (ELEGANT AIRY CARDS & WHITE SPACE)
          ========================================================================= */}
          <section id="suites" className="py-28 sm:py-36 bg-white relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-mamounia-gold mb-2 font-semibold">
                  <MamouniaCrest className="w-3 h-3" />
                  <span>{t.suitesSection.tag}</span>
                  <MamouniaCrest className="w-3 h-3" />
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl font-light text-mamounia-charcoal mb-3">
              <span className="reveal-text-line"><span className="block">{t.suitesSection.title}</span></span>
            </h2>
                <p className="text-xs sm:text-sm text-mamounia-muted font-light mb-5">
                  {t.suitesSection.subtitle}
                </p>

                <button
                  onClick={() => setIsCompareModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none text-[11px] font-semibold uppercase tracking-wider border border-mamounia-gold/40 text-mamounia-charcoal hover:bg-mamounia-gold/10 hover:border-mamounia-gold transition-colors"
                >
                  <i className="fa-solid fa-table-columns text-mamounia-gold text-[10px]"></i>
                  <span>{t.suitesSection.compareAll}</span>
                </button>
              </div>

              {/* 4 Iconic Suites Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                {t.roomsData.map((room) => {
                  const currentImgIdx = roomSlideIndex[room.id] || 0;
                  const activeImg = room.images[currentImgIdx] || room.images[0];

                  return (
                    <div
                      key={room.id}
                      className="group rounded-none bg-mamounia-ivory border border-mamounia-sand overflow-hidden shadow-palace hover:shadow-card-lift transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between"
                    >
                      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-mamounia-cream">
                        <img
                          src={activeImg}
                          alt={room.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                          onClick={() => openLightbox(room.images, currentImgIdx)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

                        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
                          <span className="px-2.5 py-0.5 rounded-none text-[10px] font-semibold bg-white/95 text-mamounia-charcoal shadow-xs border border-mamounia-gold/30">
                            {room.badge}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-none text-[10px] font-medium bg-black/60 text-white backdrop-blur-xs">
                            {room.area}
                          </span>
                        </div>

                        <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSlideChange(room.id, 'prev', room.images.length);
                            }}
                            className="pointer-events-auto w-8 h-8 rounded-none bg-white/90 text-mamounia-charcoal hover:text-mamounia-gold flex items-center justify-center shadow-md transition-transform hover:scale-110"
                            aria-label="Previous image"
                          >
                            <i className={`fa-solid ${t.dir === 'rtl' ? 'fa-chevron-right' : 'fa-chevron-left'} text-[10px]`}></i>
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSlideChange(room.id, 'next', room.images.length);
                            }}
                            className="pointer-events-auto w-8 h-8 rounded-none bg-white/90 text-mamounia-charcoal hover:text-mamounia-gold flex items-center justify-center shadow-md transition-transform hover:scale-110"
                            aria-label="Next image"
                          >
                            <i className={`fa-solid ${t.dir === 'rtl' ? 'fa-chevron-left' : 'fa-chevron-right'} text-[10px]`}></i>
                          </button>
                        </div>

                        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                          {room.images.map((_, dotIdx) => (
                            <span
                              key={dotIdx}
                              className={`h-1 rounded-none transition-all duration-300 ${
                                currentImgIdx === dotIdx ? 'w-5 bg-mamounia-gold' : 'w-1 bg-white/70'
                              }`}
                            ></span>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-3 mb-1.5">
                            <div>
                              <h3 className="font-serif text-xl sm:text-2xl font-normal text-mamounia-charcoal group-hover:text-mamounia-gold transition-colors">
                                {room.title}
                              </h3>
                              <p className="text-[10px] text-mamounia-gold font-medium uppercase tracking-wider">
                                {room.tagline}
                              </p>
                            </div>

                            <div className="text-right rtl:text-left shrink-0">
                              <span className="font-serif text-xl sm:text-2xl font-bold text-mamounia-charcoal block">
                                {formatPrice(room.priceEur)}
                              </span>
                              <span className="text-[9px] uppercase tracking-wider text-mamounia-muted">
                                {t.suitesSection.perNight}
                              </span>
                            </div>
                          </div>

                          <p className="text-xs text-mamounia-muted font-light leading-relaxed my-3">
                            {room.description}
                          </p>

                          <div className="mb-5">
                            <span className="text-[9px] uppercase tracking-widest text-mamounia-gold block mb-1.5 font-semibold">
                              {t.suitesSection.amenitiesTitle}
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {room.amenities.map((amenity, aIdx) => (
                                <span
                                  key={aIdx}
                                  className="text-[10px] px-2 py-0.5 rounded-none bg-white border border-mamounia-sand text-mamounia-charcoal flex items-center gap-1 shadow-2xs"
                                >
                                  <i className="fa-solid fa-check text-[8px] text-mamounia-gold"></i>
                                  <span>{amenity}</span>
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="pt-3.5 border-t border-mamounia-sand flex items-center justify-between gap-2.5">
                          <button
                            onClick={() => openLightbox(room.images, currentImgIdx)}
                            className="text-[11px] text-mamounia-muted hover:text-mamounia-gold flex items-center gap-1.5 font-medium transition-colors"
                          >
                            <i className="fa-regular fa-image"></i>
                            <span>{t.suitesSection.viewPhotos}</span>
                          </button>

                          <button
                            onClick={() => handleSelectAndScroll(room.id)}
                            className="px-4 py-2 rounded-none text-[11px] font-semibold uppercase tracking-wider bg-mamounia-gold text-white hover:bg-mamounia-gold-dark hover:scale-105 active:scale-95 transition-all shadow-2xs flex items-center gap-1.5"
                          >
                            <span>{t.suitesSection.bookThis}</span>
                            <i className={`fa-solid ${t.dir === 'rtl' ? 'fa-arrow-left' : 'fa-arrow-right'} text-[9px]`}></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* =========================================================================
              7. BESPOKE EXPERIENCE SELECTOR ("COMPOSEZ VOTRE SÉJOUR IMPÉRIAL")
          ========================================================================= */}
          <section id="experiences" className="py-28 sm:py-36 bg-mamounia-ivory relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-mamounia-gold mb-2 font-semibold">
                  <MamouniaCrest className="w-3 h-3" />
                  <span>{t.experiencesSection.tag}</span>
                  <MamouniaCrest className="w-3 h-3" />
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl font-light text-mamounia-charcoal mb-3">
              <span className="reveal-text-line"><span className="block">{t.experiencesSection.title}</span></span>
            </h2>
                <p className="text-xs sm:text-sm text-mamounia-muted font-light">
                  {t.experiencesSection.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.experiencesSection.items.map((exp) => (
                  <div
                    key={exp.id}
                    onClick={() => setActiveItinerary(exp.id)}
                    className={`p-6 sm:p-7 rounded-none cursor-pointer transition-all duration-300 border ${
                      activeItinerary === exp.id
                        ? 'bg-white border-mamounia-gold shadow-palace scale-[1.02]'
                        : 'bg-white/70 border-mamounia-sand hover:border-mamounia-gold/50'
                    }`}
                  >
                    <span className="text-[10px] uppercase font-mono tracking-wider text-mamounia-gold block mb-1">
                      {exp.tag}
                    </span>
                    <h3 className="font-serif text-lg font-normal text-mamounia-charcoal mb-2.5">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-mamounia-muted font-light leading-relaxed mb-4">
                      {exp.desc}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-mamounia-gold font-medium">
                      <span>Sélectionner cet itinéraire</span>
                      <i className="fa-solid fa-arrow-right text-[10px]"></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =========================================================================
              8. GASTRONOMIE ÉTOILÉE (LE MAROCAIN, SIMONE ZANONI, JEAN-GEORGES, PIERRE HERMÉ)
          ========================================================================= */}
          <section id="gastronomy" className="py-28 sm:py-36 bg-mamounia-cream/50 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-mamounia-gold mb-2.5 font-semibold">
                    <span className="w-5 h-[1.5px] bg-mamounia-gold"></span>
                    <span>{t.gastronomy.tag}</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-4xl font-light text-mamounia-charcoal mb-3 leading-tight">
              <span className="reveal-text-line"><span className="block">{t.gastronomy.title}</span></span>
            </h2>

                  <p className="text-xs sm:text-sm text-mamounia-muted font-light mb-6 max-w-xl">
                    {t.gastronomy.subtitle}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {t.gastronomy.restaurants.map((rest, idx) => (
                      <div
                        key={idx}
                        className="p-4 sm:p-5 rounded-none bg-white border border-mamounia-sand hover:border-mamounia-gold transition-all duration-300 shadow-2xs hover:shadow-sm group flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-[9px] uppercase font-mono tracking-wider text-mamounia-gold block mb-1">
                            {rest.chef}
                          </span>
                          <h3 className="font-serif text-base sm:text-lg font-normal text-mamounia-charcoal group-hover:text-mamounia-gold transition-colors mb-1.5">
                            {rest.name}
                          </h3>
                          <p className="text-xs text-mamounia-muted font-light leading-relaxed mb-2.5">
                            {rest.desc}
                          </p>
                        </div>
                        <span className="text-[10px] font-mono text-mamounia-charcoal/70 pt-2 border-t border-mamounia-sand/40 block">
                          <i className="fa-regular fa-clock mr-1 rtl:mr-0 rtl:ml-1 text-mamounia-gold"></i>
                          {rest.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-none overflow-hidden border-2 border-white shadow-palace h-[380px] sm:h-[440px]">
                    <img
                      src={ASSETS.diningMarocain}
                      alt="Restaurant Le Marocain à La Mamounia"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white border border-mamounia-gold/40 p-3.5 rounded-none shadow-palace max-w-xs flex items-center gap-3">
                    <img
                      src={ASSETS.diningPierreHerme}
                      alt="Pâtisserie Pierre Hermé La Mamounia"
                      className="w-14 h-14 rounded-none object-cover shrink-0"
                    />
                    <div>
                      <span className="text-xs font-serif font-bold text-mamounia-charcoal block">
                        Pierre Hermé Paris
                      </span>
                      <span className="text-[10px] text-mamounia-muted block">
                        Créations sucrées exclusives servies au salon de thé du palace.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              9. LE SPA MYTHIQUE (2 500 M² DE MARBRE, HAMMAM & PISCINE CHAUFFÉE)
          ========================================================================= */}
          <section id="spa" className="py-28 sm:py-36 bg-white relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-mamounia-gold mb-2 font-semibold">
                  <MamouniaCrest className="w-3 h-3" />
                  <span>{t.spaSection.tag}</span>
                  <MamouniaCrest className="w-3 h-3" />
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl font-light text-mamounia-charcoal mb-3">
              <span className="reveal-text-line"><span className="block">{t.spaSection.title}</span></span>
            </h2>
                <p className="text-xs sm:text-sm text-mamounia-muted font-light">
                  {t.spaSection.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {t.spaSection.rituals.map((ritual, idx) => (
                  <div
                    key={idx}
                    className="rounded-none bg-mamounia-ivory border border-mamounia-sand p-6 sm:p-7 flex flex-col justify-between hover:border-mamounia-gold hover:shadow-card-lift transition-all duration-300 group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] uppercase tracking-widest font-mono text-mamounia-muted">
                          {ritual.duration}
                        </span>
                        <span className="font-serif text-xl sm:text-2xl font-bold text-mamounia-charcoal">
                          {ritual.price}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg sm:text-xl font-normal text-mamounia-charcoal group-hover:text-mamounia-gold transition-colors mb-3">
                        {ritual.title}
                      </h3>

                      <ul className="space-y-2 mb-5">
                        {ritual.features.map((feat, fIdx) => (
                          <li key={fIdx} className="text-xs text-mamounia-muted flex items-start gap-2">
                            <i className="fa-solid fa-droplet text-mamounia-gold text-[9px] mt-1 shrink-0"></i>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="#reservation-section" onClick={(e) => { e.preventDefault(); scrollToSection('reservation-section'); setMobileMenuOpen(false); }}
                      className="w-full py-2 rounded-none text-xs font-semibold uppercase tracking-wider text-center border border-mamounia-gold text-mamounia-charcoal hover:bg-mamounia-gold hover:text-white transition-all duration-300 block"
                    >
                      Ajouter au séjour
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =========================================================================
              10. LES JARDINS HISTORIQUES DE 8 HECTARES & PISCINE DU PALACE
          ========================================================================= */}
          <section id="gardens" className="py-28 sm:py-36 bg-mamounia-cream/40 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <div className="lg:col-span-6">
                  <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-mamounia-gold mb-2.5 font-semibold">
                    <span className="w-5 h-[1.5px] bg-mamounia-gold"></span>
                    <span>{t.gardensSection.tag}</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-4xl font-light text-mamounia-charcoal mb-4 leading-tight">
              <span className="reveal-text-line"><span className="block">{t.gardensSection.title}</span></span>
            </h2>

                  <p className="text-xs sm:text-sm text-mamounia-muted font-light leading-relaxed mb-5">
                    {t.gardensSection.desc}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {[t.gardensSection.bullet1, t.gardensSection.bullet2, t.gardensSection.bullet3].map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2.5 text-xs text-mamounia-charcoal font-medium">
                        <span className="w-5 h-5 rounded-none bg-mamounia-emerald-light text-mamounia-emerald flex items-center justify-center shrink-0">
                          <i className="fa-solid fa-leaf text-[10px]"></i>
                        </span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  
                </div>

                <div className="lg:col-span-6 relative">
                  <div className="rounded-none overflow-hidden shadow-palace border-2 border-white h-[380px] sm:h-[420px]">
                    <img
                      src={ASSETS.pavillonPiscine}
                      alt="Le Pavillon de la Piscine et les jardins de La Mamounia"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              11. MASONRY PHOTO GALLERY (PALACE, GARDENS, SPA, DINING)
          ========================================================================= */}
          <section id="gallery" className="py-28 sm:py-36 bg-white relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-mamounia-gold mb-2 font-semibold">
                  <MamouniaCrest className="w-3 h-3" />
                  <span>{t.gallerySection.tag}</span>
                  <MamouniaCrest className="w-3 h-3" />
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl font-light text-mamounia-charcoal mb-3">
              <span className="reveal-text-line"><span className="block">{t.gallerySection.title}</span></span>
            </h2>
                <p className="text-xs sm:text-sm text-mamounia-muted font-light">
                  {t.gallerySection.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
                {[
                  { key: 'all', label: t.gallerySection.filters.all },
                  { key: 'gardens', label: t.gallerySection.filters.gardens },
                  { key: 'suites', label: t.gallerySection.filters.suites },
                  { key: 'spa', label: t.gallerySection.filters.spa },
                  { key: 'dining', label: t.gallerySection.filters.dining }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveGalleryFilter(tab.key)}
                    className={`px-3.5 py-1.5 rounded-none text-[11px] font-medium uppercase tracking-wider transition-all duration-200 ${
                      activeGalleryFilter === tab.key
                        ? 'bg-mamounia-gold text-white font-semibold shadow-xs scale-105'
                        : 'bg-mamounia-ivory text-mamounia-muted hover:text-mamounia-charcoal border border-mamounia-sand'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredGallery.map((item, gIdx) => (
                  <div
                    key={item.id}
                    onClick={() => openLightbox(filteredGallery.map(i => i.image), gIdx)}
                    className="group relative h-64 sm:h-72 rounded-none overflow-hidden bg-mamounia-cream border border-mamounia-sand shadow-xs cursor-pointer hover:-translate-y-1 transition-all duration-300"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                      <span className="text-[9px] uppercase font-mono tracking-widest text-mamounia-gold-light mb-0.5">
                        La Mamounia Marrakech
                      </span>
                      <h4 className="font-serif text-base font-medium mb-2">
                        {item.title}
                      </h4>
                      <div className="inline-flex items-center gap-1.5 text-xs text-mamounia-gold-light">
                        <i className="fa-solid fa-expand text-[10px]"></i>
                        <span>Agrandir</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =========================================================================
              12. LE LIVRE D'OR (TESTIMONIALS OF CHURCHILL, HITCHCOCK, CONDÉ NAST)
          ========================================================================= */}
          <section className="py-28 sm:py-36 bg-mamounia-ivory relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-mamounia-gold mb-2 font-semibold">
                  <MamouniaCrest className="w-3 h-3" />
                  <span>{t.reviewsSection.tag}</span>
                  <MamouniaCrest className="w-3 h-3" />
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl font-light text-mamounia-charcoal mb-3">
              <span className="reveal-text-line"><span className="block">{t.reviewsSection.title}</span></span>
            </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {t.reviewsSection.items.map((rev, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-none bg-white border border-mamounia-sand shadow-palace flex flex-col justify-between hover:border-mamounia-gold transition-all duration-300"
                  >
                    <div>
                      <div className="w-7 h-7 rounded-none bg-mamounia-gold-light/40 flex items-center justify-center text-mamounia-gold mb-3">
                        <i className="fa-solid fa-crown text-[10px]"></i>
                      </div>

                      <p className="font-serif text-sm sm:text-base italic text-mamounia-charcoal leading-relaxed mb-5">
                        {rev.quote}
                      </p>
                    </div>

                    <div className="pt-3.5 border-t border-mamounia-sand">
                      <h4 className="font-sans font-semibold text-mamounia-charcoal text-xs">
                        {rev.name}
                      </h4>
                      <div className="flex items-center justify-between text-[11px] text-mamounia-muted mt-0.5">
                        <span>{rev.role}</span>
                        <span className="text-mamounia-gold font-medium">{rev.stay}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =========================================================================
              13. OFFICIAL DIRECT RESERVATION ENGINE & DYNAMIC PRICING
          ========================================================================= */}
          <section id="reservation-section" className="py-28 sm:py-36 bg-white relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-mamounia-gold mb-2 font-semibold">
                  <MamouniaCrest className="w-3 h-3" />
                  <span>{t.booking.tag}</span>
                  <MamouniaCrest className="w-3 h-3" />
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl font-light text-mamounia-charcoal mb-2.5">
              <span className="reveal-text-line"><span className="block">{t.booking.title}</span></span>
            </h2>
                <p className="text-xs sm:text-sm text-mamounia-muted font-light">
                  {t.booking.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <form
                  onSubmit={handleConfirmOnline}
                  className="lg:col-span-7 bg-mamounia-ivory p-6 sm:p-8 rounded-none border border-mamounia-sand shadow-palace space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-mamounia-charcoal font-semibold mb-1">
                        <i className="fa-regular fa-calendar-days mr-1.5 rtl:mr-0 rtl:ml-1.5 text-mamounia-gold"></i>
                        {t.booking.checkIn}
                      </label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        required
                        className="w-full bg-white border border-mamounia-sand rounded-none px-3.5 py-2.5 text-mamounia-charcoal text-xs focus:outline-none focus:border-mamounia-gold shadow-2xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-mamounia-charcoal font-semibold mb-1">
                        <i className="fa-regular fa-calendar-days mr-1.5 rtl:mr-0 rtl:ml-1.5 text-mamounia-gold"></i>
                        {t.booking.checkOut}
                      </label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        required
                        className="w-full bg-white border border-mamounia-sand rounded-none px-3.5 py-2.5 text-mamounia-charcoal text-xs focus:outline-none focus:border-mamounia-gold shadow-2xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-mamounia-charcoal font-semibold mb-1">
                      <i className="fa-solid fa-bed mr-1.5 rtl:mr-0 rtl:ml-1.5 text-mamounia-gold"></i>
                      {t.booking.roomSelect}
                    </label>
                    <select
                      value={selectedRoomId}
                      onChange={(e) => setSelectedRoomId(e.target.value)}
                      className="w-full bg-white border border-mamounia-sand rounded-none px-3.5 py-2.5 text-mamounia-charcoal text-xs focus:outline-none focus:border-mamounia-gold cursor-pointer shadow-2xs"
                    >
                      {t.roomsData.map((room) => (
                        <option key={room.id} value={room.id}>
                          {room.title} — {formatPrice(room.priceEur)} / {t.suitesSection.perNight} ({room.area})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-mamounia-charcoal font-semibold mb-1">
                        <i className="fa-solid fa-user mr-1.5 rtl:mr-0 rtl:ml-1.5 text-mamounia-gold"></i>
                        {t.booking.adults}
                      </label>
                      <select
                        value={adults}
                        onChange={(e) => setAdults(Number(e.target.value))}
                        className="w-full bg-white border border-mamounia-sand rounded-none px-3.5 py-2.5 text-mamounia-charcoal text-xs focus:outline-none focus:border-mamounia-gold cursor-pointer shadow-2xs"
                      >
                        {[1, 2, 3, 4].map((num) => (
                          <option key={num} value={num}>{num} {t.booking.adults}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-mamounia-charcoal font-semibold mb-1">
                        <i className="fa-solid fa-child mr-1.5 rtl:mr-0 rtl:ml-1.5 text-mamounia-gold"></i>
                        {t.booking.children}
                      </label>
                      <select
                        value={childrenCount}
                        onChange={(e) => setChildrenCount(Number(e.target.value))}
                        className="w-full bg-white border border-mamounia-sand rounded-none px-3.5 py-2.5 text-mamounia-charcoal text-xs focus:outline-none focus:border-mamounia-gold cursor-pointer shadow-2xs"
                      >
                        {[0, 1, 2, 3].map((num) => (
                          <option key={num} value={num}>{num} {t.booking.children}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="pt-1">
                    <label className="block text-[11px] uppercase tracking-wider text-mamounia-charcoal font-semibold mb-2.5">
                      <i className="fa-solid fa-wand-magic-sparkles mr-1.5 rtl:mr-0 rtl:ml-1.5 text-mamounia-gold"></i>
                      {t.booking.extrasTitle}
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 p-2.5 rounded-none bg-white border border-mamounia-sand cursor-pointer hover:border-mamounia-gold transition-colors shadow-2xs">
                        <input
                          type="checkbox"
                          checked={extraTransfer}
                          onChange={(e) => setExtraTransfer(e.target.checked)}
                          className="w-4 h-4 rounded-none text-mamounia-gold accent-mamounia-gold"
                        />
                        <span className="text-xs text-mamounia-charcoal flex-1">
                          {t.booking.extraTransfer}
                        </span>
                        <span className="text-xs font-mono font-bold text-mamounia-gold">
                          +{formatPrice(120)}
                        </span>
                      </label>

                      <label className="flex items-center gap-3 p-2.5 rounded-none bg-white border border-mamounia-sand cursor-pointer hover:border-mamounia-gold transition-colors shadow-2xs">
                        <input
                          type="checkbox"
                          checked={extraSpa}
                          onChange={(e) => setExtraSpa(e.target.checked)}
                          className="w-4 h-4 rounded-none text-mamounia-gold accent-mamounia-gold"
                        />
                        <span className="text-xs text-mamounia-charcoal flex-1">
                          {t.booking.extraSpa}
                        </span>
                        <span className="text-xs font-mono font-bold text-mamounia-gold">
                          +{formatPrice(300)}
                        </span>
                      </label>

                      <label className="flex items-center gap-3 p-2.5 rounded-none bg-white border border-mamounia-sand cursor-pointer hover:border-mamounia-gold transition-colors shadow-2xs">
                        <input
                          type="checkbox"
                          checked={extraDinner}
                          onChange={(e) => setExtraDinner(e.target.checked)}
                          className="w-4 h-4 rounded-none text-mamounia-gold accent-mamounia-gold"
                        />
                        <span className="text-xs text-mamounia-charcoal flex-1">
                          {t.booking.extraDinner}
                        </span>
                        <span className="text-xs font-mono font-bold text-mamounia-gold">
                          +{formatPrice(240)}
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-mamounia-muted mb-1">
                        {t.booking.guestName} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sir Winston Churchill"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        className="w-full bg-white border border-mamounia-sand rounded-none px-3.5 py-2 text-mamounia-charcoal text-xs focus:outline-none focus:border-mamounia-gold shadow-2xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-mamounia-muted mb-1">
                        {t.booking.guestPhone} *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+33 6 12 34 56 78"
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        className="w-full bg-white border border-mamounia-sand rounded-none px-3.5 py-2 text-mamounia-charcoal text-xs focus:outline-none focus:border-mamounia-gold shadow-2xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-mamounia-muted mb-1">
                      {t.booking.guestEmail} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="winston@mamounia-experience.com"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="w-full bg-white border border-mamounia-sand rounded-none px-3.5 py-2 text-mamounia-charcoal text-xs focus:outline-none focus:border-mamounia-gold shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-mamounia-muted mb-1">
                      {t.booking.guestRequests}
                    </label>
                    <textarea
                      rows="2"
                      placeholder="Préférences de suite, heure d'arrivée..."
                      value={guestRequests}
                      onChange={(e) => setGuestRequests(e.target.value)}
                      className="w-full bg-white border border-mamounia-sand rounded-none px-3.5 py-2 text-mamounia-charcoal text-xs focus:outline-none focus:border-mamounia-gold shadow-2xs"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-5 rounded-none text-xs font-semibold uppercase tracking-wider bg-mamounia-gold text-white shadow-gold-soft hover:bg-mamounia-gold-dark hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                      <i className="fa-regular fa-circle-check"></i>
                      <span>{t.booking.confirmOnlineBtn}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleBookWhatsApp}
                      className="flex-1 py-3 px-5 rounded-none text-xs font-semibold uppercase tracking-wider bg-[#25D366] text-white shadow-md hover:bg-[#1EBE5D] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                      <i className="fa-brands fa-whatsapp text-base"></i>
                      <span>{t.booking.confirmWaBtn}</span>
                    </button>
                  </div>
                </form>

                {/* Right: Dynamic Summary Card */}
                <div className="lg:col-span-5 sticky top-24 space-y-5">
                  <div
                    className={`bg-mamounia-ivory rounded-none p-6 sm:p-7 border border-mamounia-gold/40 shadow-palace transition-all duration-300 ${
                      pricePulse ? 'scale-[1.02] ring-2 ring-mamounia-gold/30' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between pb-3.5 border-b border-mamounia-sand mb-5">
                      <h3 className="font-serif text-xl font-normal text-mamounia-charcoal">
                        {t.booking.summaryTitle}
                      </h3>
                      <span className="text-[10px] font-mono text-mamounia-muted uppercase">
                        {t.booking.liveUpdateNote}
                      </span>
                    </div>

                    <div className="flex gap-3.5 items-center mb-5 p-3 rounded-none bg-white border border-mamounia-sand shadow-2xs">
                      <img
                        src={selectedRoom.images[0]}
                        alt={selectedRoom.title}
                        className="w-14 h-14 rounded-none object-cover"
                      />
                      <div>
                        <h4 className="font-serif text-base font-medium text-mamounia-charcoal">
                          {selectedRoom.title}
                        </h4>
                        <span className="text-xs text-mamounia-gold font-mono font-bold">
                          {formatPrice(selectedRoom.priceEur)} × {nights} {t.booking.nights}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2.5 text-xs text-mamounia-charcoal/85 pb-5 border-b border-mamounia-sand">
                      <div className="flex justify-between">
                        <span>{t.booking.roomPrice} ({nights} {t.booking.nights})</span>
                        <span className="font-mono font-semibold">{formatPrice(roomBaseCost)}</span>
                      </div>

                      <div className="flex justify-between">
                        <span>{t.booking.breakfastIncluded}</span>
                        <span className="font-mono text-mamounia-emerald font-semibold">{t.booking.free}</span>
                      </div>

                      <div className="flex justify-between">
                        <span>{t.booking.touristTax}</span>
                        <span className="font-mono font-semibold">{formatPrice(touristTaxEur)}</span>
                      </div>

                      {extrasCostEur > 0 && (
                        <div className="flex justify-between text-mamounia-gold font-semibold">
                          <span>{t.booking.extrasTotal}</span>
                          <span className="font-mono">+{formatPrice(extrasCostEur)}</span>
                        </div>
                      )}
                    </div>

                    <div className="pt-5">
                      <div className="flex items-end justify-between mb-1">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-mamounia-gold block font-semibold">
                            {t.booking.totalEstimated}
                          </span>
                          <span className="text-[10px] text-mamounia-muted">
                            Taxes & service inclus
                          </span>
                        </div>
                        <div className="text-right rtl:text-left">
                          <span className="font-serif text-2xl sm:text-3xl font-bold text-mamounia-charcoal block">
                            {formatPrice(totalEur)}
                          </span>
                          {currency !== 'EUR' && (
                            <span className="text-[10px] font-mono text-mamounia-muted">
                              (env. {totalEur} €)
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-none p-5 border border-mamounia-sand space-y-2.5 shadow-2xs">
                    {t.booking.guarantees.map((guar, gIdx) => (
                      <div key={gIdx} className="flex items-center gap-2.5 text-xs text-mamounia-charcoal font-medium">
                        <i className="fa-solid fa-shield-halved text-mamounia-gold text-xs"></i>
                        <span>{guar}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              14. FAQ SECTION (CONCIERGE PALACE INFORMATION)
          ========================================================================= */}
          <section className="py-28 sm:py-36 bg-mamounia-cream/40 relative">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-mamounia-gold mb-2 font-semibold">
                  <MamouniaCrest className="w-3 h-3" />
                  <span>{t.faq.tag}</span>
                  <MamouniaCrest className="w-3 h-3" />
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl font-light text-mamounia-charcoal">
              <span className="reveal-text-line"><span className="block">{t.faq.title}</span></span>
            </h2>
              </div>

              <div className="space-y-3.5">
                {t.faq.items.map((item, idx) => (
                  <details
                    key={idx}
                    className="group bg-white rounded-none border border-mamounia-sand p-4 sm:p-5 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-2xs"
                  >
                    <summary className="flex items-center justify-between gap-3 font-serif text-base sm:text-lg text-mamounia-charcoal group-hover:text-mamounia-gold transition-colors">
                      <span>{item.q}</span>
                      <span className="w-7 h-7 rounded-none border border-mamounia-sand flex items-center justify-center shrink-0 text-[10px] text-mamounia-gold group-open:rotate-180 transition-transform duration-300">
                        <i className="fa-solid fa-chevron-down"></i>
                      </span>
                    </summary>
                    <p className="mt-3 text-xs text-mamounia-muted font-light leading-relaxed pt-2.5 border-t border-mamounia-sand/40">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* =========================================================================
              15. LUXURY PALACE FOOTER & NEWSLETTER
          ========================================================================= */}
          <footer className="pt-20 pb-12 border-t border-mamounia-sand bg-white relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-mamounia-sand">
                <div className="lg:col-span-4 space-y-3.5">
                  <div className="flex items-center gap-3">
                    <MamouniaCrest className="w-7 h-7 text-mamounia-gold" />
                    <div>
                      <span className="font-serif text-xl text-mamounia-charcoal font-medium block uppercase tracking-wider">
                        {t.brandName}
                      </span>
                      <span className="text-[9px] tracking-[0.25em] uppercase text-mamounia-muted block">
                        {t.brandSubtitle}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-mamounia-muted font-light leading-relaxed">
                    {t.footer.aboutText}
                  </p>
                  <div className="pt-1 flex items-center gap-2.5 text-mamounia-charcoal">
                    <a href="#" className="w-8 h-8 rounded-none border border-mamounia-sand flex items-center justify-center hover:bg-mamounia-gold hover:text-white hover:border-mamounia-gold transition-colors">
                      <i className="fa-brands fa-instagram text-xs"></i>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-none border border-mamounia-sand flex items-center justify-center hover:bg-mamounia-gold hover:text-white hover:border-mamounia-gold transition-colors">
                      <i className="fa-brands fa-facebook-f text-xs"></i>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-none border border-mamounia-sand flex items-center justify-center hover:bg-mamounia-gold hover:text-white hover:border-mamounia-gold transition-colors">
                      <i className="fa-brands fa-tripadvisor text-xs"></i>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <h4 className="font-serif text-base text-mamounia-charcoal font-medium mb-3">
                    {t.footer.quickLinks}
                  </h4>
                  <ul className="space-y-2 text-xs text-mamounia-muted">
                    <li><a href="#history" onClick={(e) => { e.preventDefault(); scrollToSection('story'); setMobileMenuOpen(false); }} className="hover:text-mamounia-gold transition-colors">{t.nav.history}</a></li>
                    <li><a href="#suites" onClick={(e) => { e.preventDefault(); scrollToSection('suites'); setMobileMenuOpen(false); }} className="hover:text-mamounia-gold transition-colors">{t.nav.suites}</a></li>
                    <li><a href="#gastronomy" onClick={(e) => { e.preventDefault(); scrollToSection('gastronomy'); setMobileMenuOpen(false); }} className="hover:text-mamounia-gold transition-colors">{t.nav.gastronomy}</a></li>
                    <li><a href="#spa" onClick={(e) => { e.preventDefault(); scrollToSection('spa'); setMobileMenuOpen(false); }} className="hover:text-mamounia-gold transition-colors">{t.nav.spa}</a></li>
                    <li><a href="#gardens" onClick={(e) => { e.preventDefault(); scrollToSection('gardens'); setMobileMenuOpen(false); }} className="hover:text-mamounia-gold transition-colors">{t.nav.gardens}</a></li>
                    <li><a href="#reservation-section" onClick={(e) => { e.preventDefault(); scrollToSection('reservation-section'); setMobileMenuOpen(false); }} className="hover:text-mamounia-gold transition-colors">{t.nav.bookBtn}</a></li>
                  </ul>
                </div>

                <div className="lg:col-span-3 space-y-2 text-xs text-mamounia-muted">
                  <h4 className="font-serif text-base text-mamounia-charcoal font-medium mb-3">
                    Contact & Conciergerie
                  </h4>
                  <p className="flex items-start gap-2">
                    <i className="fa-solid fa-location-dot text-mamounia-gold mt-0.5 text-xs"></i>
                    <span>{t.footer.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <i className="fa-solid fa-phone text-mamounia-gold text-xs"></i>
                    <a href={`tel:${t.footer.phone}`} className="hover:text-mamounia-gold">{t.footer.phone}</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <i className="fa-brands fa-whatsapp text-[#25D366] text-xs"></i>
                    <a href={`https://wa.me/212600123456`} target="_blank" className="hover:text-mamounia-gold">{t.footer.whatsapp}</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <i className="fa-solid fa-envelope text-mamounia-gold text-xs"></i>
                    <a href={`mailto:${t.footer.email}`} className="hover:text-mamounia-gold">{t.footer.email}</a>
                  </p>
                </div>

                <div className="lg:col-span-3">
                  <h4 className="font-serif text-base text-mamounia-charcoal font-medium mb-1.5">
                    {t.footer.newsletterTitle}
                  </h4>
                  <p className="text-xs text-mamounia-muted font-light mb-3">
                    {t.footer.newsletterText}
                  </p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      showToast(t.footer.subscribeSuccess);
                    }}
                    className="space-y-2"
                  >
                    <input
                      type="email"
                      required
                      placeholder={t.footer.newsletterPlaceholder}
                      className="w-full bg-mamounia-ivory border border-mamounia-sand rounded-none px-3 py-2 text-xs text-mamounia-charcoal focus:outline-none focus:border-mamounia-gold"
                    />
                    <button
                      type="submit"
                      className="w-full py-2 rounded-none text-xs font-semibold uppercase tracking-wider bg-mamounia-gold text-white hover:bg-mamounia-gold-dark transition-colors"
                    >
                      {t.footer.subscribeBtn}
                    </button>
                  </form>
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-mamounia-muted gap-3 text-center sm:text-left rtl:sm:text-right">
                <p>{t.footer.rights}</p>
                <div className="flex items-center gap-5">
                  <a href="#" className="hover:text-mamounia-gold">Mentions Légales</a>
                  <a href="#" className="hover:text-mamounia-gold">Confidentialité</a>
                  <a href="#" className="hover:text-mamounia-gold">The Leading Hotels of the World</a>
                </div>
              </div>
            </div>
          </footer>

          {/* =========================================================================
              16. FLOATING WHATSAPP RADAR PULSE WIDGET
          ========================================================================= */}
          <div className="fixed bottom-5 right-5 z-40 group">
            <div className="absolute bottom-full right-0 mb-2.5 hidden group-hover:flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-white border border-mamounia-gold/40 text-xs text-mamounia-charcoal shadow-palace whitespace-nowrap animate-fadeIn">
              <span className="w-2 h-2 rounded-none bg-[#25D366] animate-ping"></span>
              <span>Discutez avec la conciergerie de La Mamounia</span>
            </div>

            <div className="relative">
              <span className="absolute -inset-2 rounded-none bg-[#25D366] opacity-30 animate-ping"></span>
              <button
                onClick={handleBookWhatsApp}
                aria-label="Direct WhatsApp Concierge"
                className="relative w-12 h-12 rounded-none bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform duration-300"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
              </button>
            </div>
          </div>

          {/* =========================================================================
              17. FULLSCREEN LIGHTBOX MODAL
          ========================================================================= */}
          {lightboxOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-fadeIn">
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-5 right-5 z-50 w-10 h-10 rounded-none bg-white/20 text-white hover:text-mamounia-gold flex items-center justify-center text-lg transition-transform hover:scale-110"
                aria-label="Close Lightbox"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              <div className="absolute top-5 left-5 z-50 px-3 py-1 rounded-none bg-white/20 text-[11px] font-mono text-white">
                {lightboxIndex + 1} / {lightboxPhotos.length}
              </div>

              <button
                onClick={prevLightbox}
                className="absolute left-3 sm:left-6 z-50 w-10 h-10 rounded-none bg-white/20 text-white hover:text-mamounia-gold flex items-center justify-center text-base transition-transform hover:scale-110"
                aria-label="Previous Photo"
              >
                <i className={`fa-solid ${t.dir === 'rtl' ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
              </button>

              <div className="max-w-5xl max-h-[85vh] p-4 flex flex-col items-center">
                <img
                  src={lightboxPhotos[lightboxIndex]}
                  alt="La Mamounia Gallery Detail"
                  className="max-w-full max-h-[75vh] object-contain rounded-none shadow-2xl"
                />
              </div>

              <button
                onClick={nextLightbox}
                className="absolute right-3 sm:right-6 z-50 w-10 h-10 rounded-none bg-white/20 text-white hover:text-mamounia-gold flex items-center justify-center text-base transition-transform hover:scale-110"
                aria-label="Next Photo"
              >
                <i className={`fa-solid ${t.dir === 'rtl' ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>
              </button>
            </div>
          )}

          {/* =========================================================================
              19. SUITES COMPARISON MATRIX MODAL
          ========================================================================= */}
          {isCompareModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
              <div className="relative w-full max-w-4xl bg-white border border-mamounia-gold rounded-none p-6 sm:p-7 shadow-2xl overflow-y-auto max-h-[88vh]">
                <button
                  onClick={() => setIsCompareModalOpen(false)}
                  className="absolute top-5 right-5 w-8 h-8 rounded-none bg-mamounia-ivory text-mamounia-charcoal hover:text-mamounia-gold flex items-center justify-center transition-colors"
                >
                  <i className="fa-solid fa-xmark text-sm"></i>
                </button>

                <h3 className="font-serif text-xl sm:text-2xl text-mamounia-charcoal font-light mb-5 text-center">
                  {t.suitesSection.compareAll}
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-left rtl:text-right text-xs">
                    <thead>
                      <tr className="border-b border-mamounia-sand text-mamounia-gold uppercase text-[10px] tracking-wider">
                        <th className="py-2.5 px-3">Hébergement</th>
                        <th className="py-2.5 px-3">Superficie</th>
                        <th className="py-2.5 px-3">Vue</th>
                        <th className="py-2.5 px-3">Distinction</th>
                        <th className="py-2.5 px-3">Tarif / Nuit</th>
                        <th className="py-2.5 px-3 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-mamounia-sand/40">
                      {t.roomsData.map((room) => (
                        <tr key={room.id} className="hover:bg-mamounia-ivory/60 transition-colors">
                          <td className="py-3 px-3 font-serif text-sm font-medium text-mamounia-charcoal flex items-center gap-2.5">
                            <img src={room.images[0]} alt={room.title} className="w-10 h-10 rounded-none object-cover" />
                            <span>{room.title}</span>
                          </td>
                          <td className="py-3 px-3 text-mamounia-muted">{room.area}</td>
                          <td className="py-3 px-3 text-mamounia-muted">{room.view}</td>
                          <td className="py-3 px-3 text-mamounia-gold font-medium">{room.badge}</td>
                          <td className="py-3 px-3 font-mono font-bold text-mamounia-charcoal text-sm">
                            {formatPrice(room.priceEur)}
                          </td>
                          <td className="py-3 px-3 text-center">
                            <button
                              onClick={() => {
                                setIsCompareModalOpen(false);
                                handleSelectAndScroll(room.id);
                              }}
                              className="px-3.5 py-1 rounded-none text-[10px] font-semibold uppercase bg-mamounia-gold text-white hover:bg-mamounia-gold-dark transition-colors shadow-2xs"
                            >
                              Réserver
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              20. BOOKING CONFIRMATION SUCCESS MODAL WITH REFERENCE & PRINT
          ========================================================================= */}
          {isSuccessModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
              <div className="relative w-full max-w-md bg-white border-2 border-mamounia-gold rounded-none p-6 sm:p-7 shadow-2xl text-center">
                <div className="w-14 h-14 mx-auto rounded-none bg-mamounia-gold/15 border border-mamounia-gold flex items-center justify-center text-mamounia-gold mb-4 shadow-gold-soft">
                  <i className="fa-solid fa-crown text-xl text-mamounia-gold"></i>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-normal text-mamounia-charcoal mb-1.5">
                  {t.modalSuccess.title}
                </h3>
                <p className="text-xs text-mamounia-muted font-light mb-5">
                  {t.modalSuccess.subtitle}
                </p>

                <div className="p-3.5 rounded-none bg-mamounia-ivory border border-mamounia-gold/40 mb-5">
                  <span className="text-[9px] uppercase tracking-widest text-mamounia-gold block mb-0.5">
                    {t.modalSuccess.bookingRef}
                  </span>
                  <span className="font-mono text-lg sm:text-xl font-bold tracking-wider text-mamounia-charcoal">
                    {bookingReference}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-mamounia-charcoal text-left rtl:text-right pb-5 border-b border-mamounia-sand mb-5">
                  <div className="flex justify-between">
                    <span className="text-mamounia-muted">{t.modalSuccess.nameLabel}</span>
                    <span className="font-semibold">{guestName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mamounia-muted">{t.modalSuccess.roomLabel}</span>
                    <span className="font-semibold text-mamounia-gold">{selectedRoom.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mamounia-muted">{t.modalSuccess.datesLabel}</span>
                    <span className="font-semibold">{checkIn} → {checkOut} ({nights} {t.booking.nights})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mamounia-muted">{t.modalSuccess.totalLabel}</span>
                    <span className="font-mono font-bold text-mamounia-charcoal text-sm">{formatPrice(totalEur)}</span>
                  </div>
                </div>

                <p className="text-[10px] text-mamounia-muted italic mb-5">
                  {t.modalSuccess.note}
                </p>

                <div className="flex gap-2.5">
                  <button
                    onClick={() => window.print()}
                    className="flex-1 py-2.5 rounded-none text-xs font-semibold uppercase tracking-wider bg-mamounia-ivory border border-mamounia-sand text-mamounia-charcoal hover:border-mamounia-gold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <i className="fa-solid fa-print text-mamounia-gold text-xs"></i>
                    <span>{t.modalSuccess.printBtn}</span>
                  </button>
                  <button
                    onClick={() => setIsSuccessModalOpen(false)}
                    className="flex-1 py-2.5 rounded-none text-xs font-semibold uppercase tracking-wider bg-mamounia-gold text-white font-bold hover:bg-mamounia-gold-dark transition-colors shadow-2xs"
                  >
                    {t.modalSuccess.closeBtn}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }

    // Mount React App
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
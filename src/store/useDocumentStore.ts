import { create } from 'zustand';

export interface ComparableBien {
  photo: string;
  adresse: string;
  description: string;
  surface: string;
  prix: string;
  prixM2: string;
}

export interface DocumentState {
  // Page 1 - Couverture
  cover: {
    ville: string;
    adresse: string;
    photo: string;
  };

  // Page 2 - Introduction
  intro: {
    titre: string;
    salutation: string;
    consultantNom: string;
    consultantPrenom: string;
    societe: string;
    texte: string;
    photoInterieur: string;
    photoMap: string;
    tocTitre: string;
    tocItems: { text: string; page: string; sub?: string }[];
  };

  // Page 2 - Description
  description: {
    titre: string;
    texte: string;
    localisation: string;
  };

  // Page 3 - Caracteristiques
  caracteristiques: {
    titreLigne1: string;
    titreLigne2: string;
    surfaceHabitable: string;
    chambres: string;
    nombrePieces: string;
    etage: string;
    niveau: string;
    etatGeneral: string;
    exposition: string;
    vue: string;
    espaceExterieur: string;
    ascenseur: string;
    anneeConstruction: string;
    modeChauffage: string;
    eauChaude: string;
    charges: string;
    annexes: string;
    gardien: string;
    photo: string;
  };

  // Page 3 - Valorisation
  valorisation: {
    titreLigne1: string;
    titreLigne2: string;
    titreLigne3: string;
    introTexte: string;
    avantages: string[];
    inconvenients: string[];
  };

  // Page 4 - Analyse marche
  marche: {
    titre: string;
    texte: string;
    photo: string;
  };

  // Page 4 - Vendus proches
  vendusProches: ComparableBien[];

  // Page 5 - En vente proches
  enVenteProches: ComparableBien[];

  // Page 5 - Prix
  prix: {
    introTexte: string;
    montant: string;
    prixM2: string;
    photo: string;
  };

  // Page 6 - Maison Bonaparte
  maisonBonaparte: {
    photoAgence: string;
    photosImplantations: string[];
    regions: {
      parisLigne1: string;
      parisLigne2: string;
      azur: string;
      basqueLigne1: string;
      basqueLigne2: string;
    };
  };

  // Page 7 - Mandat & Strategie
  mandat: {
    photoMandat: string;
    photosStrategie: string[];
  };

  // Page 8 - Diffusion
  diffusion: {
    photo: string;
  };

  // Page 9 - Contact
  contact: {
    photo: string;
    prenom: string;
    nom: string;
    titre: string;
    localisation: string;
    telephone: string;
    email: string;
  };

  // Actions
  updateCover: (data: Partial<DocumentState['cover']>) => void;
  updateIntro: (data: Partial<DocumentState['intro']>) => void;
  updateDescription: (data: Partial<DocumentState['description']>) => void;
  updateCaracteristiques: (data: Partial<DocumentState['caracteristiques']>) => void;
  updateValorisation: (data: Partial<DocumentState['valorisation']>) => void;
  updateMarche: (data: Partial<DocumentState['marche']>) => void;
  updateVendusProches: (index: number, data: Partial<ComparableBien>) => void;
  updateEnVenteProches: (index: number, data: Partial<ComparableBien>) => void;
  updatePrix: (data: Partial<DocumentState['prix']>) => void;
  updateContact: (data: Partial<DocumentState['contact']>) => void;
  updateMaisonBonaparte: (data: Partial<DocumentState['maisonBonaparte']>) => void;
  updateMandat: (data: Partial<DocumentState['mandat']>) => void;
  updateDiffusion: (data: Partial<DocumentState['diffusion']>) => void;
}

const defaultBien: ComparableBien = {
  photo: '',
  adresse: 'ADRESSE',
  description: 'En bon état/à rénover, XX étage\nAvec/sans ascenseur',
  surface: 'XX m²',
  prix: 'Vendu à XX XXX XXX€',
  prixM2: 'XXXXX €/m²',
};

export const useDocumentStore = create<DocumentState>((set) => ({
  cover: {
    ville: 'PARIS',
    adresse: '228, RUE DES COMBES - 75006',
    photo: '/images/page1_img1.jpeg',
  },

  intro: {
    titre: 'INTRODUCTION',
    salutation: 'Madame, Monsieur,',
    consultantPrenom: 'Cécilia',
    consultantNom: 'LAURENT',
    societe: 'Maison BONAPARTE',
    texte: "Avant de vous faire part de nos différentes réflexions concernant votre bien, nous tenons à vous remercier d'avoir fait appel à la Maison BONAPARTE pour l'avis de valeur de votre appartement ainsi que pour l'accueil que vous nous avez réservé.",
    photoInterieur: '/images/page2_img1.jpeg',
    photoMap: '/images/page2_img2.jpeg',
    tocTitre: 'DANS CE DOCUMENT',
    tocItems: [
      { text: 'Caractéristiques du bien', page: '4' },
      { text: 'Éléments de valorisation', page: '5', sub: 'et de pondération' },
      { text: 'Analyse du marché immobilier', page: '6' },
      { text: 'Historique et chiffres clés', page: '7' },
      { text: 'Biens récemment vendus', page: '8', sub: 'à proximité' },
      { text: 'Prix de présentation', page: '9' },
      { text: 'Maison BONAPARTE', page: '10' },
      { text: 'Notre mandat de vente', page: '11' },
      { text: 'Stratégie de communication', page: '12', sub: 'et marketing' },
      { text: 'Contact', page: '13' },
    ],
  },

  description: {
    titre: 'DESCRIPTION',
    texte: "Situé au 44, rue Saint-Placide dans le 6e arrondissement de Paris, cet appartement familial de 123 m² offre un cadre de vie à la fois élégant et confortable. Niché au 5e étage avec ascenseur, il se compose d'une entrée accueillante, donnant accès à un séjour lumineux s'ouvrant sur un balcon filant, idéal pour profiter de l'extérieur.\n\nL'espace de vie comprend également une salle à manger, un bureau fonctionnel, ainsi qu'une cuisine séparée, parfaitement équipée pour les repas en famille. L'appartement dispose de deux chambres spacieuses, d'une salle de bains, et de toilettes séparées, offrant un agencement pratique et harmonieux pour la vie quotidienne.\n\nCe bien rare allie confort, luminosité et emplacement privilégié au coeur de l'un des quartiers les plus prisés de Paris.",
    localisation: 'PARIS 06 | RUE SAINT-PLACIDE',
  },

  caracteristiques: {
    titreLigne1: 'CARACTÉRISTIQUES',
    titreLigne2: 'DU BIEN',
    surfaceHabitable: '130m²',
    chambres: '4',
    nombrePieces: '5 pièces',
    etage: '8ème étage',
    niveau: '1',
    etatGeneral: "état d'usure",
    exposition: 'Nord / Ouest',
    vue: 'dégagée',
    espaceExterieur: 'balcon filant 37 m²',
    ascenseur: 'oui',
    anneeConstruction: '1958',
    modeChauffage: 'Collectif',
    eauChaude: 'collectif',
    charges: '2008 euros par trimestre',
    annexes: 'place de parking, cave',
    gardien: 'Oui',
    photo: '/images/page3_img1.jpeg',
  },

  valorisation: {
    titreLigne1: 'LES ÉLÉMENTS',
    titreLigne2: 'DE VALORISATION',
    titreLigne3: 'ET DE PONDÉRATION',
    introTexte: "Outre la prise en compte du marché immobilier actuel, nous avons identifié des points d'importance lors de notre visite du bien permettant de mieux ajuster sa valorisation.",
    avantages: [
      'Son adresse recherchée dans le 6e arrondissement, à proximité directe de commerces de renoms',
      'Sa situation en étage élevé au sein d\'un bel immeuble lui conférant une belle clarté,',
      'Ses volumes bien répartis dans les pièces de vie',
    ],
    inconvenients: [
      'La nécessité de travaux de rénovation et le budget y afférant.',
    ],
  },

  marche: {
    titre: 'LE MARCHÉ PARISIEN EN 2026',
    texte: "En 2026, le marché immobilier parisien se stabilise après plusieurs années de rebond progressif. Les taux d'intérêt restent relativement bas pour les meilleurs profils, ce qui soutient le pouvoir d'achat des acquéreurs, tandis que la demande pour les biens bien situés et performants énergétiquement reste forte.\n\nLes prix ont progressé modérément en 2025, de 3 à 5 % en moyenne, avec de fortes disparités selon les arrondissements : les quartiers centraux et les biens rénovés continuent de se valoriser, tandis que les logements nécessitant des travaux stagnent, voire baissent légèrement.\n\nLa tension sur l'offre, particulièrement dans le centre de la capitale, maintient la pression sur les prix dans les zones les plus recherchées.\n\nMalgré un contexte économique et international encore incertain, les perspectives pour 2026 restent globalement favorables, avec une croissance mesurée et un retour à un équilibre durable entre l'offre et la demande.",
    photo: '/images/page4_img1.jpeg',
  },

  vendusProches: [
    { ...defaultBien, photo: '/images/page4_img2.jpeg' },
    { ...defaultBien, photo: '/images/page4_img3.jpeg' },
    { ...defaultBien, photo: '/images/page4_img4.jpeg' },
  ],

  enVenteProches: [
    { ...defaultBien, photo: '/images/page5_img1.jpeg' },
    { ...defaultBien, photo: '/images/page5_img2.jpeg' },
    { ...defaultBien, photo: '/images/page5_img3.jpeg' },
  ],

  prix: {
    introTexte: "Prenant les éléments précédemment cités, nous considérons la valeur objective de votre bien aux alentours des :",
    montant: '1.950.000€',
    prixM2: '12 046 €/m²',
    photo: '/images/page5_img4.jpeg',
  },

  maisonBonaparte: {
    photoAgence: '/images/page6_img1.jpeg',
    photosImplantations: ['/images/page6_img2.jpeg', '/images/page6_img3.jpeg', '/images/page6_img4.jpeg', '/images/page6_img5.jpeg', '/images/page6_img6.jpeg'],
    regions: {
      parisLigne1: 'PARIS',
      parisLigne2: '& ÎLE-DE-FRANCE',
      azur: "CÔTE D'AZUR",
      basqueLigne1: 'PAYS BASQUE',
      basqueLigne2: '& CÔTE ATLANTIQUE',
    },
  },

  mandat: {
    photoMandat: '/images/page7_img1.jpeg',
    photosStrategie: ['/images/page7_img2.jpeg', '/images/page7_img3.jpeg', '/images/page7_img4.jpeg', '/images/page7_img5.jpeg'],
  },

  diffusion: {
    photo: '/images/page8_img1.jpeg',
  },

  contact: {
    photo: '/images/page9_img1.jpeg',
    prenom: 'Cécilia',
    nom: 'LAURENT',
    titre: 'Consultante en immobilier',
    localisation: 'Saint-Tropez',
    telephone: '+33 6 16 90 03 71',
    email: 'c.laurent@bonaparte-artdevivre.com',
  },

  // Actions
  updateCover: (data) => set((state) => ({ cover: { ...state.cover, ...data } })),
  updateIntro: (data) => set((state) => ({ intro: { ...state.intro, ...data } })),
  updateDescription: (data) => set((state) => ({ description: { ...state.description, ...data } })),
  updateCaracteristiques: (data) => set((state) => ({ caracteristiques: { ...state.caracteristiques, ...data } })),
  updateValorisation: (data) => set((state) => ({ valorisation: { ...state.valorisation, ...data } })),
  updateMarche: (data) => set((state) => ({ marche: { ...state.marche, ...data } })),
  updateVendusProches: (index, data) => set((state) => {
    const updated = [...state.vendusProches];
    updated[index] = { ...updated[index], ...data };
    return { vendusProches: updated };
  }),
  updateEnVenteProches: (index, data) => set((state) => {
    const updated = [...state.enVenteProches];
    updated[index] = { ...updated[index], ...data };
    return { enVenteProches: updated };
  }),
  updatePrix: (data) => set((state) => ({ prix: { ...state.prix, ...data } })),
  updateContact: (data) => set((state) => ({ contact: { ...state.contact, ...data } })),
  updateMaisonBonaparte: (data) => set((state) => ({ maisonBonaparte: { ...state.maisonBonaparte, ...data } })),
  updateMandat: (data) => set((state) => ({ mandat: { ...state.mandat, ...data } })),
  updateDiffusion: (data) => set((state) => ({ diffusion: { ...state.diffusion, ...data } })),
}));

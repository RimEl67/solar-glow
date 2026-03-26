export interface Product {
  id: number
  title: string
  badge: string | null
  category: string
  image: string
  description: string
}

export const allProducts: Product[] = [
  // Panneaux Solaires
  { id: 1, title: 'JINKO 590Wc Tiger Neo', badge: null, category: 'Panneaux Solaires', image: 'https://image.made-in-china.com/202f0j00bnmchUwaGCod/Jinko-Tiger-Neo-590W-Mono-Facial-Solar-Panel-with-English-Label-1-Meter-Long-Line-Version-PV-Module-72hl4-V-.webp', description: 'Technologie N-Type pour un rendement maximal et une durabilité accrue.' },
  { id: 2, title: 'LONGI 585Wc Hi-MO', badge: null, category: 'Panneaux Solaires', image: 'https://powernsun.com/wp-content/webp-express/webp-images/uploads/2023/09/Longi-570W-Hi-MO-6-Solar-Panel-LR5-72HPH-570M-600x600.png.webp', description: 'Performance exceptionnelle même en conditions de faible ensoleillement.' },
  { id: 3, title: 'JA SOLAR 565Wc', badge: 'Offre', category: 'Panneaux Solaires', image: 'https://image.made-in-china.com/202f0j00UsAilYfRgIpw/Ja-Solar-Panels-460W-PV-for-Home-Solar-Panel.webp', description: 'Excellent rapport qualité/prix pour projets résidentiels et tertiaires.' },
  { id: 4, title: 'CANADIAN SOLAR 585Wc', badge: null, category: 'Panneaux Solaires', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvh6dhffxDWTSxnF8jLx536Vj-x4Cboss77w&s', description: 'Haute puissance et fiabilité prouvée pour installations industrielles.' },
  { id: 5, title: 'TRINASOLAR 585Wc', badge: 'Nouveau', category: 'Panneaux Solaires', image: 'https://res.cloudinary.com/sonix-solar-gmbh/e_make_transparent:1/q_auto,f_auto,h_600,w_600,c_pad/vptialbzykx9hefqkvra', description: 'Dernière génération de modules haute efficacité à 21%+' },
  { id: 6, title: 'JINKO 585Wc Tiger Pro', badge: null, category: 'Panneaux Solaires', image: 'https://www.cedarsolar.com/wp-content/uploads/2024/02/Jinko.png', description: 'Optimisé pour le marché Marocain avec une résistance thermique élevée.' },

  // Onduleurs Hybrides
  { id: 9, title: 'DEYE 5KW SG03LP1-EU', badge: 'Populaire', category: 'Onduleurs Hybrides', image: 'https://image.made-in-china.com/202f0j00pzMqDLZGHYcy/Deye-Sun-5K-Sg03lp1-EU-Single-Phase-2-MPPT-5000W-5kw-Hybrid-Solar-Inverter.webp', description: 'Onduleur hybride monophasé polyvalent avec gestion intelligente.' },
  { id: 10, title: 'DEYE 10KW Triphasé', badge: 'Puissant', category: 'Onduleurs Hybrides', image: 'https://batteryshop.ma/wp-content/uploads/2025/04/DEYE-10KW-TRIPHASE.jpg', description: 'Solution idéale pour les grandes villas et sites industriels.' },
  { id: 11, title: 'SOLAX X1 3KW On-Grid', badge: null, category: 'Onduleurs Hybrides', image: 'https://fr.solaxpower.com/uploadfile/11/202507/bcf8461737.webp', description: 'Compact et efficace pour autoconsommation résidentielle simple.' },

  // Batteries
  { id: 17, title: 'LUNA HUAWEI 5KWh', badge: null, category: 'Batteries', image: 'https://gfx3.senetic.com/akeneo-catalog/d/1/8/b/d18b0c8c378b3954b3a1cef974f564993881f207_LUNA2000_5_S0.webp', description: 'Design modulaire haut de gamme, compatible avec onduleurs Huawei.' },
  { id: 18, title: 'SUNGROW 9.6KWh Lithium', badge: null, category: 'Batteries', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk9RWhBx2LAh4TlpeDgbNEcUSn0Oa2WlBPVw&s', description: 'Capacité de stockage élevée pour autonomie énergétique complète.' },
  { id: 19, title: 'MUST 100Ah Lithium', badge: 'Offre', category: 'Batteries', image: 'https://tvopa.com/wp-content/uploads/2024/02/000lp16x-1-600x600-1.jpg', description: 'Batterie lithium-ion performante pour systèmes hybrides compacts.' },

  // Projecteurs
  { id: 25, title: 'Blue Carbon 400W', badge: 'Offre', category: 'Projecteurs', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_oq-IJJLtloV8u2jysscpP4B2FS0_Bii_Ag&s', description: 'Éclairage puissant pour extérieurs, parkings et jardins.' },
  { id: 26, title: 'Blue Carbon 300W', badge: 'Offre', category: 'Projecteurs', image: 'https://i0.wp.com/irricool.ma/wp-content/uploads/2024/02/BLU-500.webp?fit=851%2C851&ssl=1', description: 'Autonomie toute la nuit avec batterie intégrée haute capacité.' },

  // Nouveaux ajouts vus dans la section
  { id: 101, title: 'Pompe Immergée VEICHI DC Solaire', badge: 'Nouveau', category: 'Pompes Solaires', image: 'https://fr.veichi.com/skin/vcen/images/product/bldc/bldc-all-b.jpg', description: 'Système complet de pompage solaire haute performance.' },
  { id: 102, title: 'Chauffe-Eau Solaire BATITHERM 200L', badge: 'Nouveau', category: 'Chauffe-eau', image: 'https://ecolohome.ma/wp-content/uploads/2025/10/chauffe-eau-solaire-maroc-200-1.jpg', description: 'Solution écologique pour eau chaude sanitaire gratuite.' },
  { id: 103, title: 'Kit Pompe Piscine GALACTIC', badge: 'Nouveau', category: 'Kits Solaires', image: 'https://poolzone.ma/wp-content/uploads/2024/11/Design-sans-titre-35.jpg', description: 'Filtration et pompage solaire pour piscines résidentielles.' },
  { id: 104, title: 'Pompe Piscine ASTRALPOOL', badge: 'Nouveau', category: 'Pompes Solaires', image: 'https://www.quimipool.com/img/cms/Bombas/Astralpool/desc-Sena-01.png', description: 'Pompe robuste et fiable optimisée pour le solaire.' },
]

// Base de données complète des cartes Anyme avec images PNG locales
const cardsData = [
  // ===== ÉDITION 1 (15 cartes) =====
  
  // Common (6 cartes)
  {
    name: "Anyme023",
    edition: "Edition 1",
    rarity: "Common",
    image: "Assets/Card/Edition 1/Common/Anyme023.png",
    description: "La carte de base, représentant l'esprit Anyme.",
    stats: { PV: 50, Attaque: 15, Défense: 10 }
  },
  {
    name: "Le Bobo Riche",
    edition: "Edition 1",
    rarity: "Common",
    image: "Assets/Card/Edition 1/Common/Le_Bobo_Riche.png",
    description: "Un bobo qui aime le luxe et les brunchs à Paris. Toujours à la recherche du meilleur restaurant branché.",
    stats: { PV: 80, Attaque: 20, Défense: 10 }
  },
  {
    name: "Le Chauffard",
    edition: "Edition 1",
    rarity: "Common",
    image: "Assets/Card/Edition 1/Common/Le_Chauffard.png",
    description: "Toujours pressé, jamais à l'heure. Maître de l'art de la conduite parisienne.",
    stats: { PV: 60, Attaque: 30, Défense: 5 }
  },
  {
    name: "Diego Flamengo",
    edition: "Edition 1",
    rarity: "Common",
    image: "Assets/Card/Edition 1/Common/Diego_Flamengo.png",
    description: "Le roi du football brésilien. Ses dribbles sont légendaires.",
    stats: { PV: 85, Attaque: 45, Défense: 15 }
  },
  {
    name: "Taper Laser",
    edition: "Edition 1",
    rarity: "Common",
    image: "Assets/Card/Edition 1/Common/Taper_Laser.png",
    description: "Attaque laser dévastatrice. Attention aux yeux !",
    stats: { PV: 70, Attaque: 60, Défense: 8 }
  },
  {
    name: "Le Bobo 80PV",
    edition: "Edition 1",
    rarity: "Common",
    image: "Assets/Card/Edition 1/Common/le_bobo_80pv.png",
    description: "Un bobo avec 80 points de vie. Plus résistant que les autres.",
    stats: { PV: 80, Attaque: 25, Défense: 20 }
  },

  // Rare (1 carte)
  {
    name: "Pieds Jaunes",
    edition: "Edition 1",
    rarity: "Rare",
    image: "Assets/Card/Edition 1/Rare/Pieds_Jaunes.png",
    description: "Une créature mystérieuse aux pieds jaunes. Son origine reste un mystère.",
    stats: { PV: 95, Attaque: 35, Défense: 25 }
  },

  // Double Rare (3 cartes)
  {
    name: "Ajar",
    edition: "Edition 1",
    rarity: "Double Rare",
    image: "Assets/Card/Edition 1/Double Rare/Ajar.png",
    description: "Une entité mystique aux pouvoirs extraordinaires.",
    stats: { PV: 110, Attaque: 55, Défense: 35 }
  },
  {
    name: "Le Bobo Ghetto",
    edition: "Edition 1",
    rarity: "Double Rare",
    image: "Assets/Card/Edition 1/Double Rare/Le_Bobo_Ghetto.png",
    description: "Un bobo des quartiers populaires. Plus street que les autres.",
    stats: { PV: 90, Attaque: 40, Défense: 30 }
  },
  {
    name: "Poissanyme",
    edition: "Edition 1",
    rarity: "Double Rare",
    image: "Assets/Card/Edition 1/Double Rare/Poissanyme.png",
    description: "Une créature aquatique mystérieuse. Maître des océans Anyme.",
    stats: { PV: 100, Attaque: 45, Défense: 40 }
  },

  // Ultra Rare (3 cartes)
  {
    name: "Esthewww",
    edition: "Edition 1",
    rarity: "Ultra Rare",
    image: "Assets/Card/Edition 1/Ultra Rare/Esthewww.png",
    description: "Une beauté légendaire qui ensorcelle tous ceux qui la croisent.",
    stats: { PV: 85, Attaque: 30, Défense: 45 }
  },
  {
    name: "Le Fury",
    edition: "Edition 1",
    rarity: "Ultra Rare",
    image: "Assets/Card/Edition 1/Ultra Rare/Le_Fury.png",
    description: "Un guerrier enragé aux pouvoirs destructeurs.",
    stats: { PV: 120, Attaque: 70, Défense: 20 }
  },
  {
    name: "Squntt",
    edition: "Edition 1",
    rarity: "Ultra Rare",
    image: "Assets/Card/Edition 1/Ultra Rare/Squntt.png",
    description: "Une créature mystérieuse aux pouvoirs cachés.",
    stats: { PV: 95, Attaque: 50, Défense: 35 }
  },

  // Amazing Rare (2 cartes)
  {
    name: "Le Chevalier",
    edition: "Edition 1",
    rarity: "Amazing Rare",
    image: "Assets/Card/Edition 1/Amazing Rare/Le_Chevalier.png",
    description: "Un chevalier légendaire, protecteur de l'univers Anyme.",
    stats: { PV: 130, Attaque: 60, Défense: 50 }
  },
  {
    name: "Mataaaaaa Ex",
    edition: "Edition 1",
    rarity: "Amazing Rare",
    image: "Assets/Card/Edition 1/Amazing Rare/Mataaaaaa Ex.png",
    description: "Une carte mystérieuse avec des pouvoirs inconnus.",
    stats: { PV: 150, Attaque: 80, Défense: 60 }
  },

  // ===== PROMOTION (2 cartes) =====
  {
    name: "Skibidi023 Ex",
    edition: "Promotion",
    rarity: "Ultra Rare",
    image: "Assets/Card/Promotion/Skibidi023 Ex.png",
    description: "Une carte promo exclusive pour les vrais fans. Édition limitée et numérotée.",
    stats: { PV: 90, Attaque: 35, Défense: 25 }
  },
  {
    name: "900K MERCI GOLD",
    edition: "Promotion",
    rarity: "Amazing Rare",
    image: "Assets/Card/Promotion/900K_MERCI_GOLD.png",
    description: "Carte spéciale pour célébrer les 900K abonnés. Une pièce de collection unique.",
    stats: { PV: 200, Attaque: 100, Défense: 100 }
  },

  // ===== ÉDITION 3 - ERE SHATTA (34 cartes) =====
  
  // Common (14 cartes)
  {
    name: "Andrew Williams",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "Assets/Card/Edition 3 - Ere Shatta/Common/andrew_williams.png",
    description: "Un personnage mystérieux de l'ère Shatta.",
    stats: { PV: 75, Attaque: 25, Défense: 15 }
  },
  {
    name: "Anychampy",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "Assets/Card/Edition 3 - Ere Shatta/Common/Anychampy.png",
    description: "Un champion de l'ère Shatta.",
    stats: { PV: 80, Attaque: 30, Défense: 20 }
  },
  {
    name: "Anymatcha",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "Assets/Card/Edition 3 - Ere Shatta/Common/Anymatcha.png",
    description: "Une créature mystique de l'ère Shatta.",
    stats: { PV: 70, Attaque: 35, Défense: 15 }
  },
  {
    name: "Apero",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "Assets/Card/Edition 3 - Ere Shatta/Common/Apero.png",
    description: "Le roi de l'apéro dans l'ère Shatta.",
    stats: { PV: 65, Attaque: 20, Défense: 25 }
  },
  {
    name: "Aubervilliers",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "Assets/Card/Edition 3 - Ere Shatta/Common/aubervilliers.png",
    description: "Représentant de la ville d'Aubervilliers dans l'ère Shatta.",
    stats: { PV: 85, Attaque: 25, Défense: 30 }
  },
  {
    name: "Charlot",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "Assets/Card/Edition 3 - Ere Shatta/Common/Charlot.png",
    description: "Un personnage comique de l'ère Shatta.",
    stats: { PV: 60, Attaque: 15, Défense: 20 }
  },
  {
    name: "Doboumboum",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "Assets/Card/Edition 3 - Ere Shatta/Common/doboumboum.png",
    description: "Une créature explosive de l'ère Shatta.",
    stats: { PV: 55, Attaque: 50, Défense: 5 }
  },
  {
    name: "Elecbrice",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "Assets/Card/Edition 3 - Ere Shatta/Common/Elecbrice.png",
    description: "Une créature électrique mystérieuse.",
    stats: { PV: 70, Attaque: 40, Défense: 10 }
  },
  {
    name: "Lartisan",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "Assets/Card/Edition 3 - Ere Shatta/Common/Lartisan.png",
    description: "Un artisan talentueux de l'ère Shatta.",
    stats: { PV: 75, Attaque: 20, Défense: 35 }
  },
  {
    name: "Le Bobo de Matchaland",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "Assets/Card/Edition 3 - Ere Shatta/Common/Le_bobo_de_matchaland.png",
    description: "Un bobo spécialisé dans les matchs de l'ère Shatta.",
    stats: { PV: 80, Attaque: 35, Défense: 25 }
  },
  {
    name: "Le Rap Mojo",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "Assets/Card/Edition 3 - Ere Shatta/Common/Le_Rap_Mojo.png",
    description: "Un rappeur légendaire de l'ère Shatta.",
    stats: { PV: 75, Attaque: 30, Défense: 20 }
  },
  {
    name: "Patrick Foire",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "Assets/Card/Edition 3 - Ere Shatta/Common/Patrick_Foire.png",
    description: "Un personnage mystérieux de l'ère Shatta.",
    stats: { PV: 70, Attaque: 25, Défense: 30 }
  },
  {
    name: "Redbull",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "Assets/Card/Edition 3 - Ere Shatta/Common/Redbull.png",
    description: "Une créature énergique de l'ère Shatta.",
    stats: { PV: 65, Attaque: 45, Défense: 15 }
  },
  {
    name: "Sarcelles",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "Assets/Card/Edition 3 - Ere Shatta/Common/sarcelles.png",
    description: "Représentant de la ville de Sarcelles dans l'ère Shatta.",
    stats: { PV: 80, Attaque: 25, Défense: 30 }
  },

  // Rare (6 cartes)
  {
    name: "Anymversaire",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Rare",
    image: "Assets/Card/Edition 3 - Ere Shatta/Rare/Anymversaire.png",
    description: "Un personnage célèbre de l'ère Shatta.",
    stats: { PV: 90, Attaque: 35, Défense: 25 }
  },
  {
    name: "Juanhijo",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Rare",
    image: "Assets/Card/Edition 3 - Ere Shatta/Rare/Juanhijo.png",
    description: "Un personnage mystérieux de l'ère Shatta.",
    stats: { PV: 85, Attaque: 40, Défense: 20 }
  },
  {
    name: "Le Charmeur",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Rare",
    image: "Assets/Card/Edition 3 - Ere Shatta/Rare/Le_charmeur.png",
    description: "Un charmeur légendaire de l'ère Shatta.",
    stats: { PV: 80, Attaque: 25, Défense: 40 }
  },
  {
    name: "Le Dealer",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Rare",
    image: "Assets/Card/Edition 3 - Ere Shatta/Rare/le_dealer.png",
    description: "Un dealer mystérieux de l'ère Shatta.",
    stats: { PV: 75, Attaque: 45, Défense: 15 }
  },
  {
    name: "Le Peril",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Rare",
    image: "Assets/Card/Edition 3 - Ere Shatta/Rare/Le_peril.png",
    description: "Une créature dangereuse de l'ère Shatta.",
    stats: { PV: 95, Attaque: 50, Défense: 20 }
  },
  {
    name: "Le Skatos",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Rare",
    image: "Assets/Card/Edition 3 - Ere Shatta/Rare/Le_skatos.png",
    description: "Un personnage mystérieux de l'ère Shatta.",
    stats: { PV: 85, Attaque: 35, Défense: 30 }
  },

  // Double Rare (4 cartes)
  {
    name: "Cebedouze Ex",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Double Rare",
    image: "Assets/Card/Edition 3 - Ere Shatta/Double Rare/cebedouze_ex.png",
    description: "Une version exclusive de Cebedouze.",
    stats: { PV: 110, Attaque: 55, Défense: 35 }
  },
  {
    name: "Do Brazil Ex",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Double Rare",
    image: "Assets/Card/Edition 3 - Ere Shatta/Double Rare/do_brazil_ex.png",
    description: "Une version exclusive de Do Brazil.",
    stats: { PV: 105, Attaque: 50, Défense: 40 }
  },
  {
    name: "Mr Gym Ex",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Double Rare",
    image: "Assets/Card/Edition 3 - Ere Shatta/Double Rare/Mr_gym_ex.png",
    description: "Une version exclusive de Mr Gym.",
    stats: { PV: 115, Attaque: 45, Défense: 45 }
  },
  {
    name: "Shamballa Ex",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Double Rare",
    image: "Assets/Card/Edition 3 - Ere Shatta/Double Rare/ShamballaEX.png",
    description: "Une version exclusive de Shamballa.",
    stats: { PV: 120, Attaque: 60, Défense: 40 }
  },

  // Ultra Rare (6 cartes)
  {
    name: "Cebedouze Ex Full Art",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Ultra Rare",
    image: "Assets/Card/Edition 3 - Ere Shatta/Ultra Rare/cebedouze_ex_fullart.png",
    description: "Version Full Art exclusive de Cebedouze.",
    stats: { PV: 125, Attaque: 65, Défense: 45 }
  },
  {
    name: "Do Brazil Ex Full Art",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Ultra Rare",
    image: "Assets/Card/Edition 3 - Ere Shatta/Ultra Rare/do_brazil_ex_FULL_ART.png",
    description: "Version Full Art exclusive de Do Brazil.",
    stats: { PV: 120, Attaque: 60, Défense: 50 }
  },
  {
    name: "Lartisan Originel",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Ultra Rare",
    image: "Assets/Card/Edition 3 - Ere Shatta/Ultra Rare/Lartisan_originel.png",
    description: "L'artisan originel, maître de son art dans l'ère Shatta.",
    stats: { PV: 100, Attaque: 40, Défense: 30 }
  },
  {
    name: "Mr Gym Ex Full Art",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Ultra Rare",
    image: "Assets/Card/Edition 3 - Ere Shatta/Ultra Rare/MR_GYM_EXFA.png",
    description: "Version Full Art exclusive de Mr Gym.",
    stats: { PV: 130, Attaque: 50, Défense: 55 }
  },
  {
    name: "Shamballa Ex Full Art",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Ultra Rare",
    image: "Assets/Card/Edition 3 - Ere Shatta/Ultra Rare/Shamballa_EX_FApsd.png",
    description: "Version Full Art exclusive de Shamballa.",
    stats: { PV: 135, Attaque: 70, Défense: 50 }
  },
  {
    name: "Zentrax",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Ultra Rare",
    image: "Assets/Card/Edition 3 - Ere Shatta/Ultra Rare/Zentrax.png",
    description: "Une créature mystérieuse et puissante de l'ère Shatta.",
    stats: { PV: 140, Attaque: 75, Défense: 45 }
  },

  // Amazing Rare (4 cartes)
  {
    name: "Baguette Hyper Rare",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Amazing Rare",
    image: "Assets/Card/Edition 3 - Ere Shatta/Amazing Rare/BAGUETTE_HYPER_RARE.png",
    description: "La baguette la plus rare de l'ère Shatta. Un objet de légende.",
    stats: { PV: 150, Attaque: 80, Défense: 60 }
  },
  {
    name: "Bonnet d'Anyme Gold",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Amazing Rare",
    image: "Assets/Card/Edition 3 - Ere Shatta/Amazing Rare/Bonnet_danyme_gold.png",
    description: "Un bonnet doré légendaire de l'ère Shatta.",
    stats: { PV: 160, Attaque: 70, Défense: 70 }
  },
  {
    name: "Shamballa GOLD",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Amazing Rare",
    image: "Assets/Card/Edition 3 - Ere Shatta/Amazing Rare/Shamballa_GOLD.png",
    description: "La carte la plus précieuse de l'ère Shatta. Une légende parmi les légendes.",
    stats: { PV: 120, Attaque: 50, Défense: 40 }
  },
  {
    name: "Shamballa SHINY",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Amazing Rare",
    image: "Assets/Card/Edition 3 - Ere Shatta/Amazing Rare/Shamballa_SHINY.png",
    description: "Version Shiny ultra-rare de Shamballa. La plus précieuse de toutes.",
    stats: { PV: 200, Attaque: 100, Défense: 80 }
  }
];

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
  module.exports = cardsData;
} 
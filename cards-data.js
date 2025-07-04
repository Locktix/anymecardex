// Base de données complète des cartes Anyme
const cardsData = [
  // ===== ÉDITION 1 (15 cartes) =====
  
  // Common (6 cartes)
  {
    name: "Anyme023",
    edition: "Edition 1",
    rarity: "Common",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Anyme023.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "La carte de base, représentant l'esprit Anyme.",
    stats: { PV: 50, Attaque: 15, Défense: 10 }
  },
  {
    name: "Le Bobo Riche",
    edition: "Edition 1",
    rarity: "Common",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Le_Bobo_Riche.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Un bobo qui aime le luxe et les brunchs à Paris. Toujours à la recherche du meilleur restaurant branché.",
    stats: { PV: 80, Attaque: 20, Défense: 10 }
  },
  {
    name: "Le Chauffard",
    edition: "Edition 1",
    rarity: "Common",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Le_Chauffard.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Toujours pressé, jamais à l'heure. Maître de l'art de la conduite parisienne.",
    stats: { PV: 60, Attaque: 30, Défense: 5 }
  },
  {
    name: "Diego Flamengo",
    edition: "Edition 1",
    rarity: "Common",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Diego_Flamengo.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Le roi du football brésilien. Ses dribbles sont légendaires.",
    stats: { PV: 85, Attaque: 45, Défense: 15 }
  },
  {
    name: "Taper Laser",
    edition: "Edition 1",
    rarity: "Common",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Taper_Laser.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Attaque laser dévastatrice. Attention aux yeux !",
    stats: { PV: 70, Attaque: 60, Défense: 8 }
  },
  {
    name: "Le Bobo 80PV",
    edition: "Edition 1",
    rarity: "Common",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/le_bobo_80pv.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Un bobo avec 80 points de vie. Plus résistant que les autres.",
    stats: { PV: 80, Attaque: 25, Défense: 20 }
  },

  // Rare (1 carte)
  {
    name: "Pieds Jaunes",
    edition: "Edition 1",
    rarity: "Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Pieds_Jaunes.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Une créature mystérieuse aux pieds jaunes. Son origine reste un mystère.",
    stats: { PV: 95, Attaque: 35, Défense: 25 }
  },

  // Double Rare (3 cartes)
  {
    name: "Ajar",
    edition: "Edition 1",
    rarity: "Double Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Ajar.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Une entité mystique aux pouvoirs extraordinaires.",
    stats: { PV: 110, Attaque: 55, Défense: 35 }
  },
  {
    name: "Le Bobo Ghetto",
    edition: "Edition 1",
    rarity: "Double Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Le_Bobo_Ghetto.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Un bobo des quartiers populaires. Plus street que les autres.",
    stats: { PV: 90, Attaque: 40, Défense: 30 }
  },
  {
    name: "Poissanyme",
    edition: "Edition 1",
    rarity: "Double Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Poissanyme.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Une créature aquatique mystérieuse. Maître des océans Anyme.",
    stats: { PV: 100, Attaque: 45, Défense: 40 }
  },

  // Ultra Rare (3 cartes)
  {
    name: "Esthewww",
    edition: "Edition 1",
    rarity: "Ultra Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Esthewww.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Une beauté légendaire qui ensorcelle tous ceux qui la croisent.",
    stats: { PV: 85, Attaque: 30, Défense: 45 }
  },
  {
    name: "Le Fury",
    edition: "Edition 1",
    rarity: "Ultra Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Le_Fury.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Un guerrier enragé aux pouvoirs destructeurs.",
    stats: { PV: 120, Attaque: 70, Défense: 20 }
  },
  {
    name: "Squntt",
    edition: "Edition 1",
    rarity: "Ultra Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Squntt.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Une créature mystérieuse aux pouvoirs cachés.",
    stats: { PV: 95, Attaque: 50, Défense: 35 }
  },

  // Amazing Rare (2 cartes)
  {
    name: "Le Chevalier",
    edition: "Edition 1",
    rarity: "Amazing Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Le_Chevalier.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Un chevalier légendaire, protecteur de l'univers Anyme.",
    stats: { PV: 130, Attaque: 60, Défense: 50 }
  },
  {
    name: "Card 2025-3-19-19-3-20",
    edition: "Edition 1",
    rarity: "Amazing Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/card-2025-3-19-19-3-20.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Une carte mystérieuse avec des pouvoirs inconnus.",
    stats: { PV: 150, Attaque: 80, Défense: 60 }
  },

  // ===== PROMOTION (2 cartes) =====
  {
    name: "Skibidi023 Ex",
    edition: "Promotion",
    rarity: "Ultra Rare",
    image: "https://cdn.discordapp.com/attachments/1337148918206828689/1363199951361937632/card-2025-3-19-19-9-35.png?ex=6868b3a3&is=68676223&hm=07d4cde2ff68cbf2f5e69c339c6b522a37d3f32a4903d2a4d93535f572703595",
    description: "Une carte promo exclusive pour les vrais fans. Édition limitée et numérotée.",
    stats: { PV: 90, Attaque: 35, Défense: 25 }
  },
  {
    name: "900K MERCI GOLD",
    edition: "Promotion",
    rarity: "Amazing Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/900K_MERCI_GOLD.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Carte spéciale pour célébrer les 900K abonnés. Une pièce de collection unique.",
    stats: { PV: 200, Attaque: 100, Défense: 100 }
  },

  // ===== ÉDITION 3 - ERE SHATTA (34 cartes) =====
  
  // Common (14 cartes)
  {
    name: "Andrew Williams",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/andrew_williams.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Un personnage mystérieux de l'ère Shatta.",
    stats: { PV: 75, Attaque: 25, Défense: 15 }
  },
  {
    name: "Anychampy",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Anychampy.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Un champion de l'ère Shatta.",
    stats: { PV: 80, Attaque: 30, Défense: 20 }
  },
  {
    name: "Anymatcha",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Anymatcha.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Une créature mystique de l'ère Shatta.",
    stats: { PV: 70, Attaque: 35, Défense: 15 }
  },
  {
    name: "Apero",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Apero.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Le roi de l'apéro dans l'ère Shatta.",
    stats: { PV: 65, Attaque: 20, Défense: 25 }
  },
  {
    name: "Aubervilliers",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/aubervilliers.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Représentant de la ville d'Aubervilliers dans l'ère Shatta.",
    stats: { PV: 85, Attaque: 25, Défense: 30 }
  },
  {
    name: "Charlot",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Charlot.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Un personnage comique de l'ère Shatta.",
    stats: { PV: 60, Attaque: 15, Défense: 20 }
  },
  {
    name: "Doboumboum",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/doboumboum.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Une créature explosive de l'ère Shatta.",
    stats: { PV: 55, Attaque: 50, Défense: 5 }
  },
  {
    name: "Elecbrice",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Elecbrice.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Une créature électrique mystérieuse.",
    stats: { PV: 70, Attaque: 40, Défense: 10 }
  },
  {
    name: "Lartisan",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Lartisan.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Un artisan talentueux de l'ère Shatta.",
    stats: { PV: 75, Attaque: 20, Défense: 35 }
  },
  {
    name: "Le Bobo de Matchaland",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Le_bobo_de_matchaland.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Un bobo spécialisé dans les matchs de l'ère Shatta.",
    stats: { PV: 80, Attaque: 35, Défense: 25 }
  },
  {
    name: "Le Rap Mojo",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Le_Rap_Mojo.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Un rappeur légendaire de l'ère Shatta.",
    stats: { PV: 75, Attaque: 30, Défense: 20 }
  },
  {
    name: "Patrick Foire",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Patrick_Foire.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Un personnage mystérieux de l'ère Shatta.",
    stats: { PV: 70, Attaque: 25, Défense: 30 }
  },
  {
    name: "Redbull",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Redbull.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Une créature énergique de l'ère Shatta.",
    stats: { PV: 65, Attaque: 45, Défense: 15 }
  },
  {
    name: "Sarcelles",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Common",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/sarcelles.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Représentant de la ville de Sarcelles dans l'ère Shatta.",
    stats: { PV: 80, Attaque: 25, Défense: 30 }
  },

  // Rare (6 cartes)
  {
    name: "Anymversaire",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Anymversaire.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Un personnage célèbre de l'ère Shatta.",
    stats: { PV: 90, Attaque: 35, Défense: 25 }
  },
  {
    name: "Juanhijo",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Juanhijo.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Un personnage mystérieux de l'ère Shatta.",
    stats: { PV: 85, Attaque: 40, Défense: 20 }
  },
  {
    name: "Le Charmeur",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Le_charmeur.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Un charmeur légendaire de l'ère Shatta.",
    stats: { PV: 80, Attaque: 25, Défense: 40 }
  },
  {
    name: "Le Dealer",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/le_dealer.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Un dealer mystérieux de l'ère Shatta.",
    stats: { PV: 75, Attaque: 45, Défense: 15 }
  },
  {
    name: "Le Peril",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Le_peril.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Une créature dangereuse de l'ère Shatta.",
    stats: { PV: 95, Attaque: 50, Défense: 20 }
  },
  {
    name: "Le Skatos",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Le_skatos.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Un personnage mystérieux de l'ère Shatta.",
    stats: { PV: 85, Attaque: 35, Défense: 30 }
  },

  // Double Rare (4 cartes)
  {
    name: "Cebedouze Ex",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Double Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/cebedouze_ex.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Une version exclusive de Cebedouze.",
    stats: { PV: 110, Attaque: 55, Défense: 35 }
  },
  {
    name: "Do Brazil Ex",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Double Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/do_brazil_ex.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Une version exclusive de Do Brazil.",
    stats: { PV: 105, Attaque: 50, Défense: 40 }
  },
  {
    name: "Mr Gym Ex",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Double Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Mr_gym_ex.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Une version exclusive de Mr Gym.",
    stats: { PV: 115, Attaque: 45, Défense: 45 }
  },
  {
    name: "Shamballa Ex",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Double Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/ShamballaEX.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Une version exclusive de Shamballa.",
    stats: { PV: 120, Attaque: 60, Défense: 40 }
  },

  // Ultra Rare (6 cartes)
  {
    name: "Cebedouze Ex Full Art",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Ultra Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/cebedouze_ex_fullart.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Version Full Art exclusive de Cebedouze.",
    stats: { PV: 125, Attaque: 65, Défense: 45 }
  },
  {
    name: "Do Brazil Ex Full Art",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Ultra Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/do_brazil_ex_FULL_ART.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Version Full Art exclusive de Do Brazil.",
    stats: { PV: 120, Attaque: 60, Défense: 50 }
  },
  {
    name: "Lartisan Originel",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Ultra Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Lartisan_originel.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "L'artisan originel, maître de son art dans l'ère Shatta.",
    stats: { PV: 100, Attaque: 40, Défense: 30 }
  },
  {
    name: "Mr Gym Ex Full Art",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Ultra Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/MR_GYM_EXFA.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Version Full Art exclusive de Mr Gym.",
    stats: { PV: 130, Attaque: 50, Défense: 55 }
  },
  {
    name: "Shamballa Ex Full Art",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Ultra Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Shamballa_EX_FApsd.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Version Full Art exclusive de Shamballa.",
    stats: { PV: 135, Attaque: 70, Défense: 50 }
  },
  {
    name: "Zentrax",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Ultra Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Zentrax.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Une créature mystérieuse et puissante de l'ère Shatta.",
    stats: { PV: 140, Attaque: 75, Défense: 45 }
  },

  // Amazing Rare (4 cartes)
  {
    name: "Baguette Hyper Rare",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Amazing Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/BAGUETTE_HYPER_RARE.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "La baguette la plus rare de l'ère Shatta. Un objet de légende.",
    stats: { PV: 150, Attaque: 80, Défense: 60 }
  },
  {
    name: "Bonnet d'Anyme Gold",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Amazing Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Bonnet_danyme_gold.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Un bonnet doré légendaire de l'ère Shatta.",
    stats: { PV: 160, Attaque: 70, Défense: 70 }
  },
  {
    name: "Shamballa GOLD",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Amazing Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Shamballa_GOLD.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "La carte la plus précieuse de l'ère Shatta. Une légende parmi les légendes.",
    stats: { PV: 120, Attaque: 50, Défense: 40 }
  },
  {
    name: "Shamballa SHINY",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Amazing Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Shamballa_SHINY.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Version Shiny ultra-rare de Shamballa. La plus précieuse de toutes.",
    stats: { PV: 200, Attaque: 100, Défense: 80 }
  }
];

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
  module.exports = cardsData;
} 
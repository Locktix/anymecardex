// Configuration d'Anymecardex
const CONFIG = {
  // Informations du projet
  projectName: "Anymecardex",
  version: "1.0.0",
  description: "Collection de cartes Anyme",
  
  // Paramètres d'affichage
  cardsPerPage: 12,
  animationDuration: 300,
  
  // Couleurs des raretés
  rarityColors: {
    "Common": { bg: "#d1fae5", text: "#065f46" },
    "Rare": { bg: "#dbeafe", text: "#1e40af" },
    "Double Rare": { bg: "#fef3c7", text: "#92400e" },
    "Ultra Rare": { bg: "#fce7f3", text: "#be185d" },
    "Amazing Rare": { bg: "linear-gradient(135deg, #fef3c7, #fce7f3)", text: "#92400e" }
  },
  
  // Messages
  messages: {
    loading: "Chargement des cartes...",
    noResults: "Aucune carte trouvée",
    noResultsHelp: "Essayez d'autres filtres ou une autre recherche.",
    error: "Erreur lors du chargement",
    imageError: "Image non disponible"
  },
  
  // Options de tri
  sortOptions: [
    { value: "name", label: "Nom" },
    { value: "rarity", label: "Rareté" },
    { value: "edition", label: "Édition" }
  ],
  
  // Filtres disponibles
  editions: [
    "Edition 1",
    "Edition 3 - Ere Shatta", 
    "Promotion"
  ],
  
  rarities: [
    "Common",
    "Rare", 
    "Double Rare",
    "Ultra Rare",
    "Amazing Rare"
  ]
};

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
} 
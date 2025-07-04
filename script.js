// Données fictives de cartes Anyme
const cardsData = [
  {
    name: "Le Bobo Riche",
    edition: "Edition 1",
    rarity: "Common",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Anyme023.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Un bobo qui aime le luxe et les brunchs à Paris. Toujours à la recherche du meilleur restaurant branché.",
    stats: { PV: 80, Attaque: 20, Défense: 10 }
  },
  {
    name: "Le Chauffard",
    edition: "Edition 1",
    rarity: "Common",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Anyme023.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Toujours pressé, jamais à l'heure. Maître de l'art de la conduite parisienne.",
    stats: { PV: 60, Attaque: 30, Défense: 5 }
  },
  {
    name: "Shamballa GOLD",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Amazing Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Anyme023.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "La carte la plus précieuse de l'ère Shatta. Une légende parmi les légendes.",
    stats: { PV: 120, Attaque: 50, Défense: 40 }
  },
  {
    name: "Lartisan originel",
    edition: "Edition 3 - Ere Shatta",
    rarity: "Ultra Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Anyme023.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Un artisan légendaire, maître de son art. Ses créations sont recherchées dans tout l'univers Anyme.",
    stats: { PV: 100, Attaque: 40, Défense: 30 }
  },
  {
    name: "Skibidi023 Ex",
    edition: "Promotion",
    rarity: "Ultra Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Anyme023.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Une carte promo exclusive pour les vrais fans. Édition limitée et numérotée.",
    stats: { PV: 90, Attaque: 35, Défense: 25 }
  },
  {
    name: "Diego Flamengo",
    edition: "Edition 1",
    rarity: "Common",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Anyme023.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Le roi du football brésilien. Ses dribbles sont légendaires.",
    stats: { PV: 85, Attaque: 45, Défense: 15 }
  },
  {
    name: "Taper Laser",
    edition: "Edition 1",
    rarity: "Common",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Anyme023.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Attaque laser dévastatrice. Attention aux yeux !",
    stats: { PV: 70, Attaque: 60, Défense: 8 }
  },
  {
    name: "Pieds Jaunes",
    edition: "Edition 1",
    rarity: "Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Anyme023.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Une créature mystérieuse aux pieds jaunes. Son origine reste un mystère.",
    stats: { PV: 95, Attaque: 35, Défense: 25 }
  },
  {
    name: "Ajar",
    edition: "Edition 1",
    rarity: "Double Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Anyme023.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Une entité mystique aux pouvoirs extraordinaires.",
    stats: { PV: 110, Attaque: 55, Défense: 35 }
  },
  {
    name: "Esthewww",
    edition: "Edition 1",
    rarity: "Ultra Rare",
    image: "https://media.discordapp.net/attachments/1362473368099491840/1362473997039697980/Anyme023.png?ex=6868b28a&is=6867610a&hm=187166be5d65f38cfdf6d2b7bc8e2742375a35366a04a339faf6dac17c6f34a7&format=webp&quality=lossless&width=664&height=930",
    description: "Une beauté légendaire qui ensorcelle tous ceux qui la croisent.",
    stats: { PV: 85, Attaque: 30, Défense: 45 }
  }
];

// Mapping pour les classes de rareté
const rarityClass = {
  "Common": "rarity-common",
  "Rare": "rarity-rare",
  "Double Rare": "rarity-double-rare",
  "Ultra Rare": "rarity-ultra-rare",
  "Amazing Rare": "rarity-amazing-rare"
};

// Initialisation
const searchInput = document.getElementById('searchInput');
const editionFilter = document.getElementById('editionFilter');
const rarityFilter = document.getElementById('rarityFilter');
const sortBy = document.getElementById('sortBy');
const cardsGrid = document.getElementById('cardsGrid');
const cardsCount = document.getElementById('cardsCount');
const cardModal = document.getElementById('cardModal');
const cardDetail = document.getElementById('cardDetail');
const closeModal = document.querySelector('.close');



function filterAndRender() {
  let filtered = cardsData.filter(card => {
    const search = searchInput.value.toLowerCase();
    const matchName = card.name.toLowerCase().includes(search);
    const matchEdition = !editionFilter.value || card.edition === editionFilter.value;
    const matchRarity = !rarityFilter.value || card.rarity === rarityFilter.value;
    return matchName && matchEdition && matchRarity;
  });
  // Tri
  if (sortBy.value === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy.value === 'rarity') {
    filtered.sort((a, b) => a.rarity.localeCompare(b.rarity));
  } else if (sortBy.value === 'edition') {
    filtered.sort((a, b) => a.edition.localeCompare(b.edition));
  }
  renderCards(filtered);
}

function showCardDetail(card) {
  cardDetail.innerHTML = `
    <div class="card-detail-image">
      <img src="${card.image}" alt="${card.name}">
    </div>
    <div class="card-detail-info">
      <div class="card-detail-name">${card.name}</div>
      <div class="card-detail-meta">
        <span class="card-detail-edition">${card.edition}</span>
        <span class="card-detail-rarity ${rarityClass[card.rarity] || ''}">${card.rarity}</span>
      </div>
      <div class="card-detail-description">${card.description}</div>
      <div class="card-detail-stats">
        <h3>Statistiques</h3>
        <div class="stats-grid">
          ${Object.entries(card.stats).map(([k, v]) => `<div class="stat-item"><span class="stat-value">${v}</span><span class="stat-label">${k}</span></div>`).join('')}
        </div>
      </div>
    </div>
  `;
  cardModal.style.display = 'block';
}

closeModal.onclick = function() {
  cardModal.style.display = 'none';
};
window.onclick = function(event) {
  if (event.target === cardModal) {
    cardModal.style.display = 'none';
  }
};

// Gestion des événements
searchInput.addEventListener('input', filterAndRender);
editionFilter.addEventListener('change', filterAndRender);
rarityFilter.addEventListener('change', filterAndRender);
sortBy.addEventListener('change', filterAndRender);

// Gestion des touches clavier pour la modal
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && cardModal.style.display === 'block') {
    cardModal.style.display = 'none';
  }
});

// Animation de chargement
function showLoading() {
  cardsGrid.innerHTML = '<div class="loading">Chargement des cartes...</div>';
}

// Initialisation avec animation
document.addEventListener('DOMContentLoaded', function() {
  showLoading();
  setTimeout(() => {
    filterAndRender();
  }, 500);
});

// Gestion des erreurs d'images
function handleImageError(img) {
  img.onerror = null;
  img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNjBDMTEwLjQ1NyA2MCAxMTggNjcuNTQzIDEyMCA3OFYxMjJDMTA4IDExOCAxMDAgMTEwIDEwMCAxMDBWNzhDMTAwIDY3LjU0MyAxMDcuNTQzIDYwIDExOCA2MEgxMDBaIiBmaWxsPSIjOENBM0FGIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOENBM0FGIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiPkltYWdlIG5vbiBkaXNwb25pYmxlPC90ZXh0Pgo8L3N2Zz4K';
}

// Amélioration du rendu des cartes avec gestion d'erreur
function renderCards(cards) {
  cardsGrid.innerHTML = '';
  if (cards.length === 0) {
    cardsGrid.innerHTML = `<div class="empty-state"><i class="fas fa-box-open"></i><h3>Aucune carte trouvée</h3><p>Essayez d'autres filtres ou une autre recherche.</p></div>`;
    cardsCount.textContent = 0;
    return;
  }
  cards.forEach(card => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.innerHTML = `
      <div class="card-image">
        <img src="${card.image}" alt="${card.name}" onerror="handleImageError(this)">
      </div>
      <div class="card-info">
        <div class="card-name">${card.name}</div>
        <div class="card-details">
          <span class="card-edition">${card.edition}</span>
          <span class="card-rarity ${rarityClass[card.rarity] || ''}">${card.rarity}</span>
        </div>
      </div>
    `;
    cardDiv.onclick = () => showCardDetail(card);
    cardsGrid.appendChild(cardDiv);
  });
  cardsCount.textContent = cards.length;
} 
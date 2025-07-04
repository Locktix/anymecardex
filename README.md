# 🃏 Anymecardex

Une application web moderne pour consulter et gérer votre collection de cartes Anyme, inspirée de PokéCardex.

## ✨ Fonctionnalités

- **🔍 Recherche avancée** : Recherchez vos cartes par nom
- **🎯 Filtres intelligents** : Filtrez par édition et rareté
- **📊 Tri personnalisé** : Triez par nom, rareté ou édition
- **🖼️ Affichage détaillé** : Cliquez sur une carte pour voir ses détails complets
- **📱 Design responsive** : Interface adaptée à tous les écrans
- **🎨 Interface moderne** : Design épuré avec animations fluides

## 🚀 Utilisation

1. Ouvrez `index.html` dans votre navigateur
2. Utilisez la barre de recherche pour trouver une carte
3. Utilisez les filtres pour affiner votre recherche
4. Cliquez sur une carte pour voir ses détails
5. Utilisez le tri pour organiser vos cartes

## 🎮 Contrôles

- **Recherche** : Tapez le nom d'une carte dans la barre de recherche
- **Filtres** : Sélectionnez une édition ou une rareté dans les menus déroulants
- **Tri** : Choisissez l'ordre d'affichage des cartes
- **Détails** : Cliquez sur une carte pour ouvrir la vue détaillée
- **Fermer** : Cliquez sur le X ou en dehors de la modal pour fermer

## 🎨 Design

- **Thème** : Interface moderne avec dégradés et effets de transparence
- **Couleurs** : Palette violet/bleu avec accents colorés selon la rareté
- **Animations** : Transitions fluides et effets de survol
- **Responsive** : S'adapte automatiquement aux différentes tailles d'écran

## 📁 Structure du projet

```
AnymeTCG/
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # Logique JavaScript
├── README.md           # Documentation
└── Assets/             # Images des cartes
    └── Card/
        ├── Edition 1/
        ├── Edition 3 - Ere Shatta/
        └── Promotion/
```

## 🌐 Publication

Ce projet peut être facilement publié sur GitHub Pages :

1. Poussez le code sur GitHub
2. Allez dans Settings → Pages
3. Sélectionnez la branche `main`
4. Votre site sera accessible à `https://votre-username.github.io/AnymeTCG/`

## 🔧 Personnalisation

Pour ajouter vos propres cartes, modifiez le tableau `cardsData` dans `script.js` :

```javascript
{
  name: "Nom de la carte",
  edition: "Édition",
  rarity: "Rareté",
  image: "URL de l'image",
  description: "Description de la carte",
  stats: { PV: 100, Attaque: 50, Défense: 30 }
}
```

## 📱 Compatibilité

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile (iOS/Android)

## 🎯 Prochaines fonctionnalités

- [ ] Système de collection personnelle
- [ ] Export/import de données
- [ ] Mode sombre
- [ ] Animations 3D
- [ ] Système de favoris
- [ ] Statistiques de collection

---

**Développé avec ❤️ pour la communauté Anyme**

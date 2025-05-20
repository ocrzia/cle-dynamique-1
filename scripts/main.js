// Un beau tableau d'objets représentant les actions des joueurs
const actions = [
  { joueur: "Léa", points: 10 },
  { joueur: "Tom", points: 5 },
  { joueur: "Léa", points: 7 },
  { joueur: "Nina", points: 12 },
  { joueur: "Tom", points: 3 },
];

// Un objet vide qui contiendra les scores cumulés par joueur
const scores = {};

// On parcourt chaque action
actions.forEach((action) => {
  const nom = action.joueur;    // On extrait le nom du joueur

  if (!scores[nom]) {           // Si ce joueur n’a pas encore de score dans l’objet...
    scores[nom] = 0;            // ...on initialise sa clé avec une valeur de 0
  }

  scores[nom] += action.points; // On ajoute les points de cette action à son total
});

console.log(scores);
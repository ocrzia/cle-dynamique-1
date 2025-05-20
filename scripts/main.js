// Un beau tableau d'objets
const actions = [
  { joueur: "Léa", points: 10 },
  { joueur: "Tom", points: 5 },
  { joueur: "Léa", points: 7 },
  { joueur: "Nina", points: 12 },
  { joueur: "Tom", points: 3 },
];

// Un objet vide
const scores = {};

// On boucle sur le tableau
actions.forEach((action) => {
  const nom = action.joueur;    // On isole le nom d'un joueur dans une variable

  if (!scores[nom]) {           // On vérifie si le nom est déjà présent sous forme de clé dans l'objet scores
    scores[nom] = 0;            // On attribue une valeur de 0 pour initiliser la clé du joueur à la valeur 0 s'il n'existait pas
  }
  scores[nom] += action.points; // On ajoute les points du joueur à ses points actuels
})

console.log(scores);

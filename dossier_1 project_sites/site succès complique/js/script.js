const games = [
    {
        title: "The Legend of Zelda: Breath of the Wild",
        image: "https://example.com/zelda.jpg",
        description: "Un jeu d'aventure en monde ouvert avec des graphismes époustouflants et des mécanismes de jeu innovants.",
        category: "adventure"
    },
    {
        title: "Red Dead Redemption 2",
        image: "https://example.com/reddead.jpg",
        description: "Un western captivant avec une histoire riche et un monde vaste à explorer.",
        category: "adventure"
    },
    {
        title: "The Witcher 3: Wild Hunt",
        image: "https://example.com/witcher3.jpg",
        description: "Un RPG intense avec une histoire complexe et des personnages mémorables.",
        category: "rpg"
    },
    {
        title: "Call of Duty: Modern Warfare",
        image: "https://example.com/cod.jpg",
        description: "Un FPS populaire avec des missions intenses et des modes multijoueurs compétitifs.",
        category: "fps"
    },
    {
        title: "Forza Horizon 5",
        image: "https://example.com/forza.jpg",
        description: "Un jeu de course en monde ouvert avec des voitures réalistes et des paysages magnifiques.",
        category: "racing"
    },
    {
        title: "Need for Speed 2015",
        image: "https://th.bing.com/th/id/OIP.t84tBuFLe7FIpVuLIdUAYQHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7",
        description: "Un 100% très difficiles a cause d'une mise a jour qui rajoute Plaqué or qui consiste a gagné l'or sur tout les épreuve Prestige",
        difficulté: "Difficulté des trophées/Succès : 9/10",
        plateforme: "Plateformes : Playstation et Xbox",
        temps: "Temps de jeu : Entre 100 et 140h",
        category: "racing"
    }
];

const gamesList = document.getElementById('games-list');

function displayGames(filteredGames) {
    gamesList.innerHTML = '';

    if (filteredGames.length === 0) {
        gamesList.innerHTML = "<p>Aucun jeu trouvé pour cette catégorie.</p>";
    } else {
        filteredGames.forEach(game => {
            const card = document.createElement('div');
            card.classList.add('game-card');

            card.innerHTML = `
              <img src="${game.image}" alt="${game.title}">
              <div class="game-info">
                <h2>${game.title}</h2>
                <p>${game.description}</p>
                ${game.difficulté ? `<p><strong>${game.difficulté}</strong></p>` : ''}
                ${game.plateforme ? `<p><strong>${game.plateforme}</strong></p>` : ''}
                ${game.temps ? `<p><strong>${game.temps}</strong></p>` : ''}
              </div>
            `;

            gamesList.appendChild(card);
        });
    }
}

function filterGames() {
    const selectedCategory = document.getElementById('category').value;
    console.log("Catégorie sélectionnée :", selectedCategory);

    let filteredGames;
    if (selectedCategory === 'all') {
        filteredGames = games;
    } else {
        filteredGames = games.filter(game => game.category === selectedCategory);
    }

    console.log("Jeux filtrés :", filteredGames);
    displayGames(filteredGames);
}

document.addEventListener("DOMContentLoaded", function () {
    displayGames(games);
});

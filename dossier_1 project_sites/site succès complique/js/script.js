const games = [
    {
        title: "Halo: The Master Chief Collection",
        image: "https://m.media-amazon.com/images/I/71pVqC4lxwL._AC_UF1000,1000_QL80_.jpg",
        description: "Collection Halo qui regroupe tous les Halo et qui est très compliquée et longue à terminer, notamment avec le niveau LTOUCA ou en terminant les jeux en moins de 3 heures, ainsi que dans le multijoueur.",
        difficulté: "Difficulté des trophées/Succès : 9/10",
        plateforme: "Plateformes : PC, Xbox",
        temps: "Temps de jeu : Entre 600 et 1000h",
        category: "fps"
    },
    {
        title: "Red Dead Redemption 2",
        image: "https://www.cdiscount.com/pdt2/8/8/8/1/300x300/tak7061117030888/rw/red-dead-redemption-2-jeu-xbox-one-1-porte-cle.jpg",
        description: "Un jeu avec un 100% très long qui nécessite au moins 250 heures mais qui est très captivant.",
        difficulté: "Difficulté des trophées/Succès : 6/10",
        plateforme: "Plateformes : PC, Xbox et Playstation",
        temps: "Temps de jeu : Entre 250 et 300h",
        category: "action-adventure"
    },
    {
        title: "The Witcher 3: Wild Hunt",
        image: "https://image.jeuxvideo.com/medias-sm/142247/1422469609-3342-jaquette-avant.jpg",
        description: "Un RPG intense avec une histoire complexe et des personnages mémorables, assez long à terminer.",
        difficulté: "Difficulté des trophées/Succès : 7/10",
        plateforme: "Plateformes : PC, Xbox et Playstation",
        temps: "Temps de jeu : Entre 100 et 120h",
        category: "rpg"
    },
    {
        title: "Call of Duty",
        image: "https://www.micromania.fr/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-masterCatalog_Micromania/default/dw3f6f60cd/images/high-res/135503.jpg?sw=480&sh=480&sm=fit",
        description: "Un jeu pas trop compliqué, mais qui regroupe les 3 derniers Call of Duty, notamment Call of Duty: Modern Warfare III où il est nécessaire de tuer 50 000 zombies, ce qui est très long.",
        difficulté: "Difficulté des trophées/Succès : 6/10",
        plateforme: "Plateformes : PC, Xbox et Playstation",
        temps: "Temps de jeu : Entre 170 et 220h",
        category: "fps"
    },
    {
        title: "Forza Horizon 5",
        image: "https://i.jeuxactus.com/datas/jeux/f/o/forza-horizon-5/xl/forza-horizon-5-jaquette-61839ce4e7b80.jpg",
        description: "Un jeu long à finir à 100% qui prend au moins 110 heures selon votre niveau et vos chances sur les modes éliminateur et cache-cache.",
        difficulté: "Difficulté des trophées/Succès : 9/10",
        plateforme: "Plateformes : PC, Xbox",
        temps: "Temps de jeu : Entre 115 et 150h",
        category: "racing"
    },
    {
        title: "Need for Speed 2015",
        image: "https://th.bing.com/th/id/OIP.t84tBuFLe7FIpVuLIdUAYQHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7",
        description: "Un 100% très difficile à cause d'une mise à jour qui rajoute 'Plaqué or', qui consiste à gagner l'or sur toutes les épreuves Prestige.",
        difficulté: "Difficulté des trophées/Succès : 9/10",
        plateforme: "Plateformes : Playstation, PC, Xbox",
        temps: "Temps de jeu : Entre 100 et 140h",
        category: "racing"
    },
    {
        title: "Crash Bandicoot 4: It's About Time",
        image: "https://thumb.pccomponentes.com/w-530-530/articles/31/312644/1303-crash-bandicoot-4-its-about-time-xbox-one.jpg",
        description: "Jeu vraiment très compliqué à terminer, il faut vraiment maîtriser le jeu pour réussir à battre les fantômes des développeurs et terminer les niveaux sans mourir.",
        difficulté: "Difficulté des trophées/Succès : 10/10",
        plateforme: "Plateformes : Playstation, Xbox, Switch, PC",
        temps: "Temps de jeu : Entre 80h et 110h",
        category: "plateforme"
    },
    {
        title: "Crash Bandicoot N. Sane Trilogy",
        image: "https://m.media-amazon.com/images/I/91saU++otIL._AC_UF1000,1000_QL80_.jpg",
        description: "Collection regroupant les 3 premiers Crash Bandicoot, notamment avec les niveaux supprimés, ce qui pose problème pour le 100%.",
        difficulté: "Difficulté des trophées/Succès : 8/10",
        plateforme: "Plateformes : Playstation, Xbox, Switch, PC",
        temps: "Temps de jeu : Entre 100h et 120h",
        category: "plateforme"
    },
    {
        title: "Microsoft Flight Simulator",
        image: "https://cdn-uploads.gameblog.fr/images/jeux/29399/MicrosoftFlightSimulator_XBS_Jaquette_001.jpg",
        description: "Jeu de simulation très réaliste avec la Terre complète, nécessitant au minimum 1000 heures de vol. Préparez-vous pour un long voyage.",
        difficulté: "Difficulté des trophées/Succès : 7/10",
        plateforme: "Plateformes : Xbox, PC",
        temps: "Temps de jeu : Entre 1000h et 1100h",
        category: "simulation"
    },
    {
        title: "Killer Instinct",
        image: "https://m.media-amazon.com/images/I/71y+4j+BRlL._AC_UF1000,1000_QL80_.jpg",
        description: "Un jeu de combat très difficile à maîtriser et très long à finir à 100%, surtout avec tous les personnages.",
        difficulté: "Difficulté des trophées/Succès : 9/10",
        plateforme: "Plateformes : Xbox, PC",
        temps: "Temps de jeu : Entre 400h et 500h",
        category: "combat"
    },
    {
        title: "SnowRunner",
        image: "https://img.succesone.fr/2020/02/cover_snowrunner_xbox-one-219x300.jpg",
        description: "Jeu de simulation qui peut être très long et compliqué, mais qui peut devenir plus facile si vous utilisez les mods inclus dans le jeu. À vous de choisir.",
        difficulté: "Difficulté des trophées/Succès : 5/10",
        plateforme: "Plateformes : Playstation, Xbox, PC",
        temps: "Temps de jeu : Entre 200h et 250h",
        category: "simulation"
    },
    {
        title: "Cuphead",
        image: "https://www.xboxpassion.fr/images/jaquette/3-3402-cuphead.jpg",
        description: " Ce jeu de plateforme est connu pour sa difficulté extrêmement élevée. Obtenir tous les trophées nécessite une maîtrise parfaite de chaque niveau et des boss redoutables.",
        difficulté: "Difficulté des trophées/Succès : 9/10",
        plateforme: "Plateformes : Playstation, Xbox, PC, Switch",
        temps: "Temps de jeu : Entre 30h et 60h",
        category: "plateforme"
    },
    {
        title: "Resident Evil 4 (Remake)",
        image: "https://www.gamecash.fr/thumbnail-400-450/resident-evil-4-remake-xbx-e194777.jpg",
        description: " La version remake de Resident Evil 4 offre une expérience de jeu intense, avec des Succès /trophées impliquant de terminer le jeu sur les niveaux de difficulté les plus élevés et de compléter des défis complexes.",
        difficulté: "Difficulté des trophées/Succès : 7/10",
        plateforme: "Plateformes : PC, Xbox et Playstation",
        temps: "Temps de jeu : Entre 20 et 40h",
        category: "action-adventure"
    },
];

const gamesPerPage = 10;
let currentPage = 1;

function displayGames(filteredGames) {
    const gamesList = document.getElementById('games-list');
    gamesList.innerHTML = '';

    const start = (currentPage - 1) * gamesPerPage;
    const end = start + gamesPerPage;
    const gamesToDisplay = filteredGames.slice(start, end);

    gamesToDisplay.forEach(game => {
        const card = document.createElement('div');
        card.classList.add('game-card');

        card.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <div class="game-info">
                <h2>${game.title}</h2>
                <p>${game.description}</p>
                <p><strong>${game.difficulté}</strong></p>
                <p><strong>${game.plateforme}</strong></p>
                <p><strong>${game.temps}</strong></p>
            </div>
        `;

        gamesList.appendChild(card);
    });

    updatePagination(filteredGames);
}

function changePage(direction) {
    const filteredGames = getFilteredGames();
    if (direction === 'next' && currentPage * gamesPerPage < filteredGames.length) {
        currentPage++;
    } else if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    }
    displayGames(filteredGames);
}

function updatePagination(filteredGames) {
    document.getElementById('pageNumber').innerText = `Page ${currentPage}`;
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage * gamesPerPage >= filteredGames.length;
}

function getFilteredGames() {
    const selectedCategory = document.getElementById('category').value;
    const selectedPlatform = document.getElementById('platform').value;

    let filteredGames = games;

    if (selectedCategory !== 'all') {
        filteredGames = filteredGames.filter(game => game.category === selectedCategory);
    }

    if (selectedPlatform !== 'all') {
        filteredGames = filteredGames.filter(game => game.plateforme.includes(selectedPlatform));
    }

    return filteredGames;
}

function filterGames() {
    currentPage = 1;
    const filteredGames = getFilteredGames();
    displayGames(filteredGames);
}

document.addEventListener("DOMContentLoaded", function () {
    displayGames(games);
});
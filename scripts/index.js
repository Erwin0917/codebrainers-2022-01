import { characterList, teamGenerator } from './character.js';
import { UiController } from './uiController.js';
import { GameController } from './gameController.js';


function duel(attacker, victim) {
    attacker.attack(victim);
    if (victim.isAlive()) {
        victim.attack(attacker);
    }
}

function isTeamAlive(team) {
    return team.every((person) => person.isAlive())
}

function battle(teamA, teamB) {
    while (isTeamAlive(teamA) && isTeamAlive(teamB)) {
        teamA.forEach((personA, index) => {
            duel(personA, teamB[index]);
        })
    }
}

function gameInit() {
    const gameController = new GameController();
    const uiController = new UiController(document.querySelector('.game-wrapper'),gameController);

    uiController.startBattleButton.addEventListener('click', function () {
        battle(gameController.teamA, gameController.teamB)
    });

    if (isTeamAlive(gameController.teamB)) {
        console.warn('The forces of evil have triumphed!');
    } else {
        console.warn('You won your first fight.');
    }
}

gameInit();

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
    const gameWrapperHtml = document.querySelector('.game-wrapper');

    const gameController = new GameController();
    const uiController = new UiController(gameWrapperHtml, gameController);

    uiController.startBattleButton.addEventListener('click', function () {
        // battle(gameController.teamA, gameController.teamB)
        var progress = document.getElementById("red-bar");
	    RPGUI.set_value(progress, 0.5);
    });

    if (isTeamAlive(gameController.teamB)) {
        console.warn('The forces of evil have triumphed!');
    } else {
        console.warn('You won your first fight.');
    }

}

gameInit();


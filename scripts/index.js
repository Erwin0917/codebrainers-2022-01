import { UiController } from './uiController.js';
import { GameController } from './gameController.js';
import {characterList, teamGenerator} from "./character.js";


function gameInit() {
    const gameWrapperHtml = document.querySelector('.game-wrapper');

    const uiController = new UiController(gameWrapperHtml);
    const gameController = new GameController(uiController);


    uiController.startBattleButton.addEventListener('click', function () {
        gameController.battle(gameController.teamA, gameController.teamB);
    });

    uiController.randomTeamsBtn.addEventListener('click', function () {
            const enteredTeamCount = uiController.teamCountInput.value;
            gameController.teamA = teamGenerator(enteredTeamCount, characterList);
            gameController.teamB = teamGenerator(enteredTeamCount, characterList);
            uiController.renderTeams(gameController.teamA, gameController.teamB);
    })

    // if (isTeamAlive(gameController.teamB)) {
    //     console.warn('The forces of evil have triumphed!');
    // } else {
    //     console.warn('You won your first fight.');
    // }

}

gameInit();


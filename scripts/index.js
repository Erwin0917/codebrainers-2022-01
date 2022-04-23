import { UiController } from './uiController.js';
import { GameController } from './gameController.js';
import {characterList, teamGenerator} from "./character.js";

export const TEAM_A_KEY = "teamA";
export const TEAM_B_KEY = "teamB";

function gameInit() {
    const gameWrapperHtml = document.querySelector('.game-wrapper');
    const uiController = new UiController(gameWrapperHtml);
    const gameController = new GameController(uiController);


    uiController.startBattleButton.addEventListener('click', function () {
        gameController.battle(gameController.teamA, gameController.teamB);
    });

    uiController.randomTeamsBtn.addEventListener('click', async function () {
        const enteredTeamCount = uiController.teamCountInput.value;
        gameController.teamA = await teamGenerator(enteredTeamCount, characterList);
        gameController.teamB = await teamGenerator(enteredTeamCount, characterList);
        uiController.renderTeams(gameController.teamA, gameController.teamB);

        localStorage.setItem(TEAM_A_KEY, JSON.stringify(gameController.teamA));
        localStorage.setItem(TEAM_B_KEY, JSON.stringify(gameController.teamB));

        const event = new Event('saveTeam');
        document.dispatchEvent(event);
    })

    

    uiController.loadBtn.addEventListener("click", function () {
        uiController.loadTeams(gameController)
    })

    document.addEventListener('saveTeam', function () {
        uiController.loadBtn.style.display = 'block';
    })

}



gameInit();


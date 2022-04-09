import { teamGenerator, characterList } from "./character.js";

export class UiController {
    constructor(gameWrapperHtml, gameController) {

        if (gameWrapperHtml === undefined) {
            throw new Error('Game wrapper html is wrong or undefined in UiController');
        }
        this.gameWrapperHtml = gameWrapperHtml;
        this.gameController = gameController;
        this.startBattleButton = gameWrapperHtml.querySelector('#button-start-game');
        this.teamCountInput = gameWrapperHtml.querySelector('#input-team-count');
        this.randomTeamsBtn = gameWrapperHtml.querySelector('#button-generate-teams');
        this.teamAWrapper = gameWrapperHtml.querySelector('#teamA-wrapper');
        this.teamBWrapper = gameWrapperHtml.querySelector('#teamB-wrapper');
        this.initListeners();
    }

    initListeners() {
        this.randomTeamsBtn.addEventListener('click', this.onClickRandomHandler)
    }

    onClickRandomHandler = () => {
        const enteredTeamCount = this.teamCountInput.value;
        this.gameController.teamA = teamGenerator(enteredTeamCount, characterList);
        this.gameController.teamB = teamGenerator(enteredTeamCount, characterList);
        this.teamAWrapper.innerHTML = JSON.stringify(this.gameController.teamA);
        this.teamBWrapper.innerHTML = JSON.stringify(this.gameController.teamB);
    }
}


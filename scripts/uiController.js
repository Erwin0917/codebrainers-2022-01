import { teamGenerator, characterList, characterGenerator } from './character.js';

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
        this.renderTeams(this.gameController.teamA, this.gameController.teamB);

        // this.teamAWrapper.innerHTML = JSON.stringify(this.gameController.teamA);
        // this.teamBWrapper.innerHTML = JSON.stringify(this.gameController.teamB);
    }

    renderTeams = (teamA, teamB) => {
        teamA.forEach(character => {
            const card = generateCharacterCard(character);
            this.teamAWrapper.appendChild(card);

        });

        //TODO: Create Team B
    }

}

function generateCharacterCard(character) {
    const characterCard = document.createElement('div');
    console.log(character)
    characterCard.classList.add('character-card', 'rpgui-container', 'framed-golden');

    characterCard.innerHTML = `
        <div class='name'>Name: <h4>${character.name}</h4></div>
        <div class='hp'>Hit points: <h4>${character.hitPoints}</h4></div>
        <div class='strength'>Strength: <h4>${character.strength}</h4></div>
        <div class='weapon-name'>Weapon Name: <h4>${character.weapon.name}</h4></div>
    `;

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-wrapper');
    const label = document.createElement('label');
    label.innerText = 'HP';
    const progressInner = document.createElement('div');
    progressInner.classList.add('rpgui-progress', 'red');

    progressBar.appendChild(label);
    progressBar.appendChild(progressInner);
    characterCard.appendChild(progressBar);

    // <div className='progress-wrapper'>
    //     <label>HP:</label>
    //     <div className='rpgui-progress red'></div>
    // </div>
    //
    // <div className='progress-wrapper'>
    //     <label>Strength:</label>
    //     <div className='rpgui-progress green'></div>
    // </div>

    return characterCard;
}



console.log(generateCharacterCard(characterGenerator(characterList)))

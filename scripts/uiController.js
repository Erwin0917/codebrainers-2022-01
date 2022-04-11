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

    deleteTeamsFromHTML = () => {
        while(this.teamAWrapper.firstChild) {
            this.teamAWrapper.removeChild(this.teamAWrapper.firstChild);
        }
        while(this.teamBWrapper.firstChild) {
            this.teamBWrapper.removeChild(this.teamBWrapper.firstChild);
        }
    }

    renderTeams = (teamA, teamB) => {
        this.deleteTeamsFromHTML();
        if (teamA.length > 0) {
            let title = this.addTeamName("Team A");
            this.teamAWrapper.appendChild(title);
            teamA.forEach(character => {
                const card = generateCharacterCard(character);
                this.teamAWrapper.appendChild(card);
            });
        }

        if (teamB.length > 0) {
            let title = this.addTeamName("Team B");
            this.teamBWrapper.appendChild(title);
            teamB.forEach(character => {
                const card = generateCharacterCard(character);
                this.teamBWrapper.appendChild(card);
            });
        }
    }

    addTeamName = (teamName) => {
        const addHeader = document.createElement('h3');
        addHeader.classList.add('team-header');
        addHeader.innerText = `${teamName}`;
        return addHeader;
    }

}

function generateCharacterCard(character) {
    const characterCard = document.createElement('div');

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
    label.innerText = 'HP:';
    const labelTwo = document.createElement('label');
    labelTwo.innerText = 'Second bar:';
    // const progressInner = RPGUI.create('rpgui-progress green', 'progress');
    const progressInner = document.createElement('div');
    const percentHealth = Math.floor(character.hitPoints/character.maxValueOfHitPoints) * 100;
    progressInner.classList.add('progress-wrapper');
    progressInner.innerHTML = `
    <div class="rpgui-progress green" data-rpguitype="progress" style="margin: 10px 0">
        <div class=" rpgui-progress-track">
            <div class=" rpgui-progress-fill red" style="left: 0px; width: ${percentHealth}%;"></div>
        </div>
        <div class=" rpgui-progress-left-edge"></div>
        <div class=" rpgui-progress-right-edge"></div>
    </div>
    `
    const secondBar = document.createElement('div');

    secondBar.classList.add('progress-wrapper');
    secondBar.innerHTML = `
    <div class="rpgui-progress green" data-rpguitype="progress">
        <div class=" rpgui-progress-track">
            <div class=" rpgui-progress-fill green" style="left: 0px; width: ${percentHealth}%;"></div>
        </div>
        <div class=" rpgui-progress-left-edge"></div>
        <div class=" rpgui-progress-right-edge"></div>
    </div>
    `

    progressBar.appendChild(label);
    progressBar.appendChild(progressInner);
    progressBar.appendChild(labelTwo);
    progressBar.appendChild(secondBar);
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



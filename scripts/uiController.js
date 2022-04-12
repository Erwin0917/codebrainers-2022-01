export class UiController {
    constructor(gameWrapperHtml) {

        if (gameWrapperHtml === undefined) {
            throw new Error('Game wrapper html is wrong or undefined in UiController');
        }
        this.gameWrapperHtml = gameWrapperHtml;
        this.startBattleButton = gameWrapperHtml.querySelector('#button-start-game');
        this.teamCountInput = gameWrapperHtml.querySelector('#input-team-count');
        this.randomTeamsBtn = gameWrapperHtml.querySelector('#button-generate-teams');
        this.teamAWrapper = gameWrapperHtml.querySelector('#teamA-wrapper');
        this.teamBWrapper = gameWrapperHtml.querySelector('#teamB-wrapper');
        this.teamSizeElement = gameWrapperHtml.querySelector('#size-teams');
        this.initListeners();
    }

    initListeners() {
        this.teamCountInput.addEventListener('change', this.updateTeamSize);
    }

    deleteTeamsFromHTML = () => {
        this.teamAWrapper.innerHTML = ``;
        this.teamBWrapper.innerHTML = ``;
    }

    renderTeam = (team, teamName, teamWrapper) => {
        let title = this.addTeamName(teamName);
        teamWrapper.appendChild(title);
        team.forEach(character => {
            const card = generateCharacterCard(character);
            teamWrapper.appendChild(card);
        });
    }

    renderTeams = (teamA, teamB) => {
        this.deleteTeamsFromHTML();
        if (teamA.length > 0) {
            this.renderTeam(teamA, "Team A", this.teamAWrapper);
        }

        if (teamB.length > 0) {
            this.renderTeam(teamB, "Team B", this.teamBWrapper);
        }
    }

    addTeamName = (teamName) => {
        const addHeader = document.createElement('h3');
        addHeader.classList.add('team-header');
        addHeader.innerText = `${teamName}`;
        return addHeader;
    }

    updateTeamSize = (event) => {
        const value = event.target.value;
        this.teamSizeElement.innerText = value;
    }

}

function generateProgressBar(labelName, color, value){
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-wrapper');
    const label = document.createElement('label');
    label.innerText = labelName;
    const progressInner = document.createElement('div');
    progressInner.classList.add('rpgui-progress', color );

    progressBar.appendChild(label);
    progressBar.appendChild(progressInner);

    RPGUI.create(progressInner, 'progress');
    RPGUI.set_value(progressInner, value);
    return progressBar;
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
    const hpProgressBar = generateProgressBar("HP:", "red", character.getPercentHealth());
    const armorProgressBar = generateProgressBar("Armor:", "blue");

    characterCard.appendChild(hpProgressBar);
    characterCard.appendChild(armorProgressBar);

    return characterCard;
}


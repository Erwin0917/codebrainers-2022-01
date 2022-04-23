import { TEAM_A_KEY, TEAM_B_KEY } from "./index.js";
import { Weapon } from "./weapon.js";
import {characterGenerator, characterList} from "./character.js";
import {randomBetween} from "./utilis.js";
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
        this.loadBtn = document.querySelector("#button-load-teams");
        this.cards = null;
        if (localStorage.getItem(TEAM_A_KEY) !== null || localStorage.getItem(TEAM_B_KEY) !== null) {
            this.loadBtn.style.display = 'block';
        }
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
            character.removeButton = document.getElementById(character.ID)
        });
    }

    renderTeams = (gamecontroller) => {
        this.deleteTeamsFromHTML();
        console.log(gamecontroller);
        if (gamecontroller.teamA.length > 0) {
            this.renderTeam(gamecontroller.teamA, "Team A", this.teamAWrapper);

            gamecontroller.teamA.forEach(person =>{
                person.removeButton.addEventListener('click', (event)=>{
                    const charId = event.target.getAttribute('ID');
                    gamecontroller.teamA = gamecontroller.teamA.filter(person => person.ID !== charId);
                    const characterFromCards = this.cards[randomBetween(0, this.cards.length-1)];
                    gamecontroller.teamA.push(characterGenerator(characterList, characterFromCards))
                    this.renderTeams(gamecontroller);
                })
            });
        }
        if (gamecontroller.teamB.length > 0) {
            this.renderTeam(gamecontroller.teamB, "Team B", this.teamBWrapper);
            gamecontroller.teamB.forEach(person =>{
                person.removeButton.addEventListener('click', (event)=>{
                    const charId = event.target.getAttribute('ID');
                    gamecontroller.teamB = gamecontroller.teamB.filter(person => person.ID !== charId);
                    const characterFromCards = this.cards[randomBetween(0, this.cards.length-1)];
                    gamecontroller.teamB.push(characterGenerator(characterList, characterFromCards))
                    this.renderTeams(gamecontroller);
                })
            });
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

    loadTeams = (gameController) => {
        const savedTeamA = JSON.parse(localStorage.getItem(TEAM_A_KEY));
        const savedTeamB = JSON.parse(localStorage.getItem(TEAM_B_KEY));

        if (savedTeamA !== null && savedTeamB !== null) {

            gameController.teamA = savedTeamA.map(resurrectCharacters);
            console.log("gameController.teamA:", gameController.teamA);

            gameController.teamB = savedTeamB.map(resurrectCharacters);
            console.log("gameController.teamB:", gameController.teamB);

            this.renderTeams(gameController.teamA, gameController.teamB);
        } else {
            alert("No teams in local storage.");
        }
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
        <div class="card-wrapper">
        <div class="image"><img src=${character.image}></div>
        <div class="stats-wrapper">
        <div class='name'>Name: <h4>${character.name}</h4></div>
        <div class='hp'>Hit points: <h4>${character.hitPoints}</h4></div>
        <div class='strength'>Strength: <h4>${character.strength}</h4></div>
        <div class='weapon-name'>Weapon Name: <h4>${character.weapon.name}</h4></div>
        </div>
        </div>
    `;

    const hpProgressBar = generateProgressBar("HP:", "red", character.getPercentHealth());
    const armorProgressBar = generateProgressBar("Armor:", "blue");

    characterCard.appendChild(hpProgressBar);
    characterCard.appendChild(armorProgressBar);

   const addNewCharacterBtn = document.createElement('button');
   addNewCharacterBtn.classList.add('rpgui-button');
   addNewCharacterBtn.setAttribute('id', character.ID);
   addNewCharacterBtn.innerText = 'Change character';
    characterCard.appendChild(addNewCharacterBtn);

    return characterCard;
}



function resurrectCharacters(characterData) {
    const hitpoints = characterData.hitPoints;
    const armorRating = characterData.armorRating;
    const strength = characterData.strength;
    const weapon = reforgeWeapon(characterData.weapon);
    const character = characterList[Math.floor(Math.random() * characterList.length)];
    const newChar = new character(hitpoints, armorRating, strength);
    newChar.setName(characterData.name);
    newChar.ID = characterData.ID;
    newChar.image = characterData.image;
    newChar.setWeapon(weapon);

    return newChar;
}

function reforgeWeapon(weaponData) {
    const weaponName = weaponData.name;
    const weaponMinDamage = weaponData.minDamage;
    const weaponMaxDamage = weaponData.maxDamage;

    return new Weapon(weaponName, weaponMinDamage, weaponMaxDamage);
}



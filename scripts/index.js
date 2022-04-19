import { UiController } from './uiController.js';
import { GameController } from './gameController.js';
import {characterList, teamGenerator} from "./character.js";
import {randomBetween} from "./utilis";
import {weaponGenerator, weaponList} from "./weapon";

const TEAM_A_KEY = "teamA";
const TEAM_B_KEY = "teamB"

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
    })


    const savedTeamA = JSON.parse(localStorage.getItem(TEAM_A_KEY));
    const savedTeamB = JSON.parse(localStorage.getItem(TEAM_B_KEY));

    console.log("TEAM A:", savedTeamA);

    if (savedTeamA !== null && savedTeamB !== null) {
        gameController.teamA = savedTeamA.map(resurrectCharacters);
        gameController.teamB = savedTeamB;
    }


}

// TODO: HOMEWORK
function resurrectCharacters(characterData) {
    const hitpoints = characterData.hitPoints;
    const armorRating = characterData.armorRating;
    const strength = characterData.strength;
    // const weapon = weaponGenerator(weaponList);
    const character = listOfCharacters[Math.floor(Math.random() * listOfCharacters.length)];
    const newChar = new character(hitpoints, armorRating, strength);
    // newChar.setWeapon(weapon);
    newChar.setName(characterData.name);
    newChar.ID = characterData.id;
    newChar.image = characterData.image;
    return newChar;
}

gameInit();


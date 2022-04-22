import { UiController } from './uiController.js';
import { GameController } from './gameController.js';
import {characterList, teamGenerator, Person, Hero, Villain} from "./character.js";
import {randomBetween} from "./utilis.js";
import {Weapon, weaponGenerator, weaponList} from "./weapon.js";

const TEAM_A_KEY = "teamA";
const TEAM_B_KEY = "teamB";

function gameInit() {
    const gameWrapperHtml = document.querySelector('.game-wrapper');
    const loadBtn = document.querySelector("#button-load-teams");
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
    console.log("TEAM B:", savedTeamB);

    loadBtn.addEventListener("click", function () {
        if (savedTeamA !== null && savedTeamB !== null) {
            gameController.teamA = savedTeamA.map(resurrectCharacters);
            console.log("gameController.teamA:", gameController.teamA);

            gameController.teamB = savedTeamB.map(resurrectCharacters);
            console.log("gameController.teamB:", gameController.teamB);

            uiController.renderTeams(gameController.teamA, gameController.teamB);
        } else {
            console.alert("No teams in local storage.")
        }
    })
    


}

// TODO: HOMEWORK
export function resurrectCharacters(characterData) {
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

    // console.log("Character data:", newChar);
    return newChar;
}

function reforgeWeapon(weaponData) {
    const weaponName = weaponData.name;
    const weaponMinDamage = weaponData.minDamage;
    const weaponMaxDamage = weaponData.maxDamage;

    return new Weapon(weaponName, weaponMinDamage, weaponMaxDamage);
}

gameInit();


import { characterList, teamGenerator } from './character.js';
import { UiController } from './uiController.js';
import { GameController } from 'scripts/gameController';


function duel(attacker, victim) {
    attacker.attack(victim);
    if (victim.isAlive()) {
        victim.attack(attacker);
    }
}

function isTeamAlive (team) {
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
    const gameController = new GameController();
    const uiController = new UiController(document.querySelector('.game-wrapper'));


    // const gameWrapperHtml = ;
    const startBattleButton = gameWrapperHtml.querySelector('#button-start-game');
    const teamCountInput = gameWrapperHtml.querySelector('#input-team-count');
    const randomTeamsBtn = gameWrapperHtml.querySelector('#button-generate-teams');
    const teamAWrapper = gameWrapperHtml.querySelector('#teamA-wrapper');
    const teamBWrapper = gameWrapperHtml.querySelector('#teamB-wrapper');

    const teamA = teamGenerator(5, characterList);
    const teamB = teamGenerator(5, characterList);

    startBattleButton.addEventListener('click', function () {
        battle(teamA, teamB)
    });

    randomTeamsBtn.addEventListener('click', function (){
        const enteredTeamCount = teamCountInput.value;
        const teamA = teamGenerator(enteredTeamCount, characterList);
        const teamB = teamGenerator(enteredTeamCount, characterList);
        teamAWrapper.innerHTML = JSON.stringify(teamA);
        teamBWrapper.innerHTML = JSON.stringify(teamB);
    })




    if (isTeamAlive(teamB)) {
        console.warn('The forces of evil have triumphed!');
    } else {
        console.warn('You won your first fight.');
    }
}

gameInit();

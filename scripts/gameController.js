import {randomBetween} from "./utilis.js";
import {characterList, teamGenerator} from "./character.js";

export class GameController {
    constructor(uiController) {
        this.teamA = [];
        this.teamB = [];
        this.uiController = uiController;
    }

    async battle() {
        while (!isTeamDead(this.teamA) && !isTeamDead(this.teamB)) {
            if (randomBetween(0, 1) === 0) {
                this.teamA.forEach((personA, index) => {
                    if (isTeamDead(this.teamB)) {
                        return;
                    }
                    duel(personA, findOpponent(this.teamB));
                    this.uiController.renderTeams(this.teamA, this.teamB);
                })
            } else {
                this.teamB.forEach((personB, index) => {
                    if (isTeamDead(this.teamA)) {
                        return;
                    }
                    duel(personB, findOpponent(this.teamA));
                    this.uiController.renderTeams(this.teamA, this.teamB);
                })
            }

            await timeout(200);

        }
        console.log('Team A:', this.teamA);
        console.log('Team B:', this.teamB);

        if (isTeamDead(this.teamA)){
            this.teamA = await teamGenerator(this.teamA.length, characterList);
            this.teamB.forEach(person => person.recover());
            console.log("Team A defeated");
        } else {
            this.teamB = await teamGenerator(this.teamB.length, characterList);
            this.teamA.forEach(person => person.recover());

            console.log("Team B defeated");
        }
        this.uiController.renderTeams(this.teamA, this.teamB);

        console.log('Team A after:', this.teamA);
        console.log('Team B after:', this.teamB);
    }

}

const findOpponent = (team) => {
    let randomOpponent = team[randomBetween(0, team.length - 1)];
    while (!randomOpponent.isAlive()) { 
        randomOpponent = team[randomBetween(0, team.length - 1)];
    }
    return randomOpponent;
}

function duel(attacker, victim) {
    attacker.attack(victim);
    if (victim.isAlive()) {
        victim.attack(attacker);
    }
}

function isTeamDead(team) {
    return team.every((person) => !person.isAlive());
}

const timeout = async time => await new Promise(resolve => setTimeout(() => resolve() ,time));

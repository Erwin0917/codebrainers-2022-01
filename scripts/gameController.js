import {randomBetween} from "./utilis.js";

export class GameController {
    constructor(uiController) {
        this.teamA = [];
        this.teamB = [];
        this.uiController = uiController;
    }

    battle() {
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
        }
        console.log('Team A:', this.teamA);
        console.log('Team B:', this.teamB);
    }

}

const findOpponent = (team) => {
    let randomOpponent = team[randomBetween(0, team.length - 1)];
    while (!randomOpponent.isAlive()) { 
        randomOpponent = team[randomBetween(0, team.length - 1)];
    }
    console.log("Random oponent:", randomOpponent);
    console.log("is he alive?:", randomOpponent.isAlive);
    return randomOpponent;
    // return team.find((person) => person.isAlive())
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
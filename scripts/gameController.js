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
                    duel(personA, findOpponent(this.teamB));
                    this.uiController.renderTeams(this.teamA, this.teamB);
                })
            } else {
                this.teamB.forEach((personB, index) => {
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
    return team.find((person) => person.isAlive())
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
export class GameController {
    constructor(uiController) {
        this.teamA = [];
        this.teamB = [];
        this.uiController = uiController;
    }

    battle() {
        while (!isTeamDead(this.teamA) && !isTeamDead(this.teamB)) {
            this.teamA.forEach((personA, index) => {
                duel(personA, this.teamB[index]);
                this.uiController.renderTeams(this.teamA, this.teamB);
            })
        }
        console.log('Team A:', this.teamA);
        console.log('Team B:', this.teamB);
    }

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
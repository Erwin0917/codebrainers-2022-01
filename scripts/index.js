class Person {
    constructor(hitPoints) {
        this.hitPoints = hitPoints;
        this.strength = 0;

    }

    attack(character, power) {
        character.hitPoints -= power
    }

    isAlive() {
        return this.hitPoints > 0;
    }

}

class Hero extends Person {
    constructor(hitPoints) {
        super(hitPoints);
    }

    isAlive() {
        return super.isAlive() && this.strength > 0;
    }
}

class Villain extends Person {
    constructor(hitPoints) {
        super(hitPoints);
    }
}

const firstHero = new Hero(50);
const darkCharacter = new Villain(40);

console.log(darkCharacter)
firstHero.attack(darkCharacter, 10);


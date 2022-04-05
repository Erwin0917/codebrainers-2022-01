function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Person {
    constructor(hitPoints) {
        this.hitPoints = hitPoints;
        this.strength = 0;
        this.armorRating = 0;

    }

    attack(character, power) {
        if (!(character instanceof Person)) {
            console.error("'Character' is not an instance of 'Person'");
            return;
        }
        const attackQuality = randomBetween(1, 20);
        if (attackQuality < character.armorRating) {
            power = power * 0.1;
        }
        const healthPool = character.hitPoints - power;
        if (healthPool < 0) {
            character.hitPoints = 0;
        } else {
            character.hitPoints = healthPool;
        }
        console.log("The hit delivered:", power);
    }

    isAlive() {
        return this.hitPoints > 0;
    }

}

class Hero extends Person {
    constructor(hitPoints) {
        super(hitPoints);
        this.armorRating = 10;
    }

    isAlive() {
        return super.isAlive() && this.strength > 0;
    }
}

class Villain extends Person {
    constructor(hitPoints) {
        super(hitPoints);
        this.armorRating = 10;
    }
}

const firstHero = new Hero(50);
const darkCharacter = new Villain(40);

while (darkCharacter.isAlive()) {
    firstHero.attack(darkCharacter, 10);
    console.log("HIT! Hero attacked darkCharacter!");
}
console.log("Dark Character looks pretty beat up:", darkCharacter);



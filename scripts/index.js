function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Person {
    constructor(hitPoints) {
        this.hitPoints = hitPoints;
        this.strength = 0;
        this.armorRating = 0;
        this.weapon = null;

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

    setWeapon(weapon) {
        if (weapon instanceof Weapon) {
            this.weapon = weapon;
            return;
        }
        console.error("weapon is not instance of class Weapon");
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

class Weapon {
    constructor(minDamage, maxDamage) {
        this.minDamage = minDamage;
        this.maxDamage = maxDamage;
    }

    getDamage() {
        return this.maxDamage;
    }
}

const firstHero = new Hero(50);
const darkCharacter = new Villain(40);

const axe = new Weapon(randomBetween(2, 5),randomBetween(6,10));

firstHero.setWeapon(axe);
//TODO: Finish getdamage method
//TODO: darkcharacter attack firsthero in while
//TODO: darkcharacter attack firsthero in while


while (darkCharacter.isAlive()) {
    firstHero.attack(darkCharacter, 10);
    console.log("HIT! Hero attacked darkCharacter!");
}
console.log("Dark Character looks pretty beat up:", darkCharacter);



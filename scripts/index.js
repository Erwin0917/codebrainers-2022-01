function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Person {
    constructor(hitPoints = 0, strength = 10, armorRating = 0) {
        this.hitPoints = hitPoints;
        this.strength = strength;
        this.armorRating = armorRating;
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
        if (this.weapon != null){
            this.weapon.getDamage(character);
        }
        console.log("The hit delivered:", power);
    }

    isAlive() {
        return this.hitPoints > 0;
    }

    setWeapon(weapon) {
        if (weapon instanceof Weapon) {
            this.weapon = weapon;
        } else {
            console.error(`weapon is not instance of class Weapon ${weapon}`);
        }
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

    getDamage(character) {
        if (!(character instanceof Person)) {
            console.error("'Character' is not an instance of 'Person'");
            return;
        }
        let attack = randomBetween(this.minDamage,this.maxDamage);
        if (character.hitPoints >= attack){
            character.hitPoints = character.hitPoints - attack;
            console.log(`Attack by weapon: ${attack} `);
            if (character.hitPoints <= 0) {
                console.log(`Critical hit!!`)
                character.hitPoints = 0;
            }
        }
    }
}

const firstHero = new Hero(50);
const darkCharacter = new Villain(40);

const axe = new Weapon(randomBetween(4, 7),randomBetween(8,15));
const stickOfArmageddon = new Weapon(randomBetween(3,5), randomBetween(6,18));

firstHero.setWeapon(axe);
darkCharacter.setWeapon(stickOfArmageddon);
//DONE: Finish getDamage method

//DONE: darkCharacter attack firstHero in while
//DONE: Use Weapon in attack method

console.log(`Damage of: \n -Axe: ${axe.minDamage} - ${axe.maxDamage}\n -Stick of Armageddon: ${stickOfArmageddon.minDamage} - ${stickOfArmageddon.maxDamage}`);

// console.log(`First hero is alive? ${firstHero.isAlive()}`);
// console.log(`Dark Character is alive? ${darkCharacter.isAlive()}`);

while ((firstHero.isAlive() && darkCharacter.isAlive())) {
    console.log("HIT! Hero attacked darkCharacter!");
    firstHero.attack(darkCharacter, 10);
    // console.log(`Dark Character is alive? ${darkCharacter.isAlive()}`);
    console.log(`Hit points of darkCharacter: ${darkCharacter.hitPoints} \n`);

    if (darkCharacter.isAlive()) {
        console.log("HIT! darkCharacter attacked Hero!");
        darkCharacter.attack(firstHero, 10);
        // console.log(`First hero is alive? ${firstHero.isAlive()}`);
        console.log(`Hit points of Hero: ${firstHero.hitPoints} \n`);
    }
}

if (darkCharacter.isAlive()){
    console.log("Hero looks pretty beat up:", firstHero);
} else {
    console.log("Dark Character looks pretty beat up:", darkCharacter);
}




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
        const attackQuality = randomBetween(1, 7);
        let damageWeapon = this.weapon.getDamage(darkCharacter, firstHero)
        if (attackQuality < character.armorRating) {
            power = damageWeapon;
        }
        const healthPool = character.hitPoints - power;
        if (healthPool < 0) {
            character.hitPoints = 0;
        } else {
            character.hitPoints = healthPool;
        }
        // console.log("The hit delivered:", power, "and stayed:", healthPool, "HP.");
        console.log("The hit delivered:", power)
        console.log("Stayed:", healthPool, "HP.")
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
        this.strength = 1;
    }

    isAlive() {
        return super.isAlive() && this.strength > 0;
    }
}

class Villain extends Person {
    constructor(hitPoints) {
        super(hitPoints);
        this.armorRating = 10;
        this.strength = 0;
    }
}

class Weapon {
    constructor(minDamage, maxDamage) {
        this.minDamage = minDamage;
        this.maxDamage = maxDamage;
    }

    getDamage() {
        return randomBetween(this.minDamage, this.maxDamage);
    }
}

const firstHero = new Hero(50);
const darkCharacter = new Villain(50);

const axe = new Weapon(randomBetween(1, 1),randomBetween(7, 7));
const sword = new Weapon(randomBetween(3, 3),randomBetween(5, 5));

firstHero.setWeapon(axe);
darkCharacter.setWeapon(sword);

while (darkCharacter.isAlive() && firstHero.isAlive()) {
        console.log("HIT! Hero attacked darkCharacter!");
        firstHero.attack(darkCharacter);
        console.log("HIT! DarkCharacter attacked HERO!");
        darkCharacter.attack(firstHero);
}
console.log("FINISH INFO:", darkCharacter);
console.log("FINISH INFO:", firstHero);

if (firstHero.isAlive()){
    console.log('Win HERO')
} else {
    console.log('Win DARK')
}

//TODO: Finish getDamage method
//TODO: darkCharacter attack firstHero in while
//TODO: Use Weapon in attack method
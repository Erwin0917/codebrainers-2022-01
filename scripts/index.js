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

    // deleted power from attack method
    attack(character) {
        if (!(character instanceof Person)) {
            console.error("'Character' is not an instance of 'Person'");
            return;
        }
        const attackQuality = randomBetween(0, 20) + this.attackModifier();
        let damage = this.weapon.getDamage()
        if (attackQuality < character.armorRating) {
            damage = 0;
        } else if (attackQuality - this.attackModifier() > 19) {
            damage = damage * 2;
            console.log("CRITICAL DAMAGE!")
        }
        const healthPool = character.hitPoints - damage;
        if (healthPool < 0) {
            character.hitPoints = 0;
        } else {
            character.hitPoints = healthPool;
        }
        console.log(`The hit rolled for ${attackQuality}, including +${this.attackModifier()} attack modifier. Damage was ${damage}.`);
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

    attackModifier() {
        const modifiers = [-2, -2, -2, -1, 0, 1, 2, 3, 4, 5];
        return modifiers[Math.floor(this.strength / 2)]
    }

}

class Hero extends Person {
    constructor(hitPoints) {
        super(hitPoints);
        this.armorRating = 10;
        this.strength = 15;
    }

    // commented out, because it doesn't fit my vision
    // isAlive() {
    //     return super.isAlive() && this.strength > 0;
    // }
}

class Villain extends Person {
    constructor(hitPoints) {
        super(hitPoints);
        this.armorRating = 10;
        this.strength = 12;
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

const axe = new Weapon(1, 8);
const sword = new Weapon(2, 6);

const firstHero = new Hero(50);
const darkCharacter = new Villain(40);

firstHero.setWeapon(axe);
//DONE: Finish getDamage method
//DONE: darkCharacter attack firstHero in while
//DONE: Use Weapon in attack method

darkCharacter.setWeapon(sword);

while (darkCharacter.isAlive() && firstHero.isAlive()) {
    console.log("Our brave hero attacks!")
    firstHero.attack(darkCharacter);
    if (darkCharacter.isAlive()) {
        console.log("Now defend yourself!")
        darkCharacter.attack(firstHero);
    }
}

if (darkCharacter.isAlive()) {
    console.log("The forces of evil have triumphed!");
} else {
    console.log("You won your first fight.");
}

// TODO: refactor code
// TODO: extend mechanics? Add new suff?
// TODO: add unarmed attack version

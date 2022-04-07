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

    attack(character) {
        if (!(character instanceof Person)) {
            console.error('\'Character\' is not an instance of \'Person\'');
            return;
        }
        const attackQuality = randomBetween(0, 20) + this.attackModifier();
        let damage = this.weapon.getDamage();
        if (attackQuality < character.armorRating) {
            damage = 0;
        } else if (attackQuality - this.attackModifier() > 19) {
            damage = damage * 2;
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
        console.error('weapon is not instance of class Weapon');
    }

    attackModifier() {
        const modifiers = [-2, -2, -2, -1, 0, 1, 2, 3, 4, 5];
        return modifiers[Math.floor(this.strength / 2)];
    }

}

class Hero extends Person {
    constructor(hitPoints, armorRating, strength) {
        super(hitPoints);
        this.armorRating = armorRating;
        this.strength = strength;
    }
}

class Villain extends Person {
    constructor(hitPoints, armorRating, strength) {
        super(hitPoints);
        this.armorRating = armorRating;
        this.strength = strength;
    }
}

class Weapon {
    constructor(name, minDamage, maxDamage) {
        this.name = name;
        this.minDamage = minDamage;
        this.maxDamage = maxDamage;
    }

    getDamage() {
        return randomBetween(this.minDamage, this.maxDamage);
    }
}

const weaponList = ['axe', 'sword'];
function weaponGenerator() {
    //TODO: Finish function

    // new Weapon()
}

function characterGenerator(type) {
    const hitpoints = randomBetween(40, 60);
    const armor = randomBetween(5, 15);
    const strength = randomBetween(8, 12)

    //TODO: Use weapon generator
    //const weapon = weaponGenerator()


    if (type.toLowerCase() === "hero") {
        return new Hero(hitpoints, armor, strength);
    } else if (type.toLowerCase() === "villain") {
        return new Villain(hitpoints, armor, strength);
    }
    console.error("'character type' is wrong");
}

function teamGenerator(teamCount, teamClass) {
    const team = [];
    for (let i = 0; i < teamCount; i++) {
        team.push(characterGenerator(teamClass));
    }
    return team;
}

console.log("TEAM GENERATOR: ", teamGenerator(5, "Hero"));

function duel(attacker, victim) {
    attacker.attack(victim);
    if (victim.isAlive()) {
        victim.attack(attacker);
    }
}

function isTeamAlive (team) {
    return team.every((person) => person.isAlive())
}
// console.log('Is team alive', isTeamAlive([new Hero(0)]))

function battle(teamA, teamB) {

    while (isTeamAlive(teamA) && isTeamAlive(teamB)) {
        teamA.forEach((personA, index) => {
            duel(personA, teamB[index]);
        })

    }
}

function gameInit() {
    //TODO: use teamGenerator
    const teamA = [];
    const teamB = [];

    // const axe = new Weapon(1, 8);
    // const sword = new Weapon(2, 6);

    // firstHero.setWeapon(axe);
    // secondHero.setWeapon(sword);
    // darkCharacter.setWeapon(sword);
    // darkLord.setWeapon(axe);

    // battle(teamA, teamB);

    if (isTeamAlive(teamB)) {
        console.warn('The forces of evil have triumphed!');
    } else {
        console.warn('You won your first fight.');
    }
}

gameInit();

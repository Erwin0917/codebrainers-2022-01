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

    // setWeapon(weapon) {
    //     if (weapon instanceof Weapon) {
    //         this.weapon = weapon;
    //         return;
    //     }
    //     console.error('weapon is not instance of class Weapon');
    // }

    attackModifier() {
        const modifiers = [-2, -2, -2, -1, 0, 1, 2, 3, 4, 5];
        return modifiers[Math.floor(this.strength / 2)];
    }

}

class Hero extends Person {
    constructor(hitPoints, armorRating, strength,weapon) {
        super(hitPoints);
        this.armorRating = armorRating;
        this.strength = strength;
        this.weapon = weapon;
    }
}

class Villain extends Person {
    constructor(hitPoints, armorRating, strength, weapon) {
        super(hitPoints);
        this.armorRating = armorRating;
        this.strength = strength;
        this.weapon = weapon;
    }
}

class Weapon {
    constructor(name = '', minDamage = 0, maxDamage = 0) {
        this.name = name;
        this.minDamage = minDamage;
        this.maxDamage = maxDamage;
    }
    getDamage() {
        return randomBetween(this.minDamage, this.maxDamage);
    }
}

const weaponList = ['axe', 'sword', 'spear', 'bat', 'club','bare hands'];
//maybe add min and max damage for each weapon

function weaponGenerator(listOfWeapons) {
    const minDamage = randomBetween(1,5);
    const maxDamage = randomBetween(5,10);
    const weapon = listOfWeapons[~~(Math.random() * listOfWeapons.length)];
    return new Weapon(weapon, minDamage, maxDamage);
}

const characterList = [Hero, Villain];

function characterGenerator(listOfCharacters) {
    const hitpoints = randomBetween(40, 60);
    const armor = randomBetween(5, 15);
    const strength = randomBetween(8, 12)
    //TODO: Use weapon generator
    const weapon = weaponGenerator(weaponList);
    const character = listOfCharacters[~~(Math.random() * listOfCharacters.length)];
    return new character(hitpoints, armor, strength, weapon);
}

function teamGenerator(teamCount, teamClass) {
    const team = [];
    for (let i = 0; i < teamCount; i++) {
        team.push(characterGenerator(teamClass));
    }
    return team;
}

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
    const teamA = teamGenerator(5, characterList);
    const teamB = teamGenerator(5, characterList);

    console.log("TeamA:", teamA);
    console.log("TeamB:", teamB);

    // const axe = new Weapon(1, 8);
    // const sword = new Weapon(2, 6);

    // firstHero.setWeapon(axe);
    // secondHero.setWeapon(sword);
    // darkCharacter.setWeapon(sword);
    // darkLord.setWeapon(axe);

    battle(teamA, teamB);

    if (isTeamAlive(teamB)) {
        console.warn('The forces of evil have triumphed!');
    } else {
        console.warn('You won your first fight.');
    }
}

gameInit();

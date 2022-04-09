function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Person {
    constructor(hitPoints) {
        this.hitPoints = hitPoints;
        this.strength = 0;
        this.armorRating = 0;
        this.weapon = null;
        this.offhand = null;

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
        console.log(`${character} is attacked!\nThe hit rolled for ${attackQuality}, including +${this.attackModifier()} attack modifier. Damage was ${damage}.\n`);
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

    setOffhand(offhand) {

        if (offhand instanceof Weapon || offhand instanceof  Offhand) {
            this.offhand = offhand;
            return;
        }
        console.error('Offhand is not an instance of Weapon or Offhand.')
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

// created Offhand in a way that will allow to use other things than shields there
class Offhand {
    constructor(name) {
        this.name = name;
        this.effect = null;
    }

    getEffect() {
        if (this.name.toLowerCase() === 'shield') {
            return this.effect = 5
        }
        console.warn("Looks like your offhand item was not recognized.")
    }
}

const weaponList = ['axe', 'sword', 'dagger', 'mace'];
function weaponGenerator() {
    //DONE: Finish function
    const weaponName = weaponList[randomBetween(0, weaponList.length-1)];
    if (weaponName === 'axe') {
        return new Weapon(weaponName, 1, 8);
    } else if (weaponName === 'sword') {
        return new Weapon(weaponName, 1, 6);
    } else if (weaponName === 'dagger') {
        return new Weapon(weaponName, 1, 4);
    } else if (weaponName === 'mace') {
        return new Weapon(weaponName, 1, 6);
    } else {
        console.error("Somehow, wrong weapon was passed to the generator.");
    }
}

// TODO: shield never shows up in offhand
const offhandChoices = ['shield', weaponGenerator(), null]
function offhandGenerator() {
    return offhandChoices[randomBetween(0, offhandChoices.length-1)];
    // hardcoded to see if shield works (it doesn't)
    // return offhandChoices[0];
}

function characterGenerator(type) {

    function determineOffhandBonus() {
        generatedCharacter.setOffhand(secondHand);
        if (generatedCharacter.offhand instanceof Offhand) {
            if (generatedCharacter.offhand === 'shield') {
                generatedCharacter.armorRating += 5;
            } else {
                console.error("I don't think we have items other than shields. Maybe there is an error?")
            }
        } else if (generatedCharacter.offhand instanceof Weapon && generatedCharacter.offhand !== "dagger") {
            generatedCharacter.strength -= 1;
        } else if (generatedCharacter.offhand === null) {
            generatedCharacter.strength += 1;
        }
    }

    const hitpoints = randomBetween(40, 60);
    const armor = randomBetween(5, 15);
    const strength = randomBetween(8, 12)
    let generatedCharacter = null;
    //DONE: Use weapon generator
    const weapon = weaponGenerator();
    const secondHand = offhandGenerator();


    if (type.toLowerCase() === "hero") {
        generatedCharacter = new Hero(hitpoints, armor, strength);
        generatedCharacter.setWeapon(weapon);
        generatedCharacter.setOffhand(secondHand);
        determineOffhandBonus();
        return generatedCharacter;
    } else if (type.toLowerCase() === "villain") {
        generatedCharacter = new Villain(hitpoints, armor, strength);
        generatedCharacter.setWeapon(weapon);
        determineOffhandBonus();
        return generatedCharacter;
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

// console.log("TEAM GENERATOR: ", teamGenerator(5, "Hero"));

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
    const teamA = teamGenerator(3, 'hero');
    const teamB = teamGenerator(3, 'villain');

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


// const borys = characterGenerator('hero');
// const enemy = characterGenerator('villain');
//
// console.log('borys: ', borys);
// console.log('enenmy: ', enemy);
//
// duel(borys, enemy);
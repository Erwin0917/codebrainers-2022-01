import { randomBetween } from './utilis.js';
import { Weapon, weaponGenerator, weaponList } from './weapon.js';

export class Person {
    constructor(hitPoints, name) {
        this.hitPoints = hitPoints;
        this.strength = 0;
        this.armorRating = 0;
        this.weapon = null;
        this.name = name;

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

export class Hero extends Person {
    constructor(hitPoints, armorRating, strength) {
        super(hitPoints, 'Hero');
        this.armorRating = armorRating;
        this.strength = strength;
    }
}

export class Villain extends Person {
    constructor(hitPoints, armorRating, strength) {
        super(hitPoints, 'Villain');
        this.armorRating = armorRating;
        this.strength = strength;
    }
}

export const characterList = [Hero, Villain];

function characterGenerator(listOfCharacters) {
    const hitpoints = randomBetween(40, 60);
    const armor = randomBetween(5, 15);
    const strength = randomBetween(8, 12)
    const weapon = weaponGenerator(weaponList);
    const character = listOfCharacters[Math.floor(Math.random() * listOfCharacters.length)];
    const newChar = new character(hitpoints, armor, strength);
    newChar.setWeapon(weapon);
    return newChar;
}

export function teamGenerator(teamCount, teamClass) {
    const team = [];
    for (let i = 0; i < teamCount; i++) {
        team.push(characterGenerator(teamClass));
    }
    return team;
}

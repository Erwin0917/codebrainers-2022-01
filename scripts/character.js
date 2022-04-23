import { randomBetween, urlExists } from './utilis.js';
import { Weapon, weaponGenerator, weaponList } from './weapon.js';

export class Person {
    constructor(hitPoints, name) {
        this.hitPoints = hitPoints;
        this.maxValueOfHitPoints = hitPoints;
        // this.percentHealth = Math.floor(this.hitPoints/this.maxValueOfHitPoints) * 100;
        this.strength = 0;
        this.armorRating = 0;
        this.weapon = null;
        this.name = name;

    }

    recover() {
        this.hitPoints = this.maxValueOfHitPoints;
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

    getPercentHealth() {
        return (this.hitPoints / this.maxValueOfHitPoints);
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

    setName(name) {
        this.name = name;
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

export function characterGenerator(listOfCharacters, characterFromCards) {
    const hitpoints = randomBetween(8, 12) * characterFromCards.toughness;
    const armor = randomBetween(5, 15);
    const strength = randomBetween(2, 4) * characterFromCards.power;
    const weapon = weaponGenerator(weaponList);
    const character = listOfCharacters[Math.floor(Math.random() * listOfCharacters.length)];
    const newChar = new character(hitpoints, armor, strength);
    newChar.setWeapon(weapon);
    newChar.setName(characterFromCards.name);
    newChar.ID = characterFromCards.id;
    newChar.image = characterFromCards.imageUrl;
    return newChar;
}

export async function teamGenerator(teamCount, teamClass) {
    const team = [];
    const characterCardsArray = await getCharacterCards();
    console.log("characterCardArray:", characterCardsArray);

    for (let i = 0; i < teamCount; i++) {
        let characterFromCards = characterCardsArray[randomBetween(0, characterCardsArray.length-1)];
        if (characterFromCards === undefined) {
            throw new Error("characterFromCards is undefined.");
        }
        team.push(characterGenerator(teamClass, characterFromCards));
    }
    return team;
}

async function getCharacterCards() {
    const response = await fetch("https://api.magicthegathering.io/v1/cards");
    const responseJSON = await response.json();
    // console.log(responseJSON.cards);
    // Why doesn't below work?!
    return responseJSON.cards.filter((card) => card.type.toLowerCase().includes("creature") && 'imageUrl' in card && !isNaN(parseInt(card.power)) && !isNaN(parseInt(card.toughness)));
}


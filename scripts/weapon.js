import { randomBetween } from './utilis.js';

export class Weapon {
    constructor(name, minDamage = 0, maxDamage = 0) {
        this.name = name;
        this.minDamage = minDamage;
        this.maxDamage = maxDamage;

        this.initWeapon(name);
    }

    initWeapon(name) {

    }

    getDamage() {
        return randomBetween(this.minDamage, this.maxDamage);
    }
}

export const weaponList = ['axe', 'sword', 'spear', 'bat', 'club','bare hands'];

export function weaponGenerator(listOfWeapons) {
    const minDamage = randomBetween(1,5);
    const maxDamage = randomBetween(5,10);
    const weapon = listOfWeapons[Math.floor(Math.random() * listOfWeapons.length)];
    return new Weapon(weapon, minDamage, maxDamage);
}

class Person {
    constructor(hitPoints) {
        this.hitPoints = hitPoints;
        this.strength = 0;
    }

    isAlive() {
        return this.hitPoints > 0;
    }

}

class Hero extends Person {
    constructor(hitPoints) {
        super(hitPoints);
    }

    isAlive() {
        return super.isAlive() && this.strength > 0;
    }
}

class Villain extends Person {
    constructor(hitPoints) {
        super(hitPoints);
    }
}



const firstPerson = new Person('20');
const firstHero = new Hero('50');

firstPerson.isAlive();
firstHero.isAlive();

console.log(firstPerson);
console.log(firstHero);

console.log(firstHero instanceof Person);
console.log(firstHero instanceof Hero);
console.log(firstPerson instanceof Hero);


function checkCharacter(person) {
    if (person instanceof Hero) {
        person.isAlive();
    }
}

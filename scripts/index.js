class Car {
    constructor(color = 'black', maximumSpeed = 230, speed) {
        this.color = color;
        this.maximumSpeed = maximumSpeed;
        this.numberOfGears = 6;
        this.currentSpeed = speed;
    }

    getColor() {
        return this.color;
    }

    setColor(newColor) {
        if (typeof newColor === 'string') {
            this.color = newColor;
        } else {
            console.warn('new color should be string');
        }
    }

    setSpeed = (speed) => {
        this.currentSpeed = speed;
    }

    accelerate(howMuch) {

    }

    decelerate(howMuch) {

    }

}


const firstCar = new Car('red');

const secondCar = new Car('black');

console.log(firstCar);
console.log(secondCar);


firstCar.setColor('yellow');
firstCar.getColor();


// secondCar.color - get by key
// secondCar['color']; - get by key


class Car {
    constructor(color = 'black', maximumSpeed = 230, speed) {
        if (typeof color === 'string'){
            this.color = color;
        } else {
            this.color = 'black';
        }
        if (typeof maximumSpeed === 'number'){
            this.maximumSpeed = maximumSpeed;
        } else {
            this.maximumSpeed = 230;
        }
        if (typeof speed === 'number'){
            this.currentSpeed = speed;
        } else{
            this.currentSpeed = 0
        }
        this.numberOfGears = 6;

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




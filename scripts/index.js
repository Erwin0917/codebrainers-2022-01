function isNumber(arg) {
    return typeof arg === 'number';
}

class Car {
    constructor(color = 'black', maximumSpeed = 230, speed) {
        this.color = typeof color === 'string' ? color : 'black';
        this.maximumSpeed = typeof maximumSpeed === 'number' ? maximumSpeed : 230;
        this.currentSpeed = typeof speed === 'number' ? speed : 0;
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
        if (speed >= this.maximumSpeed) {
            this.currentSpeed = this.maximumSpeed;
        } else if (speed <= 0) {
            this.currentSpeed = 0;
        } else {
            this.currentSpeed = speed;
        }
    };

    accelerate(howMuch) {
        if (isNumber(howMuch)) {
            const newSpeed = this.currentSpeed + howMuch;
            this.setSpeed(newSpeed);
        } else {
            console.warn('Invalid "howMuch" type. Should be a number.');
        }
    }

    decelerate(howMuch) {
        if (isNumber(howMuch)) {
            const newSpeed = this.currentSpeed - howMuch;
            this.setSpeed(newSpeed);
        } else {
            throw new Error('Invalid "howMuch" type. Should be a number.');
            console.warn('Invalid "howMuch" type. Should be a number.');
        }
    }

}


const firstCar = new Car('red');

const secondCar = new Car('black');

console.log(firstCar);
// console.log(secondCar);

firstCar.accelerate(60);
console.log('1, current speed should be 60:', firstCar);
firstCar.accelerate(250);
console.log('2, current speed should be max speed:', firstCar);
firstCar.decelerate(200);

try {

} catch (error) {
    // console.log(error);
}




// secondCar.color - get by key
// secondCar['color']; - get by key




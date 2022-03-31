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
        }
    }

    accelerate(howMuch) {
        // this.setSpeed()
    }

    decelerate(howMuch) {
        // this.setSpeed()
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




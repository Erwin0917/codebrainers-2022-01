function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function comparator(a, b) {
    if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
}

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    arr1.sort(comparator);
    arr2.sort(comparator);
    let areEqual = true;

    arr1.forEach((currentElement, index)=> {
        // console.log("element: ", currentElement);
        // console.log("index: ", index);
        const arr2Element = arr2[index];
        if (currentElement != arr2Element) {
            areEqual = false;
        }
    });

    return areEqual;
}


const availableNumbers = [];

// This function  clears availableNumbers array from the previous draw and populates it once again
function prepToDraw() {
    availableNumbers.splice(0, 49);
    for (let i = 1; i < 50; i++) {
        availableNumbers.push(i);
    }
};

let drawnNumbers = [];

function letsDraw() {
    for (let i = 1; i < 7; i++) {
        const drawnIndex = randomBetween(0, availableNumbers.length - 1);
        drawnNumbers.push(availableNumbers[drawnIndex]);
        availableNumbers.splice(drawnIndex, 1);
    }

}

const coupon = [4, 12, 29, 44, 13, 23];
// const coupon = [4, 12, 15];

let jackpot = false;
let numOfDraws = 0;

while (jackpot === false) {
    // clear drawnNumbers array before drawing new ones
    drawnNumbers.splice(0, 6);
    prepToDraw()
    letsDraw();
    numOfDraws += 1;
    // console.log("available nums: ", availableNumbers)
    // Less printing in the console speeds program up significantly, but none make it look like it doesn't work.
    if (numOfDraws % 10000 === 0) {
        console.log("Number of draws: ", numOfDraws)    
    }
    
    // console.log("drawnNumbers", drawnNumbers)
    // console.log("coupon: ", coupon)
    if (compareArrays(drawnNumbers, coupon) === true) {
        console.log("YOU'VE WON!")
        jackpot = true;
    }
}

console.log(`We had to draw ${numOfDraws} times!`);

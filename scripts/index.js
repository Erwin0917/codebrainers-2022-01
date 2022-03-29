
// ---------- Array

// const arr = [];
// const nonEmpty = ["Kasia", "Janek", "Zosia"];
// // const arrExample = new Array(5);

// // console.log(nonEmpty.length);
// // console.log(nonEmpty[2]);
// nonEmpty[2] = "Andrzej";
// // console.log(nonEmpty[2]);


// nonEmpty.push("Kamil", "Anna"); //Dodaje element na końcu tablicy
// const lastElement = nonEmpty.pop(); //Usuwa element z końca tablicy

// nonEmpty.unshift("Wojciech"); //Dodaje element na początku tablicy
// const firstElement = nonEmpty.shift(); //Usuwa element z początku tablicy


// nonEmpty.push([1, 5, 8]);
// // console.log(nonEmpty[4][2]);

// console.log(nonEmpty.indexOf("Bronek"));
// console.log(nonEmpty.includes("Kamil"));

// console.log(nonEmpty);
// console.log(nonEmpty.splice(3, 1));
// console.log(nonEmpty);



// 1. Wypełnić maszyne 49 piłeczkami.
// 2. Losować 6 razy jedną piłeczkę.
// 3. Stworzyć kupon i sprawdzić ile razy będzie losowanie 6tki aż trafimy nasze liczby.

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

// console.log("Compare results: ", compareArrays([1, 2, 3], [3, 2, 1]))

let availableNumbers = [];

function setAvailableNumbers() {
    availableNumbers = [];
    for (let i = 1; i < 49; i++) {
        availableNumbers.push(i);
    }
}

let drawnNumbers = [];

function letsDraw() {
    drawnNumbers = [];
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

while (!jackpot) {
    setAvailableNumbers();
    letsDraw();
    numOfDraws += 1;
    // DONE  - use jackpot while coupon with 6 numbers and lets draw instead 3
    // console.log(availableNumbers)
    // console.log(numOfDraws)
    // console.log("drawnNumbers", drawnNumbers)
    // console.log(coupon)
    // drawnNumbers = coupon;
    if (compareArrays(drawnNumbers, coupon) === true) {
        jackpot = true;
    }
}

console.log(`We had to draw ${numOfDraws} times!`);

// Finish

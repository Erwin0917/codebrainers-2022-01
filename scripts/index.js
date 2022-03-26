// function randomBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
//
// let goodAnswers = 0;
// let intQCount = NaN;
//
// do {
//     const qCount = prompt("Enter number of questions:");
//     intQCount = parseInt(qCount);
// } while (isNaN(intQCount) === true);
//
//
// for (let i = 0; i < intQCount; i++) {
//     const x = randomBetween(0, 10);
//     const y = randomBetween(0, 10);
//     const correctAnswer = x * y;
//     const answer = prompt(`How much is ${x} * ${y} ?`);
//     if (parseInt(answer) === correctAnswer) {
//         goodAnswers += 1;
//     }
// }
//
// if (goodAnswers > Math.floor(intQCount * 0.6)) {
//     console.log(`You passed the test! You had ${goodAnswers} correct answers from ${intQCount}.`);
// } else {
//     console.log(`You failed the test! You had ${goodAnswers} correct answers from ${intQCount}.`);
// }


// ---------- Array

const arr = [];
const nonEmpty = ["Kasia", "Janek", "Zosia"];
// const arrExample = new Array(5);

// console.log(nonEmpty.length);
// console.log(nonEmpty[2]);
nonEmpty[2] = "Andrzej";
// console.log(nonEmpty[2]);


nonEmpty.push("Kamil", "Anna"); //Dodaje element na końcu tablicy
const lastElement = nonEmpty.pop(); //Usuwa element z końca tablicy

nonEmpty.unshift("Wojciech"); //Dodaje element na początku tablicy
const firstElement = nonEmpty.shift(); //Usuwa element z początku tablicy


nonEmpty.push([1, 5, 8]);
// console.log(nonEmpty[4][2]);

console.log(nonEmpty.indexOf("Bronek"));
console.log(nonEmpty.includes("Kamil"));

console.log(nonEmpty);
console.log(nonEmpty.splice(3, 1));
console.log(nonEmpty);

// 1. Wypełnić maszyne 49 piłeczkami.
// 2. Losować 6 razy jedną piłeczkę.
// 3. Stworzyć kupon i sprawdzić ile razy będzie losowanie 6tki aż trafimy nasze liczby.

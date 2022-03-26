// let correctValue = false;
//
// while (correctValue === false) {
//     const rawData = prompt("How many subs are added for a month?");
//     let answerUser = parseInt(rawData);
//     if(rawData === null){
//         break;
//     }
//     if (isNaN(answerUser) === true) {
//         console.log("Please enter correct numberic value!");
//     } else {
//         const yearAdd = 12 * answerUser;
//
//         if (yearAdd >= 100 && yearAdd < 1000) {
//             console.log("You will achieve silver button");
//         } else if (yearAdd >= 1000 && yearAdd < 10000) {
//             console.log("You will achieve gold button");
//         } else if (yearAdd >= 10000) {
//             console.log("You will achieve diamond button");
//         }
//         correctValue = true;
//     }
// }

let x = Math.floor(Math.random() * 10);
let y = Math.floor(Math.random() * 10);
const correctAnswer = x * y;

// const answer = prompt("How much is " + x + "*" + y + "?");
const answer = prompt(`How much is ${x} * ${y} ?`);

if (parseInt(answer) === correctAnswer) {
    console.log("Your answer is correct");
} else {
    console.log("Your answer is not correct");
}




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





// const answer = prompt("How much is " + x + "*" + y + "?");





let goodAnswers = 0;

let intQCount = NaN;

do {
    const qCount = prompt("Enter number of questions:");
    intQCount = parseInt(qCount);
} while (isNaN(intQCount) === true);


for (let i = 0; i < intQCount; i++) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const correctAnswer = x * y;
    const answer = prompt(`How much is ${x} * ${y} ?`);
    if (parseInt(answer) === correctAnswer) {
        goodAnswers += 1;
    }
}

if (goodAnswers > Math.floor(intQCount * 0.6)) {
    console.log(`You passed the test! You had ${goodAnswers} correct answers from ${intQCount}.`);
} else {
    console.log(`You failed the test! You had ${goodAnswers} correct answers from ${intQCount}.`);
}
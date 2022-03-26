//100 - silver button, 1000 - gold, 10000 - diamond
// const rawData = prompt("Please input the amount of subscriptions: ");
// let subscriptions = parseInt(rawData);
//
// while (isNaN(subscriptions) === true) {
// 	console.log("Value should be number ");
// 	subscriptions = parseInt(prompt("Please input the amount of subscriptions: "));
// }
//
// if (subscriptions >= 100 && subscriptions < 1000) {
// 	console.log("You have achieved silver button");
// } else if (subscriptions >= 1000 && subscriptions < 10000) {
// 	console.log("You have achieved gold button");
// } else if (subscriptions >= 10000) {
// 	console.log("You have achieved diamond button");
// }
// -----------------------

let correctValue = false;

while (correctValue === false) {
    const rawData = prompt("How many subs are added for a month?");
    let answerUser = parseInt(rawData);
    if(rawData === null){
        break;
    }
    if (isNaN(answerUser) === true) {
        console.log("Please enter correct numberic value!");
    } else {
        const yearAdd = 12 * answerUser;

        if (yearAdd >= 100 && yearAdd < 1000) {
            console.log("You will achieve silver button");
        } else if (yearAdd >= 1000 && yearAdd < 10000) {
            console.log("You will achieve gold button");
        } else if (yearAdd >= 10000) {
            console.log("You will achieve diamond button");
        }
        correctValue = true;
    }
}



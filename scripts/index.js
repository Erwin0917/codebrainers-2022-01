//100 - silver button, 1000 - gold, 10000 - diamond
const rawData = prompt("Please input the amount of subscriptions: ");
let subscriptions = parseInt(rawData);

while (isNaN(subscriptions) === true) {
	console.log("Value should be number ");
	subscriptions = parseInt(prompt("Please input the amount of subscriptions: "));
}

if (subscriptions >= 100 && subscriptions < 1000) {
	console.log("You have achieved silver button");
} else if (subscriptions >= 1000 && subscriptions < 10000) {
	console.log("You have achieved gold button");
} else if (subscriptions >= 10000) {
	console.log("You have achieved diamond button");
}

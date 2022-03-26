//100 - silver button, 1000 - gold, 10000 - diamond

const subscriptions = prompt('Please input the amount of subscriptions: ');

if (subscriptions >= 100 && subscriptions < 1000) {
    console.log('You have achieved silver button');


} else if (subscriptions >= 1000 && subscriptions < 10000) {
    console.log('You have achieved gold button');

} else {
    console.log('You have achieved diamond button');
}
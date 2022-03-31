// [].forEach((element, index) => {})
// const newArr = [].map((element, index) => {})
// [].sort((prevElement, nextElement) => {return /number/})
// const filteredArr = [].filter((element, index) => {return /boolean/})

const arr = ['ala', 13, undefined, 'kasia', 'basia', null, 5, 'szymek', 'karol', 2, NaN, false, ['car', 10, undefined]];

const squareNumber = (element) => {
    if (typeof element === 'number') {
        return square(element);
    }
    return element;
};

const isNumber = element => typeof element === 'number' && isNaN(element) === false;

const onlyNumber = arr.filter(isNumber);
const newArr = arr.map(squareNumber);

const chainMethods = arr.filter(isNumber).map(squareNumber);

// console.log(onlyNumber)

function square(number) {
    return number ** 2;
}

function map(callback, array) {
    const newArray = [];
    for (let i = 0; i <= array.length - 1; i++) {
        const elem = array[i];
        const index = i;
        newArray.push(callback(elem, index, array));
    }
    return newArray;
}

map(squareNumber, arr);

const arrayFilter = (array) => (callback) => filter(callback, array);
const arrBeforeFilter = arrayFilter(arr);
console.log(arrBeforeFilter(isNumber));

function filter(callback, array) {
    const newArray = [];
    for (let i = 0; i <= array.length - 1; i++) {
        const value = array[i];
        const index = i;
        if (callback(value, index, array) === true) {
            newArray.push(value);
        }
    }
    return newArray;
}

console.log(filter(isNumber, arr));


// DONE: 1. Przefiltrować tablice arr żeby zostały same imiona.

const isString = element => typeof element === "string";

const namesOnlyArr = arr.filter(isString);

console.log('namesOnlyArr', namesOnlyArr);

// DONE: 2. Usunąć wszystkie wartości false => NaN, undefined, null
// ew. DONE: usunąć również undefined z tablicy w tablicy

const checkForArrs = (element) => {
    if (Array.isArray(element)) {
        return  element.filter(element => element);
    }
    return element;
}

const noFalsesArr = arr.map(checkForArrs).filter(element => element)

console.log('noFalsesArr', noFalsesArr);

// DONE: 3. Zwrócić taka samą tablice ale imiona mają być z wielkiej litery

const capitalized = (arg) => isString(arg) ?  arg[0].toUpperCase() + arg.slice(1) : arg;

const arrWithCapNames = arr.map(capitalized)
console.log('arrWithCapNames', arrWithCapNames);


// DONE: 4. Zwrócić nową tablice tylko z imionami posortowanymi alfabetycznie

const sortedNamesArr = arr.filter(isString).sort();
console.log(sortedNamesArr);

// DONE: 5. Zwrócić nową tablice z numerami od największego do najmniejszego

const sortedNumsArr = arr.filter(isNumber).sort((a, b) => b - a);
console.log('sortedNumsArr', sortedNumsArr)

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

const isNumber = element => typeof element === 'number';
const isFalse = element =>  {
    if (typeof element === 'number' || typeof element === 'string'){
        return element;
    }
};

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
// console.log(arrBeforeFilter(isNumber));

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

// console.log(filter(isNumber, arr));


//TODO: 1. Przefiltrować tablice arr żeby zostały same imiona.

const isName = element => typeof element === 'string';
const namesOnly = arr.filter(isName);
console.log("Zadanie 1: ",namesOnly);

//TODO: 2. Usunąć wszystkie wartości false => NaN, undefined, null
function noFalses(array) {
    const newArray = [];
    const smallArray = [];
    const al = array.length;
    for (let i=0; i < al; i++) {
        if ((typeof array[i] === 'number' && !Number.isNaN(array[i])) || typeof array[i] === 'string') {
            newArray.push(array[i]);
        }
    }
    for (let j=0; j < 3; j++) {
        if ((typeof array[al-1][j] === 'number' && !Number.isNaN(array[al-1][j])) || typeof array[al-1][j] === 'string') {
            smallArray.push(array[al-1][j]);
        }
    }
    newArray.push(smallArray);
    return newArray;
}

console.log("Zadanie 2: ", noFalses(arr));

//TODO: 3. Zwrócić taka samą tablice ale imiona mają być z wielkiej litery
const capitalizedNames = (element) => {
    if (typeof element === 'string') {
        return (element[0].toUpperCase() + element.slice(1));
    }
    return element;
};
const capNamesArray = arr.map(capitalizedNames);
console.log("Zadanie 3:", capNamesArray);
//TODO: 4. Zwrócić nową tablice tylko z imionami posortowanymi alfabetycznie
//didn't do - lack of time
//TODO: 5. Zwrócić nową tablice z numerami od największego do najmniejszego
//didn't do - lack of time
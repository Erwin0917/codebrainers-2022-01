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
exerciseCounter = 1;
console.log(`Zadanie nr ${exerciseCounter++}:`);

function isString(element) {
    if (typeof element === 'string') {
        return element;
    }
    // if (Array.isArray(element)) {
    //     for (let i = 0; i < element.length; i++) {
    //         if (isString(element[i])){
    //             return element[i];
    //         }
    //         delete element[i]
    //     }
    // }
};

console.log("Strings: {", arr.filter(isString),"}\n");


//TODO: 2. Usunąć wszystkie wartości false => NaN, undefined, null
console.log(`Zadanie nr ${exerciseCounter++}:`);

function removeFalse(element, index, array) {

    if (Array.isArray(element) === true) {
        // console.log("removeFalse()", element.filter(removeFalse))
        // array[index] = element.filter(removeFalse);
        return element.filter(removeFalse);
    }

    if (typeof element === "string") {
        return element;
    }
    if (element === false || isNaN(element) || element === undefined || element === null) {
        return false;
    }

    return element;
};

console.log('Removed false elements: ', arr.map(removeFalse).filter(removeFalse), "\n");


//TODO: 3. Zwrócić taka samą tablice ale imiona mają być z wielkiej litery
console.log(`Zadanie nr ${exerciseCounter++}:`)

function upperCase(element) {
    if (typeof element === 'string') {
        return (element[0].toUpperCase() + element.substring(1, element.length));
    }
    return element;
};

console.log('Names from upper case plus rest of table: ', arr.map(upperCase));


//TODO: 4. Zwrócić nową tablice tylko z imionami posortowanymi alfabetycznie
console.log(`Zadanie nr ${exerciseCounter++}:`);

arrayOfNames = arr.filter(isString).sort();

console.log('Names sorted: ',arrayOfNames);


//TODO: 5. Zwrócić nową tablice z numerami od największego do najmniejszego
console.log(`Zadanie nr ${exerciseCounter++}:`);


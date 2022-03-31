// [].forEach((element, index) => {})
// const newArr = [].map((element, index) => {})
// [].sort((prevElement, nextElement) => {return /number/})
// const filteredArr = [].filter((element, index) => {return /boolean/})

const arr = ['ala', 13, undefined, 'kasia', 'basia', null, 5, 'szymek', 'karol', 2, NaN, false, ['car', 10, undefined]];

// const squareNumber = (element) => {
//     if (typeof element === 'number') {
//         return square(element);
//     }
//     return element;
// };
//
// const isNumber = element => typeof element === 'number';
//
// const onlyNumber = arr.filter(isNumber);
// const newArr = arr.map(squareNumber);
//
// const chainMethods = arr.filter(isNumber).map(squareNumber);
//
// // console.log(onlyNumber)
//
// function square(number) {
//     return number ** 2;
// }
//
// function map(callback, array) {
//     const newArray = [];
//     for (let i = 0; i <= array.length - 1; i++) {
//         const elem = array[i];
//         const index = i;
//         newArray.push(callback(elem, index, array));
//     }
//     return newArray;
// }
//
// map(squareNumber, arr);
//
// const arrayFilter = (array) => (callback) => filter(callback, array);
// const arrBeforeFilter = arrayFilter(arr);
// console.log(arrBeforeFilter(isNumber));
//
// function filter(callback, array) {
//     const newArray = [];
//     for (let i = 0; i <= array.length - 1; i++) {
//         const value = array[i];
//         const index = i;
//         if (callback(value, index, array) === true) {
//             newArray.push(value);
//         }
//     }
//     return newArray;
// }
//
// console.log(filter(isNumber, arr));


//TODO: 1. Przefiltrować tablice arr żeby zostały same imiona.
//TODO: 2. Usunąć wszystkie wartości false => NaN, undefined, null
//TODO: 3. Zwrócić taka samą tablice ale imiona mają być z wielkiej litery
//TODO: 4. Zwrócić nową tablice tylko z imionami posortowanymi alfabetycznie
//TODO: 5. Zwrócić nową tablice z numerami od największego do najmniejszego


// TODO 1
let arrName = arr.filter((element) => {
    if (typeof element === "string") {
        return true
    }
    return false
})
console.log(arrName)

// TODO 2

const removeArr = arr.filter(Boolean);
removeArr[8].splice(2)
console.log(removeArr)

// TODO 3

const bigLetter = (element) => {
    if (typeof element === 'string') {
        return element[0].toUpperCase() + element.slice(1)
    } return element
}

const result = arr.map(bigLetter)
console.log(result)

//TODO: 4

const sortArr = arr.filter((element) => (typeof element === "string")).sort()
console.log(sortArr)

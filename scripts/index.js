// [].forEach((element, index) => {})
// const newArr = [].map((element, index) => {})
// [].sort((prevElement, nextElement) => {return /number/})
// const filteredArr = [].filter((element, index) => {return /boolean/})

const arr = ['ala', 13, 'kasia', 'basia', 5, 'szymek', 'karol', 2];

const squareNumber = (element) => {
    if (typeof element === "number") {
        return square(element);
    }
    return element;
}

const getNumber = element => typeof element === "number";

const onlyNumber = arr.filter(getNumber)
const newArr = arr.map(squareNumber)

// console.log(onlyNumber)

function square(number) {
    return number ** 2;
}

function map(callback, array){
    const newArray = [];
    for(let i = 0; i <= array.length-1; i++){
        const elem =array[i];
        const index = i;
        newArray.push(callback(elem, index, array));
    }
    return newArray;
}
// console.log(newArray)
map(squareNumber, arr)

const arrayFilter = (array) => (callback) => filter(callback, array);
const arrBeforeFilter = arrayFilter(arr);
console.log(arrBeforeFilter(getNumber));

function filter(callback, array) {
    const newArray = [];
    for (let i =0; i <= array.length - 1; i++) {
        const value = array[i];
        const index = i;
        if (callback(value, index, array) === true) {
            newArray.push(value);
        }
    }
    return newArray;
}

console.log(filter(getNumber, arr));

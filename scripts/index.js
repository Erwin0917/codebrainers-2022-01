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

function map(callback){
    const newArray = [];
    for(let i = 0; i <= arr.length-1; i++){
        const elem =arr[i];
        const index = i;
        newArray.push(callback(elem, index));
    }
    return newArray;
}
console.log(newArray)
map(squareNumber)

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

console.log(onlyNumber)

function square(number) {
    return number ** 2;
}


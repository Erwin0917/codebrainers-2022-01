// [].forEach((element, index) => {})
// const newArr = [].map((element, index) => {})
// [].sort((prevElement, nextElement) => {return /number/})
// const filteredArr = [].filter((element, index) => {return /boolean/})

const arr = ['ala', 13, 'kasia', 'basia', 5, 'szymek', 'karol', 2];

const newArr = arr.map((element) => {
    if (typeof element === "number") {
        return element ** 2;
    }
    return element;
})

console.log(newArr)
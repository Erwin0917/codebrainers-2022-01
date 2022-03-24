//Strings
// "Text 1";
// 'Text 2';
// const textNumer = 3;
// `Text ${textNumer}`;
//
// //Number
// 1 - 2.3
//
// //boolean
// true / false
//
// //undefined
// //null
//
//
// //array
// [1, 'str', {}, [], ()];
//
// //object
// {
//     'myFirstElement': 'value',
//     mySecondElement: null
// }
// new Object()
// new Array(10)

// -----------------------

function functionName(attr1 = 10){
    console.log('FunctionName');
    console.log(attr1);
    if(attr1 === undefined) {
        console.error('attr1 is wrong');
    }
}

const arrowFunction = (attr2) => {
    console.log('arrowFunction');
    console.log(attr2)
}

// functionName('10');
// arrowFunction('new attr');


// --------------------
var oldOne;
let newFirst;
const newSecond = 10;
// newSecond = 20;

const thrVar = [];
thrVar.push('stg');

// ---------------

// if (10 == '10'){
//
// }
//
// if (10 === '10'){
//
// }

console.log(parseInt('10.2'))
console.log(parseFloat('10.2'))


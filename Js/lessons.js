'use strict';

//Conditions

/*if (4 !== 9) {
    console.log(`ok!`);
} else {
    console.log(`error!`)
}

const num = 90;

if (num < 49) {
    console.log(`error!`);
} else if (num > 100) {
    console.log(`A lot`);
} else {
    console.log(`Ok!`);
}

(num === 50) ? console.log(`Ok!`) :
(num < 49) ? console.log(`error!`) :
(num > 100) ? console.log(`A lot`) :
console.log(`A`) ;

switch (num) {
    case 49: 
       console.log(`error!`);
       break;
    case 52: 
        console.log(`A lot`);
        break;
    case 50: 
        console.log(`Ok!`);
        break;
    default : 
        console.log(`O no!`);
        break;
}*/


//Cycles

/*let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
} while (num <= 55);

for (let i = 0; i < 5; i++) {
    if (i === 4) {
        continue;
    }
    console.log(i);
}*/

//Functions
/*let num = 20;
function showFirstMesage(text) {
    console.log(text);
   let num = 23;
   console.log(num);
}

showFirstMesage(`Hello world!`);
console.log(num);

function calc (a, b) {
    return a + b;
    console.log(`bal`); //unreachable code
}

console.log(calc (1, 4));

function ret () {
    let num = 50;
    return num;
}

const anotherNum = console.log(ret());


function bla () {} //function declaration, function work before called
let bla1 = function () {}; // function expression, working after called
const bla2 = () => {}; //arrow function, doesn't have context

const calc1 = (a, b) => {
    return(a+b);
};

console.log(calc1(1,4));

const calc2 = (a, b) =>  (a+b);*/

//String and numbers

const str = `test`;
//const arr = [1,2,4];

//console.log(str.toUpperCase());
//console.log(str.toLowerCase());
console.log(str);

const fruit = `some fruit`;

console.log(fruit.indexOf(`q`));

const logg = `Hello world!`;
//console.log(logg.slice(6, 11));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));


const num = 12.2;
console.log(Math.round(num));
const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));

const str1 = `bla`;
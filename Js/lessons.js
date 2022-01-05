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

/*const str = `test`;
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

const str1 = `bla`;*/

//Call back function

/*function first() {

    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}
first();
second();

function learnJS(lang, callback) {
    console.log(`I learn: ${lang}`);
    callback();
}

let done = function() {
    console.log(`I pass the lesson`);
};


learnJS(`JavaScript`, done);*/

//Objects and methods
//const obj = new Object();

/*const obj1 = {
    a: `hahh`,
    b: 909,
    c: [1, `c`, null],
    d: {
        d1:`bla`,
        d2: {
            d22:{
                d222:`I am here`,
            }
        },
    },
};

console.log(obj1.d.d2.d22.d222);
const {d2, d1} = obj1.d;
console.log(d2);
console.log(Object.keys(obj1));


const options = {
    name: `test`,
    width: 1024,
    height: 1024,
    colors: {
        border: `black`,
        bg: `red`,
    },
    makeTest: function() {
        console.log(`Test :`, Object.keys(options).length);    
    }
};

options.makeTest();

const {border, bg} = options.colors;

console.log(Object.keys(options).length);
console.log(border);

//console.log(options[`colors`][`border`]);

//delete options.name;

//console.log(options);

/*let counter = 0;

for (let key in options) {
    if (typeof(options[key]) === `object`) {
        for (let i in options[key]){
            console.log(`property ${i} has meaning ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`property ${key} has meaning ${options[key]}`);
        counter++;
    }
    
}
console.log(counter);*/

//Arrays

/*const arr = [1, 2, 13, 26, 8];
arr.sort();
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
/*arr[99] = 0;
console.log(arr.length);
console.log(arr);*/

/*arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} inside array ${arr}`);
});


arr.pop();
arr.push(10);

console.log(arr);

for (let i =0; i < arr.length; i++) {
    console.log(arr[i]);
}

for ( let value of arr) {
    console.log(value);
}

const str = prompt(``, ``);

const products = str.split(`, `);
products.sort();
console.log(products.join(`; `));

let obj = {
    a:1,
    b:2,
    c:3,
};

for (let [key] in obj) {
    console.log(obj[key]);
}*/

//Data transfer

let a = 5,
    b = a;

b = b + 5; //Передача ведется по значению для примитивных типов данных

console.log(a);
console.log(b);

const obj = {
    a: 5,
    b: 1,
};

//const copy = obj; //Передача ведется по ссылке (передается ссылка) для данных типа объектов (массивы, функции)

//copy.a = 10;

console.log(copy);
console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
} // Для вложенных объектов происходит передача по ссылке
//Такой тип копирования назыается поверхностным (копиование только на 1 уровне)б бывают так же и глубокие

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    },
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);


//Object.assign()

const add = {
    d: 17,
    e: 20,
};

const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);


//Arrays copy, Array.slice()

const oldArrsy = [`a`, `b`, `c`];
const newArray = oldArrsy.slice();

newArray[2] = 1;

console.log(newArray);
console.log(oldArrsy);

//Spread operator

const video = [`youtube`, `vimeo`, `rutube`],
      blogs = [`wordpress`, `livejournal`, `blogger`],
      internet = [...video, ...blogs, `vk`, `facebook`];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);


const array = [`a`, `b`];

const newArray1 = [...array];

console.log(newArray1);



const q = {
    one: 1,
    two: 2,
};

const newObj = {...q};

console.log(newObj);

// OOP Объектно Ориентированное програмирование.

let str = `some`;
let strObj = new String (str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]);

//examples

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log(`Hello`);
    }
};

const john = Object.create(soldier);

/*const john = {
    health: 100,
};*/

//Object.setPrototypeOf(john, soldier); //Устанавливает прототип

//john.__proto__ = soldier; //устаревший метод
john.sayHello();


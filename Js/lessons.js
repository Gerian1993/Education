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

let num = 50;

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
}
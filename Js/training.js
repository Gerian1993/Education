//1
let x = 5;
alert(x++); //5
//2
let bla = []+false-null+true;
console.log(bla); //NaN ??
//3
let y = 1,
v = y = 2;
alert(v); //2
//4
let b = []+1+2;
console.log(b); //12 массив при конкотинации всегда становится строкой
//5
alert(`12`[1]); //1 в квадратных скобках происходит обращение к символу строки
//6
console.log(2 && 1 && null && 0 && undefined); //null
//7
// !!(a && b) (a && b)
//8
alert(null || 2 && 3 || 4);
//9
let c = [1,2,3],
d = [1,2,3];
if (c == d) {
    alert(`true`);
} else {
    alert(`false`);
}
//10
alert (+`infinity`)
//11
if (`Ёжик`>`яблоко`) {
    alert(`false`);
} else {
    alert(`true`);
}
//12
alert(0 || "" || 2 || undefined || true || false);
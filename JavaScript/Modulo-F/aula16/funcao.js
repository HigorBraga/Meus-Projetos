/*function parimpar(num) {
    if (num % 2 == 0) {
        console.log(`O valor ${num} é par`);
    } else {
        console.log(`O valor ${num} é impar`);
    }
}

let num = [5, 6, 7, 8, 9, 10, 11, 12];

for (let c = 0; c < num.length; c++) {
    parimpar(num[c]);
}
*/

/*let s = function somar(a=0, b=0) {
    return a + b;
}

console.log(s(5,2));
*/



/*function fatorial(num) {
    let fat = 1;
    for (let cont = num; cont > 1; cont--) {
        fat *= cont;
    }
    return fat;
}

console.log(fatorial(5));
*/


function fatorial(num) {
    if (num == 1) {
        return 1;
    } else {
        return num * fatorial(num -1);
    }
}

console.log(fatorial(5));
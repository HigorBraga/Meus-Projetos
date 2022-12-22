let num = [1, 2, 3, 4, 5, 6, 7];
num[3] = 8;
num.push(4);
num.sort();
/*for (let c = 0; c < num.length; c++) {
    console.log(num[c]);
}
*/

for (let c in num) {
    console.log(num[c]);
}



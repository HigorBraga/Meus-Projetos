let inicio = 1;
let fim = 10;
let passo = 0;

if (passo <= 0) {
    console.log('Passo inválido, Considerando passo 1');
    passo = 1;
}
if(inicio < fim) {
    for(let cont = inicio; cont <= fim; cont+=passo) {
        console.log(cont);
    }
} else if (inicio > fim) {
    for(let cont = inicio; cont >= fim; cont-=passo) {
        console.log(cont);
    }
}

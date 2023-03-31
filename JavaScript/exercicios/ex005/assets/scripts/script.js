var res = window.document.getElementById('resposta');
var lista = [];
var maior = 0;
var menor = 0;
var soma = 0;
var media = 0;
function adicionar() {
    let num = window.document.getElementById('numeros');
    let seladd = window.document.getElementById('mostrarvalores');
    if (num.value.length == 0 || num.value <= 0 || num.value > 100) {
        window.alert('Valor inválido ou já encontrado na lista');
    } else {
        let n = Number(num.value);
        if (lista.includes(n)) {
            window.alert('Valor inválido ou já encontrado na lista');
        } else {
            let item = window.document.createElement('option');
            item.text = `Valor ${n} adicionado`;
            seladd.appendChild(item);
            lista.push(n);
            soma += n;
            media = soma / lista.length;
        }
    }
    num.value = '';
    num.focus();
    res.innerHTML = '';
}


function finalizar() {
    if (lista.length == 0) {
        window.alert('Adicione valores antes de finalizar');
    } else {
        for(let pos = 0; pos < lista.length; pos ++) {
            if (pos == 0) {
                maior = menor = lista[pos];
            } else {
                if (lista[pos] > maior) {
                    maior = lista[pos];
                }
                if (lista[pos] < menor) {
                    menor = lista[pos];
                }
            }
        }
        res.innerHTML = '';
        res.innerHTML = `<p>Ao todo temos ${lista.length} números cadastrados,</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior},</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor},</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma},</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
    }

}
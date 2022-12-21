let resposta = window.document.getElementById('resposta');

function MostrarTabuada() {
    let txttabuada = window.document.getElementById('txttabuada');
    let tabuada = Number(txttabuada.value);
    for (let cont = 0; cont <= 10; cont++) {
        resposta.innerHTML += `${tabuada} x ${cont} = ${tabuada * cont}<br/>`;
    }
}


function LimparTabuada() {
    resposta.innerHTML = "";
}
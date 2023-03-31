function contar() {
    let i = document.getElementById('inicio');
    let f = document.getElementById('fim');
    let p = document.getElementById('passo');
    let res = document.getElementById('resposta');
    let inicio = Number(i.value);
    let fim = Number(f.value);
    let passo = Number(p.value);

    res.innerHTML = 'Contando: <br>'
    if (i.value === "" || f.value === "") {
        res.innerHTML = 'Impossível contar!'
    } else {
        if (passo <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        if (inicio < fim) {
            for(let cont = inicio; cont <= fim; cont+=passo) {
                res.innerHTML += ` ${cont} \u{1F449}`;
            }
        }  else if (inicio > fim) {
            for(let cont = inicio; cont >= fim; cont-=passo) {
                res.innerHTML += ` ${cont} \u{1F449}`;
            }
        }
        res.innerHTML += '\u{1f3c1}';
    }

}
function tabuada() {
    let num = window.document.getElementById('valtabuada');
    let tab = window.document.getElementById('seltab');
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!');
    } else {
        let n = Number(num.value);
        tab.innerHTML = "";
        for (let cont = 0; cont <= 10; cont++) {
            let item = window.document.createElement('option');
            item.text = `${n} x ${cont} = ${n*cont}`;
            tab.appendChild(item);
        }
    }
}
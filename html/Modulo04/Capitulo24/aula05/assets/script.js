function calcularMedia() {
    let nota1 = parseFloat(window.document.getElementById('primeiranota').value);
    let nota2 = parseFloat(window.document.getElementById('segundanota').value);
    let mostrarmedia = window.document.getElementById('mostrarmedia');
    let situacao = window.document.getElementById('situacao');
    let media = (nota1 + nota2) / 2;
    if (nota1 > 10 || nota2 >  10) {
        window.alert('valores inválidos');
    } else {
        if (media <= 5) {
            mostrarmedia.innerHTML = `${media}`;
            situacao.innerHTML = 'Reprovado';
            situacao.style.color = 'red';
        } else if (media < 7) {
            mostrarmedia.innerHTML = `${media}`;
            situacao.innerHTML = 'Recuperação';
            situacao.style.color = 'yellow';
        } else {
            mostrarmedia.innerHTML = `${media}`;
            situacao.innerHTML = 'Aprovado';
            situacao.style.color = 'green';
        }
    }
}
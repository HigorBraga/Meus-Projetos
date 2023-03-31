let resposta = window.document.getElementById('resposta');
let imagem = window.document.getElementById('imagem');
let horario = new Date().getHours();


resposta.innerHTML = `Agora são ${horario} horas`;
if (horario >= 6 && horario <= 11) {
    imagem.innerHTML = '<img src="/imagens/manha.png" alt="Uma foto representando a manha">';
    window.document.body.style.backgroundColor = '#89c5e9';
} else if (horario >= 12 && horario <= 17) {
    imagem.innerHTML = '<img src="/imagens/tarde.png" alt="Uma foto representando a tarde">';
    window.document.body.style.backgroundColor = '#d08251';
} else {
    imagem.innerHTML = '<img src="/imagens/noite.png" alt="Uma foto representando a noite">';
    window.document.body.style.backgroundColor = '#0f161c';
}

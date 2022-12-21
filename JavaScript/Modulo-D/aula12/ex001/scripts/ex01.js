function consultar() {
    let resposta = window.document.getElementById('resposta');
    let semana = new Date();
    let diasemana = semana.getDay();
    switch (diasemana) {
        case 0:
            resposta.innerHTML = "Estamos no Domingo";
            break;
        case 1:
            resposta.innerHTML = "Estamos na Segunda-Feira";
            break;
        case 2:
            resposta.innerHTML = "Estamos na Terça-Feira";
            break;
        case 3:
            resposta.innerHTML = "Estamos na Quarta-Feira";
            break;
        case 4:
            resposta.innerHTML = "Estamos na Quinta-Feira";
            break;
        case 5:
            resposta.innerHTML = "Estamos na Sexta-Feira";
            break;
        case 6:
            resposta.innerHTML = "Estamos no Sábado";
            break;
        default:
            resposta.innerHTML = "[ERRO] Dia da semana inválido";
            break;
    }
    
}

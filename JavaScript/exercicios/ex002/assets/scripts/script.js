function verificar() {
    let anonascimento = window.document.getElementById('anonascimento');
    let resposta = window.document.getElementById('resposta');
    let sexo = window.document.getElementsByName('sexo');
    let anoAtual = new Date().getFullYear();
    let nascimento = Number(anonascimento.value);
    let idade = Number(anoAtual - nascimento);
    var genero = "";
    if(nascimento <= 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        if(sexo[0].checked) {
            genero = 'Homem';
        } else if (sexo[1].checked){
            genero = 'Mulher';
        }
        resposta.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        resposta.style.textAlign = 'center';
        if (genero == 'Homem') {
            if (idade >=1 && idade <= 5) {
                resposta.innerHTML += `<img src="/imagens/nenem-homem.png" alt="foto de um nenem do sexo masculino">`;
            }if (idade >= 6 && idade <= 11) {
                resposta.innerHTML += `<img src="/imagens/crianca-homem.png" alt="foto de uma criança do sexo masculino">`;
            }if (idade >= 12 && idade <= 17) {
                resposta.innerHTML += `<img src="/imagens/jovem-homem.png" alt="foto de um jovem do sexo masculino">`;
            }if (idade >= 18 && idade <= 24) {
                resposta.innerHTML += `<img src="/imagens/adolescente-homem.png" alt="foto de um adolescente do sexo masculino">`;
            }if (idade >= 25 && idade <= 59) {
                resposta.innerHTML += `<img src="/imagens/adulto-homem.png" alt="foto de um adulto do sexo masculino">`;
            }if (idade >= 60) {
                resposta.innerHTML += `<img src="/imagens/idoso-homem.png" alt="foto de um idoso do sexo masculino">`;
            }
        } else {
            if (idade >=1 && idade <= 5) {
                resposta.innerHTML += `<img src="/imagens/nenem-mulher.png" alt="foto de uma nenem do sexo feminino">`;
            }if (idade >= 6 && idade <= 11) {
                resposta.innerHTML += `<img src="/imagens/crianca-mulher.png" alt="foto de uma criança do sexo feminino">`;
            }if (idade >= 12 && idade <= 17) {
                resposta.innerHTML += `<img src="/imagens/jovem-mulher.png" alt="foto de uma jovem do sexo feminino">`;
            }if (idade >= 18 && idade <= 24) {
                resposta.innerHTML += `<img src="/imagens/adolescente-mulher.png" alt="foto de uma adolescente do sexo feminino">`;
            }if (idade >= 25 && idade <= 59) {
                resposta.innerHTML += `<img src="/imagens/adulta-mulher.png" alt="foto de uma adulta do sexo feminino">`;
            }if (idade >= 60) {
                resposta.innerHTML += `<img src="/imagens/idosa-mulher.png" alt="foto de um idosa do sexo feminino">`;
            }
        }
    }
}

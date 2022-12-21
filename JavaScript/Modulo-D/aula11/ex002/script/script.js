function verificar() {
    let pais = window.document.querySelector('input#txtpais');
    let resposta = window.document.getElementById('resposta');
    let imagem = window.document.getElementById('imagem');
    if (pais.value == 'Brasil') {
        resposta.innerHTML = `Você mora no ${pais.value}`;
        imagem.innerHTML = "<img src='imagens/brasil.jpeg' alt='imagem da bandeira do brasil'>";
    } else if (pais.value == 'Argentina') {
        resposta.innerHTML = `Você mora na ${pais.value}`;
        imagem.innerHTML = "<img src='imagens/argentina.jpeg' alt='imagem da bandeira da argentina'>";
    } else if (pais.value == 'Italia') {
        resposta.innerHTML = `Você mora na ${pais.value}`;
        imagem.innerHTML = "<img src='imagens/italia.jpeg' alt='imagem da bandeira da argentina'>";
    } else if (pais.value == 'Espanha') {
        resposta.innerHTML = `Você mora na ${pais.value}`;
        imagem.innerHTML = "<img src='imagens/espanha.jpeg' alt='imagem da bandeira da argentina'>";
    } else if (pais.value == 'Portugal') {
        resposta.innerHTML = `Você mora em ${pais.value}`;
        imagem.innerHTML = "<img src='imagens/portugal.png' alt='imagem da bandeira da argentina'>";
    } else if (pais.value == 'França') {
        resposta.innerHTML = `Você mora na ${pais.value}`;
        imagem.innerHTML = "<img src='imagens/franca.jpeg' alt='imagem da bandeira da argentina'>";
    } else {
        resposta.innerHTML = "País não encontrado.";
        imagem.innerHTML = "";
    }    
}
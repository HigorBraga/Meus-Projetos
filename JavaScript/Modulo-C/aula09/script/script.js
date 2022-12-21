let area = window.document.getElementById("quadrado");
area.addEventListener("click", clicar);
area.addEventListener("mouseenter", entrar);
area.addEventListener("mouseout", sair);


function entrar() {
    area.style.backgroundColor = "red";
    area.innerText = "Entrou";
}


function sair() {
    area.style.backgroundColor = "green";
    area.innerText = "Saiu";
}


function clicar() {
    area.style.backgroundColor = "blue";
    area.innerText = "Clicou";
}
let contador = 0; 
let historico = []; 

function gerarSenha() {
    contador++;

    if (contador > 9999) contador = 1;

    let senha = contador.toString().padStart(4, '0');

    let sala = Math.floor(Math.random() * 20) + 1;

    let texto = `${senha} - SALA ${sala}`;

    document.getElementById("senhaAtual").innerText = texto;

    historico.unshift(texto);

    if (historico.length > 4) {
        historico.pop();
    }

    atualizarHistorico();
}

function atualizarHistorico() {
    let lista = document.getElementById("historico");
    lista.innerHTML = "";

    historico.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item;
        lista.appendChild(li);
    });
}

let indexVideo = 0;
let videos = document.querySelectorAll(".video");

function iniciarCarousel() {
    if (videos.length === 0) return;

    // inicia o primeiro vídeo
    videos[indexVideo].classList.add("active");
    videos[indexVideo].play();

    videos.forEach((video, index) => {
        video.addEventListener("ended", () => {
            proximoVideo();
        });
    });
}

function proximoVideo() {
    videos[indexVideo].pause();
    videos[indexVideo].currentTime = 0;
    videos[indexVideo].classList.remove("active");

    indexVideo++;
    if (indexVideo >= videos.length) indexVideo = 0;

    videos[indexVideo].classList.add("active");
    videos[indexVideo].play();
}

window.onload = iniciarCarousel;
const respostas = document.querySelectorAll(".pergunta p");
const oculto = document.querySelector("#aviso");
const pontos = document.querySelector("#pontuacao");
let ecraPontos = 0

//"Resposta Correta!" ao clicar na resposta correta
respostas.forEach(function (resposta) {
    resposta.addEventListener("click", function () {
        if (resposta.parentElement.classList.contains("respondida")) {
            return;
        }
        resposta.parentElement.classList.add("respondida");
        resposta.classList.add("clicada");
        if (resposta.classList.contains("correta")) { //Resposta correta
            oculto.classList.remove("escondido");
            setTimeout(function () {
                oculto.classList.add("escondido");
            }, 2000);
            ecraPontos = ecraPontos + 5
            pontos.textContent = "Pontos:" + ecraPontos;
        } else {                                     //Resposta Errada
            resposta.parentElement.classList.add("falhada")
            ecraPontos = Math.max(0, ecraPontos - 2)
            pontos.textContent = "Pontos:" + ecraPontos;
        }
        if (document.querySelectorAll(".pergunta.respondida").length === document.querySelectorAll(".pergunta").length) {
            setTimeout(function () {

                let jogarNovamente = confirm("Jogo Finalizado!\nPontos: " + ecraPontos + "\nJogar Novamente?");
                if (jogarNovamente) {
                    location.reload();
                }
            }, 400);
        }
    });
});

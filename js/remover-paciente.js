var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("tbody");

tabela.addEventListener("dblclick", function (event) {
    var alvoEvento = event.target;          // td
    var paiDoAlvo = alvoEvento.parentNode;  // tr

    paiDoAlvo.classList.add("fadeOut");

    setTimeout(function () {
        paiDoAlvo.remove();
    }, 1000);
});





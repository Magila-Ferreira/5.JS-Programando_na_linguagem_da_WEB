var botaoAdicionar = document.querySelector("#buscar-pacientes");

// Variável que armazena a tabela de busca dos pacientes
var newTable = document.querySelector(".paciente-adicionado");

if (!newTable === null) {
    // Removendo tabela de paciente-adicionado antes de iniciar uma nova busca 
    newTable.innerHTML = "";
}

// Evento de click para buscar pacientes em um endereço da rede  
botaoAdicionar.addEventListener("click", function () {

    // Variável que armazena um objeto de requisição http
    var xhr = new XMLHttpRequest();

    // Configuração de requisição do tipo GET 
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    // Evento de escuta que carrega (devolve) a resposta  
    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status === 200) {

            // Mensagem de erro invisível
            erroAjax.classList.add("invisivel");

            // Variável que armazena a resposta de texto
            var resposta = xhr.responseText;

            // Variável que transforma a resposta de texto em um array de objetos
            var pacientes = JSON.parse(resposta);

            // Laço que percorre o array pacientes
            pacientes.forEach(function (paciente) {

                // Chama a função adiciona paciente na tabela
                adicionaPacienteNaTabela(paciente);
            })

        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
    });

    // Envio da requisição
    xhr.send();
});
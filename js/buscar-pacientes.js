var botaoAdicionar = document.querySelector("#buscar-pacientes");

var i = 0;

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
                
                // Condicional que bloqueia a busca de pacientes repetidos  
                if (i < pacientes.length) {
                    // Chama a função adiciona paciente na tabela
                    adicionaPacienteNaTabela(paciente);
                    i++;
                } 
            });

            // Chama a função de alerta
            alerta();
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
    });

    // Envio da requisição
    xhr.send();
});

// Função que alerta que a busca já foi realizada 
function alerta() {
    alert("A busca já adicionou todos os pacientes!!!");
    return;
};


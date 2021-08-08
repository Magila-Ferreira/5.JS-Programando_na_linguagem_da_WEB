// Aula 7 - Filtro de tabela

// Variável que armazena a input de filtro
var campoFiltro = document.querySelector("#filtrar-tabela");

// Função que chama um evento em cada dígito inserido na input  
campoFiltro.addEventListener("input", function () {

    // Variável que armazena um array com todos os pacientes
    var pacientes = document.querySelectorAll(".paciente");

    // Condicional que verifica se há algo digitado na input filtro 
    if (this.value.length > 0) {

        // Laço que permite percorrer o array de pacientes
        for (var i = 0; i < pacientes.length; i++) {

            // Variável que armazena cada paciente individualmente, conforme o laço percorre o array de pacientes
            var paciente = pacientes[i];

            // Variável que armazena cada td-nome individualmente 
            var tdNome = paciente.querySelector(".info-nome");

            // Variável que armazena cada nome individualmente
            var nome = tdNome.textContent;

            // Criando expressão regular para melhorar a lógica de filtragem
            var expressao = new RegExp(this.value, "i");

            // Condicional que verifica se o valor do filtro corresponde a algum caractere dos nomes da tabela
            if (!expressao.test(nome)) {

                // Adiciona a classe invisível do CSS
                paciente.classList.add("invisivel");
            } else {

                // Remove a classe invisível do CSS
                paciente.classList.remove("invisivel");
            }
        }
    } else {

        // Laço que percorrerá todo o array de pacientes
        for (var i = 0; i < pacientes.length; i++) {

            // Variável que armazena cada paciente individualmente, conforme o laço percorre o array de pacientes
            var paciente = pacientes[i];

            // Remove a classe invisível do CSS
            paciente.classList.remove("invisivel");
        }
    }
});
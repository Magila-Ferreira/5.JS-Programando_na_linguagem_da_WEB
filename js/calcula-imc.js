/***** AULA_1: Query Selector 25-05 *****/

// Criando uma variável titulo com o valor do conteúdo de h1
var titulo = document.querySelector(".titulo");

// OBS: document -> variável que armazena todo o código da página 
//      querySelector -> seletor de requisições que seleciona apeas o conteúdo da tag demarcada */

// Alterando o valor da variável através do parâmetro text.Content
titulo.textContent = "Aparecida Nutricionista"

/***** AULA_2: Variáveis e Operadores 26-05 *****/

// Cria a variável pacientes e seleciona todas as tr que contém a classes .paciente
var pacientes = document.querySelectorAll(".paciente");

/***** AULA_3: Arrays, Loop e Estilos 27-05 *****/

// Cria um laço de repetição para a verificação e cálculo do IMC de todos os pacientes
for (var i = 0; i < pacientes.length; i++) {

    //  Cria a variável paciente que corresponde a cada ítem do array_pacientes, conforme o percorre  
    var paciente = pacientes[i];

    // Cria as variáveis tdPeso e peso. Na primeira seleciona a classe .info-peso e na segunda o conteúdo de texto dela
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    // Cria as variáveis tdAltura e altura. Na primeira seleciona a classe .info-altura e na segunda o conteúdo de texto dela
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    // Cria a variáveis tdImc e seleciona a classe .info-imc
    var tdImc = paciente.querySelector(".info-imc");

    // Criando variáveis para verificação do cálculo:
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    // Verificando a validade dos valores
    if (!pesoEhValido) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";

        //***** AULA_3: Modificando estilos com JS 28-05 *****/
        paciente.classList.add("pacienteInvalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida!";
        paciente.classList.add("pacienteInvalido");
    }

    // Variável de cálculo do IMC
    if (pesoEhValido && alturaEhValida) {

        // Chama a função de cálculo do IMC
        // Altera o valor do conteúdo de texto da tdImc para o valor da variável imc
        tdImc.textContent = calculaImc(peso, altura);
    }

}

// Aula 6 - Trabalhando com funções:
function validaPeso(peso) {
    if (peso > 1 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0.2 && altura < 3.0) {
        return true;
    } else {
        return false;
    }
}

// Aula 5 - Semântica e organização do código

// Criando uma função nomeada com parâmetros peso / altura para calcular o IMC
function calculaImc(peso, altura) {

    // Cálculo do IMC
    // retorna o resultado 
    return (peso/(altura*altura)).toFixed(2);
}



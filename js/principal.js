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

//***** AULA_3: Arrays, Loop e Estilos 27-05 *****/

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
    var pesoEhValido = true;
    var alturaEhValida = true;

    // Verificando a validade dos valores
    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
    }

    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida!";
    }

    // Variável de cálculo do IMC
    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);

        // Altera o valor do conteúdo de texto da tdImc para o valor da variável imc
        tdImc.textContent = imc.toFixed(2);
    }

}

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
    var pesoEhValido = true;
    var alturaEhValida = true;

    // Verificando a validade dos valores
    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";

        //***** AULA_3: Modificando estilos com JS 28-05 *****/
        paciente.classList.add("pacienteInvalido");
    }

    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida!";
        paciente.classList.add("pacienteInvalido");
    }

    // Variável de cálculo do IMC
    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);

        // Altera o valor do conteúdo de texto da tdImc para o valor da variável imc
        tdImc.textContent = imc.toFixed(2);
    }

}

//  AULA_4: Eventos e Formulários com JS 31-05 
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    //  AULA_4: Criando Element com JS 01-06 

    // Faz a ligação entre o formulário html e o JS
    var form = document.querySelector("#form-adiciona");

    // Acessa os dados das inputs do formulário
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // Cria os elementos do html com JS
    var pacienteTr = document.createElement("tr");
        var nomeTd = document.createElement("td");
        var pesoTd = document.createElement("td");
        var alturaTd = document.createElement("td");
        var gorduraTd = document.createElement("td");
        var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
})





/***** AULA_1: Query Selector 25-05 *****/ 

// Criando uma variável titulo com o valor do conteúdo de h1
var titulo = document.querySelector(".titulo");

// OBS: document -> variável que armazena todo o código da página 
//      querySelector -> seletor de requisições que seleciona apeas o conteúdo da tag demarcada */

// Imprimindo o valor da variável titulo
console.log(titulo);

// Alterando o valor da variável através do parâmetro text.Content
titulo.textContent = "Aparecida Nutricionista"

// Imprimindo o valor da variável alterada
console.log(titulo.textContent);



/***** AULA_2: Variáveis e Operadores 26-05 *****/

// Cria a variável paciente e seleciona o id #primeiro-paciente do document
var paciente = document.querySelector("#primeiro-paciente");

// Cria as variáveis tdPeso e peso. Na primeira seleciona a classe .info-peso e na segunda o conteúdo de texto dela
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

// Cria as variáveis tdAltura e altura. Na primeira seleciona a classe .info-altura e na segunda o conteúdo de texto dela
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

// Cria a variáveis tdImc e seleciona a classe .info-imc
var tdImc = paciente.querySelector(".info-imc");

// Variável de cálculo do IMC
var imc = peso / (altura * altura);

// Altera o valor do conteúdo de texto da tdImc para o valor da variável imc
tdImc.textContent = imc;

// Imprime as variáveis selecionadas
console.log(paciente);                                  // tr
console.log(tdPeso);                                    // td 
console.log(peso);                                      // 100
console.log(tdAltura);                                  // td
console.log(altura);                                    // 2.00
console.log(imc);                                       // 25

//                              27-05

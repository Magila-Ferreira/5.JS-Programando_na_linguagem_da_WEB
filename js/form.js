//  AULA_4: Eventos e Formulários com JS 31-05 
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    //  AULA_4: Criando Element com JS 01-06 

    // Faz a ligação entre o formulário html e o JS
    var form = document.querySelector("#form-adiciona");

    // Extrai informações do paciente no Form
    var paciente = obtemPacienteDoFormulario(form);

    // Validação dos dados dos pacientes
    var erros = validaPaciente(paciente);

    if (erros.length > 0)   {
        exibeMensagensDeErro(erros);
        return;
    }

    // Chama a função adiciona paciente na tabela
    adicionaPacienteNaTabela(paciente);

    // limpa o formulário
    form.reset();

    // Variável que armazena as mensagens de erro do html  
    var mensagensErro = document.querySelector("#mensagens-erro");

    // Propriedade que limpa o html das mensagens de erro 
    mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
        // Cria a tr e as td do paciente
        var pacienteTr = montaTr(paciente); 

        pacienteTr.classList.add("paciente-adicionado");

        console.log(pacienteTr);

        // Faz a ligação entre a tabela html e o JS 
        var tabela = document.querySelector("#tabela-pacientes");
    
        // Coloca a tr-paciente dentro da tabela
        tabela.appendChild(pacienteTr);
};

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
};

function montaTr(paciente) {

    // Cria os elementos do html com JS
    var pacienteTr = document.createElement("tr");

    // Adiciona uma classe à tr
    pacienteTr.classList.add("paciente");

    // Forma completa - sem utilizar a função * Monta td *
    var nomeTd = document.createElement("td"); // Cria a td nome
    nomeTd.textContent = paciente.nome;        // Repassa o nome do form para o nome da td
    nomeTd.classList.add("info-nome");         // Adiciona a classe info-nome a nova td criada 
    pacienteTr.appendChild(nomeTd);            // Coloca a td-nome dentro da tr-paciente

    // Forma reduzida 1 - utiliza a função * Monta td * 
    var pesoTd = montaTd(paciente.peso, "info-peso"); // Chama a função montaTd - responsável por: repassar o peso do form para o peso da td e adicionar a classe info-peso a nova td criada
    pacienteTr.appendChild(pesoTd);                   // Coloca a td-peso dentro da tr-paciente

    // Forma reduzida 2
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));   // Cria a td altura, repassa a altura do form para a td altura, adiciona a classe info-altura a nova td criada e coloca a td altura dentro da tr-paciente 
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura")); // Idem - gordura
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));         // Idem - imc

    return pacienteTr;
};

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
};

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
};

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
};

//Paciente
const pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  let paciente = pacientes[i];
  //pegando peso do paciente
  let tdPeso = paciente.querySelector(".info-peso");
  let peso = tdPeso.textContent;

  //pegando altura do paciente
  let tdAltura = paciente.querySelector(".info-altura");
  let alturaPaciente = tdAltura.textContent;

  //Controller variables
  let alturaEValida = true;
  let pesoEValido = true;

  let tdImc = paciente.querySelector(".info-imc");

  if (peso < 0 || peso > 1000) {
    alert("Peso inválido!");
    pesoEValido = false;
    paciente.classList.add("paciente-invalido");
  }

  if (alturaPaciente < 0 || alturaPaciente > 1000) {
    alert("Altura inválida!");
    alturaEValida = false;
    paciente.classList.add("paciente-invalido");
  }

  if (alturaEValida && pesoEValido) {
    //fazendo as contas
    let imc = peso / (alturaPaciente * alturaPaciente);

    //mostrando result
    tdImc.innerText = imc.toFixed(2);

    paciente.classList.add("paciente-valido");
  }
}

//pegando o botão adicionar paciente
let botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click", function (event) {
  // prevenindo que de f5 automaticamente na página
  event.preventDefault();

  // pegando os valores do fomulario de cadastro
  let form = document.querySelector("#formAdicionar");
  const pesoCadastro = form.peso.value;
  const alturaCadastro = form.altura.value;
  const nomeCadastro = form.nome.value;
  const gorduraCadastro = form.gordura.value;

  //criando as trs e tds para serem adicionados a lista
  let pacienteNaTable = document.createElement("tr");
  let pesoNaTable = document.createElement("td");
  let nomeNaTable = document.createElement("td");
  let gorduraNaTable = document.createElement("td");
  let alturaNaTable = document.createElement("td");
  let imcNaTable = document.createElement("td");

  //pegando os valores
  pesoNaTable.innerText = pesoCadastro;
  nomeNaTable.innerText = nomeCadastro;
  alturaNaTable.innerText = alturaCadastro;
  gorduraNaTable.innerText = gorduraCadastro;

  //adicionando nas trs e tds
  pacienteNaTable.appendChild(nomeNaTable);
  pacienteNaTable.appendChild(pesoNaTable);
  pacienteNaTable.appendChild(alturaNaTable);
  pacienteNaTable.appendChild(gorduraNaTable);

  //vinculando a tabela no html
  let tabelaHtml = document.querySelector("#tabela-pacientes");
  tabelaHtml.appendChild(pacienteNaTable);
});

//pegando o botão adicionar paciente
let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  // prevenindo que de f5 automaticamente na página
  event.preventDefault();

  // pegando os valores do fomulario de cadastro
  var form = document.querySelector("#formAdicionar");
  let paciente = getForm(form);
  //criando as trs e tds para serem adicionados a lista
  let pacienteTr = document.createElement("tr");
  let nomeTd = document.createElement("td");
  let pesoTd = document.createElement("td");
  let alturaTd = document.createElement("td");
  let gorduraTd = document.createElement("td");
  let imcTd = document.createElement("td");

  //pegando os valores
  nomeTd.textContent = paciente.nome;
  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = paciente.imc;

  //adicionando nas trs e tds
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  //vinculando a tabela no html
  let tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
});

function getForm(form) {
  paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };
  return paciente;
}

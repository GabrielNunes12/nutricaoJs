//pegando o botão adicionar paciente
let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  // prevenindo que de f5 automaticamente na página
  event.preventDefault();

  // pegando os valores do fomulario de cadastro
  let form = document.querySelector("#formAdicionar");
  let nome = form.nome.value;
  let peso = form.peso.value;
  let altura = form.altura.value;
  let gordura = form.gordura.value;

  //criando as trs e tds para serem adicionados a lista
  let pacienteTr = document.createElement("tr");
  let nomeTd = document.createElement("td");
  let pesoTd = document.createElement("td");
  let alturaTd = document.createElement("td");
  let gorduraTd = document.createElement("td");
  let imcTd = document.createElement("td");

  //pegando os valores
  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;
  imcTd.textContent = calculaImc(peso, altura);

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

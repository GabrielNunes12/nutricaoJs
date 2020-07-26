//pegando o botão adicionar paciente
let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  // prevenindo que de f5 automaticamente na página
  event.preventDefault();

  // pegando os valores do fomulario de cadastro
  var form = document.querySelector("#formAdicionar");
  let paciente = getForm(form);

  let pacienteDaTr = montarUmaTr(paciente);

  //vinculando a tabela no html
  let tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteDaTr);

  //limpando o form
  form.reset();
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

function montarUmaTr(paciente) {
  let pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  //adicionando nas trs as tds
  pacienteTr.appendChild(montarTds(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montarTds(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montarTds(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montarTds(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montarTds(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montarTds(dado, classe) {
  let tdsNoHtml = document.createElement("td");
  tdsNoHtml.textContent = dado;
  tdsNoHtml.classList.add(classe);

  return tdsNoHtml;
}

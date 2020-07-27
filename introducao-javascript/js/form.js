//pegando o botão adicionar paciente
let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  // prevenindo que de f5 automaticamente na página
  event.preventDefault();

  // pegando os valores do fomulario de cadastro
  var form = document.querySelector("#formAdicionar");
  let paciente = getForm(form);

  let pacienteDaTr = montarUmaTr(paciente);

  let erros = validaPaciente(paciente);

  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  } else {
    //vinculando a tabela no html
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.classList.add("paciente-valido");
    tabela.appendChild(pacienteDaTr);

    document.querySelector("#mensagens-erro").innerHTML = "";
    //limpando o form
    form.reset();
  }
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

function validaPaciente(paciente) {
  let erros = [];
  if (!validaPeso(paciente.peso)) {
    erros.push(`${paciente.peso} está acima do peso`);
  }
  if (!validaAltura(paciente.altura)) {
    erros.push(`${paciente.altura} está acima da altura`);
  }
  return erros;
}

function exibeMensagensDeErro(erros) {
  let ul = document.querySelector("#mensagens-erro");
  erros.forEach(function (erro) {
    let li = document.createElement("li");
    li.textContent = erro;
    li.classList.add("paciente-invalido");
    ul.appendChild(li);
  });
}

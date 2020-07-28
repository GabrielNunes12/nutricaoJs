let campoFiltro = document.querySelector("#filtrar-paciente");

//criando um listener para o campo de busca
campoFiltro.addEventListener("input", function () {
  let pacientes = document.querySelectorAll(".paciente");
  //só fazer a filtragem caso o valor do pai for > 0
  if (this.value.length > 0) {
    //fazendo um foor para todos os pacientes da tabela
    for (var i = 0; i < pacientes.length; i++) {
      let paciente = pacientes[i];
      let tableNome = paciente.querySelector(".info-nome");
      let nome = tableNome.textContent;
      //fazendo expressão regular
      let expressao = new RegExp(this.value, "i");
      if (expressao.test(nome)) {
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
      }
    }
  } else {
    for (let i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      paciente.classList.remove("invisivel");
    }
  }
});

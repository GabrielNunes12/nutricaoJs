let campoFiltro = document.querySelector("#filtrar-paciente");

campoFiltro.addEventListener("input", function () {
  let pacientes = document.querySelectorAll(".paciente");
  for (let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];
    let tableNome = paciente.querySelector("info-nome");
    let nome = tableNome.textContent;
  }
});

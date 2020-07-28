let botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function () {
  let xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xmlHttpRequest.addEventListener("load", function () {
    let response = xmlHttpRequest.responseText;
    let pacientes = JSON.parse(response);
    pacientes.forEach((paciente) => {
      adicionarPacienteNaTabela(paciente);
    });
  });
  xmlHttpRequest.send();
});

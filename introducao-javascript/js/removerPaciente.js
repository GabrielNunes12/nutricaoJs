let table = document.querySelector("#tabela-pacientes");

table.addEventListener("dblclick", function (event) {
  event.target.parentNode.remove();
});

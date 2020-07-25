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

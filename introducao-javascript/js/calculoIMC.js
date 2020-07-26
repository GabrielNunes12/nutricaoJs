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
  let alturaEValida = validaAltura(altura);
  let pesoEValido = validaPeso(peso);

  let tdImc = paciente.querySelector(".info-imc");

  if (!pesoEValido) {
    alert("Peso inválido!");
    pesoEValido = false;
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaEValida) {
    alert("Altura inválida!");
    alturaEValida = false;
    tdImc.textContent = "altura inválida";
    paciente.classList.add("paciente-invalido");
  }

  if (alturaEValida && pesoEValido) {
    //fazendo as contas
    var imc = calculaImc(peso, altura);

    tdImc.textContent = imc;

    paciente.classList.add("paciente-valido");
  }
}
function validaPeso(peso) {
  if (peso >= 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura < 3.0) {
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  let imc = peso / (altura * altura);

  return imc.toFixed(2);
}

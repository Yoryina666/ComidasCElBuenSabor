$(function () {
  /*Ocultar descripciones al abrir la ventana*/
  $(document).ready(function () {
    $(".contacto").hide();
  });
  /*Mostrar*/
  document.getElementById("ver").addEventListener("click", () => {
    $(".contacto").slideDown();
  });
  /*Ocultar*/
  document.getElementById("contenidoC1").addEventListener("mouseleave", () => {
    $(".contacto").slideUp();
  });

  //Cargar países
  function CargarCombo() {
    $.getJSON("https://restcountries.com/v2/all", function (data) {
      var listaPaises = [];
      for (var i = 0; i < Object.keys(data).length; i++) {
        listaPaises.push(data[i].name);
      }

      listaPaises.forEach((element) => {
        var pais = $("<option></option>").val(element).text(element);
          $("#countries").append(pais);
      });
    });
  }
  CargarCombo();
});

//Validaciones
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formulario")
    .addEventListener("submit", CalcularEdad);
});

function CalcularEdad(evento) {
  try {
    evento.preventDefault();

    var fechaNac = document.getElementById("date").value;
    let hoy = new Date();
    let fechaNacimiento = new Date(fechaNac);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();

    if (fechaNacimiento >= hoy) {
      alert("Fecha de nacimiento no válida");
      return false;
    }

    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad--;
    }
    document.getElementById("inputAge").value = edad;
  } catch (error) {
    alert(error.message);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formulario")
    .addEventListener("submit", ValidarFormulario);
});

function ValidarFormulario(evento) {
  try {
    evento.preventDefault();

    var usuario = document.getElementById("inputName").value;
    if (usuario.length == 0) {
      alert("No has escrito el nombre");
      return false;
    }

    var apellido = document.getElementById("inputLastName").value;
    if (apellido.length == 0) {
      alert("No ha escrito los apellidos");
      return false;
    }

    var email = document.getElementById("inputEmail4").value;
    if (email.length == 0) {
      alert("No ha escrito el email");
      return false;
    }

    var fecha = document.getElementById("date").value;
    if (fecha.length == 0) {
      alert("No has seleccionado la fecha de nacimiento");
      return false;
    }

    var edadA = document.getElementById("inputAge").value;
    if (edadA == 0 || edadA < 18) {
      alert("Fecha de nacimiento no válida, debe ser mayor de edad");
      return false;
    }

    var mensaje = document.getElementById("inputMensaje").value;
    if (mensaje.length == 0) {
      alert("No ha escrito el mensaje");
      return false;
    }

    var rangoIngreso = document.getElementById("rangoRI").value;
    if (rangoIngreso.length == 0) {
      alert("No ha digitado el rango de ingreso");
      return false;
    }

    this.submit();
  } catch (error) {
    alert(error.message);
  }
}

// validacion.js
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("apellido");
    const emailInput = document.getElementById("nombre");
    const passInput = document.getElementById('nroLegajo')

    //validacion de campos
    formulario.addEventListener("submit", function (event) {
      if (formulario.value === "" || emailInput.value === "" || passInput.value === "") {
        alert("Ingresá los datos");
        event.preventDefault();
        return;
      }
    });
  });
  
  // Lee el contenido del archivo de texto
fetch("/files/personal.txt")
.then(response => response.text())
.then(data => {
  try {
    // Analiza el contenido como JSON
    const personalData = JSON.parse(data);

    // Agrega un evento de escucha al formulario
    const formulario = document.getElementById("login");
    formulario.addEventListener("submit", function (event) {
      event.preventDefault();

      // Obtiene los valores ingresados en los campos de usuario y contraseña
      const apellido = document.getElementById("apellido").value;
      const nombre = document.getElementById("nombre").value;
      const nroLegajo = document.getElementById("nroLegajo").value;

      // Busca en la lista de personal para validar el acceso
      const personalValido = personalData.personal.find(personal => personal.apellido === apellido && personal.nombre === nombre && personal.nroLegajo === nroLegajo);

      if (personalValido) {
        const container = document.querySelector("#imagen");
        const img = document.createElement("img");
        img.src = "/img/Registro_horas.png";
        img.alt = "Horas";
        container.appendChild (img);
        formulario.reset();
      }
      else {
        alert("Datos incorrectos");
        formulario.reset();
      }

    });
  } catch (error) {
    console.error("Error al analizar el archivo JSON:", error);
  }
})
.catch(error => {
  console.error("Error al cargar el archivo de usuarios:", error);
});


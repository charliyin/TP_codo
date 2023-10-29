// validacion.js
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("miLogin");
    const emailInput = document.getElementById("emailUsuario");
    const passInput = document.getElementById('contrasenia')

    //validacion de campos
    formulario.addEventListener("submit", function (event) {
      if (emailInput.value === "" || passInput.value === "") {
        alert("Ingresá los datos");
        event.preventDefault();
        return;
      }
    });
  });
  
  // Lee el contenido del archivo de texto
fetch("/files/usuarios.txt")
.then(response => response.text())
.then(data => {
  try {
    // Analiza el contenido como JSON
    const usuariosData = JSON.parse(data);

    // Agrega un evento de escucha al formulario
    const formulario = document.getElementById("miLogin");
    formulario.addEventListener("submit", function (event) {
      event.preventDefault();

      // Obtiene los valores ingresados en los campos de usuario y contraseña
      const nombreUsuario = document.getElementById("emailUsuario").value;
      const contrasenia = document.getElementById("pass").value;

      // Busca en la lista de usuarios para validar el acceso
      const usuarioValido = usuariosData.usuarios.find(usuario => usuario.usuario === nombreUsuario && usuario.contrasenia === contrasenia);

      if (usuarioValido) {
       //alert("Acceso concedido.");
        // redirige a la página remuneraciones
        window.location.href = "/pages/Remuneraciones.html";
      } else {
        alert("Usuario o contraseña incorrectos.");
      }

    });
  } catch (error) {
    console.error("Error al analizar el archivo JSON:", error);
  }
})
.catch(error => {
  console.error("Error al cargar el archivo de usuarios:", error);
});


  
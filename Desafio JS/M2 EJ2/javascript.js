document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submitButton");
    const mensajeElement = document.getElementById("mensaje");

    submitButton.addEventListener("click", function() {
        const usuario = document.getElementById("usuario").value;
        const clave = document.getElementById("clave").value;

        // Validación de las credenciales
        if (usuario === "admin" && clave === "1234") {
            mensajeElement.textContent = "Bienvenido, admin. Acceso concedido.";
        } else {
            mensajeElement.textContent = "Credenciales incorrectas. Acceso denegado.";
        }
    });
});

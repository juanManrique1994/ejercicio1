function validateAge() {
    var ageInput = document.getElementById("age");
    var mensaje = document.getElementById("message");

    var age = parseInt(ageInput.value);

    if (isNaN(age)) {
        mensaje.textContent = "Por favor, ingresa un número válido.";
        mensaje.style.color = "red";
    } else {
        if (age >= 18) {
            mensaje.textContent = "Bienvenido! Sos mayor de 18 años.";
            mensaje.style.color = "green";
        } else {
            mensaje.textContent = "Lo siento, tenes que ser mayor de 18 años.";
            mensaje.style.color = "red";
        }
    }
}

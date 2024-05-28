let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function adivinar() {
    let numeroIngresado = parseInt(document.getElementById('numeroIngresado').value);
    let mensaje = document.getElementById('mensaje');
    let imagen = document.getElementById('imagen');
    intentos++;

    if (numeroIngresado < numeroSecreto) {
        mensaje.textContent = "El número es más grande";
    } else if (numeroIngresado > numeroSecreto) {
        mensaje.textContent = "El número es más pequeño";
    } else if (numeroIngresado === numeroSecreto) {
        mensaje.textContent = `¡Felicidades! Adivinaste el número en ${intentos} intentos.`;
        document.getElementById('numeroIngresado').disabled = true;
        document.querySelector('button').disabled = true;
        imagen.style.display = "block"; // Mostrar la imagen
    } else {
        mensaje.textContent = "Por favor, ingresa un número válido";
    }
}

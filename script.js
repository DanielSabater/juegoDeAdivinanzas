let numeroAzar = Math.floor(Math.random()*100)+1

let numeroEntrada = document.getElementById('numeroEntrada')

let mensaje = document.getElementById('mensaje')

let intento = document.getElementById('intento')

let intentos = 0

function chequearResultado() {

    intentos ++
    intento.textContent = intentos

    let numeroIngresado = parseInt(numeroEntrada.value)

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado) ) {
        mensaje.textContent = 'Por favor ingresa un numero entre el 1 y el 100';
        return;
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = '¡Felicitaciones adivinaste el numero!';
        mensaje.style.color = 'green';
        numeroEntrada.Disabled = true;

    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = '¡Mas alto! el numero es mayor al que ingresaste';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = '¡Mas bajo! el numero es menor al que ingresaste';
        mensaje.style.color = 'red';
    }
}
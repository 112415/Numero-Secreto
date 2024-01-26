let numeroSecreto = 0;
let intentos = 0;
//console.log(`El número sercreto es: ${numeroSecreto}`);

function condicionesIniciales() {
    //Resetear texto inicial
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
    //Resetear numero secreto
    numeroSecreto = generarNumeroSecreto();
    console.log(`El número sercreto es: ${numeroSecreto}`);
    //Resetear intentos
    intentos = 1;
    //Limpiar caja input
    limpiarCaja();
    //deshabilitar boton nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function reinciarJuego() {
    condicionesIniciales();
}

function generarNumeroSecreto() {
    return Math.trunc(Math.random()*10)+1;    
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;    
    return;
}

function limpiarCaja() {
    //let limpiarInput = 
    document.getElementById('valorUsuario').value = '';    
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(`El tipo de dato para numeroDeUsuario es: ${typeof(numeroDeUsuario)}`);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {        
        asignarTextoElemento('p', `Acertaste, el número secreo es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? ' intento.' : ' intentos.'}`); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p', `El número secreo es menor a ${numeroDeUsuario}`)
    } else{
        asignarTextoElemento('p', `El número secreo es mayor a ${numeroDeUsuario}`)
    }
    intentos++;
    limpiarCaja();
    return;
}

condicionesIniciales();
let numeroSecreto = generarNumeroSecreto();
console.log(`El número sercreto es: ${numeroSecreto}`);

function generarNumeroSecreto() {
    return Math.trunc(Math.random()*10)+1;    
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;    
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(`El tipo de dato para numeroDeUsuario es: ${typeof(numeroDeUsuario)}`);
    if (numeroDeUsuario === numeroSecreto) {
        //console.log(`El tipo de dato comparado es: ${typeof(numeroDeUsuario === numeroSecreto)}`);
        asignarTextoElemento('p', `Acertaste. El número secreo es: ${numeroSecreto}`)
        //alert(`Acertaste. El número secreto es: ${numeroSecreto}`);
    } else if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p', `El número secreo es menor a ${numeroDeUsuario}`)
    } else{
        asignarTextoElemento('p', `El número secreo es mayor a ${numeroDeUsuario}`)
    }
    return;
}

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Indica un número del 1 al 10');
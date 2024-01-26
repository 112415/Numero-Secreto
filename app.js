
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';

let numeroMin = parseInt(prompt(`Ingrese número mínimo: `));
let numeroMax = parseInt(prompt(`Ingrese número máximo: `));
let numeroSecreto = Math.trunc(Math.random()*numeroMax)+numeroMin;
console.log(numeroSecreto);
let numeroUsuario = 0;
let contador = 0;
let limiteIntentos = 3;

while(numeroUsuario != numeroSecreto){
    contador++;
    numeroUsuario = parseInt(prompt(`Ingrese número para adivinar: `));
    if(numeroUsuario > numeroSecreto){
        alert('El número secreto es menor.');
    }else if(numeroUsuario < numeroSecreto){
        alert('El número secreto es mayor.');
    }else{
        alert(`Acertaste. Número secreto es: ${numeroSecreto}. Lo lograste en ${contador} ${contador == 1 ? 'intento' : 'intentos'}`);
        break;
    }
    if(contador == limiteIntentos){
        alert(`Haz logrado el máximo de ${contador} ${contador == 1 ? 'intento' : 'intentos'} posibles.`)
        break;
    }
}
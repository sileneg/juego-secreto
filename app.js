let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroMaxIntentos = 3;
console.log(numeroSecreto);
console.log(listaNumerosSorteados);



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};


function verificarIntento( ) {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario);
    
    if (numeroIntentos == (numeroMaxIntentos) && (numeroDeUsuario != numeroSecreto)){
        asignarTextoElemento('p', `Perdiste, usaste ${numeroMaxIntentos} ${ numeroIntentos ==1 ? 'intento': 'intentos' }. El número secreto era: ${numeroSecreto}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario == numeroSecreto){
            asignarTextoElemento('p', `Acertaste el número en ${numeroIntentos} ${ numeroIntentos ==1 ? 'intento': 'intentos' }`);
            document.getElementById('reiniciar').removeAttribute('disabled');
            }else {
                //el usuario no acerto
                if(numeroDeUsuario > numeroSecreto){
                     asignarTextoElemento('p', 'El número secreto es menor');
                }else {
                    asignarTextoElemento('p', 'El número secreto es mayor');
                }
                numeroIntentos++;
                limpiarCaja();
                };
    }
   
};




function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random() * 10) +1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    if (listaNumerosSorteados.length == numeroMaximo ) {
        asignarTextoElemento('p', 'Ya se sorteron todos los números posibles');
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }; 
    
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Escoge un numero entre 1 y ${numeroMaximo}, tienes ${numeroMaxIntentos} ${numeroMaxIntentos ==1 ? 'intento': 'intentos' }`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1 ;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    
    //deshabilitar el boton de nuevojuego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}



condicionesIniciales();
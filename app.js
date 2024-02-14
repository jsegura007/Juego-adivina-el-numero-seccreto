
// estos valores son importantes pero  hacer una variable por cada uno es tardio mejor se hace una funcion y se termia mas rapido

//let titulo = document.querySelector('h1');
//titulo.innerHTML = "JUEGO DEL NUMERO SECRETO";

//let parrafo = document.querySelector("p");
//parrafo.innerHTML = "Indica un numero del 1 al 10" ;


let NumeroSecreto = 0;
let numeroIntentos = 0;
let  listaNumeroSorteado =[];
let numeroMaximo = 10;

function asignarTextoElElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroIntentos);
    //console.log(numeroDeUsuario);
    //console.log(typeof(numeroDeUsuario))
    //console.log(NumeroSecreto);
    //console.log(typeof(NumeroSecreto))
    //console.log(numeroDeUsuario === NumeroSecreto); //igual en valor he igual en tipo de datossss
    if (numeroDeUsuario === NumeroSecreto){
        asignarTextoElElemento('p',`!!!!! ACERTASTE !!!!! ${numeroIntentos} ${(numeroIntentos ===1) ?'vez':'veces' }`);  //estas funciones reemplazan los codigos de arriba 
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
        else {
            if (numeroDeUsuario > NumeroSecreto) {
                asignarTextoElElemento('p',"El numero es mayor al numero secreto");
            }else{
                asignarTextoElElemento('p',"el numero es menor al numero secreto");

            }
            numeroIntentos++;
    }
    return;
}

    //alert('click desde el boton');

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    //return Math.floor(Math.random()*10)+1;
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);


    if (listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElElemento ('p',"Ya se sortearon todo los numeros posibles");
    }else{
        //si el numero generado esta incluido en la lista hacemos una cosa y si no otra 
        if (listaNumeroSorteado.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
    }

    }
}

function condicionesIniciales (){
    asignarTextoElElemento('h1',"JUEGO DEL NUMERO SECRETO ");  //estas funciones reemplazan los codigos de arriba 
    asignarTextoElElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    NumeroSecreto = generarNumeroSecreto();
    numeroIntentos =1;
}

function reiniciarJuego(){
    //limpiar la caja 
    limpiarCaja();
    //indicar intervalo de numero
    condicionesIniciales();
    //generar el numero aleatorio
    //inicializar el numero de intentos 
     //deshabilitar el boton del juego 
     document.querySelector('#reiniciar').setAttribute('disable',true);

}

condicionesIniciales();
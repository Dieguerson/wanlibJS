//La función debe solucionar un problema puntual
//Parametros se separan por comas y se guardan de forma ordenada

/*function saludo(parametro){
    //Cuerpo de código
    console.log ("hola" + parametro);
}
let nombre = prompt("escriba su nombre")
saludo(nombre);

function resta (){
    let numUno=parseFloat(prompt("ingrese un numero"));
    let numDos=parseFloat(prompt("ingrese un numero"));
    console.log(numUno - numDos);
}

resta()*/

function validacion (edadUsuario){
    if (edadUsuario >= 16){
        console.log("Usted está autorizade a votar.");
    }else if (edadUsuario <= 16){
        console.log("Usted no está autorizade a votar.");
    }else{
        console.log("DATO INCORRECTO.");
    }
}

let edad = parseInt(prompt("Edad:" , "Escriba su edad por favor."));
validacion (edad);
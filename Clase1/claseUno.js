//comentario simple o una linea
/*comentario multilinea*/

var cien = 100; //declaración de la variable, se puede volver a declarar
var global = "Variable Global";

let local = "Variable Local";//let no permite volver a declarar una variable en el mismo entorno
cien = 110; //llama a la variable y la pisa
/*
console.log ("testeame esto");
console.log (cien, local);

prompt("teléfono");
global = prompt("nombre");

alert("Aguanten los dragones!")

console.log ("Hola " + global);
*/
var numeroA = 10;
var numeroB = 20;
var numeroC;

numeroC = 30 + 30;
console.log (numeroC)
numeroC = numeroA - numeroB;
console.log (numeroC)
numeroC = numeroA / 2;
console.log (numeroC)
numeroC = 3 * numeroB;
console.log (numeroC)

var numA;
var numB;
var numC;

numA = prompt("NumA"); //dato vuelve como string
numB = prompt("NumB");
numC = parseInt(numA) + parseInt(numB);
console.log (numC);
//Condicional: Estructura sintactica para tomar decisiones en base a condiciones
//if(){};

/*
var usuario;

usuario = prompt("nombre");

if (usuario == "Pepe"){
    alert ("Hola " + usuario);
}
else if (usuario == "María"){
    alert("Hola " + usuario);
}
else{
    console.log("Usuario Incorrecto");
}
*/

//Donde el código encuentra una condición verdadera se ejecuta y finaliza la ejecución

/*
var nombre;
var edad;

nombre = prompt("Nombre");
edad = prompt ("Edad");

if (parseInt(edad) >=  16){
    alert ("Hola " + nombre + " vos podés votar");
}
else{
    alert("Hola " + nombre + " todavía no podés votar");
}
*/

// ===: estrictamente igual, no solo que coincida valor, sino también tipo de dato.
// &&: Y. Para que devuelva verdadero todo lo que se chequea debe ser cierto.
// ||: O. Devuelve verdadero siempre y cuando al menos una de las condiciones se cumpla.
// !: Not
// %: module, informa resto de una división.
// Mayor y Menor para strings compara largo del string


/*
var numero;

numero = prompt ("Escribí un número");

if (parseInt(numero) % 2 == 0){
    alert("Tu número es par");
}
else{
    alert("Tu número es impar");
}


var numeroUno;
var numeroDos;
var numeroTres;

numeroUno = prompt("Dame un número");
numeroDos = prompt("Dame otro número");
numeroTres = prompt("Dame un número más");

if (parseFloat(numeroUno) > parseFloat(numeroDos) && parseFloat(numeroUno) > parseFloat(numeroTres)){
    alert(numeroUno + " es mayor que " + numeroDos + " y " + numeroTres);
}
else if (parseFloat(numeroDos) > parseFloat(numeroUno) && parseFloat(numeroDos) > parseFloat(numeroTres)){
    alert(numeroDos + " es mayor que " + numeroUno + " y " + numeroTres);
}
else if (parseFloat(numeroTres) > parseFloat(numeroUno) && parseFloat(numeroTres) > parseFloat(numeroDos)){
    alert(numeroTres + " es mayor que " + numeroUno + " y " + numeroDos);
}
else{
    alert("Todos los números son iguales!");
}*/

//Operador Ternario: "?" es otra forma ded escribir el if si es código de más de una linea al final de la linea lleva coma

proposicion ? salida1 : salida2

//Para concatenar se puede hacer `var texto var texto`
// prompt("texto", "placeholder")
// var.length() a una variable de tipo string da cantidad de caracteres
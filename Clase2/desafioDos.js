
var numero;
numero = prompt("Hola! Escribí un número por favor!");
if (parseInt(numero) > 1000){
    alert("Tu número es más grande que 1000! Pedazo de número!");
    console.log("Tu número es más grande que 1000! Pedazo de número!");
}
else if (parseInt(numero) === 1000){
    alert("Tu número es 1000! Que puntería, justo lo que estaba pensando!");
    console.log("Tu número es 1000! Que puntería, justo lo que estaba pensando!");
}
else{
    alert("Tu número es mas chico que mil. Menos mal, solo aprendí hasta el 957.");
    console.log("Tu número es mas chico que mil. Menos mal, solo aprendí hasta el 957.");
}

var saludo;
saludo = prompt('Escribí "Hola", por favor.');
if (saludo == "Hola"){
    alert(saludo + "!");
    console.log(saludo + "!");
}
else {
    alert('Ahí no dice "Hola" :(');
    console.log('Ahí no dice "Hola" :(');
}

var evaluacion;
evaluacion = prompt("Ya sé, ya sé. Ya pasamos por esto. Pero escibime un número más por favor.");
if (parseInt(evaluacion) > 10 && parseInt(evaluacion) < 50){
    alert(evaluacion + " está entre 10 y 50!");
    console.log(evaluacion + " está entre 10 y 50!");
}
else if (parseInt(evaluacion) <= 10){
    alert(evaluacion + " es menor o igual a 10!");
    console.log(evaluacion + " es menor o igual a 10!");
}
else{
    alert(evaluacion + " es mayor o igual a 50!");
    console.log(evaluacion + " es mayor o igual a 50!");
}

alert("Ahora vienen los ejercicios que no son para entregar, pero me gustan y entran dentro de la consigna.");
alert("Último aviso. Continúe bajo su propio riesgo.");

var usuario;
usuario = prompt("Escriba su nombre de Usuario.");
if (usuario == "Pepe"){
    alert ("Hola " + usuario);
    console.log ("Hola " + usuario);
}
else if (usuario == "María"){
    alert("Hola " + usuario);
    console.log("Hola " + usuario);
}
else{
    alert("Usuario Incorrecto");
    console.log("Usuario Incorrecto");
}

var nombre;
var edad;
nombre = prompt("Nombre");
edad = prompt ("Edad");
if (parseInt(edad) >=  16){
    alert ("Hola " + nombre + ", vos podés votar");
    console.log ("Hola " + nombre + ", vos podés votar");
}
else{
    alert("Hola " + nombre + ", todavía no podés votar");
    console.log("Hola " + nombre + ", todavía no podés votar");
}

var numeroMil;
numeroMil = prompt ("Escribí un número");
if (parseInt(numeroMil) === 0){
    alert("Tu número es " + numeroMil);
    console.log("Tu número es " + numeroMil);
}
else if (parseInt(numeroMil) % 2 == 0){
    alert("Tu número es par");
    console.log("Tu número es par");
}
else{
    alert("Tu número es impar");
    console.log("Tu número es impar");
}

var numeroUno;
var numeroDos;
var numeroTres;
numeroUno = prompt("Dame un número");
numeroDos = prompt("Dame otro número");
numeroTres = prompt("Dame un número más");
if (parseFloat(numeroUno) > parseFloat(numeroDos) && parseFloat(numeroUno) > parseFloat(numeroTres)){
    alert(numeroUno + " es mayor que " + numeroDos + " y " + numeroTres);
    console.log(numeroUno + " es mayor que " + numeroDos + " y " + numeroTres);
}
else if (parseFloat(numeroDos) > parseFloat(numeroUno) && parseFloat(numeroDos) > parseFloat(numeroTres)){
    alert(numeroDos + " es mayor que " + numeroUno + " y " + numeroTres);
    console.log(numeroDos + " es mayor que " + numeroUno + " y " + numeroTres);
}
else if (parseFloat(numeroTres) > parseFloat(numeroUno) && parseFloat(numeroTres) > parseFloat(numeroDos)){
    alert(numeroTres + " es mayor que " + numeroUno + " y " + numeroDos);
    console.log(numeroTres + " es mayor que " + numeroUno + " y " + numeroDos);
}
else{
    alert("Todos los números son iguales!");
    console.log("Todos los números son iguales!");
}

var dia;
alert("ATENCIÓN! El precio de su vehículo motorizado de dos ruedas podría tener descuento!");
dia = prompt('Escriba que día es! Si es feriado simplemente escriba "Feriado". Muchas gracias!');
if (dia.toLowerCase() == "martes"){
    alert("Hoy cuenta con un 12% de descuento! Su moto saldrá solo el 88% del precio de lista!");
    console.log("Hoy cuenta con un 12% de descuento! Su moto saldrá solo el 88% del precio de lista!");
}
else if (dia.toLowerCase() == "sabado" || dia.toLowerCase() == "sábado"){
    alert("Hoy cuenta con un 18% de descuento! Su moto saldrá solo el 82% del precio de lista!");
    console.log("Hoy cuenta con un 18% de descuento! Su moto saldrá solo el 82% del precio de lista!");
}
else if (dia.toLowerCase() == "feriado"){
    alert("Hoy cuenta con un 25% de descuento! Su moto saldrá solo el 75% del precio de lista!");
    console.log("Hoy cuenta con un 25% de descuento! Su moto saldrá solo el 75% del precio de lista!");
}
else{
    alert("Hoy no hay descuentos </3. Esperá al martes, o mejor al sábado! O, acá entre nos, hasta un feriado ;)!");
    console.log("Hoy no hay descuentos </3. Esperá al martes, o mejor al sábado! O, acá entre nos, hasta un feriado ;)!");
}


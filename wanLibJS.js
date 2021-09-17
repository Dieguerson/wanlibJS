var nombre;
var apellido;
var primerNumero;
var segundoNumero;
var ladoCuadrado;
var edadMadre;
var edadPadre;
var anoNacimiento
var anoActual;
var nombreApellido;
var operaciones;
var diferenciaPadreMadre;
var diferenciaMadrePadre;
var edad;

alert("Hola! Te voy a pedir mil datos y después voy a dejar que JS y la tecnología hagan su magia para contestar preguntas que nadie hizo. Gracias por tu cooperación. Y perdón... <3")

nombre = prompt("Cuál es tu nombre?");
apellido = prompt("Y tu apellido?");
primerNumero = prompt("Número Favorito sin decimales?");
segundoNumero = prompt("Número Favorito con decimales?");
ladoCuadrado = prompt("Inventá la medida de un lado de un cuadrado!");
edadMadre = prompt("Qué edad tiene tu madre?");
edadPadre = prompt("Qué edad tiene tu padre?");
anoNacimiento = prompt("En que año naciste?");

alert("Hola, " + nombre + " " + apellido + ", cómo estás?");

console.log("Tu nombre es: " + nombre);
console.log("Tu apellido es: " + apellido);
console.log("Tu número favorito sin decimales es: " + primerNumero);
console.log("Tu número favorito con decimales es: " + segundoNumero);
console.log("El lado de tu cuadrado es: " + ladoCuadrado);
console.log("La edad de tu madre es: " + edadMadre);
console.log("Y la de tu padre es: " + edadPadre);
console.log("Este es el año " + anoActual);
console.log("Y tu año de nacimiento es: " + anoNacimiento);

operaciones = parseInt(primerNumero) + parseFloat(segundoNumero);
console.log("La suma de tus número favoritos da: " + operaciones);
operaciones = parseInt(primerNumero) * parseFloat(segundoNumero);
console.log("La multiplicación de tus número favoritos da: " + operaciones);
console.log("La resta de tus numeros favoritos da: " + (parseInt(primerNumero) - parseFloat(segundoNumero)));
console.log("La división de tus numeros favoritos da: " + (parseInt(primerNumero) / parseFloat(segundoNumero)));
areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado que inventaste es: " + areaCuadrado);
console.log("El consecutivo de tu número favorito sin decimales es: " + (primerNumero + 1));
console.log("Y el consecutivo de tu número favorito con decimales es: " + segundoNumero++);
diferenciaPadreMadre = edadPadre - edadMadre;
console.log("La diferencia entre la edad de tu padre y la de tu madre es: " + diferenciaPadreMadre);
diferenciaMadrePadre = edadMadre - edadPadre;
console.log("Y la diferencia entre tu madre y tu padre: " + diferenciaMadrePadre);
anoActual = new Date().getFullYear();
edad = anoActual - parseInt(anoNacimiento);
console.log("Tenés " + edad + " años");


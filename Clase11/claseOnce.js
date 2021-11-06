//jQuery: Librería de JS con objetos y funciones. Librería =/= framework. La librería es más chica y focalizada a una tarea. El framework es una
//solución completa. Se puede cargar mediante URL o local. La versión minificada se realiza en un línea para disminuir el peso. jQuery permite
//manipular el DOM  controlando eventos, agregando animaciones, etc. El problema con jQuery hoy día es que hay herramientas más modernas.
//Ventajas: Utiliza los mismos selectores que CSS. Ordenado, opensource, rápido de operar y ejecutar sobre el DOM. Compatible con muchos plug-ins.
//Los selectores de jQuery permiten identificar elementos del DOM y acceder a ellos utilizando un único medio en vez de diferentes metodos. Se pueden
//utilizar los tags, las .class, los #id

console.log($("h1")); //En vez de devoler el nodo de DOM devuelven un objeto de jQuery con propiedades de objeto
$("p").hide();
$("h1").show();
console.log($("p"));
$("nav ul").css("font-size" , "20px");//Permite escribir la mayoría de las propíedades de CSS
$("li:first").css("color" , "red");
$("li:last").css("color" , "blue");
$("li:odd").css("background-color" , "black");
$("li:even").css("background-color" , "green");
$("li:nth-child(3)").css("color" , "pink");
$("li:nth-child(2n)").css("font-size" , "12px");

//Revisar selectores para formularios

let test = $("h1").get();//Permite convertir a DOM. Se pueden recorrer con bucles
console.log(test);
let test2 = $("h1").get(0);
console.log(test2);

console.log($("input"));
function saludar(){
    let valor = $("input").val();
    console.log(valor);
}

//Agregar elementos con jQuery

$("body").append(`<h2 class="holi">Hola</h2>`);
$("body").prepend("<h2>Chau</h2>");

$("#boton2").click(function (){
    alert("ouch!");
});

//Hay metodo remove
//jQuery provee metodos para incorporar efectos y animaciones al DOM.
//fadeIn() como show, pero con transición. Se pueden utilizar funciones dentro de los fade.
//slideDown, Up, Toggle
//.stop para detener transiciones

$("boton").click(function(){
    $("elemento").fadeIn();//slow, fast o valures numéricos en ms
})
$("boton").click(function(){
    $("elemento").fadeOut();//slow, fast o valures numéricos en ms
})
$("boton").click(function(){
    $("elemento").fadeToggle();//slow, fast o valures numéricos en ms. Puede ser también toggle
})

//.css("propiedad" , "valor") permite modificar .CSS desde jQuery. Se pueden llamar múltiples estilos.
//.animate("propiedad de animación" , "velocidad").

$("boton").click(function(){
    $("elemento").animate({propiedad:"valor", propiedad:"valor"} , "velocidad");
    $("elemento").animate({propiedad:"valor", propiedad:"valor"} , "velocidad");
    $("elemento").animate({propiedad:"valor", propiedad:"valor"} , "velocidad");//Múltiples animaciones ocurren en orden
})

//Los metodos de animación se pueden encadenar
$("elemento").fadeIn(valores).delay(valores).slideUp(valores);
$("elemento").fadeIn(valores)
                .slideUp(valores)
                    .fadeOut(valores);

//Metodos String
let string = "string";
string.length; //Largo del string
string.slice(1 , 1000)//corta desde el primer parametro al segundo
string.replace("string" , "strang");//elemnto a cambiar por elemento a agregar
string.toUpperCase();
string.toLowerCase();
string.concat("algo" , "string")//Simil a join de arrays
string.trim()//Remueve espacios en blanco a los laterales del string, no los internos
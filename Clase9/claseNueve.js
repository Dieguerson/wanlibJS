//Eventos: Manera de controlar acciones y definir comportamientos de la página y los usuarios. JS permite asociar una función a cada evento para que
//se ejecute. Estas funciones son "Event Handlers". Los eventos se asocian a lo que se quiera escuchar.

//querySelector("htmlElement"): selecciona el primer elemento que coincida con el criterio
//querySelectorAll("htmlElement"): selecciona todos los elementos que coincidan con el criterio
//Los eventos de teclas/mouse tienen up y down
//objeto "window": ventana del navegador

let saludar = document.querySelector("button");
saludar.addEventListener("click" , saludo); //Sin paréntesis funciona como referencia, con paréntesis se ejecutaría en ese momento

function saludo(e){
    console.log("Hola Usuario");
    console.log(e.target);
}
//Los navegadores mdoernos crean un parametro que se pasa al event handler como parametro, evitando la necesidad de llamarlo

window.addEventListener("keydown" , teclas);
function teclas(e){
    console.log(e.key);
}

//Evento Change: cuando se detecta el cambio en un elemento se activa
//Evento Submit: default de los formularios. Se puede evitar con preventDefault
//Evento Mousemove

let formulario = document.getElementById("logIn");
let usuario = document.getElementById("user");
let password = document.getElementById("pass");
let send = document.getElementById("send");
send.addEventListener("click" , inicio);

function inicio(e){
    let error = document.getElementById("error");
    let holi = document.getElementById("holi");
    e.preventDefault();
    if (usuario.value == "" && password.value == ""){
        error.style.display = "block";
    } else {
        formulario.style.display = "none";
        error.style.display = "none";
        holi.style.display = "block";
    }
    console.log(e);
}
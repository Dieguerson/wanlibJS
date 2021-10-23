//DOM: Document Objetct Model. Estructura de objetos que representa el HTML, generada por el navegador. Cada etiqueta se convierte en un nodo o
//elemento. Hay nodos padre e hijos. Estructura de arbol invertido. Permite seleccionar o generar nodos y modificarlos. Se llama mediante la keyword
//document. La transformación de etiquetas genera dos nodos, el primero es la etiqueta, el segundo es text.
//Nodos: Etiquetas anidadas son nodos Hijos de etiquetas nodo Padre. Hay 12 tipos de nodos.

console.dir(document);
console.log(document);
console.log(document.body);

//Formas de acceder a Nodos:

let title = document.getElementById("titulo"); // Trae nodos por ID
console.log(title);

let paragraph = document.getElementsByClassName("parrafo"); //Trae nodos por Clase
console.log(paragraph);

let paratag = document.getElementsByTagName("p"); // Trae nodos por Tag
console.log(paratag);

function validar(){
    let user = document.getElementById("usuario"); // Conviene tomar el elemento entero y luego utilizar propiedades y métodos
    let password = document.getElementById("pass");
    if(user.value == "pepe" && password.value == "1234"){ //Si no estuviese el .value se compararía el objeto, el nodo, contra el string
        console.log("Bienvenido");
    }else{
        console.log("error");
    }
    usuario.style.color="red";
    usuario.style.fontSize="40";
    usuario.innerHTML ="Hola"+usuario;
    console.log(user.value);
}

// Crear elementos dinámicos desde JS.
function validar(){
    let user = document.getElementById("usuario"); // Conviene tomar el elemento entero y luego utilizar propiedades y métodos
    let password = document.getElementById("pass");
    if(user.value == "pepe" && password.value == "1234"){ //Si no estuviese el .value se compararía el objeto, el nodo, contra el string
        console.log("Bienvenido");
        let parrafo = document.createElement("p"); // Crea el nodo
        let mensaje = document.getElementById("mensaje");
        parrafo.innerHTML = "Bienvenido al sistema";
        parrafo.style.color="white";
        parrafo.style.backgroundColor="black";
        parrafo.style.fontSize="30ox";
        mensaje.appendChild(parrafo); //"Engancha" hijo a un padre
    }else{
        console.log("error");
    }
}

//Eliminar elementos

function add(){
    //Agregar elementos como ol o ul
    let producto = document.getElementById("producto");
    let parrafo = document.createElement("p");
    let lista = document.getElementById("lista");
    parrafo.innerHTML = producto.value;
    parrafo.style.color="white";
    parrafo.style.backgroundColor="black";
    parrafo.style.fontSize="30ox";
    lista.appendChild(parrafo);
}
function remove(){
    let lista = document.getElementById("lista");
    lista.removeChild(lista.lastChild);//.firstChild
}

//Plantillas literales: con "`" y "`" se pueden realizar strings multilinea. "${}" interpolación
//innerText vs innerHTML: El primero debería reservarse solo para texto, el segundo sirve para texto y etiquetas. innerHTML peermite crear un solo elemento
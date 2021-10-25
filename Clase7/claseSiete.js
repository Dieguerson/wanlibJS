//Storage: Objeto que permite almacenar datos en forma local (en el navegador). No necesita conexión con el server. La información no es segura, es
//fácil de capturar. No para data sensible.
//Local Storage: datos en el quedan en forma persistente. Máximo almacenamiento 5MB. Todo se convierte en string
//Revisar for of, for each
function cargar(){
    let usuario = prompt("nombre");
    localStorage.setItem("User" , usuario);//Necesita key y value.
    let tarjeta = prompt("tarjeta");
    sessionStorage.setItem("Tarjeta" , tarjeta);
}

function traer(){
    alert(localStorage.getItem("User"));
}

function cargar2(){
    let DNI = prompt("DNI");
    let usuario = prompt("nombre");
    localStorage.setItem(DNI , usuario);
}

function traer2(){
    for (let i = 0; i < localStorage.length ; i++){
        let key = localStorage.key(i);//Key edvuelve la clave
        console.log(key);
        console.log(localStorage.getItem(key));
    }
}

function borrar(){
    localStorage.clear();
}

//Session Storage: La información se borra al cerrarse la ventana
//.removeItem: Permite eliminar items singulares
//.clear: Vacía el storage

//Para almacenar objetos en Storage hay que convertirlos en json (JavaScriptObjectNotation), un formato basado en texto plano que toma la sintaxis de
//los objetos de JS. Se puede usar en forma independiente a JS. Es un string con un formato específico.
//stringify(): toma un objeto como parametro y lo convierte a texto JSON
//parse(): toma texto JSON y lo convierte a objeto de JS

/*let producto = {nombre:"lampara" , precio: 1324856};

let productoJSON = JSON.stringify(producto);

console.log(typeof producto);
console.log(typeof productoJSON);

localStorage.setItem("nombre" , producto);
localStorage.setItem("nombre2" , productoJSON);

let producto2 = JSON.parse(productoJSON);
console.log(producto2);
console.log(localStorage.getItem("nombre"));
console.log(localStorage.getItem("nombre2"));
console.log(producto2.precio);*/

function voto(){
    let DNI = prompt("Número de DNI");
    let voto = prompt("Por quién vota? A o B");
    if (voto == "A" || voto == "B" || voto == "a" || voto == "b"){
        localStorage.setItem(DNI , voto);
        console.log("Su voto por el partido: " + voto + " fue registrado.")
    }else{
        alert("Voto invalido. Pruebe de nuevo");
    }
}

function resultados(){
    let votosA = 0;
    let votosB = 0;
    for (let i = 0; i < localStorage.length ; i++){
        let resultados = localStorage.key(i);
        let valor = localStorage.getItem(resultados);
        if (valor == "A" || valor == "a"){
            votosA++;
        }else if(valor == "B" || valor == "b"){
            votosB++;
        }else{
            console.log("Error");
        }
    }
    if (votosA > votosB){
        console.log("Ganó A");
    }else if (votosA < votosB){
        console.log("Ganó B");
    }else{
        console.log("Han Empatado");
    }
}
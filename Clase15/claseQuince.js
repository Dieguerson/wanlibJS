//Asincronismo: respuesta tardía. Sucede después de un flujo normal. JS es un lenguaje de programación orientado a objetos. Es Single Tread, o hilo
//simple. Tiene un solo hilo de procesamiento, no puede realizar procesos paralelos. El asincronismo permite que JS siga haciendo cosas mientras
//espera a que la información solicitada regrese.

//Sincrónico

function saludar(){console.log("Funcion");};

console.log("Inicio");

saludar();

console.log("Fin");

//Asincrónico

function saludar2(){setTimeout(function (){console.log("Funcion");} , 3000)};//La función se guarda en el Web API hasta que está lista para ejecutarse.

console.log("Inicio");

saludar2();

console.log("Fin");

let curso = [{nombre: "Pepe" , nota: 10}, {nombre:"Luis" , nota: 7}];

function getAlumnos(){
    let datos = "";
    setTimeout(function(){
        console.log("Creando lista de alumnos");
        for(let alumno of curso){
        datos += `<p>Nombre del alumno: ${alumno.nombre}</p>
                  <p>Nota del alumno: ${alumno.nota}</p>`;
    }
    document.body.innerHTML = datos;
    } , 1000);
    
}

function agregarAlumno(alumno , callback){
    setTimeout(function(){
        console.log("Agregando nuevo alumno");
        curso.push(alumno);
        callback();
    } , 3000);
}

agregarAlumno({nombre: "Laura" , nota: 10} , getAlumnos);

//Promesas: para evitar tener demasiados callbacks. Pueden estar pendientes, cumplidas o rechazadas

let cursarJS = new Promise(function(resolve , reject){//Objeto especial de JS. La función del objeto promesa es un "executor"
    let cursar = false;
    let nota = 10;
    if (cursar == true){
        resolve(nota);
    }else{
        reject("No se registro al curso");
    }
});

cursarJS
    .then(function(nota){console.log("Nota: " + nota);})//Puede haber más de un then para cuando se cumple la promesa
        .catch(function(mensaje){console.log(new Error (mensaje));});

//SPA: Se carga una sola vez y luego se intercambia el contenido sin recargar la pantalla. La mayor parte de la lógica ocurre del lado del cliente.
//Router: Controla e interpreta cada solicitud que el usuario hace a la página para realizar un cambio en la URL.
//MVC: Modelo Vista Controlador. Separa la lógica de la aplicación de la lógica de la vista en una aplicación. El modelo se encarga de los datos. La
//vista es la representación visual de los datos. El controlador define el procesamiento principal en respuesta a eventos del usuario, solicita datos
//al modelo y se comunica con la vista.
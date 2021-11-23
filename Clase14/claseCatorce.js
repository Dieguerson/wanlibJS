//AJAX: Asynchronous JS and XML. También trabaja con texto plano y JSON.
//Consultas asincrónicas: No recargan la página al devolver la respuesta, solo la parte necesaria. Todo a través de protocolo HTTP.
//HTTP: Protocolo con verbos. GET(traer información del servidor), POST (mandar información al servidor), PUT, DELETE, etc.
//Metodo GET (en jQuery): (ver diapo de GET y POST)

let urlJSON = "https://jsonplaceholder.typicode.com/posts";

$("#botonGET").click(function(){$.get(urlJSON , function(datos){console.log(datos)})}); //Se puede recorrer con métodos para recorrer arrays. Revisar documentación jQuery.get()
//POST necesita como argumentos la URL, la infrmación, la respuesta y el estado.

//Geolocalización, API HTML

let geo = navigator.geolocation.getCurrentPosition(ubicacion);

function ubicacion(position){
    console.log("latitud" + position.coords.latitude);
    console.log("longitud" + position.coords.longitude);
}

//API: Application Programming Interfaces. Reglas y especificaciones que las aplicaciones siguen para comunicarse

//let clima = "http://api.openweathermap.org/data/2.5/weather?q=Cordoba&appid="

//$("#botonClima").click(function(){$.get(clima , function(datos){console.log(datos)})})
$.ajax({
    url:`http://api.openweathermap.org/data/2.5/weather`,
    type: "GET",
    data:{
        q: 'Buenos Aires',
        appid: ,
        dataType: 'jsonp',
        units: 'metric'
    },
    success: function(data){
        console.log(data);
    }
});//Revisar grabación
//Ejercicio A
let votosA = 0;
let votosB = 0;
let votosInc = 0;
for (let i = 0; i < 10; i++){
    let nombre;
    let voto;
    nombre = prompt("Cómo te llamás?");
    if (nombre == "Pablo"){
        console.log("Usted está inhabilitado para votar");
    }
    else{
        voto = prompt("Por quien votás? A o B");
        console.log("Hola, " + nombre + "! Tu voto por el partido " + voto + " fue registrado! Gracias!");
        if (voto == "A" || voto == "a"){
            votosA++;
            console.log("A tiene " + votosA + " votos");
        }
        else if (voto == "B" || voto == "b"){
            votosB++
            console.log("B tiene " + votosB + " votos");
        }
        else{
            votosInc++
            console.log("Hay " + votosInc + " Votos Incorrectos");
        }
    }
}
if (votosA > votosB){
    console.log("Ganó A");
}
else if (votosA < votosB){
    console.log("Ganó B");
}
else {
    console.log("Empataron!");
}

//Ejercicio B
do{
    let operacion = prompt("Escriba la operación que desea realizar: Suma, Multiplicación, Resta o División");
    operacion.toLowerCase()
    if (operacion != "suma" && operacion != "multiplicación" && operacion != "multiplicacion" && operacion != "resta" && operacion != "división" && operacion != "division"){
        break;
    }else{
        let numeroUno = prompt("Escriba el primer operando.");
        let numeroDos = prompt("Escriba el segundo operando.");
        if (operacion == "suma"){
            alert("El resultado de tu " + operacion + " es: " + (parseFloat(numeroUno) + parseFloat(numeroDos)));
        }else if (operacion == "multiplicación" || operacion == "multiplicacion"){
            alert("El resultado de tu " + operacion + " es: " + (parseFloat(numeroUno) * parseFloat(numeroDos)));
        }else if (operacion == "resta"){
            alert("El resultado de tu " + operacion + " es: " + (parseFloat(numeroUno) - parseFloat(numeroDos)));
        }else{
            if (numeroDos == 0){
                alert("Dividir por 0 no es posible!");
            }else{
                alert("El resultado de tu " + operacion + " es: " + (parseFloat(numeroUno) / parseFloat(numeroDos)));
            }
        }
        var salida = prompt("Quiere realizar otra operación? Sí/No");
    }
}while (salida != "no");

//Ejercicios de Práctica
let promedioUno;
let promedioDos;
let promedioTres;
let promedioCuatro;
let promedioCinco;
let promedioSeis;
let promedioSiete;
let promedioOcho;
let promedioNueve;
let promedioDiez;

for (let i = 0; i <= 10; i++){
    let alumnoUno = 0;
    let alumnoDos = 0;
    let alumnoTres = 0;
    let alumnoCuatro = 0;
    let alumnoCinco = 0;
    let alumnoSeis = 0;
    let alumnoSiete = 0;
    let alumnoOcho = 0;
    let alumnoNueve = 0;
    let alumnoDiez = 0;
    let corte;
    let contador;
    let promedioGeneral;
    let nombre;
    let apellido;
    if (i === 0){
        contador = 0;
        nombre = prompt("Nombre del Alumno:");
        apellido = prompt("Apellido del Alumno:");
        do{
            contador++
            alumnoUno = alumnoUno + parseFloat(prompt("Nota del Primer Alumno"));
            corte = prompt("Desea cargar otra nota? Sí/No");
        }while (corte.toLowerCase() != "no");
        promedioUno = alumnoUno / contador;
        console.log("El promedio del alumno: " + nombre + " " + apellido + " es: " + promedioUno);
    }else if  (i === 1){
        contador = 0;
        nombre = prompt("Nombre del Alumno:");
        apellido = prompt("Apellido del Alumno:");
        do{
            contador++
            alumnoDos = alumnoDos + parseFloat(prompt("Nota del Segundo Alumno"));
            corte = prompt("Desea cargar otra nota? Sí/No");
        }while (corte.toLowerCase() != "no");
        promedioDos = alumnoDos / contador;
        console.log("El promedio del alumno: " + nombre + " " + apellido + " es: " + promedioDos);
    }else if  (i === 2){
        contador = 0;
        nombre = prompt("Nombre del Alumno:");
        apellido = prompt("Apellido del Alumno:");
        do{
            contador++
            alumnoTres = alumnoTres + parseFloat(prompt("Nota del Tercer Alumno"));
            corte = prompt("Desea cargar otra nota? Sí/No");
        }while (corte.toLowerCase() != "no");
        promedioTres = alumnoTres / contador;
        console.log("El promedio del alumno: " + nombre + " " + apellido + " es: " + promedioTres);
    }else if  (i === 3){
        contador = 0;
        nombre = prompt("Nombre del Alumno:");
        apellido = prompt("Apellido del Alumno:");
        do{
            contador++
            alumnoCuatro = alumnoCuatro + parseFloat(prompt("Nota del Cuarto Alumno"));
            corte = prompt("Desea cargar otra nota? Sí/No");
        }while (corte.toLowerCase() != "no");
        promedioCuatro = alumnoCuatro / contador;
        console.log("El promedio del alumno: " + nombre + " " + apellido + " es: " + promedioCuatro);
    }else if  (i === 4){
        contador = 0;
        nombre = prompt("Nombre del Alumno:");
        apellido = prompt("Apellido del Alumno:");
        do{
            contador++
            alumnoCinco = alumnoCinco + parseFloat(prompt("Nota del Quinto Alumno"));
            corte = prompt("Desea cargar otra nota? Sí/No");
        }while (corte.toLowerCase() != "no");
        promedioCinco = alumnoCinco / contador;
        console.log("El promedio del alumno: " + nombre + " " + apellido + " es: " + promedioCinco);
    }else if  (i === 5){
        contador = 0;
        nombre = prompt("Nombre del Alumno:");
        apellido = prompt("Apellido del Alumno:");
        do{
            contador++
            alumnoSeis = alumnoSeis + parseFloat(prompt("Nota del Sexto Alumno"));
            corte = prompt("Desea cargar otra nota? Sí/No");
        }while (corte.toLowerCase() != "no");
        promedioSeis = alumnoSeis / contador;
        console.log("El promedio del alumno: " + nombre + " " + apellido + " es: " + promedioSeis);
    }else if  (i === 6){
        contador = 0;
        nombre = prompt("Nombre del Alumno:");
        apellido = prompt("Apellido del Alumno:");
        do{
            contador++
            alumnoSiete = alumnoSiete + parseFloat(prompt("Nota del Séptimo Alumno"));
            corte = prompt("Desea cargar otra nota? Sí/No");
        }while (corte.toLowerCase() != "no");
        promedioSiete = alumnoSiete / contador;
        console.log("El promedio del alumno: " + nombre + " " + apellido + " es: " + promedioSiete);
    }else if  (i === 7){
        contador = 0;
        nombre = prompt("Nombre del Alumno:");
        apellido = prompt("Apellido del Alumno:");
        do{
            contador++
            alumnoOcho = alumnoOcho + parseFloat(prompt("Nota del Octavo Alumno"));
            corte = prompt("Desea cargar otra nota? Sí/No");
        }while (corte.toLowerCase() != "no");
        promedioOcho = alumnoOcho / contador;
        console.log("El promedio del alumno: " + nombre + " " + apellido + " es: " + promedioOcho);
    }else if  (i === 8){
        contador = 0;
        nombre = prompt("Nombre del Alumno:");
        apellido = prompt("Apellido del Alumno:");
        do{
            contador++
            alumnoNueve = alumnoNueve + parseFloat(prompt("Nota del Noveno Alumno"));
            corte = prompt("Desea cargar otra nota? Sí/No");
        }while (corte.toLowerCase() != "no");
        promedioNueve = alumnoNueve / contador;
        console.log("El promedio del alumno: " + nombre + " " + apellido + " es: " + promedioNueve);
    }else if  (i === 9){
        contador = 0;
        nombre = prompt("Nombre del Alumno:");
        apellido = prompt("Apellido del Alumno:");
        do{
            contador++
            alumnoDiez = alumnoDiez + parseFloat(prompt("Nota del Décimo Alumno"));
            corte = prompt("Desea cargar otra nota? Sí/No");
        }while (corte.toLowerCase() != "no");
        promedioDiez = alumnoDiez / contador;
        console.log("El promedio del alumno: " + nombre + " " + apellido + " es: " + promedioDiez);
    }else{
        promedioGeneral = (promedioUno + promedioDos + promedioTres + promedioCuatro + promedioCinco + promedioSeis + promedioSiete + promedioOcho + promedioNueve + promedioDiez) / 10;
        console.log("El promedio general del Curso es: " + promedioGeneral);
    }
}
/*
for (let i = 0; i <= 10; i++){
    console.log (i);
}

//sacar usuario con continue
let votosA = 0;
let votosB = 0;
let votosInc = 0;
for (let i = 0; i <= 4; i++){
    let nombre;
    let voto;
    nombre = prompt("Cómo te llamás?");
    voto = prompt("Por quien votás? A o B");
    console.log("Hola, " + nombre + "! Tu voto por el partido " + voto + " fue registrado! Gracias!");
    console.log (i);
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
if (votosA > votosB){
    console.log("Ganó A");
}
else if (votosA < votosB){
    console.log("Ganó B");
}
else {
    console.log("Empataron!");
}
//Pedir numero a usuario
for (let i = 0 ; i <= 10 ; i++){
    console.log ("1 * " + i + " = " + i * 1);
    console.log ("2 * " + i + " = " + i * 2);
    console.log ("3 * " + i + " = " + i * 3);
    console.log ("4 * " + i + " = " + i * 4);
    console.log ("5 * " + i + " = " + i * 5);
    console.log ("6 * " + i + " = " + i * 6);
    console.log ("7 * " + i + " = " + i * 7);
    console.log ("8 * " + i + " = " + i * 8);
    console.log ("9 * " + i + " = " + i * 9);
    console.log ("10 * " + i + " = " + i * 10);
}
Pedir operación al usuario y realizarla
do{
    let numeroUno = prompt("dame un numero");
    let numeroDos = prompt("dame otro numero");
    alert(parseFloat(numeroUno) + parseFloat(numeroDos));
    var salida = prompt("Salimos?");
}while (salida != "si");
*/


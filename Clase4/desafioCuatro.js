let STR=0;
let DEX=0;
let CON=0;
let raza;
let arranque=prompt("Empezamos a armar tu personaje?", "Sí/No").toUpperCase();

function dice(){
    return Math.floor(6*Math.random())+1;
}

function stats(){
    do{
        let attribute=prompt("Que Atributo Desea Randomizar?", "STR, DEX, CON").toUpperCase();
        switch (attribute){
            case "STR":
                STR=(dice() + dice() + dice());
                console.log(STR);
                break;
            case "DEX":
                DEX=(dice() + dice() + dice());
                console.log(DEX);
                break;
            case "CON":
                CON=(dice() + dice() + dice());
                console.log(CON);
                break;
            default:
                alert("Hm, ese stat no lo conozco. Vamos de nuevo!");
        }
    }while(STR===0 || DEX===0 || CON===0)
}

function race(){
    raza=prompt("Elegí tu raza:", "Enano/Elfo/Humano").toLowerCase();
    if (raza=="enano"){
        CON++;
    }else if(raza=="elfo"){
        DEX=DEX+2;
    }else if(raza=="humano"){
        STR++;
        DEX++;
        CON++;
    }else{
        alert("No conozco esa Raza. Vamos de nuevo!");
        race();
    }
}

function modifiers(strenght, dexterity, constitution){
    let fuerza = (strenght - 10)/2;
    console.log("Tu modificador de fuerza es: " + Math.floor(fuerza));
    let destreza = (dexterity - 10)/2;
    console.log("Tu modificador de fuerza es: " + Math.floor(destreza));
    let constitucion = (constitution - 10)/2;
    console.log("Tu modificador de fuerza es: " + Math.floor(constitucion));
}

function character (start){
    if (start=="SÍ" || start=="SI"){
        stats();
        console.log ("Estos son los stats que tiraste:");
        console.log("Strength: " + STR);
        console.log("Dexterity: " + DEX);
        console.log("Constitution: " + CON);
        race();
        console.log ("Estos son los stats de tu " + raza);
        console.log("Strength: " + STR);
        console.log("Dexterity: " + DEX);
        console.log("Constitution: " + CON);
        modifiers(STR, DEX, CON);
    }else{
        alert("Tenemos todo el día");
        arranque=prompt("Empezamos a armar tu personaje?", "Sí/No").toUpperCase();
        character (arranque);
    }
}

character(arranque);
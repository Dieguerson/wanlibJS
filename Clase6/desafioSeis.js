let STR, DEX, CON, raza, nombre, colPers=[];

function dice(){
    return Math.floor(6*Math.random())+1;
}

class creation{
    constructor (nombre, raza, STR, DEX, CON){
        this.nomPers=nombre;
        this.razaPers=raza;
        this.fuerza=STR;
        this.destreza=DEX;
        this.constitucion=CON;
    }
    getName(){
        console.log("Nombre: " + this.nomPers);
    }
    getRace(){
        console.log(this.nomPers + " es un/a " + this.razaPers)
    }
    getStats(){
        console.log ("Los stats de " + this.nomPers + " son:");
        console.log("Fuerza: " + this.fuerza);
        console.log("Dexterity: " + this.destreza);
        console.log("Constitution: " + this.constitucion);
    }
    getModifiers(){
        let fuerza = Math.floor((STR - 10)/2);
        let destreza = Math.floor((DEX - 10)/2);
        let constitucion = Math.floor((CON - 10)/2);
        console.log("Tu modificador de fuerza es: " + fuerza);
        console.log("Tu modificador de fuerza es: " + destreza);
        console.log("Tu modificador de fuerza es: " + constitucion);
    }
}

//Stats: Fuerza, Destreza y Constitución del Personaje
function stats(){
    do{
        let attribute=prompt("Que Atributo Desea Randomizar?", "STR, DEX, CON").toUpperCase();
        switch (attribute){
            case "STR":
                STR=(dice() + dice() + dice());
                break;
            case "DEX":
                DEX=(dice() + dice() + dice());
                break;
            case "CON":
                CON=(dice() + dice() + dice());
                break;
            default:
                alert("Hm, ese stat no lo conozco. Vamos de nuevo!");
        }
    }while(STR===0 || DEX===0 || CON===0)
}
//Race: Raza del personaje y sus modificadores sobre los Stats
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

function character (){
    let start=prompt("Empezamos a armar tu personaje?", "Sí/No").toUpperCase();
    if (start=="SÍ" || start=="SI"){
        do{
            STR=0;
            DEX=0;
            CON=0;
            nombre=prompt("Escribí el nombre de tu Personaje","Nombre");
            stats();
            console.log ("Estos son los stats que tiraste:");
            console.log("Fuerza: " + STR);
            console.log("Destreza: " + DEX);
            console.log("Constitución: " + CON);
            race();
            const Personaje=new creation(nombre, raza, STR, DEX, CON);
            Personaje.getName();
            Personaje.getRace();
            Personaje.getStats();
            Personaje.getModifiers();
            console.log(Personaje);
            colPers.push(Personaje);
            start=prompt("Querés armar otro personaje?", "Sí/No").toUpperCase();
        }while (start=="SÍ" || start=="SI")
    }else{
        alert("Tenemos todo el día");
        arranque=prompt("Empezamos a armar tu personaje?", "Sí/No").toUpperCase();
        character (arranque);
    }
}

character();
console.log(colPers);
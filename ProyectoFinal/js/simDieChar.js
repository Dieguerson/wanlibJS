//Variables globales al proceso
let result = [] , STR , DEX , CON , selectedRace , characteristics , names , charCol=[], modal = document.getElementById("modal");
// -END- Variables globales al proceso

//Admin Modal
function closeModal(){
    modal.style.display = "none";
}
function openModal(){
    modal.style.setProperty("display", "block", "important");
}
// -END- Admin Modal
/*
//Simulador de dados
function die(ammount , faces){
    result = [];
    for (let i = 0 ; i < ammount ; i++){
        let roller = Math.floor(faces * Math.random()) + 1;
        result.push (roller);
    }
}
// -END- Simulador de dados

//Ordenador por Burbujeo
function hiLo(data) {
    for (let i = 0 ; i < data.length ; i++) {
        for (let j = 0 ; j < data.length ; j++) {
            if (data[j] < data[j + 1]) {
                let temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
    }
    result = data;
}
// -END- Ordenador por Burbujeo

//Razas de D&D
const dwarf = {abScIn: 2 , size: "4 to 5 feet tall" , characteristics: "Darkvision, Dwarven Resilience, Dwarven Combat Training"};
const elf = {abScIn: 2 , size: "5 to over 6 feet tall" , characteristics: "Darkvision, Keen Senses, Fey Ancestry"};
const human = {abScIn: 1 , size: "5 to over 6 feet tall" , characteristics: "None"};
//raceSelect: Raza del personaje y sus modificadores sobre los Stats
function raceSelect(){
    selectedRace = prompt("Choose your race: Dwarf/Elf/Human").toLowerCase();
    if (selectedRace == "dwarf"){
        CON = CON + dwarf.abScIn;
        characteristics = dwarf.characteristics;
    }else if(selectedRace == "elf"){
        DEX = DEX + elf.abScIn;
        characteristics = elf.characteristics;
    }else if( selectedRace == "human"){
        STR = STR + human.abScIn;
        DEX = DEX + human.abScIn;
        CON = CON + human.abScIn;
        characteristics = human.characteristics;
    }else{
        alert("I'm not familiar with that Race. Let's try Again!");
        raceSelect();
    }
}
// -END- Clases de D&D

//Stats: Fuerza, Destreza y Constitución del Personaje
function three(){
    die(3 , 6)
    let sum = 0;
    for (let i = 0 ; i < result.length ; i++){
        sum = sum + result[i];
    }
    return sum;
}
function four(){
    die(4 , 6);
    hiLo(result);
    result.pop();
    let sum = 0;
    for (let i = 0 ; i < result.length ; i++){
        sum = sum + result[i];
    }
    return sum;
}
function stats(){
    let statsMethod = prompt("What method do you prefer for Stats Rolling? 3d6 or 4d6").toLowerCase();
    if (statsMethod == "3d6"){
        do{
            let attribute = prompt("What Stat Should we Roll for? STR, DEX or CON").toUpperCase();
            switch (attribute){
                case "STR":
                    STR = three();
                    break;
                case "DEX":
                    DEX = three();
                    break;
                case "CON":
                    CON = three();
                    break;
                default:
                    alert("Hm, I'm not Familiar with that Stat. Let's Try Again!");
            }
        }while(STR === 0 || DEX === 0 || CON === 0)
    }else if (statsMethod == "4d6"){
        do{
            let attribute = prompt("What Stat Should we Roll for? STR, DEX or CON").toUpperCase();
            switch (attribute){
                case "STR":
                    STR = four();
                    break;
                case "DEX":
                    DEX = four();
                    break;
                case "CON":
                    CON = four();
                    break;
                default:
                    alert("Hm, I'm not Familiar with that Stat. Let's Try Again!");
            }
        }while(STR === 0 || DEX === 0 || CON === 0)
    }else{
        alert("I don't Know that Method. Let's Try Again!");
        stats();
    }
}
// -END- Stats: Fuerza, Destreza y Constitución del Personaje

//Character: Función constructora de personajes
class character{
    constructor (name , selectedRace , STR , DEX , CON , characteristics){
        this.namChar = name;
        this.raceChar = selectedRace;
        this.strength = STR;
        this.dexterity = DEX;
        this.constitution = CON;
        this.characteristics = characteristics;
    }
    getName(){
        console.log("Name: " + this.namChar);
    }
    getRace(){
        console.log(this.namChar + " it's a/an " + this.raceChar)
    }
    getStats(){
        console.log (this.namChar + "'s stats are:");
        console.log("Strength: " + this.strength);
        console.log("Dexterity: " + this.dexterity);
        console.log("Constitution: " + this.constitution);
    }
    getModifiers(){
        let strength = Math.floor((STR - 10) / 2);
        let dexterity = Math.floor((DEX - 10) / 2);
        let constitution = Math.floor((CON - 10) / 2);
        console.log("Their Strength Modifier is: " + strength);
        console.log("Their Dexterity Modifier is: " + dexterity);
        console.log("Their Constitution Modifier is: " + constitution);
    }
    getCharacteristics(){
        console.log(this.namChar + " has the following characteristics: " + this.characteristics)
    }
}
// -END- Character: Función constructora de personajes

//Creation: Génesis del personaje
function creation (){
    let start = prompt("Shall we Begin Building Your Character? Yes/No").toUpperCase();
    if (start == "YES"){
        do{
            STR = 0;
            DEX = 0;
            CON = 0;
            names = prompt("Write Your Character's Name:");
            stats();
            console.log ("You Rolled These Stats:");
            console.log("Strength: " + STR);
            console.log("Dexterity: " + DEX);
            console.log("Constitution: " + CON);
            raceSelect();
            const hero = new character(names, selectedRace, STR, DEX, CON , characteristics);
            hero.getName();
            hero.getRace();
            hero.getStats();
            hero.getModifiers();
            hero.getCharacteristics();
            console.log(hero);
            charCol.push(hero);
            start = prompt("Do You Want to Build Another Character? Yes/No").toUpperCase();
        }while (start == "YES")
    }else{
        alert("We Have All Day Long.");
        creation();
    }
}
// -END- Creation: Génesis del personaje

creation();
console.log(charCol);*/
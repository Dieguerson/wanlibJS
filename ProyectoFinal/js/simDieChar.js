//Admin Modal
let openModal = document.getElementById("openModal");
openModal.addEventListener("click", onModal);
let closeModal = document.getElementById("closeModal");
closeModal.addEventListener("click", offModal);
let modal = document.getElementById("modal");
function onModal(){
    modal.classList.replace("d-none" , "d-block");
}
function offModal(){
    modal.classList.replace("d-block" , "d-none");
}
let userName = document.getElementById("userName");
let password = document.getElementById("pass");
let logSend = document.getElementById("logSend");
logSend.addEventListener("click" , access);
function access(){
    let logIn = document.getElementById("logIn");
    let raceCreator = document.getElementById("raceCreator");
    if (userName.value == "Admin" && password.value == "Pr0baNd0"){
        logIn.style.display = "none";
        raceCreator.style.setProperty("display", "block", "important");
    } else{
        let logError = document.createElement("p");
        logError.innerText = "That's not a valid username or password.";
        logError.className = "w-100 text-center fs-4 mt-2";
        logIn.appendChild(logError);
        setTimeout(function(){logIn.removeChild(logIn.lastChild);},2000);
    } 
}
// -END- Admin Modal

//Simulador de dados
let result = []; 
let paragraph = document.getElementById("results");
let ammount = document.getElementById("ammount");
let dieSim = document.querySelectorAll(".dieSim");
for (let roll of dieSim){
    roll.addEventListener("click" , dieFace);
    roll.addEventListener("click" , dieRoller);
}
let faceAmm = 0;
function dieFace(e){
    switch (e.target.innerText){
        case "d4":
            faceAmm = 4;
            break;
        case "d6":
            faceAmm = 6;
            break;
        case "d8":
            faceAmm = 8;
            break;
        case "d10":
            faceAmm = 10;
            break;
        case "d12":
            faceAmm = 12;
            break;
        case "d20":
            faceAmm = 20;
            break;
        case "d100":
            faceAmm = 100;
            break;
        default:
            break;
    }
    console.log(faceAmm);
    return faceAmm
}
function die (dieNum , faceNum){
    result = [];
    for (let i = 0 ; i < dieNum ; i++){
        let roller = Math.floor(faceNum * Math.random()) + 1;
        result.push (roller);
    }
}
function dieRoller (e){
    die (ammount.value , faceAmm);
    printer();
}
// -END- Simulador de dados

//Impresora de resultados
function printer(){
    paragraph.innerText = "[" + hiLo(result) + "]";
    paragraph.style.setProperty("display", "block", "important");
}
// -END- Impresora de resultados

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
    return result = data;
}
// -END- Ordenador por Burbujeo

//Razas de D&D
let raceSend = document.getElementById("raceSend");
raceSend.addEventListener("click" , raceCreator);
class newRace{
    constructor (raceName , strMod , dexMod , conMod , raceSize, raceCharacteristics){
        this.raceName = raceName;
        this.strMod = strMod;
        this.dexMod = dexMod;
        this.conMod = conMod;
        this.raceSize = raceSize;
        this.raceCharacteristics = raceCharacteristics;
    }
}
function raceCreator(){
    let raceName = document.getElementById("raceName").value;
    let strMod =document.getElementById("strMod").value;
    let dexMod =document.getElementById("dexMod").value;
    let conMod =document.getElementById("conMod").value;
    let raceSize = document.getElementById("size").value;
    let raceCharacteristics = document.getElementById("characteristics").value;
    let rcCrtr = document.getElementById("raceCreator");
    let raceMsj = document.createElement("p");
    const race = JSON.stringify(new newRace(raceName , strMod , dexMod , conMod , raceSize , raceCharacteristics));
    localStorage.setItem(raceName , race);
    raceMsj.innerText = "Congratulations! The " + raceName + " race has been created!";
    rcCrtr.appendChild(raceMsj);
    raceMsj.className = "w-100 text-center fs-4 mt-2";
    setTimeout(function(){rcCrtr.removeChild(rcCrtr.lastChild);},2000);
}
let raceLst = document.getElementById("race");
function raceList(){
    for (let i = 0; i < localStorage.length ; i++){
        let raceItem = document.createElement("option");
        let raceData = localStorage.key(i);
        raceItem.value = raceData;
        raceItem.innerText = raceData;
        raceLst.appendChild(raceItem);
    }
}
let size = "";
let selectedRace = "";
let selectedRaceSize = "";
let characteristics = "";
function raceSelect(raceChoice){
    let storedRace = localStorage.getItem(raceChoice);
    let ussableRace = JSON.parse(storedRace);
    console.log(ussableRace);
    STR = STR + parseInt(ussableRace.strMod);
    DEX = DEX + parseInt(ussableRace.dexMod);
    CON = CON + parseInt(ussableRace.conMod);
    characteristics = ussableRace.raceCharacteristics;
    size = ussableRace.raceSize;
    selectedRace = ussableRace.raceName;
    selectedRaceSize = ussableRace.raceSize;
}
raceList();
// -END- Clases de D&D

//Quick Admin
let qckAdm = document.getElementById("qckAdm");
qckAdm.addEventListener("click" , quickAdmin);
function quickAdmin(){
    let quickName;
    let quickRace;
    for (let i = 0; i < 3; i++){
        switch (i){
            case 0:
                quickName = "Dwarf";
                quickRace = JSON.stringify(new newRace("Dwarf" , 0 , 0 , 2 , "4 to 5 feet tall" , "Dwarven Resilience, Dwarven Combat Training"));
                localStorage.setItem(quickName , quickRace);
                break;
            case 1:
                quickName = "Elf";
                quickRace = JSON.stringify(new newRace("Elf" , 0 , 2 , 0 , "5 to over 6 feet tall" , "Darkvision, Keen Senses, Fey Ancestry"));
                localStorage.setItem(quickName , quickRace);
                break;
            case 2:
                quickName = "Human";
                quickRace = JSON.stringify(new newRace("Human" , 1 , 1 , 1 , "5 to over 6 feet tall" , "None"));
                localStorage.setItem(quickName , quickRace);
                break;
        }
    }
}
// -END- Quick Admin

//Stats: Fuerza, Destreza y Constitución del Personaje
let statRand = document.getElementById("statRand") ;
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
    if (statRand.value == "3d6"){
        do{
            STR = three();
            DEX = three();
            CON = three();
        }while(STR === 0 || DEX === 0 || CON === 0)
    }else if (statRand.value == "4d6"){
        do{
            STR = four();
            DEX = four();
            CON = four();
        }while(STR === 0 || DEX === 0 || CON === 0)
    }else{
        alert("I don't Know that Method. Let's Try Again!");
    }
}
// -END- Stats: Fuerza, Destreza y Constitución del Personaje

//Creation: Génesis del personaje
let STR = 0;
let DEX = 0;
let CON = 0;
let chrCrtr = document.getElementById("genesis");
chrCrtr.addEventListener ("click" , creation);
function creation (){
    let names = document.getElementById("charName").value;
    STR = 0;
    DEX = 0;
    CON = 0;
    stats();
    console.log ("You Rolled These Stats:");
    console.log("Strength: " + STR);
    console.log("Dexterity: " + DEX);
    console.log("Constitution: " + CON);
    raceSelect(raceLst.value);
    const hero = new character(names, selectedRace, STR, DEX, CON , selectedRaceSize , characteristics);
    charCol.push(hero);
    console.log(charCol);
}
// -END- Creation: Génesis del personaje

//Character: Función constructora de personajes
class character{
    constructor (name , selectedRace , STR , DEX , CON , size , characteristics){
        this.namChar = name;
        this.raceChar = selectedRace;
        this.strength = STR;
        this.strMod = Math.floor((this.strength - 10) / 2);
        this.dexterity = DEX;
        this.dexMod = Math.floor((this.dexterity - 10) / 2);
        this.constitution = CON;
        this.conMod = Math.floor((this.constitution - 10) / 2);
        this.size = size;
        this.characteristics = characteristics;
    }
}
// -END- Character: Función constructora de personajes

//Character List
let charCol=[]
let charList = document.getElementById("charList");
let chrLstUp = document.getElementById("chrLstUp");
chrLstUp.addEventListener("click" , chrLstCrtr);
function chrLstCrtr(){
    charList.classList.replace("d-none" , "d-block");
    charList.innerHTML = `<h2 class="text-center fw-bold w-100 m-0 p-0">Character List</h2>`;
    for (let char of charCol){        
        let charItem = document.createElement("div");
        charItem.innerHTML = `<h3 class="text-center text-md-start">${char.namChar}</h3>
                              <p><b>Race: </b>${char.raceChar}</p>
                              <ul><b>Stats:</b>
                                  <li class="ms-5"> <b>Strength: </b>${char.strength}</li>
                                  <li class="ms-5"> <b>Dexterity: </b>${char.dexterity}</li>
                                  <li class="ms-5"> <b>Constitution: </b>${char.constitution}</li>
                              </ul>
                              <ul><b>Stats Modifiers:</b>
                                  <li class="ms-5"> <b>Strength: </b>${char.strMod}</li>
                                  <li class="ms-5"> <b>Dexterity: </b>${char.dexMod}</li>
                                  <li class="ms-5"> <b>Constitution: </b>${char.conMod}</li>
                              </ul>
                              <p><b>Size: </b>${char.size}</p>
                              <p><b>Characteristics: </b>${char.characteristics}</p>`;
        charList.appendChild(charItem);
    }
}
// -END- Character List
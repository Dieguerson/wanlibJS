$("#openModal").click(function(){$("#modal").addClass("d-block").removeClass("d-none");});
$("#closeModal").click(function(){setTimeout(function(){$("#modal").removeClass("d-block").addClass("d-none");},500)});
$("#openModal , #closeModal").click(function(){$("#modalContent").slideToggle("slow");});
$("#logSend").click(access);
$("#logIn").keypress(function(e){let key = e.which; if(key == 13){access()}});
function access(){
    if ($("#userName").val() == "Admin" && $("#pass").val() == "Pr0baNd0"){
        $("#logIn").toggleClass("d-block d-none");
        $("#raceCreator").toggleClass("d-block d-none");
    }else{
        $("#logIn").append(`<p class="w-100 text-center fs-4 mt-2">That's not a valid username or password.</p>`);
        setTimeout(function(){$("#logIn").children().last().remove();},1300);
    } 
}

let faceAmm = 0;
$(".dieSim").click(dieFace);
$(".dieSim").click(dieRoller);
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
}
function dieRoller (){
    die ($("#ammount").val() , faceAmm);
    $("#results").text(`[${hiLo(result)}]`);
}
let result = [];
function die (dieNum , faceNum){
    result = [];
    for (let i = 0 ; i < dieNum ; i++){
        let roller = Math.floor(faceNum * Math.random()) + 1;
        result.push (roller);
    }
}
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
let STR = 0 , DEX = 0 , CON = 0 , charCol=[];
$("#genesis").click(function(){
                        STR = 0;
                        DEX = 0;
                        CON = 0;
                        stats();
                        raceSelect($("#race").val());
                        const hero = new character($("#charName").val() , selectedRace , STR , DEX , CON , selectedRaceSize , characteristics);
                        charCol.push(hero);
                        chrLstCrtr();
                        $("body").append(`<section id="genMsj" class="position-fixed top-0 start-0 w-100 h-100 p-4 overflow-auto modal__background--color modal--depth" style="display: none;">
                                            <article id="genCont"class="position-absolute top-50 start-50 translate-middle border border-2 py-3 m-auto bg-success card--border" style="width: 0px; height: 0px;">
                                                <h3 class="text-center fw-bold w-100 m-0 px-3" style="display: none;">Congratulations!</h3>
                                                <p class="text-center fw-bold w-100 m-0 px-3" style="display: none;">Your Character Has Been Created!</p>
                                            </article>
                                          </section>`);
                        $("#genMsj").fadeIn("fast").delay(3600).fadeOut("fast");
                        $("#genCont").animate({width:"300px"} , "slow").animate({height:"100px"} , "slow").delay(1100).animate({height:"0px"} , "slow").animate({width:"0px"} , "slow").hide(1);
                        $("#genCont *").delay(800).show("normal").delay(1100).hide("normal");
                        setTimeout(function(){$("body").children().last().remove();},4000);
});
$("#openCharModal").click(function(){$("#charModal").addClass("d-block").removeClass("d-none");});
$("#closeCharModal").click(function(){setTimeout(function(){$("#charModal").removeClass("d-block").addClass("d-none");},500)});
$("#openCharModal , #closeCharModal").click(function(){$("#charModalContent").animate({width:"toggle"} , "slow");});
function chrLstCrtr(){
    $("#charList").html(`<h3 class="text-center fw-bold w-100 m-0 p-0">Character List</h3>`);
    for (let char of charCol){
        $("#charList").append(`<div>
                                   <h3 class="text-md-start">${char.namChar}</h3>
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
                                   <p><b>Characteristics: </b>${char.characteristics}</p>
                               </div>`);
    }
}

function stats(){
    if ($("#statRand").val() == "3d6"){
        do{
            STR = three();
            DEX = three();
            CON = three();
        }while(STR === 0 || DEX === 0 || CON === 0)
    }else if ($("#statRand").val() == "4d6"){
        do{
            STR = four();
            DEX = four();
            CON = four();
        }while(STR === 0 || DEX === 0 || CON === 0)
    }
}
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

$("#raceSend").click(raceCreator);
$("#raceCreator").keypress(function(e){let key = e.which; if(key == 13){raceCreator()}});
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
    let raceName = $("#raceName").val() , strMod = $("#strMod").val() , dexMod = $("#dexMod").val() , conMod = $("#conMod").val() , raceSize = $("#size").val() , raceCharacteristics = $("#characteristics").val();
    const race = JSON.stringify(new newRace(raceName , strMod , dexMod , conMod , raceSize , raceCharacteristics));
    localStorage.setItem(raceName , race);
    $("#raceCreator").append(`<p class="w-100 text-center fs-4 mt-2">Congratulations! The ${raceName} race has been created!</p>`);
    setTimeout(function(){$("#raceCreator").children().last().remove();},1500);
}
let size = "";
let selectedRace = "";
let selectedRaceSize = "";
let characteristics = "";
function raceSelect(raceChoice){
    let storedRace = localStorage.getItem(raceChoice);
    let ussableRace = JSON.parse(storedRace);
    STR = STR + parseInt(ussableRace.strMod);
    DEX = DEX + parseInt(ussableRace.dexMod);
    CON = CON + parseInt(ussableRace.conMod);
    characteristics = ussableRace.raceCharacteristics;
    size = ussableRace.raceSize;
    selectedRace = ussableRace.raceName;
    selectedRaceSize = ussableRace.raceSize;
}
$("#race").ready(raceList);
function raceList(){
    for (let i = 0; i < localStorage.length ; i++){
        $("#race").append(`<option value="${localStorage.key(i)}">${localStorage.key(i)}</option>`);
    }
}
$("#qckAdm").click(quickAdmin);
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
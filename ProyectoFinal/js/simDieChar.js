let dndData = "https://www.dnd5eapi.co/api";

$("#openModal").click(function(){$("#modal").addClass("d-block").removeClass("d-none");});
$("#closeModal").click(function(){setTimeout(function(){$("#modal").removeClass("d-block").addClass("d-none");},500)});
$("#openModal , #closeModal").click(function(){$("#modalContent").slideToggle("slow");});
$("#logSend").click(access);
$("#logIn").keypress(function(e){let key = e.which; if(key == 13){access()}});
$("#signUp , #back").click(function(){
    $("#userCreator").toggleClass("d-block d-none");
    $("#logIn").toggleClass("d-flex d-none");
});
let user = "";
let userData;
function access(){
    if (localStorage.length > 0 && $("#pass").val() == JSON.parse(localStorage.getItem($("#userName").val())).password){
        user = $("#userName").val();
        userData = JSON.parse(localStorage[$("#userName").val()]);
        charCol = userData.characters;
        chrLstCrtr();
        $("#logIn").html(`<fieldset>
                                <legend class="fw-bold p-1 pt-0">Log In</legend>
                                <p class="w-100 text-center fs-4 mt-2">You are now logged in!</p>
                                </legend>
                          </fieldset>`);
    }else{
        $("#logIn").append(`<p class="w-100 text-center fs-4 mt-2">That's not a valid username or password.</p>`);
        setTimeout(function(){$("#logIn").children().last().remove();},1300);
    } 
}

$("body").ready(localStorage.setItem("Admin1" , JSON.stringify({password: "123456" , characters: charCol})));

$("#userSend").click(function(){
    let i = 0;
    let j = 0;
    while (i <= localStorage.length){
        if ($("#newUserName").val() == localStorage.key(i)){
            j++
        }
        i++
    } 
    if(j != 0){
        $("#userCreator").append(`<p class="w-100 text-center fs-4 mt-2">This user name already exists!</p>`);
        setTimeout(function(){$("#userCreator").children().last().remove();},1500);
    }else{
        const userData = JSON.stringify({password: $("#userPass").val() , characters: charCol});
        localStorage.setItem ($("#newUserName").val() , userData);
        $("#userCreator").append(`<p class="w-100 text-center fs-4 mt-2">Congratulations! Your user has been created!</p>`);
        setTimeout(function(){$("#userCreator").children().last().remove();},1500);}
});

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
    constructor (name , selectedRace , STR , DEX , CON , INT , WIS , CHA , size , characteristics){
        this.namChar = name;
        this.raceChar = selectedRace;
        this.strength = STR;
        this.strMod = Math.floor((this.strength - 10) / 2);
        this.dexterity = DEX;
        this.dexMod = Math.floor((this.dexterity - 10) / 2);
        this.constitution = CON;
        this.conMod = Math.floor((this.constitution - 10) / 2);
        this.intelligence = INT;
        this.intMod = Math.floor((this.intelligence - 10) / 2);
        this.wisdom = WIS;
        this.wisMod = Math.floor((this.wisdom - 10) / 2);
        this.charisma = CHA;
        this.chaMod = Math.floor((this.charisma - 10) / 2);
        this.size = size;
        this.characteristics = characteristics;
    }
}
let STR = 0 , DEX = 0 , CON = 0 , INT = 0 , WIS = 0 , CHA = 0 , charCol=[];
$("#genesis").click(function(){
                        STR = 0;
                        DEX = 0;
                        CON = 0;
                        INT = 0;
                        WIS = 0;
                        CHA = 0;
                        characteristics = "";
                        size = "";
                        stats();
                        raceSelect($("#race").val());
                        setTimeout(function(){const hero = new character($("#charName").val() , selectedRace , STR , DEX , CON , INT , WIS , CHA , size , characteristics);
                        charCol.push(hero);
                        if (user != ""){
                            userData.characters = charCol;
                            localStorage[user] = JSON.stringify(userData);
                        }
                        chrLstCrtr();},300)
                        $("body").append(`<section id="genMsj" class="position-fixed top-0 start-0 w-100 h-100 p-4 overflow-auto modal__background--color modal--depth" style="display: none;">
                                            <article id="genCont"class="position-absolute top-50 start-50 translate-middle border border-2 py-3 m-auto bg-success card--border" style="width: 0px; height: 0px;">
                                                <h3 class="text-center fw-bold w-100 m-0 px-3" style="display: none;">Congratulations!</h3>
                                                <p class="text-center fw-bold w-100 m-0 px-3" style="display: none;">Your Character Has Been Created!</p>
                                            </article>
                                          </section>`);
                        $("#genMsj").fadeIn("fast").delay(3600).fadeOut("fast");
                        $("#genCont").animate({width:"300px"} , "slow").animate({height:"100px"} , "slow").delay(1100).animate({height:"0px"} , "slow").animate({width:"0px"} , "slow").hide(1);
                        $("#genCont *").delay(800).show("normal").delay(1100).hide("normal");
                        setTimeout(function(){$("body").children().last().remove();},4000);;
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
                                       <li class="ms-5"> <b>Intelligence: </b>${char.intelligence}</li>
                                       <li class="ms-5"> <b>Wisdom: </b>${char.wisdom}</li>
                                       <li class="ms-5"> <b>Charisma: </b>${char.charisma}</li>
                                   </ul>
                                   <ul><b>Stats Modifiers:</b>
                                       <li class="ms-5"> <b>Strength: </b>${char.strMod}</li>
                                       <li class="ms-5"> <b>Dexterity: </b>${char.dexMod}</li>
                                       <li class="ms-5"> <b>Constitution: </b>${char.conMod}</li>
                                       <li class="ms-5"> <b>Intelligence: </b>${char.intMod}</li>
                                       <li class="ms-5"> <b>Wisdom: </b>${char.wisMod}</li>
                                       <li class="ms-5"> <b>Charisma: </b>${char.chaMod}</li>
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
            INT = three();
            WIS = three();
            CHA = three();
        }while(STR === 0 || DEX === 0 || CON === 0 || INT === 0 || WIS === 0 || CHA === 0)
    }else if ($("#statRand").val() == "4d6"){
        do{
            STR = four();
            DEX = four();
            CON = four();
            INT = four();
            WIS = four();
            CHA = four();
        }while(STR === 0 || DEX === 0 || CON === 0 || INT === 0 || WIS === 0 || CHA === 0)
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

let size = "";
let selectedRace = "";
let characteristics = "";
function raceSelect(raceChoice){
    $.get(dndData+"/races/"+raceChoice , function(datos){
        for (let i = 0 ; i < datos.ability_bonuses.length ; i++){
            switch (datos.ability_bonuses[i].ability_score.index){
                case "str":
                    STR = STR + datos.ability_bonuses[i].bonus;
                    break;
                case "dex":
                    DEX = DEX + datos.ability_bonuses[i].bonus;
                    break;
                case "con":
                    CON = CON + datos.ability_bonuses[i].bonus;
                    break;
                case "int":
                    INT = INT + datos.ability_bonuses[i].bonus;
                    break;
                case "wis":
                    WIS = WIS + datos.ability_bonuses[i].bonus;
                    break;
                case "cha":
                    CHA = CHA + datos.ability_bonuses[i].bonus;
                    break;
            }
        }
        characteristics = "";
        for (let i = 0 ; i < datos.traits.length ; i++){
            if (i <= datos.traits.length-2){
                characteristics += datos.traits[i].name + ", ";
            }else{
                characteristics += datos.traits[i].name + ".";
            }
        }
        size = datos.size_description;
        selectedRace = datos.name;
    });
}

$("#race").ready(raceList);
function raceList(){
    $.get(dndData+"/races" , function(datos){
        for (let i = 0; i < datos.results.length ; i++){
            $("#race").append(`<option value="${datos.results[i].index}">${datos.results[i].name}</option>`);
        }
    });
}
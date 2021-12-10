let dndData = "https://www.dnd5eapi.co/api";
let db = "json/db.json";
$.getJSON(db , function(data){
    console.log(data);
});

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
    if (localStorage.length > 0 && $("#userName").val() != "" && localStorage[$("#userName").val()] != null && $("#pass").val() == JSON.parse(localStorage.getItem($("#userName").val())).password){
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
$("#userSend").click(function(){
    let i = 0;
    let j = 0;
    while (i <= localStorage.length){
        if ($("#newUserName").val() == localStorage.key(i)){
            j++
        }
        i++
    } 
    if(localStorage["users"] == null){
        localStorage.setItem ("users" , JSON.stringify({userList: []}));
        const newUser = {name: $("#newUserName").val() , password: $("#userPass").val() , characters: charCol};
        const saveUser = JSON.parse(localStorage["users"])
        saveUser.userList.push(newUser);
        localStorage["users"] = JSON.stringify(saveUser)
        console.log(saveUser)
        $("#userCreator").append(`<p class="w-100 text-center fs-4 mt-2">Congratulations! Your user has been created!</p>`);
        setTimeout(function(){$("#userCreator").children().last().remove();},1500);}
    else if(j != 0){
        $("#userCreator").append(`<p class="w-100 text-center fs-4 mt-2">This user name already exists!</p>`);
        setTimeout(function(){$("#userCreator").children().last().remove();},1500);
    }else{
        const userData = JSON.stringify({name: $("#newUserName").val() , password: $("#userPass").val() , characters: charCol});
        localStorage.setItem ("users" , userData);
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
    constructor (
        name,
        selectedRace,
        raceAge,
        raceAlignment,
        raceLanguages,
        racePerks,
        raceProficiencies,
        raceSize,
        raceSpeed,
        selectedSubRace,
        subRacePerks,
        STR,
        DEX,
        CON,
        INT,
        WIS,
        CHA,
        selectedClass,
        classEquipment,
        classFeatures,
        classHP1,
        classHP,
        classProficiencies,
        classSavingThrows,
        classSkills,
        profBonus,
        subClassName,
        selectedSubClass,
        subClassFeatures,
        selectedBackground,
        backgroundEquipment,
        backgroundFeature,
        backgroundLanguages,
        backgroundSkills,
        backgroundTools,
        backgroundVariant
        )
        {
            this.namChar = name;
            this.raceChar = selectedRace;
            this.ageChar = raceAge;
            this.alignChar = raceAlignment;
            this.langChar = raceLanguages;
            this.perkChar = racePerks;
            this.profChar = raceProficiencies;
            this.sizeChar = raceSize;
            this.speedChar = raceSpeed;
            this.subRChar = selectedSubRace;
            this.subRPerk = subRacePerks;
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
            this.classChar = selectedClass;
            this.equipChar = classEquipment;
            this.featChar = classFeatures;
            this.l1HP = classHP1;
            this.hpChar = classHP;
            this.classProf = classProficiencies;
            this.saveThrowChar = classSavingThrows;
            this.skillChar = classSkills;
            this.profBonus = profBonus;
            this.subClassName = subClassName;
            this.subClass = selectedSubClass;
            this.subClassFeat = subClassFeatures;
            this.backChar = selectedBackground;
            this.backEquip = backgroundEquipment;
            this.backFeat = backgroundFeature;
            this.backLang = backgroundLanguages;
            this.backSkill = backgroundSkills;
            this.backTools = backgroundTools;
            this.backVar = backgroundVariant;
        }
}
let STR = 0 , DEX = 0 , CON = 0 , INT = 0 , WIS = 0 , CHA = 0 , charCol=[];
$("#genesis").click(function(){
                        let error = false
                        if($("#charName").val() == ""){
                            $(".charName").append(`<p class="text-center mt-2 fw-bold d-none fs-6"><i class="bi bi-exclamation-circle-fill text-primary"></i> Character's Name is a necesary field!</p>`);
                            $(".charName p").fadeIn(500).delay(800).fadeOut(500);
                            setTimeout(function(){$(".charName p").remove()}, 2100);
                        }
                        stats();
                        if($("#race").val() == ""){
                            $(".charRace").append(`<p class="text-center mt-2 fw-bold d-none fs-6"><i class="bi bi-exclamation-circle-fill text-primary"></i> Race is a necesary field!</p>`);
                            $(".charRace p").fadeIn(500).delay(800).fadeOut(500);
                            setTimeout(function(){$(".charRace p").remove()}, 2100);
                        }else{
                            raceSelect($("#race").val() , $("#subRace").val());
                        }
                        if($("#class").val() == ""){
                            $(".class").append(`<p class="text-center mt-2 fw-bold d-none fs-6"><i class="bi bi-exclamation-circle-fill text-primary"></i> Class is a necesary field!</p>`);
                            $(".class p").fadeIn(500).delay(800).fadeOut(500);
                            setTimeout(function(){$(".class p").remove()}, 2100);
                        }else{
                            classSelect($("#class").val() , $("#subClass").val());
                        }
                        backgroundSelect($("#background").val());
                        if($("#background").val() == ""){
                            $(".background").append(`<p class="text-center mt-2 fw-bold d-none fs-6"><i class="bi bi-exclamation-circle-fill text-primary"></i> Background is a necesary field!</p>`);
                            $(".background p").fadeIn(500).delay(800).fadeOut(500);
                            setTimeout(function(){$(".background p").remove()}, 2100);
                        }
                        if($("#charName").val() == "" || $("#race").val() == "" || $("#class").val() == "" || $("#background").val() == ""){
                            error = true
                        }else{
                            error = false
                        }
                        if (error){return;}
                        setTimeout(function(){
                            const hero = new character(
                                $("#charName").val(),
                                selectedRace,
                                raceAge,
                                raceAlignment,
                                raceLanguages,
                                racePerks,
                                raceProficiencies,
                                raceSize,
                                raceSpeed,
                                selectedSubRace,
                                subRacePerks,
                                STR,
                                DEX,
                                CON,
                                INT,
                                WIS,
                                CHA,
                                selectedClass,
                                classEquipment,
                                classFeatures, 
                                classHP1,
                                classHP,
                                classProficiencies,
                                classSavingThrows,
                                classSkills,
                                profBonus,
                                subClassName,
                                selectedSubClass,
                                subClassFeatures,
                                selectedBackground,
                                backgroundEquipment,
                                backgroundFeature,
                                backgroundLanguages,
                                backgroundSkills,
                                backgroundTools,
                                backgroundVariant,
                                );
                            charCol.push(hero);
                            if (user != ""){
                                userData.characters = charCol;
                                localStorage[user] = JSON.stringify(userData);
                            }
                            chrLstCrtr();
                            console.log(hero)},300)
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
                                   <p><b>Race: </b>${char.subRChar ? char.subRChar + " " + char.raceChar : char.raceChar}</p>
                                   <ul>
                                       <li class="ms-5"> <b>Age: </b>${char.ageChar}</li>
                                       <li class="ms-5"> <b>Alignment: </b>${char.alignChar}</li>
                                       <li class="ms-5"> <b>Languages: </b>${char.langChar}</li>
                                       <li class="ms-5"> <b>Abilities: </b>${char.perkChar}</li>
                                       <li class="ms-5"> <b>Proficiencies: </b>${char.profChar}</li>
                                       <li class="ms-5"> <b>Size: </b>${char.sizeChar}</li>
                                       <li class="ms-5"> <b>Speed: </b>${char.speedChar}</li>
                                       <li class="ms-5"> <b>${char.subRChar ? char.subRChar + " " + char.raceChar : "Subrace"} Abilities: </b>${char.subRPerk}</li>
                                   </ul>
                                   <p><b>Stats:</b></p>
                                   <ul>
                                       <li class="ms-5"> <b>Strength: </b>${char.strength}</li>
                                       <li class="ms-5"> <b>Dexterity: </b>${char.dexterity}</li>
                                       <li class="ms-5"> <b>Constitution: </b>${char.constitution}</li>
                                       <li class="ms-5"> <b>Intelligence: </b>${char.intelligence}</li>
                                       <li class="ms-5"> <b>Wisdom: </b>${char.wisdom}</li>
                                       <li class="ms-5"> <b>Charisma: </b>${char.charisma}</li>
                                   </ul>
                                   <p><b>Stats Modifiers:</b></p>
                                   <ul>
                                       <li class="ms-5"> <b>Strength: </b>${char.strMod}</li>
                                       <li class="ms-5"> <b>Dexterity: </b>${char.dexMod}</li>
                                       <li class="ms-5"> <b>Constitution: </b>${char.conMod}</li>
                                       <li class="ms-5"> <b>Intelligence: </b>${char.intMod}</li>
                                       <li class="ms-5"> <b>Wisdom: </b>${char.wisMod}</li>
                                       <li class="ms-5"> <b>Charisma: </b>${char.chaMod}</li>
                                   </ul>
                                   <p><b>Class: </b>${char.classChar}</p>
                                   <ul>
                                       <li class="ms-5"> <b>Equipment: </b>
                                           <ul>
                                               ${char.equipChar}
                                           </ul>
                                       </li>
                                       <li class="ms-5"> <b>Features: </b>${char.featChar}</li>
                                       <li class="ms-5"> <b>HP at lvl 1: </b>${char.l1HP} + ${char.conMod}</li>
                                       <li class="ms-5"> <b>HP from lvl2 onward: </b>${char.hpChar}</li>
                                       <li class="ms-5"> <b>Proficiencies: </b>${char.classProf}</li>
                                       <li class="ms-5"> <b>Saving Throws: </b>${char.saveThrowChar}</li>
                                       <li class="ms-5"> <b>Skills: </b>${char.skillChar}</li>
                                       <li class="ms-5">Proficiency Bonus:
                                           <ul>
                                               <li>${char.profBonus[0]}</li>
                                               <li>${char.profBonus[1]}</li>
                                               <li>${char.profBonus[2]}</li>
                                               <li>${char.profBonus[3]}</li>
                                               <li>${char.profBonus[4]}</li>
                                           </ul>
                                       </li>
                                   </ul>
                                   <p><b>${char.subClassName}: </b>${char.subClass}</p>
                                   <ul>
                                       <li class="ms-5"> <b>Features: </b>${char.subClassFeat}</li>
                                   </ul>
                                   <p><b>Background: </b>${char.backChar}</p>
                                   <ul>
                                       <li class="ms-5"> <b>Equipment: </b>${char.backEquip}</li>
                                       <li class="ms-5"> <b>Features: </b>${char.backFeat}</li>
                                       <li class="ms-5"> <b>Languages: </b>${char.backLang}</li>
                                       <li class="ms-5"> <b>Skill Proficiencies: </b>${char.backSkill}</li>
                                       <li class="ms-5"> <b>Tool Proficiencies: </b>${char.backTools}</li>
                                       <li class="ms-5"> <b>${char.backChar} Variant: </b>${char.backVar}</li>
                                   </ul>
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

let selectedRace = "";
let raceAge = "";
let raceAlignment = "";
let raceLanguages = "";
let racePerks = "";
let raceProficiencies = "";
let raceSize = "";
let raceSpeed = "";
let selectedSubRace = "";
let subRacePerks = "";

function raceSelect(raceChoice , subRaceChoice){
    $.getJSON(db , function(datos){
        for (let i = 0 ; i < datos.race[raceChoice].abIncrease.length ; i++){
            switch (datos.race[raceChoice].abIncrease[i].name){
                case "STR":
                    STR = STR + datos.race[raceChoice].abIncrease[i].value;
                    break;
                case "DEX":
                    DEX = DEX + datos.race[raceChoice].abIncrease[i].value;
                    break;
                case "CON":
                    CON = CON + datos.race[raceChoice].abIncrease[i].value;
                    break;
                case "INT":
                    INT = INT + datos.race[raceChoice].abIncrease[i].value;
                    break;
                case "WIS":
                    WIS = WIS + datos.race[raceChoice].abIncrease[i].value;
                    break;
                case "CHA":
                    CHA = CHA + datos.race[raceChoice].abIncrease[i].value;
                    break;
            }
        }
        if(datos.race[raceChoice].subrace[subRaceChoice] != [] && subRaceChoice != ""){
            switch (datos.race[raceChoice].subrace[subRaceChoice].abIncrease.name){
                case "STR":
                    STR = STR + datos.race[raceChoice].subrace[subRaceChoice].abIncrease.value;
                    break;
                case "DEX":
                    DEX = DEX + datos.race[raceChoice].subrace[subRaceChoice].abIncrease.value;
                    break;
                case "CON":
                    CON = CON + datos.race[raceChoice].subrace[subRaceChoice].abIncrease.value;
                    break;
                case "INT":
                    INT = INT + datos.race[raceChoice].subrace[subRaceChoice].abIncrease.value;
                    break;
                case "WIS":
                    WIS = WIS + datos.race[raceChoice].subrace[subRaceChoice].abIncrease.value;
                    break;
                case "CHA":
                    CHA = CHA + datos.race[raceChoice].subrace[subRaceChoice].abIncrease.value;
                    break;
            }
            selectedSubRace = datos.race[raceChoice].subrace[subRaceChoice].name;
            subRacePerks = datos.race[raceChoice].subrace[subRaceChoice].perks;
        }else {
            selectedSubRace = false;
            subRacePerks = "None";
        }
        selectedRace = datos.race[raceChoice].name;
        raceAge = datos.race[raceChoice].age;
        raceAlignment = datos.race[raceChoice].alignment;
        raceLanguages = datos.race[raceChoice].languages;
        racePerks = datos.race[raceChoice].perks;
        raceProficiencies = datos.race[raceChoice].proficiencies;
        raceSize = datos.race[raceChoice].size;;
        raceSpeed = datos.race[raceChoice].speed;
    });
}

let selectedClass = "";
let classEquipment = "";
let classFeatures = "";
let classHP1 = "";
let classHP = "";
let classProficiencies = "";
let classSavingThrows = "";
let classSkills = "";
let profBonus = [];
let subClassName = "";
let selectedSubClass = "";
let subClassFeatures = "";

function classSelect(classChoice , subClassChoice){
    $.getJSON(db , function(datos){
        selectedClass = datos.class[classChoice].name;
        function equipList() {
            classEquipment = "";
            for (let item in datos.class[classChoice].equipment){
                classEquipment += `<li>${datos.class[classChoice].equipment[item]}</li>`
            };
        };
        equipList();
        classFeatures = datos.class[classChoice].features;
        classHP1 = datos.class[classChoice].hpL1;
        classHP = datos.class[classChoice].hp;
        classProficiencies = datos.class[classChoice].proficiencies;
        classSavingThrows = datos.class[classChoice].savingThrows;
        classSkills = datos.class[classChoice].skills;
        profBonus = datos.profBonus;
        subClassName = datos.class[classChoice].subclass[subClass.length -1];
        if(subClassChoice != ""){
            selectedSubClass = datos.class[classChoice].subclass[subClassChoice].name;
            subClassFeatures = datos.class[classChoice].subclass[subClassChoice].features;
        }else{
            selectedSubClass = "Not Chosen.";
            subClassFeatures = "None.";
        }
    });
}

let selectedBackground = "";
let backgroundEquipment = "";
let backgroundFeature = "";
let backgroundLanguages = "";
let backgroundSkills = "";
let backgroundTools = "";
let backgroundVariant = "";

function backgroundSelect(backgroundChoice){
    if(backgroundChoice != ""){
        $.getJSON(db , function(datos){
            selectedBackground = datos.background[backgroundChoice].name;
            backgroundEquipment = datos.background[backgroundChoice].equipment;
            backgroundFeature = datos.background[backgroundChoice].feature;
            backgroundLanguages = datos.background[backgroundChoice].languages;
            backgroundSkills = datos.background[backgroundChoice].skillProficiencies;
            backgroundTools = datos.background[backgroundChoice].toolProficiencies;
            backgroundVariant = datos.background[backgroundChoice].variant;
        });
    }else{
        selectedBackground = "";
        backgroundEquipment = "None.";
        backgroundFeature = "None.";
        backgroundLanguages = "None.";
        backgroundSkills = "None.";
        backgroundTools = "None.";
        backgroundVariant = "None.";
    }
}

$("#race").ready(raceList);
function raceList(){
    $.getJSON(db , function(datos){
        for (let i = 0; i < datos.race.length ; i++){
            $("#race").append(`<option value="${[i]}">${datos.race[i].name}</option>`);
        }
    });
}
$("#class").ready(classList);
function classList(){
    $.getJSON(db , function(datos){
        for (let i = 0; i < datos.class.length ; i++){
            $("#class").append(`<option value="${[i]}">${datos.class[i].name}</option>`);
        }
    });
}
$("#background").ready(backgroundList);
function backgroundList(){
    $.getJSON(db , function(datos){
        for (let i = 0; i < datos.background.length ; i++){
            $("#background").append(`<option value="${[i]}">${datos.background[i].name}</option>`);
        }
    });
}
$("#race").change(
    function subRaceList(){
        $("#subRace").html(`<option value=""></option>`);
        $.getJSON(db , function(datos){
            if($("#race").val() != "" && datos.race[$("#race").val()].subrace.length != 0){
                for (let i = 0; i < datos.race[$("#race").val()].subrace.length ; i++){
                    $("#subRace").append(`<option value="${[i]}">${datos.race[$("#race").val()].subrace[i].name}</option>`);
                }
                $(".subRace").slideDown(500);
            } else {
                $(".subRace").slideUp("slow");
            }
        });
    }
);
$("#class").change(
    function subClassList(){
        $("#subClass").html(`<option value=""></option>`);
        $.getJSON(db , function(datos){
            if($("#class").val() != "" && datos.class[$("#class").val()].subclass.length != 0){
                $(".subClass").html(`${datos.class[$("#class").val()].subclass[datos.class[$("#class").val()].subclass.length - 1]}:
                                     <select class="form-select text-secondary bg-dark border border-secondary shadow mb-4" name="Subclass" id="subClass">
                                        <option value=""></option>
                                     </select>`)
                for (let i = 0; i < datos.class[$("#class").val()].subclass.length - 1 ; i++){
                    $("#subClass").append(`<option value="${[i]}">${datos.class[$("#class").val()].subclass[i].name}</option>`);
                }
                $(".subClass").slideDown(500);
            } else {
                $(".subClass").slideUp("slow");
            }
        });
    }
);
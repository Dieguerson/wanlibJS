let dndData = "json/dndData.json";

$("#openModal").click(() => {$("#modal").toggleClass("d-block d-none");});

$("#closeModal").click(() => {setTimeout(() => {$("#modal").toggleClass("d-block d-none");},500);});

$("#openModal , #closeModal").click(() => {$("#modalContent").slideToggle("slow");});

$("#logSend").click(() => {access($("#userName").val() , $("#pass").val());});

$("#logIn").keypress((e) => {let key = e.which; if(key == 13){access($("#userName").val() , $("#pass").val());}});

$("#signUp , #back").click(() => {
    $("#userCreator").toggleClass("d-block d-none");
    $("#logIn").toggleClass("d-flex d-none");
});

let customer = {};
let customerPlace = -1;

function access(userName , userPassword){
    let wrongLogIn = `<p class="d-none w-100 text-center fs-4 mt-2 logIn">That's not a valid username or password.</p>`;
    if (localStorage.length > 0 && userName != ""){
        const userList = JSON.parse(localStorage["users"]).userList;
        for(user of userList){
            if(user.name == userName){
                customer = user;
                customerPlace = userList.indexOf(user);
            }
        }
        if(userPassword == customer.password){
            charCol = customer.characters;
            chrLstCrtr();
            $("#logIn").toggleClass("d-flex d-none");
            $("#loggedIn").toggleClass("d-flex d-none");
        }else{
            $("#logIn").append(wrongLogIn);
            $("#logIn").children().last().slideDown(500).delay(800).slideUp(500);
            setTimeout(function(){$("#logIn").children().last().remove();},1801);
        } 
    }else{
        $("#logIn").append(wrongLogIn);
        $("#logIn").children().last().slideDown(500).delay(800).slideUp(500);
        setTimeout(function(){$("#logIn").children().last().remove();},1801);
    } 
}

$("#getOut").click(() => {
    customer = {};
    customerPlace = -1;
    charCol=[];
    chrLstCrtr();
    $("#loggedIn").toggleClass("d-flex d-none");
    $("#logIn").toggleClass("d-flex d-none");
});

$("#userSend").click(() => {
    let newUserName = $("#newUserName").val();
    let newPassword = $("#userPass").val();
    const userCreated = `<p class="d-none w-100 text-center fs-4 mt-2">Congratulations! Your user has been created!</p>`;
    class newUser{
        constructor (name , password , characters ){
            this.name = name;
            this.password = password;
            this.characters = characters;
        }
    }
    let userStorage
    if(newUserName == "" || newPassword == ""){
        $("#userCreator").append(`<p class="d-none w-100 text-center fs-4 mt-2">You're Forgetting Something!</p>`);
        $("#userCreator").children().last().slideDown(500).delay(800).slideUp(500);
        setTimeout(() => {$("#userCreator").children().last().remove();},1801);
    }else if(localStorage["users"] == null){
        localStorage.setItem ("users" , JSON.stringify({userList: []}));
        const userCreate = new newUser (newUserName , newPassword , charCol);
        const saveUser = JSON.parse(localStorage["users"]);
        userStorage = saveUser;
        userStorage.userList.push(userCreate);
        localStorage["users"] = JSON.stringify(userStorage);
        $("#userCreator").append(userCreated);
        $("#userCreator").children().last().slideDown(500).delay(800).slideUp(500);
        setTimeout(() => {$("#userCreator").children().last().remove();},1801);
        setTimeout(() => {
            access(newUserName , newPassword);
            $("#userCreator").toggleClass("d-block d-none");
            $("#logIn").toggleClass("d-flex d-none");
        },1802);
    }else{
        const saveUser = JSON.parse(localStorage["users"]);
        userStorage = saveUser;
        const userList = userStorage.userList;
        let userExistance = "Ok, Create Me!";
        for(user of userList){
            if(newUserName == user.name){
                userExistance = "Wait, I Exist!";
            }
        }if(newUserName == "" || newPassword == ""){
            $("#userCreator").append(`<p class="d-none w-100 text-center fs-4 mt-2">You're Forgetting Something!</p>`);
            $("#userCreator").children().last().slideDown(500).delay(800).slideUp(500);
            setTimeout(() => {$("#userCreator").children().last().remove();},1801);
        }else if(userExistance != "Ok, Create Me!"){
            $("#userCreator").append(`<p class="d-none w-100 text-center fs-4 mt-2">This user name already exists!</p>`);
            $("#userCreator").children().last().slideDown(500).delay(800).slideUp(500);
            setTimeout(() => {$("#userCreator").children().last().remove();},1801);
        }else{
            const newUser = {name: newUserName , password: newPassword , characters: charCol};
            userStorage.userList.push(newUser);
            localStorage["users"] = JSON.stringify(userStorage);
            $("#userCreator").append(userCreated);
            $("#userCreator").children().last().slideDown(500).delay(800).slideUp(500);
            setTimeout(() => {$("#userCreator").children().last().remove();},1801);
            setTimeout(() => {
                access(newUserName , newPassword);
                $("#userCreator").toggleClass("d-block d-none");
                $("#logIn").toggleClass("d-flex d-none");
            },1802);
        }
    }
});

$(".dieSim").click(dieFace);

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
}

let newValue = 0;

$("#ammountPlus").click(() => {
    newValue = parseInt($("#ammount").val()) + 1;
    $("#ammount").val(newValue);
});
$("#ammountMinus").click(() => {
    newValue = parseInt($("#ammount").val()) - 1;
    $("#ammount").val(newValue);
});

$(".dieSim").click(dieRoller);

function dieRoller (){
    die($("#ammount").val() , faceAmm);
    let rollSum = 0;
    for(roll of result){
        rollSum += roll;
    };
    let print = "";
    hiLo(result);
    for(number of result){
        print += number + ", ";
    }
    let prettyPrint = print.slice(0 , -2);
    $("#results").html(`<p>Total: ${rollSum}</p>
                        <p>[${prettyPrint}]</p>`);
}

let result = [];
function die (dieNum , faceNum){
    result = [];
    for (let i = 0 ; i < dieNum ; i++){
        let roller = Math.floor(faceNum * Math.random()) + 1;
        result.push(roller);
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

let STR = 0
let DEX = 0
let CON = 0
let INT = 0
let WIS = 0
let CHA = 0
let charCol=[];

$("#genesis").click(() => {
    STR = 0;
    DEX = 0;
    CON = 0;
    INT = 0;
    WIS = 0;
    CHA = 0;
    let error = false;
    let charNameValue = $("#charName").val();
    let raceValue = $("#race").val();
    let subRaceValue = $("#subRace").val();
    let classValue = $("#class").val();
    let subClassValue = $("#subClass").val();
    let backgroundValue = $("#background").val();
    stats(classValue);
    if(charNameValue == ""){
        $(".charName").append(`<p class="text-center mt-2 fw-bold d-none fs-6"><i class="bi bi-exclamation-circle-fill text-primary"></i> Character's Name is a necesary field!</p>`);
        $(".charName p").slideDown(500).delay(800).slideUp(500);
        setTimeout(() => {$(".charName p").remove()}, 2100);
    }
    if(raceValue == ""){
        $(".charRace").append(`<p class="text-center mt-2 fw-bold d-none fs-6"><i class="bi bi-exclamation-circle-fill text-primary"></i> Race is a necesary field!</p>`);
        $(".charRace p").slideDown(500).delay(800).slideUp(500);
        setTimeout(() => {$(".charRace p").remove()}, 2100);
    }else{
        raceSelect(raceValue , subRaceValue);
    }
    if(classValue == ""){
        $(".class").append(`<p class="text-center mt-2 fw-bold d-none fs-6"><i class="bi bi-exclamation-circle-fill text-primary"></i> Class is a necesary field!</p>`);
        $(".class p").slideDown(500).delay(800).slideUp(500);
        setTimeout(() => {$(".class p").remove()}, 2100);
    }else{
        classSelect(classValue , subClassValue);
    }
    if(backgroundValue == ""){
        $(".background").append(`<p class="text-center mt-2 fw-bold d-none fs-6"><i class="bi bi-exclamation-circle-fill text-primary"></i> Background is a necesary field!</p>`);
        $(".background p").slideDown(500).delay(800).slideUp(500);
        setTimeout(() => {$(".background p").remove()}, 2100);
    }else{
        backgroundSelect(backgroundValue);
    }
    if(charNameValue == "" || raceValue == "" || classValue == "" || backgroundValue == ""){
        error = true;
    }else{
        error = false;
    }
    if (error){return;}
    setTimeout(() => {
        const hero = new character(
            charNameValue,
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
        if (customerPlace >= 0){
            customer.characters = charCol;
            let userList = JSON.parse(localStorage["users"]).userList;
            userList[customerPlace] = customer;
            localStorage["users"]= JSON.stringify({userList: userList});
        }
        chrLstCrtr();
    },300);
    $("body").append(
        `
        <section id="genMsj" class="position-fixed top-0 start-0 w-100 h-100 p-4 overflow-auto modal__background--color modal--depth" style="display: none;">
            <article id="genCont"class="position-absolute top-50 start-50 translate-middle border border-2 py-3 m-auto bg-success card--border" style="width: 0px; height: 0px;">
                <h3 class="text-center fw-bold w-100 m-0 px-3" style="display: none;">Congratulations!</h3>
                <p class="text-center fw-bold w-100 m-0 px-3" style="display: none;">Your Character Has Been Created!</p>
            </article>
        </section>
        `
    );
    $("#genMsj").fadeIn("fast").delay(3600).fadeOut("fast");
    $("#genCont").animate({width:"300px"} , "slow").animate({height:"100px"} , "slow").delay(1100).animate({height:"0px"} , "slow").animate({width:"0px"} , "slow").hide(1);
    $("#genCont *").delay(800).show("normal").delay(1100).hide("normal");
    setTimeout(() => {$("body").children().last().remove();},4000);
});

$("#openCharModal").click(() => {$("#charModal").toggleClass("d-block d-none");});
$("#closeCharModal").click(() => {setTimeout(() => {$("#charModal").toggleClass("d-block d-none");},500);});
$("#openCharModal , #closeCharModal").click(() => {$("#charModalContent").animate({width:"toggle"} , "slow");});
function chrLstCrtr(){
    $("#charList").html(`<h3 class="text-center fw-bold w-100 m-0 p-0">Character List</h3>`);
    for (let char of charCol){
        $("#charList").append(
            `
            <div>
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
            </div>
            `
        );
    }
}

function stats(classChoice){
    let statValues = [];
    let statDesignation = ["STR" , "DEX" , "CON" , "INT" , "WIS" , "CHA"];
    do{
        die(4 , 6);
        hiLo(result);
        result.pop();
        let sum = 0;
        for (let i = 0 ; i < result.length ; i++){
            sum = sum + result[i];
        }
        statValues.push(sum);
    }while(statValues.length < 6);
    result = [];
    let highest = "";
    let higher = "";
    hiLo(statValues);
    if(classChoice != ""){
        $.getJSON(dndData , (datos) => {
            highest = datos.class[classChoice].quickBuild[0];
            higher = datos.class[classChoice].quickBuild[1];
        });
        setTimeout(() => {
            switch (highest){
                case "STR":
                    STR = STR + statValues[0];
                    statValues.shift();
                    break;
                case "DEX":
                    DEX = DEX + statValues[0];
                    statValues.shift();
                    break;
                case "CON":
                    CON = CON + statValues[0];
                    statValues.shift();
                    break;
                case "INT":
                    INT = INT + statValues[0];
                    statValues.shift();
                    break;
                case "WIS":
                    WIS = WIS + statValues[0];
                    statValues.shift();
                    break;
                case "CHA":
                    CHA = CHA + statValues[0];
                    statValues.shift();
                    break;
            }
            switch (higher){
                case "STR":
                    STR = STR + statValues[0];
                    statValues.shift();
                    break;
                case "DEX":
                    DEX = DEX + statValues[0];
                    statValues.shift();
                    break;
                case "CON":
                    CON = CON + statValues[0];
                    statValues.shift();
                    break;
                case "INT":
                    INT = INT + statValues[0];
                    statValues.shift();
                    break;
                case "WIS":
                    WIS = WIS + statValues[0];
                    statValues.shift();
                    break;
                case "CHA":
                    CHA = CHA + statValues[0];
                    statValues.shift();
                    break;
            }
            statDesignation.splice(statDesignation.indexOf(highest) , 1);
            statDesignation.splice(statDesignation.indexOf(higher) , 1);
            }, 100)
        setTimeout(() => {
            do{
                let randomIndex = Math.floor(Math.random() * statValues.length)
                switch (statDesignation[randomIndex]){
                    case "STR":
                        STR = STR + statValues[0];
                        statValues.shift();
                        statDesignation.splice(randomIndex , 1);
                        break;
                    case "DEX":
                        DEX = DEX + statValues[0];
                        statValues.shift();
                        statDesignation.splice(randomIndex , 1);
                        break;
                    case "CON":
                        CON = CON + statValues[0];
                        statValues.shift();
                        statDesignation.splice(randomIndex , 1);
                        break;
                    case "INT":
                        INT = INT + statValues[0];
                        statValues.shift();
                        statDesignation.splice(randomIndex , 1);
                        break;
                    case "WIS":
                        WIS = WIS + statValues[0];
                        statValues.shift();
                        statDesignation.splice(randomIndex , 1);
                        break;
                    case "CHA":
                        CHA = CHA + statValues[0];
                        statValues.shift();
                        statDesignation.splice(randomIndex , 1);
                        break;
                }
            }while(STR == 0 || DEX == 0 || CON == 0 || INT == 0 || WIS == 0 || CHA == 0);
        },150);
    }
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
    $.getJSON(dndData , (datos) => {
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
        raceSize = datos.race[raceChoice].size;
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
    $.getJSON(dndData , (datos) => {
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
        $.getJSON(dndData , (datos) => {
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

$("#race").ready(() =>{
    $.getJSON(dndData , (datos) => {
        for (let i = 0; i < datos.race.length ; i++){
            $("#race").append(`<option value="${[i]}">${datos.race[i].name}</option>`);
        }
    });
});

$("#class").ready(() => {
    $.getJSON(dndData , (datos) => {
        for (let i = 0; i < datos.class.length ; i++){
            $("#class").append(`<option value="${[i]}">${datos.class[i].name}</option>`);
        }
    });
});

$("#background").ready(() => {
    $.getJSON(dndData , (datos) => {
        for (let i = 0; i < datos.background.length ; i++){
            $("#background").append(`<option value="${[i]}">${datos.background[i].name}</option>`);
        }
    });
});

$("#race").change(() => {
    $("#subRace").html(`<option value=""></option>`);
    $.getJSON(dndData , (datos) => {
        if($("#race").val() != "" && datos.race[$("#race").val()].subrace.length != 0){
            for (let i = 0; i < datos.race[$("#race").val()].subrace.length ; i++){
                $("#subRace").append(`<option value="${[i]}">${datos.race[$("#race").val()].subrace[i].name}</option>`);
            }
            $(".subRace").slideDown(500);
        } else {
            $(".subRace").slideUp("slow");
        }
    });
});

$("#class").change(() => {
    $("#subClass").html(`<option value=""></option>`);
    $.getJSON(dndData , (datos) => {
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
});
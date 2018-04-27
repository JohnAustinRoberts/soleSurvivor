// ----------------------------------------------
// Game Javascript Code-
// Global Variables
let turnCount = 0;
let playerHealth = 100;
const maxHealth = 200;
let currentInventory = [];
let playerCurrentLocation = "Armory";
let survivorSpawnLocs = ["Bunker 3", "Bunker 4", "Bunker 5", "Bunker 6", "Bunker 7", "Bunker 8"];
let livingSurvivor = {};
let survivorLocation = "";
let companionPresent = false;
let playerWeapon = {};
let playerEquip = {};
let spawnAnimal = {};
let foundWeapon = {};
let foundEquip = {};
//---------------------------------------------------------------
//---------------------------------------------------------------


//---------------------------------------------------------------
//---------------------------------------------------------------
// Weapons and Equips-
//---------------------------------------------------------------
// constructor for weapons
var Weapon = function(name, damage, ammo) {
        this.name = name,
            this.damage = damage,
            this.ammo = ammo
    }
    //empty startingWeapons object
var startingWeapons = {};
//add our weapons to starting weapons
startingWeapons.pistol = new Weapon("9mm Pistol", 45, 10);
startingWeapons.shotgun = new Weapon("Shotgun", 70, 6);
startingWeapons.rifle = new Weapon("Hunting Rifle", 100, 4);
startingWeapons.knife = new Weapon("Hunting Knife", 40, 50);
startingWeapons.sword = new Weapon("Longsword", 90, 50);
startingWeapons.trident = new Weapon("Trident", 85, 50);
startingWeapons.kittenLauncher = new Weapon("Kitten Launcher", 0, 1);

//empty companionWeapons object
companionWeapons = {};
//add companion weapons
companionWeapons.tranqgun = new Weapon("Tranquilizer Gun", 0, 3);
companionWeapons.bat = new Weapon("Baseball Bat", 30, 50);
companionWeapons.shotgun = new Weapon("Shotgun", 70, 6);
companionWeapons.revolver = new Weapon(".357 Magnum", 95, 5);
//empty findableWeapons object
findableWeapons = {};
findableWeapons.machete = new Weapon("Machete", 50, 50);
findableWeapons.pistol = new Weapon("9mm Pistol", 45, 10);
findableWeapons.revolver = new Weapon(".357 Magnum", 95, 5);
findableWeapons.shotgun = new Weapon("Shotgun", 70, 6);
findableWeapons.rifle = new Weapon("Hunting Rifle", 100, 4);
findableWeapons.guitar = new Weapon("Acoustic Guitar", 10, 50);
//---------------------------------------------------------------
//equipment lists
//constructor for equipment
var Equip = function(name, use) {
    this.name = name,
        this.use = use
};
//empty object to hold starting equipment
startingEquipment = {};
//add starting equipment
startingEquipment.bandages = new Equip("Bandages", "Healing");
startingEquipment.smoke = new Equip("Smoke Grenade", "Diversion");
startingEquipment.hairspray = new Equip("Hairspray and Lighter", "Diversion");
startingEquipment.flash = new Equip("Flashbang Grenade", "Diversion");
startingEquipment.xxx = new Equip("XXX Magazine", "Junk");
//empty object to hold companion equip
companionEquips = {};
//add companion equipment
companionEquips.bandages = new Equip("Bandages", "Healing");
companionEquips.flash = new Equip("Flashbang", "Diversion");
companionEquips.kitten = new Equip("Kitten", "Diversion");
//empty object to hold findable equipment
findableEquipment = {};
//add findable equipment
findableEquipment.bandages = new Equip("Bandages", "Healing");
findableEquipment.xxx = new Equip("XXX Magazine", "Junk");
findableEquipment.smoke = new Equip("Smoke Grenade", "Diversion");
findableEquipment.kitten = new Equip("Kitten", "Diversion");
findableEquipment.coffee = new Equip("Ice cold coffee", "Healing");

function spawnStartingGear() {
    var startingWeaponIndex = Math.floor(Math.random() * 7);
    var startingEquipIndex = Math.floor(Math.random() * 5);

    function spawnWeapon(startingWeaponIndex) {
        switch (startingWeaponIndex) {
            case 0:
                playerWeapon = startingWeapons.pistol;
                console.log(playerWeapon);
                break;
            case 1:
                playerWeapon = startingWeapons.shotgun;
                console.log(playerWeapon);
                break;
            case 2:
                playerWeapon = startingWeapons.rifle;
                console.log(playerWeapon);
                break;
            case 3:
                playerWeapon = startingWeapons.knife;
                console.log(playerWeapon);
                break;
            case 4:
                playerWeapon = startingWeapons.sword;
                console.log(playerWeapon);
                break;
            case 5:
                playerWeapon = startingWeapons.trident;
                console.log(playerWeapon);
                break;
            case 6:
                playerWeapon = startingWeapons.kittenLauncher;
                console.log(playerWeapon);
                break;
        }
    }

    function spawnEquip(startingEquipIndex) {
        switch (startingEquipIndex) {
            case 0:
                playerEquip = startingEquip.bandages;
                console.log(playerEquip);
                break;
            case 1:
                playerEquip = startingEquip.smoke;
                console.log(playerEquip);
                break;
            case 2:
                playerEquip = startingEquip.hairspray;
                console.log(playerEquip);
                break;
            case 3:
                playerEquip = startingEquip.flash;
                console.log(playerEquip);
                break;
            case 4:
                playerEquip = startingEquip.xxx;
                console.log(playerEquip);
        }
    }
    spawnWeapon();
    spawnEquip();
}
spawnStartingGear();


//---------------------------------------------------------------
//---------------------------------------------------------------
//ENEMIES!!!
//constructor for animals
var Animal = function(name, hp, damage) {
        this.name = name,
            this.hp = hp,
            this.damage = damage
    }
    // Enemies By Area
    // Zone 1 Enemies
zone1Enemies = {};
zone1Enemies.moose = new Animal("Stag Moose", 250, 20);
zone1Enemies.wolf = new Animal("Dire Wolf", 70, 45);
zone1Enemies.koala = new Animal("Meth Addled Koala", 25, 200);
zone1Enemies.tas = new Animal("Tasmanian Tiger", 80, 50);

function zone1Spawn() {
    //generate starting weapon and equipment
    var spawnAnimalIndex = Math.floor(Math.random() * 4);
    console.log(spawnAnimalIndex);
    switch (spawnAnimalIndex) {
        case 0:
            spawnAnimal = zone1Enemies.moose;
            console.log(spawnAnimal);
            break;
        case 1:
            spawnAnimal = zone1Enemies.wolf;
            console.log(spawnAnimal);
            break;
        case 2:
            spawnAnimal = zone1Enemies.koala;
            console.log(spawnAnimal);
            break;
        case 3:
            spawnAnimal = zone1Enemies.tas;
            console.log(spawnAnimal);
            break;
    };
};
// Zone 2 Enemies
zone2Enemies = {};
zone2Enemies.fox = new Animal("Dark Flying Fox", 10, 5);
zone2Enemies.bear = new Animal("Short Faced Bear", 400, 50);
zone2Enemies.auroch = new Animal("Auroch", 250, 45);
zone2Enemies.sabertooth = new Animal("Sabertooth Tiger", 200, 75);
zone2Enemies.moa = new Animal("New Zealand Moa", 50, 10);

function zone2Spawn() {
    //generate starting weapon and equipment
    var spawnAnimalIndex = Math.floor(Math.random() * 5);
    console.log(spawnAnimalIndex);
    switch (spawnAnimalIndex) {
        case 0:
            spawnAnimal = zone2Enemies.fox;
            console.log(spawnAnimal);
            break;
        case 1:
            spawnAnimal = zone2Enemies.bear;
            console.log(spawnAnimal);
            break;
        case 2:
            spawnAnimal = zone2Enemies.auroch;
            console.log(spawnAnimal);
            break;
        case 3:
            spawnAnimal = zone2Enemies.sabertooth;
            console.log(spawnAnimal);
            break;
        case 4:
            spawnAnimal = zone2Spawn.moa;
            console.log(spawnAnimal);
            break;
    };
};
// Zone 3 Enemies
zone3Enemies = {};
zone3Enemies.croc = new Animal("American Crocodile", 150, 70);
zone3Enemies.panther = new Animal("Florida Panther", 100, 40);
zone3Enemies.heron = new Animal("Great Heron", 50, 10);
zone3Enemies.megalania = new Animal("Megalania", 200, 90);

function zone3Spawn() {
    //generate starting weapon and equipment
    var spawnAnimalIndex = Math.floor(Math.random() * 4);
    console.log(spawnAnimalIndex);
    switch (spawnAnimalIndex) {
        case 0:
            spawnAnimal = zone3Enemies.croc;
            console.log(spawnAnimal);
            break;
        case 1:
            spawnAnimal = zone3Enemies.panther;
            console.log(spawnAnimal);
            break;
        case 2:
            spawnAnimal = zone3Enemies.heron;
            console.log(spawnAnimal);
            break;
        case 3:
            spawnAnimal = zone3Enemies.megalania;
            console.log(spawnAnimal);
            break;
    };
};
// Zone 4 Enemies
zone4Enemies = {};
zone4Enemies.andean = new Animal("Andean Mountain Cat", 60, 25);
zone4Enemies.eagle = new Animal("Haast's Eagle", 200, 90);
zone4Enemies.boa = new Animal("Round Island Burrowing Boa", 80, 30);
zone4Enemies.scimitar = new Animal("Scimitar Cat", 70, 30);
zone4Enemies.ibex = new Animal("Pyrenean Ibex", 30, 15);

function zone4Spawn() {
    //generate starting weapon and equipment
    var spawnAnimalIndex = Math.floor(Math.random() * 5);
    console.log(spawnAnimalIndex);
    switch (spawnAnimalIndex) {
        case 0:
            spawnAnimal = zone4Enemies.andean;
            console.log(spawnAnimal);
            break;
        case 1:
            spawnAnimal = zone4Enemies.eagle;
            console.log(spawnAnimal);
            break;
        case 2:
            spawnAnimal = zone4Enemies.boa;
            console.log(spawnAnimal);
            break;
        case 3:
            spawnAnimal = zone4Enemies.scimitar;
            console.log(spawnAnimal);
            break;
        case 4:
            spawnAnimal = zone4Spawn.ibex;
            console.log(spawnAnimal);
            break;
    };
};



//--------------------------------------------------------------
//--------------------------------------------------------------
// Survivors 
var Survivor = function(name, profession, dmgMod, hp, loot, backstory) {
    this.name = name,
    this.profession = profession,
    this.dmgMod = dmgMod,
    this.hp = hp,
    this.loot = loot,
    this.backstory = backstory
}

allSurvivors = {};
allSurvivors.steve = new Survivor("Steve Mason", "Dentist", 0.5, 90, "Photo of the Mason family", "Steve Mason is a dentist on an excursion with his family. He saw them ripped apart by crocodiles.")
allSurvivors.justin = new Survivor("Justin Dangleford", "Animal Cloning Technician", ".75", 90, "DNA Sample", "Justin is a low level technician working at an unpaid internship right out of Rutgers Univerisy.")
allSurvivors.hank = new Survivor("Hank Nguyen", "Animal Cloning Technician");
allSurvivors.paul = new Survivor("Paul Lancaster", "Sanitation Worker");
allSurvivors.stan = new Survivor("Stanley Hubric", "Sanitation Worker");
allSurvivors.george = new Survivor("George Jackson", "Zoologist");
allSurvivors.lauren = new Survivor("Lauren Foreman", "Vetrinarian");
allSurvivors.alison = new Survivor("Alison Beckberts", "Lead Environmental Developer");
allSurvivors.kate = new Survivor("Kate Otto", "Assistant Environmental Developer");
allSurvivors.jeff = new Survivor("Jeffery Beetman", "Construction Worker");
allSurvivors.shiven = new Survivor("Shiven Patel", "Game Guide");
allSurvivors.debby = new Survivor("Debby McAllister", "Bartender");
allSurvivors.becky = new Survivor("Becky Killian", "Armory Technician");
allSurvivors.josephine = new Survivor("Josephine Bellacera");
allSurvivors.emily = new Survivor("Emily Finnegan", "Game Guide");
allSurvivors.liam = new Survivor("Liam Kennilworth", "Chef");
allSurvivors.chen = new Survivor("Chen Li", "Head of Logistics");
allSurvivors.astrid = new Survivor("Astrid Scott", "Administrative Assistant");
allSurvivors.ivan = new Survivor("Ivan Kostvich", "Chef");
allSurvivors.maat = new Survivor("Maat Yokunai", "Head of Animal Cloning");

function spawnSurvivor() {
    var survivorIndex = Math.floor(Math.random() * 20);
    switch(survivorIndex) {
        case 0:
            livingSurvivor = allSurvivors.steve;
            console.log(livingSurvivor);
            break;
        case 1:
            livingSurvivor = allSurvivors.justin;
            console.log(livingSurvivor);
            break;
        case 2:
            livingSurvivor = allSurvivors.hank;
            console.log(livingSurvivor);
            break;
        case 3:
            livingSurvivor = allSurvivors.paul;
            console.log(livingSurvivor);
            break;
        case 4:
            livingSurvivor = allSurvivors.stan;
            console.log(livingSurvivor);
            break;
        case 5:
            livingSurvivor = allSurvivors.george;
            console.log(livingSurvivor);
            break;
        case 6:
            livingSurvivor = allSurvivors.lauren;
            console.log(livingSurvivor);
            break;
        case 7:
            livingSurvivor = allSurvivors.alison;
            console.log(livingSurvivor);
            break;
        case 8:
            livingSurvivor = allSurvivors.kate;
            console.log(livingSurvivor);
            break;
        case 9:
            livingSurvivor = allSurvivors.jeff;
            console.log(livingSurvivor);
            break;
        case 10:
            livingSurvivor = allSurvivors.shiven;
            console.log(livingSurvivor);
            break;
        case 11:
            livingSurvivor = allSurvivors.debby;
            console.log(livingSurvivor);
            break;
        case 12:
            livingSurvivor = allSurvivors.becky;
            console.log(livingSurvivor);
            break;
        case 13:
            livingSurvivor = allSurvivors.josephine;
            console.log(livingSurvivor);
            break;
        case 14:
            livingSurvivor = allSurvivors.emily;
            console.log(livingSurvivor);
            break;
        case 15:
            livingSurvivor = allSurvivors.liam;
            console.log(livingSurvivor);
            break;
        case 16:
            livingSurvivor = allSurvivors.chen;
            console.log(livingSurvivor);
            break;
        case 17:
            livingSurvivor = allSurvivors.astrid;
            console.log(livingSurvivor);
            break;
        case 18:
            livingSurvivor = allSurvivors.ivan;
            console.log(livingSurvivor);
            break;
        case 19:
            livingSurvivor = allSurvivors.maat;
            console.log(livingSurvivor);
            break;
    }
}


function addTurn() {
    turnCount = turncount + 1;
    console.log("Turn Count: " + turnCount);
}

function heal() {
    addturn();
    if (companionPresent === true) {
        if (playerEquip === "Bandages") {
            playerHealth = playerHealth + 25;
            console.log("Bandages used");
            playerEquip = "";
        } else if (companion.equip === "Bandages") {
            playerHealth = playerHealth + 25;
            console.log("Bandages used");
            companion.equip = "";
        } else {
            console.log("No Bandages Availiable");
        }
    } else {
        if (playerEquip === "Bandages") {
            playerHealth = playerHealth + 25;
            console.log("Bandages used");
            playerEquip = "";
        } else {
            console.log("No Bandages Availiable");
        }
    }
    if (playerHealth > 200) {
        playerHealth = 200;
    }
    console.log("Player Health: " + playerHealth);
}

// Button Functions
// function search() {
//     addTurn();
//     foundWeapon = findableWeapons[Math.floor(Math.random() * findableWeapons.length)];
//     foundEquip = findableWeapons[Math.floor(Math.random() * foundEquip.length)];
//     console.log("Found Weapon: " + foundWeapon);
//     console.log("Found Item: " + foundEquip);
//     //empty action bar and add buttons 'swap weapons', 'swap equip', and 'keep current loadout'
// }

// function swapWeapons() {
//     floorspace = playerWeapon;
//     playerWeapon = foundWeapon;
//     foundWeapon = floorspace;
//     console.log("Weapons swapped. " + playerWeapon + " has been equipped. The " + foundWeapon + " has been placed on the floor.")
// }

// function swapEquip() {
//     playerEquip = foundEquip;
//     console.log("Equipment swapped. " + playerEquip + " has been equipped.")
// }

// function attack() {
//     //Enemies by area-
//     // "Deer", "Pig", "Squirrel", "Koala"
//     // "Jaguar", "Bear", "Gorilla"
//     // "Saltwater Crocodile", "Titanoboa", "Water Mocassin"
//     // "Mountain Lion", "Haast's Eagle", "Wolf Pack"
//     // Player Weapons-
//     // "Longsword", "Hunting Rifle - 2 Shots", "Net Gun - 1 Shot", "Kitten Launcher - 1 Shot"
//     // "Machete", "Shotgun - 1 Shot", ".357 Magnum - 3 Shots", "Bow and Arrow - 5 Shots"
//     // Companion Weapons - 
//     //  


// function useEquip() {

// }

// function moveOn() {

// }

// //companion functions 
// function companionUseEquip() {

// }

// function companionAttack() {

// }
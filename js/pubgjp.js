//set variable for what turn ithe game is currently on
var turnCount = 0;

//create an array of all equipment items
// allEquip = ["Steak Knife", "Machete", "Double-Barrel Shotgun", "9mm Pistol (5 Bullets)", "Scoped Bolt-Action Hunting Rifle (3 Bullets)", "Wrist Thick Stick", ".357 Magnum (6 Bullets)", "Pitchfork","Camera","Wrench","Tire Iron","Sabrecat Tiger Tooth Spear","Coffee Pot", "Frisbee", "Tennis Racquet","Golf Club","Baseball Bat","Torch","K-Bar Knife","Bear Mace", "Sharpened Goat Horn", "Pocket Knife", "Lighter-and-Hairspray Flamethrower", "Child's Toy Lightsaber", "3-Foot-Long Lead Pipe", "Elephant Gun (1 Bullet)", "Butter Knife", "Broom", "Frying Pan", "Bandages", "Aspirin", "Morphine", "Night Vision Goggles", "Half-Full Bottle of Whiskey", "Warm Beer", "Airline Pack of Peanuts", "Three Week Old Stale Pretzel", "Stun Gun", "Kitten", "Beef Jerky", "$200", "Flashlight", "Two Bottles of Water", "Acoustic Guitar", "Riot Shield"]
//limit equip to a few possibilities
allEquip = ["Machete", "Double-Barrel Shotgun", "Bear Mace"]

//------------------------------------------------------------------------------------------
//******************************************************************************************
//************************************ Player.js *******************************************
//******************************************************************************************
//------------------------------------------------------------------------------------------
// playerWeapon = ["Machete", "Trident", "Longsword", "Battle-axe", "Net Gun", "Double-Barrel Shotgun", "9mm Pistol (5 Bullets)", "Scoped Bolt-Action Hunting Rifle (6 Bullets)", "Wrist Thick Stick", ".357 Magnum (6 Bullets)", "Baseball Bat", "Bear Mace", "3-Foot-Long Lead Pipe", "Elephant Gun (2 Bullet)", "Crossbow (10 bolts)", "Steel Mace", "Steel Flail", "Pump-Action Shotgun", "Katana", "Kitten Launcher (Kittens Not Included)"]
playerWeapon = ["Machete", "Double-Barrel Shotgun", "Bear Mace"];
// playerEquip = ["Bandages", "Aspirin", "Morphine", "Night Vision Goggles", "Granola Bar", "Fresh Pretzel", "Stun Gun", "Beef Jerky", "$200", "Flashlight", "Two Bottles of Water", "Riot Shield", "Radio", "Smoke Grenade", "Flashbang Grenade", "Claymore/Landmine", "Remote Detonated C4", "Duct Tape", "Scented Candle", "Nothing"];
playerEquip = ["Bandages", "Smoke Grenade", "Claymore"];


//health variables
maxHealth = 100;
currentHealth = 100;

function setHealth() {
    document.getElementById("health").innerHTML = "Current Health: " + currentHealth;
};
setHealth();
//inventory variables
currentInventory = [];

//generate starting weapon
function startingWeapon() {
    generatedWeapon = Math.floor(Math.random() * playerWeapon.length);
    console.log("generated weapon index: " + generatedWeapon);
    startingWeapon = playerWeapon[generatedWeapon];
    console.log("Starting Weapon: " + startingWeapon);
    currentInventory.push(startingWeapon);
};
startingWeapon();
//generate starting equipment
function startingEquip() {
    generatedEquip = Math.floor(Math.random() * playerEquip.length);
    console.log("generated equip index: " + generatedEquip);
    startingEquip = playerEquip[generatedEquip];
    console.log("Starting equip: " + startingEquip);
    currentInventory.push(startingEquip);
};
startingEquip();
console.log("Current Inventory: " + currentInventory);




// playerEquip.splice(generatedWeapon, 1);
// console.log(playerEquip);

//set spwan location equal to a randomaly generated integer between 1 and 11. The numerical value is tied to a specific location which will be correlated to a specific enemy set and spawn chance.
var playerCurrentLocation = "";
//have the player's drop randomized?
function spawnPlayer() {
    var playerSpawnLocation = Math.floor(Math.random() * 11) + 1;
    if (playerSpawnLocation === 1) {
        playerCurrentLocation = "Bunker 1";
    } else if (playerSpawnLocation === 2) {
        playerCurrentLocation = "Bunker 2";
    } else if (playerSpawnLocation === 3) {
        playerCurrentLocation = "Bunker 3";
    } else if (playerSpawnLocation === 4) {
        playerCurrentLocation = "Bunker 4";
    } else if (playerSpawnLocation === 5) {
        playerCurrentLocation = "Bunker 5";
    } else if (playerSpawnLocation === 6) {
        playerCurrentLocation = "Bunker 6";
    } else if (playerSpawnLocation === 7) {
        playerCurrentLocation = "Bunker 7";
    } else if (playerSpawnLocation === 8) {
        playerCurrentLocation = "Bunker 8";
    } else if (playerSpawnLocation === 9) {
        playerCurrentLocation = "Bunker 9";
    } else if (playerSpawnLocation === 10) {
        playerCurrentLocation = "Southeastern Park";
    } else if (playerSpawnLocation === 11) {
        playerCurrentLocation = "VIP Park";
    }
};
spawnPlayer();
console.log("playerCurrentLocation: " + playerCurrentLocation);
//------------------------------------------------------------------------------------------
//******************************************************************************************
//************************************ survivors.js ****************************************
//******************************************************************************************
//------------------------------------------------------------------------------------------


//survivor variables
//generate number of survivors
//set to 1 for now for testing purposes
numberOfSurvivors = 1;
//randomly generate multiple survivors
//numberOfSurvivors = 0;
//numberOfSurvivors = Math.floor(Math.random() * 15) +1;
console.log("There are " + numberOfSurvivors + " survivors.")

//generate which survivors lived
allSurvivors = ["Steve Mason", "Justin Dirigible", "Hank Nguyen", "Paul Lancaster", "Stanley Hubric", "George Jackson", "Lauren Foreman", "Alison Beckberts", "Kate Otto", "Morgan Beetman", "Rudy Blanchett", "Debbie McAllister", "Becky Killian", "Josephine Bellacera", "Emily Finnagan"];
//possible survivor weapons
// companionWeapon = ["Steak Knife", "Machete", "Double-Barrel Shotgun", "9mm Pistol (5 Bullets)", "Scoped Bolt-Action Hunting Rifle (3 Bullets)", "Wrist Thick Stick", ".357 Magnum (6 Bullets)", "Pitchfork","Camera","Wrench","Tire Iron","Sabrecat Tiger Tooth Spear","Coffee Pot", "Frisbee", "Tennis Racquet","Golf Club","Baseball Bat","Torch","K-Bar Knife","Bear Mace", "Sharpened Goat Horn", "Pocket Knife", "Lighter-and-Hairspray Flamethrower", "Child's Toy Lightsaber", "3-Foot-Long Lead Pipe", "Elephant Gun (1 Bullet)", "Crossbow (10 bolts)", "Nothing"];
companionWeapon = ["Machete", "Double-Barrel Shotgun", "Bear Mace"];
// //possible survivor equipment
// companionEquip = ["Butter Knife", "Broom", "Frying Pan", "Bandages", "Aspirin", "Morphine", "Night Vision Goggles", "Half-Full Bottle of Whiskey", "Warm Beer", "Airline Pack of Peanuts", "Three Week Old Stale Pretzel", "Stun Gun", "Kitten", "Beef Jerky", "$200", "Flashlight", "Two Bottles of Water", "Smoke Grenade", "Acoustic Guitar", "Riot Shield", "Nothing"];
companionEquip = ["Kitten", "Acoustic Guitar", "Half-Full Bottle of Whiskey"];
//lists to store survivors and their location
livingSurvivors = [];
survivorLocations = [];

for (i = 0; i < numberOfSurvivors; i++) {
    //randomly grab a survivor
    var survivor = allSurvivors[Math.floor(Math.random() * allSurvivors.length)];
    //determine the index of the survivor and remove it to avoid duplicates
    var index = allSurvivors.indexOf(survivor);
    if (index > -1) {
        allSurvivors.splice(index, 1);
    }
    //set that survivor to a random location
    var survivorLocation = Math.floor(Math.random() * 11) + 1;
    if (survivorLocation === 1) {
        survivorStart = "Bunker 1";
        survivorLocations.push(survivorLocation);
    } else if (survivorLocation === 2) {
        survivorStart = "Bunker 2";
        survivorLocations.push(survivorLocation);
    } else if (survivorLocation === 3) {
        survivorStart = "Bunker 3";
        survivorLocations.push(survivorLocation);
    } else if (survivorLocation === 4) {
        survivorStart = "Bunker 4";
        survivorLocations.push(survivorLocation);
    } else if (survivorLocation === 5) {
        survivorStart = "Bunker 5";
        survivorLocations.push(survivorLocation);
    } else if (survivorLocation === 6) {
        survivorStart = "Bunker 6";
        survivorLocations.push(survivorLocation);
    } else if (survivorLocation === 7) {
        survivorStart = "Bunker 7";
        survivorLocations.push(survivorLocation);
    } else if (survivorLocation === 8) {
        survivorStart = "Bunker 8";
        survivorLocations.push(survivorLocation);
    } else if (survivorLocation === 9) {
        survivorStart = "Bunker 9";
        survivorLocations.push(survivorLocation);
    } else if (survivorLocation === 10) {
        survivorStart = "Southeastern Park";
        survivorLocations.push(survivorLocation);
    } else if (survivorLocation === 11) {
        survivorStart = "VIP Park";
        survivorLocations.push(survivorLocation);
    }
    console.log(survivor + " placed in " + survivorStart);
    //randomize survivor equipment
    survivorWeapon = companionWeapon[Math.floor(Math.random() * companionWeapon.length)];
    survivorEquip = companionEquip[Math.floor(Math.random() * companionEquip.length)];
    //create character object for survivor
    let character = {
            name: survivor,
            location: survivorStart,
            survivorEquip1: survivorWeapon,
            survivorEquip2: survivorEquip
        }
        //add character to living survivors list
    livingSurvivors.push(character);
    //check to see that each character is generating properly
    console.log(character);
}
//See all survivor locations
console.log("survivor locations: " + survivorLocations);
//see all survivors
console.log("all living survivors: " + livingSurvivors);

//load equip to HUD
function setInventory() {
    document.getElementById("playerInventory").innerHTML = "Current Inventory: " + "<br>" + "Current Weapon: " + startingWeapon + "<br>" + "Current Item: " + startingEquip + "<hr>" + "Companion Inventory: " + "<br>" + "Current Weapon: " + livingSurvivors[0].survivorEquip1 + "<br>" + "Current Item: " + livingSurvivors[0].survivorEquip2;;
};
setInventory();

//------------------------------------------------------------------------------------------
//******************************************************************************************
//************************************ enemy.js ********************************************
//******************************************************************************************
//------------------------------------------------------------------------------------------


//enemy variables
// var enemies = ["Black Panther", "Jaguar", "Spotted Leopard", "White Tiger", "Bengal Tiger", "Adult Female Lioness", "Adult Male Lion", "Velociraptor", "Honey Badger", "Tyrannosaurus Rex", "Pterodactyl", "Sabretooth Tiger", "Two Alligators", "Water Moccassins", "Saltwater Crocodile", "Rabid Flamingoes", "Pack of Wolves", "Silverback Gorilla", "Hippopotamus", "Crazed Emu", "Chimpanzee with a Flare Gun", "Small Pale Child", "Africanized Honey Bees", "Balvarine", "Nothing"];
var enemies = ["Bengal Tiger", "Saltwater Crocodile", "Silverback Gorilla"];
//determine enemy spawn chance based on location:

//set player location equal to a integer. The numerical value of the location will be correlated to a specific enemy set and population chance.
var spawnBool = false;
//have the player's drop randomized?
var spawnLocation = Math.floor(Math.random() * 11) + 1;

//set spawn chance according to location
if (playerCurrentLocation == "Bunker 1") {
    turnCount = turnCount + 1;
    console.log("Turn Count: " + turnCount);
    if (turnCount < 2) {
        spawnBool = false;
        console.log("spawnBool set to false");
    } else {
        spawnBool = true;
        console.log("spawnBool set to true");
    };
    if (spawnBool == false) {
        console.log("No enemy spawned.")
    } else {
        generatedEnemy = Math.floor(Math.random() * enemies.length);
        console.log("generatedEnemy: " + generatedEnemy);
        currentEnemy = enemies[generatedEnemy];
        console.log("Current Enemy: " + currentEnemy);
    }
} else if (playerCurrentLocation == "Bunker 2") {
    turnCount = turnCount + 1;
    console.log("Turn Count: " + turnCount);
    if (turnCount < 2) {
        spawnBool = false;
        console.log("spawnBool set to false");
    } else {
        spawnBool = true;
        console.log("spawnBool set to true");
    };
    if (spawnBool == false) {
        console.log("No enemy spawned.")
    } else {
        generatedEnemy = Math.floor(Math.random() * enemies.length);
        console.log("generatedEnemy: " + generatedEnemy);
        currentEnemy = enemies[generatedEnemy];
        console.log("Current Enemy: " + currentEnemy);
    }
} else if (playerCurrentLocation == "Bunker 3") {
    turnCount = turnCount + 1;
    console.log("Turn Count: " + turnCount);
    if (turnCount < 2) {
        spawnBool = false;
        console.log("spawnBool set to false");
    } else {
        spawnBool = true;
        console.log("spawnBool set to true");
    };
    if (spawnBool == false) {
        console.log("No enemy spawned.")
    } else if (spawnBool == true) {
        generatedEnemy = Math.floor(Math.random() * enemies.length);
        console.log("generatedEnemy: " + generatedEnemy);
        currentEnemy = enemies[generatedEnemy];
        console.log("Current Enemy: " + currentEnemy);
    }
} else if (playerCurrentLocation == "Bunker 4") {
    turnCount = turnCount + 1;
    console.log("Turn Count: " + turnCount);
    if (turnCount < 2) {
        spawnBool = false;
        console.log("spawnBool set to false");
    } else {
        spawnBool = true;
        console.log("spawnBool set to true");
    };
    if (spawnBool == false) {
        console.log("No enemy spawned.")
    } else {
        generatedEnemy = Math.floor(Math.random() * enemies.length);
        console.log("generatedEnemy: " + generatedEnemy);
        currentEnemy = enemies[generatedEnemy];
        console.log("Current Enemy: " + currentEnemy);
    }
} else if (playerCurrentLocation == "Bunker 5") {
    turnCount = turnCount + 1;
    console.log("Turn Count: " + turnCount);
    if (turnCount < 2) {
        spawnBool = false;
        console.log("spawnBool set to false");
    } else {
        spawnBool = true;
        console.log("spawnBool set to true");
    };
    if (spawnBool == false) {
        console.log("No enemy spawned.")
    } else {
        generatedEnemy = Math.floor(Math.random() * enemies.length);
        console.log("generatedEnemy: " + generatedEnemy);
        currentEnemy = enemies[generatedEnemy];
        console.log("Current Enemy: " + currentEnemy);
    }
} else if (playerCurrentLocation == "Bunker 6") {
    turnCount = turnCount + 1;
    console.log("Turn Count: " + turnCount);
    if (turnCount < 2) {
        spawnBool = false;
        console.log("spawnBool set to false");
    } else {
        spawnBool = true;
        console.log("spawnBool set to true");
    };
    if (spawnBool == false) {
        console.log("No enemy spawned.")
    } else {
        generatedEnemy = Math.floor(Math.random() * enemies.length);
        console.log("generatedEnemy: " + generatedEnemy);
        currentEnemy = enemies[generatedEnemy];
        console.log("Current Enemy: " + currentEnemy);
    }
} else if (playerCurrentLocation == "Bunker 7") {
    turnCount = turnCount + 1;
    console.log("Turn Count: " + turnCount);
    if (turnCount < 2) {
        spawnBool = false;
        console.log("spawnBool set to false");
    } else {
        spawnBool = true;
        console.log("spawnBool set to true");
    };
    if (spawnBool == false) {
        console.log("No enemy spawned.")
    } else {
        generatedEnemy = Math.floor(Math.random() * enemies.length);
        console.log("generatedEnemy: " + generatedEnemy);
        currentEnemy = enemies[generatedEnemy];
        console.log("Current Enemy: " + currentEnemy);
    }
} else if (playerCurrentLocation == "Bunker 8") {
    turnCount = turnCount + 1;
    console.log("Turn Count: " + turnCount);
    if (turnCount < 2) {
        spawnBool = false;
        console.log("spawnBool set to false");
    } else {
        spawnBool = true;
        console.log("spawnBool set to true");
    };
    if (spawnBool == false) {
        console.log("No enemy spawned.")
    } else {
        generatedEnemy = Math.floor(Math.random() * enemies.length);
        console.log("generatedEnemy: " + generatedEnemy);
        currentEnemy = enemies[generatedEnemy];
        console.log("Current Enemy: " + currentEnemy);
    }
} else if (playerCurrentLocation == "Bunker 9") {
    turnCount = turnCount + 1;
    console.log("Turn Count: " + turnCount);
    if (turnCount < 2) {
        spawnBool = false;
        console.log("spawnBool set to false");
    } else {
        spawnBool = true;
        console.log("spawnBool set to true");
    };
    if (spawnBool == false) {
        console.log("No enemy spawned.")
    } else {
        generatedEnemy = Math.floor(Math.random() * enemies.length);
        console.log("generatedEnemy: " + generatedEnemy);
        currentEnemy = enemies[generatedEnemy];
        console.log("Current Enemy: " + currentEnemy);
    }
} else if (playerCurrentLocation == "Southeastern Park") {
    turnCount = turnCount + 1;
    console.log("Turn Count: " + turnCount);
    if (turnCount < 2) {
        spawnBool = false;
        console.log("spawnBool set to false");
    } else {
        spawnBool = true;
        console.log("spawnBool set to true");
    };
    if (spawnBool == false) {
        console.log("No enemy spawned.")
    } else {
        generatedEnemy = Math.floor(Math.random() * enemies.length);
        console.log("generatedEnemy: " + generatedEnemy);
        currentEnemy = enemies[generatedEnemy];
        console.log("Current Enemy: " + currentEnemy);
    }
} else if (playerCurrentLocation == "VIP Park") {
    turnCount = turnCount + 1;
    console.log("Turn Count: " + turnCount);
    if (turnCount < 2) {
        spawnBool = false;
        console.log("spawnBool set to false");
    } else {
        spawnBool = true;
        console.log("spawnBool set to true");
    };
    if (spawnBool == false) {
        console.log("No enemy spawned.")
    } else {
        generatedEnemy = Math.floor(Math.random() * enemies.length);
        console.log("generatedEnemy: " + generatedEnemy);
        currentEnemy = enemies[generatedEnemy];
        console.log("Current Enemy: " + currentEnemy);
    }
}


function addTurn() {
    turnCount = turnCount + 1;
    console.log(turnCount);
    countCheck();
}

function countCheck() {
    if (turnCount > 3) {
        generatedEnemy = Math.floor(Math.random() * enemies.length);
        console.log("generatedEnemy: " + generatedEnemy);
        currentEnemy = enemies[generatedEnemy];
        console.log("Current Enemy: " + currentEnemy);
    }
}
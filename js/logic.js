var player = {
	name: "Lt. Pat Jenkins",
	hp: 150,
	dmgMod: 1,
	location: "Armory",
	weapon: {},
	equip: {},
	inventory: [],
}

let pageLocation = 'landing';
let turnCount = 0;
let livingSurvivor = {};
let companionPresent = false;
let enemy = {};
let weaponOnGround = {};
let equipOnGround = {};
let droppedWeapon = {};
let droppedEquip = {};
let areaSearched = false;
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//Game Functions
function addTurn() {
	$("#game-stats").empty();
	turnCount = turnCount + 1;
	console.log("Turn Count: " + turnCount);
	$("#game-stats").html("<h2>Turn Count: " + turnCount + "</h2>")
}
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
// Weapons and Equipment
var Weapon = function (name, damage, ammo) {
	this.name = name,
	this.damage = damage,
	this.ammo = ammo
}
//empty startingWeapons object
var startingWeapons = [];
//add our weapons to starting weapons
startingWeapons.push(new Weapon("9mm Pistol", 45, 10));
startingWeapons.push(new Weapon("Shotgun", 70, 6));
startingWeapons.push(new Weapon("Hunting Rifle", 100, 4));
startingWeapons.push(new Weapon("Hunting Knife", 40, 50));
startingWeapons.push(new Weapon("Longsword", 90, 50));
startingWeapons.push(new Weapon("Trident", 85, 50));
startingWeapons.push(new Weapon("Kitten Launcher", 0, 1));
//empty companionWeapons object
companionWeapons = [];
//add companion weapons
companionWeapons.push(new Weapon("Tranquilizer Gun", 0, 3));
companionWeapons.push(new Weapon("Baseball Bat", 30, 50));
companionWeapons.push(new Weapon("Shotgun", 70, 6));
companionWeapons.push(new Weapon(".357 Magnum", 95, 5));
//empty findableWeapons object
findableWeapons = [];
findableWeapons.push(new Weapon("Machete", 50, 50));
findableWeapons.push(new Weapon("9mm Pistol", 45, 10));
findableWeapons.push(new Weapon(".357 Magnum", 95, 5));
findableWeapons.push(new Weapon("Shotgun", 70, 6));
findableWeapons.push(new Weapon("Hunting Rifle", 100, 4));
findableWeapons.push(new Weapon("Acoustic Guitar", 10, 50));
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//equipment lists
//constructor for equipment
var Equip = function (name, use) {
	this.name = name,
	this.use = use
};
//empty object to hold starting equipment
startingEquipment = [];
//add starting equipment
startingEquipment.push(new Equip("Bandages", "Healing"));
startingEquipment.push(new Equip("Smoke Grenade", "Diversion"));
startingEquipment.push(new Equip("Hairspray and Lighter", "Diversion"));
startingEquipment.push(new Equip("Flashbang Grenade", "Diversion"));
startingEquipment.push(new Equip("XXX Magazine", "Junk"));
//empty object to hold companion equip
companionEquips = [];
//add companion equipment
companionEquips.push(new Equip("Bandages", "Healing"));
companionEquips.push(new Equip("Flashbang", "Diversion"));
companionEquips.push(new Equip("Kitten", "Diversion"));
//empty object to hold findable equipment
findableEquipment = [];
//add findable equipment
findableEquipment.push(new Equip("Bandages", "Healing"));
findableEquipment.push(new Equip("XXX Magazine", "Junk"));
findableEquipment.push(new Equip("Smoke Grenade", "Diversion"));
findableEquipment.push(new Equip("Kitten", "Diversion"));
findableEquipment.push(new Equip("Ice cold coffee", "Healing"));

function spawnStartingGear() {
	var startingWeaponIndex = Math.floor(Math.random() * 7);
	var startingEquipIndex = Math.floor(Math.random() * 5);
	player.weapon = startingWeapons[startingEquipIndex];
	player.equip = startingEquipment[startingEquipIndex];
}
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//ENEMIES!!!
//constructor for animals
var Animal = function (name, hp, damage) {
	this.name = name,
	this.hp = hp,
	this.damage = damage
}
// spawn function by area
function spawn() {
	spawnChance = turnCount + Math.floor(Math.random() * 50);
	if (spawnChance > 30) {
		if (player.location == "Road" || "Bunker 1" || "Game Trail" || "Bunker 2"){
			zone1Spawn();
		} else if (player.location == "South Forest" || "Bunker 3" || "North Forest" || "Bunker 4") {
			zone2Spawn();
		} else if (player.location == "South Swamp" || "Bunker 5" || "North Swamp" || "Bunker 6") {
			zone3Spawn();
		} else if (player.location == "South Mountain" || "Bunker 7" || "North Mountain" || "Bunker 8" || "Cliffside" || "Bunker 9") {
			zone4Spawn();
		} 
	} else {
		console.log("No Enemy Spawned");
	}
}
// Enemies By Area
// Zone 1 Enemies
zone1Enemies = [];
zone1Enemies.push(new Animal("Stag Moose", 250, 20));
zone1Enemies.push(new Animal("Dire Wolf", 70, 45));
zone1Enemies.push(new Animal("Meth Addled Koala", 25, 200));
zone1Enemies.push(new Animal("Tasmanian Tiger", 80, 50));
function zone1Spawn() {
	//generate starting weapon and equipment
	var spawnAnimalIndex = Math.floor(Math.random() * 4);
	console.log(spawnAnimalIndex);
	enemy = zone1Enemies[spawnAnimalIndex];
	console.log(enemy);
	$("#game-output").html('A ' + enemy.name + ' is stalking around the doorway to the ' + player.location);
};
// Zone 2 Enemies
zone2Enemies = [];
zone2Enemies.push(new Animal("Dark Flying Fox", 10, 5));
zone2Enemies.push(new Animal("Short Faced Bear", 400, 50));
zone2Enemies.push(new Animal("Auroch", 250, 45));
zone2Enemies.push(new Animal("Sabertooth Tiger", 200, 75));
zone2Enemies.push(new Animal("New Zealand Moa", 50, 10));
function zone2Spawn() {
	//generate starting weapon and equipment
	var spawnAnimalIndex = Math.floor(Math.random() * 5);
	console.log(spawnAnimalIndex);
	enemy = zone2Enemies[spawnAnimalIndex];
	console.log(enemy);
	$("#game-output").html('A ' + enemy.name + ' is stalking around the doorway to the ' + player.location);
};
// Zone 3 Enemies
zone3Enemies = [];
zone3Enemies.push(new Animal("American Crocodile", 150, 70));
zone3Enemies.push(new Animal("Florida Panther", 100, 40));
zone3Enemies.push(new Animal("Great Heron", 50, 10));
zone3Enemies.push(new Animal("Megalania", 200, 90));
function zone3Spawn() {
	//generate starting weapon and equipment
	var spawnAnimalIndex = Math.floor(Math.random() * 4);
	console.log(spawnAnimalIndex);
	enemy = zone3Enemies[spawnAnimalIndex];
	console.log(enemy);
	$("#game-output").html('A ' + enemy.name + ' is stalking around the doorway to the ' + player.location);d
};
// Zone 4 Enemies
zone4Enemies = [];
zone4Enemies.push(new Animal("Andean Mountain Cat", 60, 25));
zone4Enemies.push(new Animal("Haast's Eagle", 200, 90));
zone4Enemies.push(new Animal("Round Island Burrowing Boa", 80, 30));
zone4Enemies.push(new Animal("Scimitar Cat", 70, 30));
zone4Enemies.push(new Animal("Pyrenean Ibex", 30, 15));
function zone4Spawn() {
	//generate starting weapon and equipment
	var spawnAnimalIndex = Math.floor(Math.random() * 5);
	console.log(spawnAnimalIndex);
	enemy = zone4Enemies[spawnAnimalIndex];
	console.log(enemy);
	$("#game-output").html('A ' + enemy.name + ' is stalking around the doorway to the ' + player.location);
};
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
// Survivors 
var Survivor = function (name, profession, dmgMod, hp, loot, backstory) {
	this.name = name,
	this.profession = profession,
	this.dmgMod = dmgMod,
	this.hp = hp,
	this.loot = loot,
	this.backstory = backstory
}
allSurvivors = [];
allSurvivors.push(new Survivor("Steve Mason", "Dentist", 0.5, 90, "Photo of the Mason family", "Steve Mason is a dentist on an excursion with his family. He saw them ripped apart by crocodiles."))
allSurvivors.push(new Survivor("Justin Dangleford", "Animal Cloning Technician", ".75", 90, "DNA Sample", "Justin is a low level technician working at an unpaid internship right out of Rutgers Univerisy."))
allSurvivors.push(new Survivor("Hank Nguyen", "Animal Cloning Technician"));
allSurvivors.push(new Survivor("Paul Lancaster", "Sanitation Worker"));
allSurvivors.push(new Survivor("Stanley Hubric", "Sanitation Worker"));
allSurvivors.push(new Survivor("George Jackson", "Zoologist"));
allSurvivors.push(new Survivor("Lauren Foreman", "Vetrinarian"));
allSurvivors.push(new Survivor("Alison Beckberts", "Lead Environmental Developer"));
allSurvivors.push(new Survivor("Kate Otto", "Assistant Environmental Developer"));
allSurvivors.push(new Survivor("Jeffery Beetman", "Construction Worker"));
allSurvivors.push(new Survivor("Shiven Patel", "Game Guide"));
allSurvivors.push(new Survivor("Debby McAllister", "Bartender"));
allSurvivors.push(new Survivor("Becky Killian", "Armory Technician"));
allSurvivors.push(new Survivor("Josephine Bellacera"));
allSurvivors.push(new Survivor("Emily Finnegan", "Game Guide"));
allSurvivors.push(new Survivor("Liam Kennilworth", "Chef"));
allSurvivors.push(new Survivor("Chen Li", "Head of Logistics"));
allSurvivors.push(new Survivor("Astrid Scott", "Administrative Assistant"));
allSurvivors.push(new Survivor("Ivan Kostvich", "Chef"));
allSurvivors.push(new Survivor("Maat Yokunai", "Head of Animal Cloning"));
function spawnSurvivor() {
	var survivorIndex = Math.floor(Math.random() * 20);
	livingSurvivor = allSurvivors[survivorIndex];
	console.log(livingSurvivor);
}
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
function heal() {
	addTurn();
	if (companionPresent === true) {
		if (playerEquip.name === "Bandages") {
			playerHealth = playerHealth + 25;
			console.log("Bandages used");
			playerEquip = "Nothing";
		} else if (companion.equip.name === "Bandages") {
			playerHealth = playerHealth + 25;
			console.log("Bandages used");
			companion.equip = "";
		} else {
			console.log("No Bandages Availiable");
		}
	} else {
		if (playerEquip.name === "Bandages") {
			playerHealth = playerHealth + 25;
			console.log("Bandages used");
			playerEquip = {name: "None"};

		} else {
			console.log("No Bandages Availiable");
		}
	}
	if (playerHealth > 200) {
		playerHealth = 200;
	}
	$("#game-player-stats").empty();
	$("#game-player-stats").html('<p>Player Health: ' + playerHealth + '</p> <p>Weapon: ' + playerWeapon.name + '</p> <p>Equip: ' + playerEquip.name + '</p>')
	console.log("Player Health: " + playerHealth);
}
//--------------------------------------------------------------
//--------------------------------------------------------------
//Search Area Functionality
function search () {
	if (areaSearched == false){
		addTurn();
		weaponOnGround = findableWeapons[Math.floor(Math.random() * findableWeapons.length)];
		equipOnGround = findableEquipment[Math.floor(Math.random() * findableEquipment.length)];
		console.log("Found Weapon: " + weaponOnGround.name);
		console.log("Found Item: " + equipOnGround.name);
		$("#game-image").empty();
		$("#game-image").html("<div id='search-window'><div id='foundWeaponPic'>" + weaponOnGround.name + "</div><div id='foundEquipPic'>" + equipOnGround.name +"</div><div id='swapWeaponButton'><button id='swapWeaps' onclick='swapWeap()'>Swap Weapons</button></div><div id='swapEquipButton'><button id='swapEquips' onclick='swapEquip()'>Swap Equipment</button></div></div>");
		areaSearched = true;
	} else {
		console.log("Area Already Searched.");
		$("#game-image").empty();
		$("#game-image").html("<div id='search-window'><div id='foundWeaponPic'>" + weaponOnGround.name + "</div><div id='foundEquipPic'>" + equipOnGround.name + "</div><div id='swapWeaponButton'><button id='swapWeaps' onclick='swapWeap()'>Swap Weapons</button></div><div id='swapEquipButton'><button id='swapEquips' onclick='swapEquip()'>Swap Equipment</button></div><div><h2>Area Already Searched</h2></div></div>");

	}
    //empty action bar and add buttons 'swap weapons', 'swap equip', and 'keep current loadout'
}
function swapWeap() {
	droppedWeapon = player.weapon;
	player.weapon = weaponOnGround;
	weaponOnGround = droppedWeapon;
	$("#game-player-stats").empty();
	$("#game-player-stats").html('<p>Player Health: ' + player.hp + '</p><p>Weapon: ' + player.weapon.name + '</p><p>Equip: ' + player.equip.name + '</p>')
	$("#game-image").empty();
	$("#game-image").html("<div id='search-window'><div id='foundWeaponPic'>" + weaponOnGround.name + "</div><div id='foundEquipPic'>" + equipOnGround.name + "</div><div id='swapWeaponButton'><button id='swapWeaps' onclick='swapWeap()'>Swap Weapons</button></div><div id='swapEquipButton'><button id='swapEquips' onclick='swapEquip()'>Swap Equipment</button></div></div>")
	
}
function swapEquip() {
	droppedEquip = player.equip;
	player.equip = equipOnGround;
	equipOnGround = droppedEquip;
	$("#game-player-stats").empty();
	$("#game-player-stats").html('<p>Player Health: ' + player.hp + '</p><p>Weapon: ' + player.weapon.name + '</p><p>Equip: ' + player.equip.name + '</p>')
	$("#game-image").empty();
	$("#game-image").html("<div id='search-window'><div id='foundWeaponPic'>" + weaponOnGround.name + "</div><div id='foundEquipPic'>" + equipOnGround.name + "</div><div id='swapWeaponButton'><button id='swapWeaps' onclick='swapWeap()'>Swap Weapons</button></div><div id='swapEquipButton'><button id='swapEquips' onclick='swapEquip()'>Swap Equipment</button></div></div>")
}
//--------------------------------------------------------------
//--------------------------------------------------------------

function attack() {
	console.log(player.hp);
	console.log(enemy.hp)
	enemy.hp = enemy.hp - (player.weapon.damage * player.dmgMod);
	player.hp = player.hp - enemy.damage;
	console.log(player.hp);
	console.log(enemy.hp);
	if (player.hp < 0) {
		console.log("You Died.")
	} else if (enemy.hp < 0) {
		console.log("Victory!")
	} else {
		console.log("The battle continues, both combatants bloodied.")
	}
}

function next() {
	if (player.location == "Armory") {
		addTurn();
		player.location = "Road";
		areaSearched = false;
		$("#game-image").empty();
		$("#game-image").html("<img src='./images/gameTrail.jpg' style='height: 250px; width: 600px;'>");
		$("#game-output").empty();
		$("#game-output").html("As you leave the safety of the Armory, you begin to walk down a dirt road leading to the first bunker. The trees stretch high up above you, forming a thick canopy, allowing few shadows to reach all the way to the ground. The deafening silence is only punctuated by your footsteps on the gravel roadway. It takes nearly a half an hour, but you finally see the entrance to the first bunker ahead.");
		armoryCircle.style.fill = '#333333';
		roadCircle.style.fill = 'red';
		spawn();
	} else if (player.location == "Road") {
		addTurn();
		player.location = "Bunker 1";
		areaSearched = false;
		$("#game-image").empty();
		$("#game-image").html("<img src='./images/bunker_1.jpg' style='height: 250px; width: 600px;'>");
		$("#game-output").empty();
		$("#game-output").html("After following the gravel road, you come to the first bunker door. What could be waiting inside?");
		roadCircle.style.fill = '#333333';
		b1Circle.style.fill = 'red';
		spawn();
	} else if (player.location == "Bunker 1") {
		addTurn();
		player.location = "Game Trail";
		areaSearched = false;
		$("#game-image").empty();
		$("#game-image").html("<img src='./images/gameTrail.jpg' style='height: 250px; width: 600px;'>");
		$("#game-output").empty();
		$("#game-output").html("Leaving the safety of the bunker, you head north, following a game trail that runs directly toward the second bunker.");
		spawn();
		b1Circle.style.fill = "#333333";
		trailCircle.style.fill = "red";
	} else if (player.location == "Game Trail"){
		addTurn();
		player.location = "Bunker 2";
		areaSearched = false;
		$("#game-image").empty();
		$("#game-image").html("<img src='./images/bunker_2.jpg' style='height: 250px; width: 600px;'>")
		$("#game-output").empty();
		$("#game-output").html("After following the game trail, you come to the second bunker door. What could be waiting inside?");
		spawn();
		trailCircle.style.fill = "#333333";
		b2Circle.style.fill = "red";
	} else if (player.location == "Bunker 2") {
		addTurn();
		player.location = "Southern Forest";
		areaSearched = false;
		$("#game-image").empty();
		$("#game-image").html("<img src='./images/forest1.jpeg' style='height: 250px; width: 600px;'>")
		$("#game-output").empty();
		$("#game-output").html("You leave the second bunker and head into the southern forest.");
		spawn();
		b2Circle.style.fill = "#333333";
		sForestCircle.style.fill = "red";
	} else if (player.location == "Southern Forest") {
		addTurn();
		player.location = "Bunker 3";
		areaSearched = false;
		$("#game-image").empty();
		$("#game-image").html("<img src='./images/bunker_3.jpg' style='height: 250px; width: 600px;'>")
		$("#game-output").empty();
		$("#game-output").html("You have found the third bunker!!");
		spawn();
		sForestCircle.style.fill = "#333333";
		b3Circle.style.fill = "red";
	} else if (player.location == "Bunker 3") {
		addTurn();
		player.location = "Northern Forest";
		areaSearched = false;
		$("#game-image").empty();
		$("#game-image").html("<img src='./images/forest2.jpeg' style='height: 250px; width: 600px;'>")
		$("#game-output").empty();
		$("#game-output").html("The scary nothern forest looms before you. The sun begins to slide towards the horizon.");
		spawn();
		b3Circle.style.fill = "#333333";
		nForestCircle.style.fill = "red";
	} else if (player.location == "Northern Forest") {
		addTurn();
		player.location = "Bunker 4";
		areaSearched = false;
		$("#game-image").empty();
		$("#game-image").html("<img src='./images/bunker_4.jpeg' style='height: 250px; width: 600px;'>")
		$("#game-output").empty();
		$("#game-output").html("The fourth bunker's door hangs open ominously.");
		spawn();
		nForestCircle.style.fill = "#333333";
		b4Circle.style.fill = "red";
	} else if (player.location == "Bunker 4") {
		addTurn();
		player.location = "Southern Swamp";
		areaSearched = false;
		$("#game-image").empty();
		$("#game-image").html("<img src='./images/swamp1.jpg' style='height: 250px; width: 600px;'>")
		$("#game-output").empty();
		$("#game-output").html("A disgusting, rancid swamp lies before you. You can't tell the floating logs from the gators.");
		spawn();
		b4Circle.style.fill = "#333333";
		sSwampCircle.style.fill = "red";
	} else if (player.location == "Southern Swamp") {
		addTurn();
		player.location = "Bunker 5";
		areaSearched = false;
		$("#game-image").empty();
		$("#game-image").html("<img src='./images/bunker_5.jpg' style='height: 250px; width: 600px;'>")
		$("#game-output").empty();
		$("#game-output").html("you find the sunken entrance to the fifth bunker.");
		spawn();
		sSwampCircle.style.fill = "#333333";
		b5Circle.style.fill = "red";
	} else if (player.location == "Bunker 5") {
		addTurn();
		player.location = "Northern Swamp";
		areaSearched = false;
		$("#game-image").empty();
		$("#game-image").html("<img src='./images/swamp2.jpg' style='height: 250px; width: 600px;'>")
		$("#game-output").empty();
		$("#game-output").html("You wade back into the muck...");
		spawn();
		b5Circle.style.fill = "#333333";
		nSwampCircle.style.fill = "red";
	} else if (player.location == "Northern Swamp") {
		addTurn();
		player.location = "Bunker 6";
		areaSearched = false;
		$("#game-image").empty();
		$("#game-image").html("<img src='./images/bunker_6.jpg' style='height: 250px; width: 600px;'>")
		$("#game-output").empty();
		$("#game-output").html("You wade back into the muck...");
		spawn();
		nSwampCircle.style.fill = "#333333";
		b6Circle.style.fill = "red";
	} else if (player.location == "Bunker 6") {
		addTurn();
		player.location = "Southern Mountain";
		areaSearched = false;
		$("#game-image").empty();
		$("#game-image").html("<img src='./images/sMount.jpg' style='height: 250px; width: 600px;'>")
		$("#game-output").empty();
		$("#game-output").html("You wade back into the muck...");
		spawn();
		b6Circle.style.fill = "#333333";
		sMountCircle.style.fill = "red";
	} else if (player.location == "Southern Mountain") {
		addTurn();
		player.location = "Bunker 7";
		areaSearched = false;
		$("#game-image").empty();
		$("#game-image").html("<img src='./images/bunker_7.jpg' style='height: 250px; width: 600px;'>")
		$("#game-output").empty();
		$("#game-output").html("You wade back into the muck...");
		spawn();
		sMountCircle.style.fill = "#333333";
		b7Circle.style.fill = "red";
	} else if (player.location == "Bunker 7") {
		addTurn();
		player.location = "Cliffside";
		areaSearched = false;
		$("#game-image").empty();
		$("#game-image").html("<img src='./images/cliff.jpg' style='height: 250px; width: 600px;'>")
		$("#game-output").empty();
		$("#game-output").html("You wade back into the muck...");
		spawn();
		b7Circle.style.fill = "#333333";
		cliffCircle.style.fill = "red";
	} else if (player.location == "Cliffside") {
		addTurn();
		player.location = "Bunker 8";
		areaSearched = false;
		$("#game-image").empty();
		$("#game-image").html("<img src='./images/bunker_8(cliffside).jpg' style='height: 250px; width: 600px;'>")
		$("#game-output").empty();
		$("#game-output").html("You wade back into the muck...");
		spawn();
		cliffCircle.style.fill = "#333333";
		b8Circle.style.fill = "red";
	} else if (player.location == "Bunker 8") {
		addTurn();
		player.location = "Northern Mountain";
		areaSearched = false;
		$("#game-image").empty();
		$("#game-image").html("<img src='./images/nMount.jpg' style='height: 250px; width: 600px;'>")
		$("#game-output").empty();
		$("#game-output").html("You wade back into the muck...");
		spawn();
		b8Circle.style.fill = "#333333";
		nMountCircle.style.fill = "red";
	} else if (player.location == "Northern Mountain") {
		addTurn();
		player.location = "Bunker 9";
		areaSearched = false;
		$("#game-image").empty();
		$("#game-image").html("<img src='./images/bunker_9.jpg' style='height: 250px; width: 600px;'>")
		$("#game-output").empty();
		$("#game-output").html("You wade back into the muck...");
		spawn();
		nMountCircle.style.fill = "#333333";
		b9Circle.style.fill = "red";
	} else if (player.location == "Bunker 9") {
		addTurn();
		player.location = "Dock";
		areaSearched = false;
		$("#game-image").empty();
		$("#game-image").html("<img src='./images/dock.jpg' style='height: 250px; width: 600px;'>")
		$("#game-output").empty();
		$("#game-output").html("You wade back into the muck...");
		spawn();
		b9Circle.style.fill = "#333333";
		dockCircle.style.fill = "red";
	} else if (player.location == "Dock") {
		$("#app-wrapper").empty();
		$("#app-wrapper").html("<div id='winScreen'><h1>You've won the game!! Congratulations!</h1></div>");
	} 
}

function mapForward() {
	if(player.location == "Road") {
		armoryCircle.style.fill = '#333333';
		armoryText.style.color = "#26ad6a";
		roadCircle.style.fill = 'red';
		roadText.style.color = 'red;'
	} else if (player.location == "Bunker 1") {
		roadCircle.style.fill = '#333333';
		roadText.style.color = "#26ad6a";
		b1Circle.style.fill = 'red';
		biText.style.color = 'red';
	}
}
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
//HTML LOAD FUNCTIONS
function loadBriefing(){
	$('#app-wrapper').empty();
	$('#app-wrapper').html('<div id="briefing-wrapper"><div id="briefing-title">Mission Briefing</div><div id="briefing-text"><p>As you look up at the large, glass rotating doors of the BELO Corporation tower, you read the letter you received a few days ago.</p><p>	Greetings Lt.Pat Jenkins,<br>	We here at the BELO Corporation would like to thank you for you tenacity in going through our rigorous screening process. We realize and understand that most positions would not require six interviews(two of which required polygraph tests), two physicals, a pyschological evaluation, an in -depth drug screening, and twelve personal references who were each individually interviewed. However, we stand by our thorough screening process to ensure that we employ only the best, most qualified personnel. With that being stated, I am happy to announce that your application for the role of On - Site Security Officer at BELO Corporation has been approved.We would like to begin your on - boarding process as soon as possible; to that end, please report to our headquarters in Miami, Florida to meet with me on September 8, 1972 at 9:00am. It is recommended that you bring a suitcase packed with everything you will need for a two week deployment.We are very excited to bring someone with your background onboard as an asset to our team, and I look forward with meeting with you.</p><p>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Head of Recruitment,<br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Mr. Lucius Monroe</p></div><div id="briefing-button"><i id="prev" class="fa fa-backward" onclick="prevBrief()"></i><div id="briefing-index">1</div><i id="next" class="fa fa-forward" onclick="nextBrief()"></i></div></div>');
	pageLocation = 'briefing-1';
}

function nextBrief () {
	$('#briefing-text').empty();
	if (pageLocation === 'briefing-1') {
		$('#briefing-text').html("You take a deep breath and then walk into the tower. After taking the elevator to the 34th floor, you walk down the hallway and enter a large office and see a young man sitting behind a large oak desk. He is in his late twenties, and is dressed in a sharp blue suit; His piercing green eyes shine behind black rimmed glasses, and his clean cut looks match his almost monotone voice. 'Good Morning, Lt.Jenkins.I have been looking forward to meeting you. Today I will be walking you through the full responsibilities of your position. Please have a seat.' He motions for you to sit in one of the highback chairs lined with black leather. 'You have been hired to tour our new Island Reserve compound, assess any possible security risks to visitors or the creatures contained on said compound. We have hired two game guides who will lead you on your excursion through the park. From here you'll be taken to the docks to take a private ship with our mute captain. He's mute so he won't give away any secrets! hahaha!' You ponder for a moment before responding, 'Arent you afraid of him writing something down?' A wide grin splashes across Mr. Monroe's somber face. 'Well shit, we hadn't thought of that, we clearly need you more than we realized.'");
		$('#briefing-index').empty();
		$('#briefing-index').html('2');
		pageLocation = 'briefing-2';
	} else if (pageLocation === 'briefing-2') {
		$('#briefing-text').html("Several uniformed people hustle you down a long pier and down to a small ship. The mute captain holds up a hand in greeting, he seems rather friendly. His namebadge says 'Henry', and you wonder if that's his first or last name. Maybe it's both.. you lose yourself in a train of thought, but the sudden gurgling roar of the diesel engines snaps you back. You esve goodbye to Mr. Monroe on the dock as the small ship sails off. After 3 quiet days of sailing a small island appears on the Horizon. A wave of anticipation washes over you. As you near the island, you see several incredibly large birds circling the islands peak. As the ship slowly pulls into the dock, the captain is clearly irked that no one has come out to help you moor the boat.");
		$('#briefing-index').empty();
		$('#briefing-index').html('3');
		pageLocation = 'briefing-3';
	} else if (pageLocation === 'briefing-3') {
		$('#briefing-text').html('Map Placeholder');
		pageLocation = 'briefing-map';
		$('#briefing-index').empty();
		$('#briefing-index').html('4');
	} else if (pageLocation === 'briefing-map') {
		loadGame();
	}
}

function prevBrief() {
	$('#briefing-text').empty();
	if (pageLocation === 'briefing-2') {
		$('#app-wrapper').html('<div id="briefing-wrapper"><div id="briefing-title">Mission Briefing</div><div id="briefing-text"><p>As you look up at the large, glass rotating doors of the BELO Corporation tower, you read the letter you received a few days ago.</p><p>	Greetings Lt.Pat Jenkins,<br>	We here at the BELO Corporation would like to thank you for you tenacity in going through our rigorous screening process. We realize and understand that most positions would not require six interviews(two of which required polygraph tests), two physicals, a pyschological evaluation, an in -depth drug screening, and twelve personal references who were each individually interviewed. However, we stand by our thorough screening process to ensure that we employ only the best, most qualified personnel. With that being stated, I am happy to announce that your application for the role of On - Site Security Officer at BELO Corporation has been approved.We would like to begin your on - boarding process as soon as possible; to that end, please report to our headquarters in Miami, Florida to meet with me on September 8, 1972 at 9:00am. It is recommended that you bring a suitcase packed with everything you will need for a two week deployment.We are very excited to bring someone with your background onboard as an asset to our team, and I look forward with meeting with you.</p><p>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Head of Recruitment,<br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Mr. Lucius Monroe</p></div><div id="briefing-button"><div id="briefing-index"><i id="next" class="fa fa-forward" onclick="prevBrief()"></i>1</div><i id="next" class="fa fa-forward" onclick="nextBrief()"></i></div></div>');
		$('#briefing-index').empty();
		$('#briefing-index').html('1');
		pageLocation = 'briefing-1';
	} else if (pageLocation === 'briefing-3') {
		$('#briefing-text').html("You take a deep breath and then walk into the tower. After taking the elevator to the 34th floor, you walk down the hallway and enter a large office and see a young man sitting behind a large oak desk. He is in his late twenties, and is dressed in a sharp blue suit; His piercing green eyes shine behind black rimmed glasses, and his clean cut looks match his almost monotone voice. 'Good Morning, Lt.Jenkins.I have been looking forward to meeting you. Today I will be walking you through the full responsibilities of your position. Please have a seat.' He motions for you to sit in one of the highback chairs lined with black leather. 'You have been hired to tour our new Island Reserve compound, assess any possible security risks to visitors or the creatures contained on said compound. We have hired two game guides who will lead you on your excursion through the park. From here you'll be taken to the docks to take a private ship with our mute captain. He's mute so he won't give away any secrets! hahaha!' You ponder for a moment before responding, 'Arent you afraid of him writing something down?' A wide grin splashes across Mr. Monroe's somber face. 'Well shit, we hadn't thought of that, we clearly need you more than we realized.'");
		$('#briefing-index').empty();
		$('#briefing-index').html('2');
		pageLocation = 'briefing-2'
	} else if (pageLocation === 'briefing-map') {
		$('#briefing-text').html("Several uniformed people hustle you down a long pier and down to a small ship. The mute captain holds up a hand in greeting, he seems rather friendly. His namebadge says 'Henry', and you wonder if that's his first or last name. Maybe it's both.. you lose yourself in a train of thought, but the sudden gurgling roar of the diesel engines snaps you back. You esve goodbye to Mr. Monroe on the dock as the small ship sails off. After 3 quiet days of sailing a small island appears on the Horizon. A wave of anticipation washes over you. As you near the island, you see several incredibly large birds circling the islands peak. As the ship slowly pulls into the dock, the captain is clearly irked that no one has come out to help you moor the boat.");
		$('#briefing-index').empty();
		$('#briefing-index').html('3');
		pageLocation = 'briefing-3';
	}
}

function loadGame () {
	window.scrollTo(0,0);
	$('#app-wrapper').empty();
	spawnStartingGear();
	spawnSurvivor();
	$('#app-wrapper').html('<div id="game-wrapper"><div id="game-stats"><h2>Turn Count: ' + turnCount + '</h2></div><div id="game-player-stats"><p>Player Health: ' + player.hp + '</p><p>Weapon: ' + player.weapon.name + '</p><p>Equip: ' + player.equip.name + '</p><p>Location: ' + player.location + '</p></div><div id="game-companion-stats"><p>Survivor: ' + livingSurvivor.name + '</p><p>Location: ' + livingSurvivor.location + '</p></div><div id="logo"><h2>Sole Survivor</h2></div><div id="game-image"><img src="./images/armory.jpeg" style="height: 250px; width: 600px;"></div><div id="game-output">You arrive at the armory. The door lies swung open, and silence awaits you inside it\'s dark corridors. It\'s a pleasant sound after the ear shattering </div><div id="game-action-bar"><button style="width:100px;" id="attackButton" onclick="attack()"> Attack </button> <button style="width:100px;" id="healButton" onclick="heal()"> Heal </button><button style="width:100px;" id="searchButton" onclick="search()"> Search </button><button style="width:100px;" id="nextButton" onclick="next()"> Next </button></div><div id="game-map"><svg height="700" width="180"><text x="35" y="30" fill="#26ad6a" style="font-size: 24px; text-decoration: bold;"> CURRENT </text ><text x="30" y="50" fill="#26ad6a" style="font-size: 24px; text-decoration: bold;"> LOCATION </text><line x1="10" y1="55" x2="180" y2="55" style="stroke:#26ad6a;stroke-width:2" /><circle id="dockCircle" cx="25" cy="95" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="dockText" x="45" y="100" fill="#26ad6a">Dock</text><circle id="b9Circle" cx="25" cy="120" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="b9Text" x="45" y="125" fill="#26ad6a">Bunker 9</text><circle id="nMountCircle" cx="25" cy="145" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="nMountText" x="45" y="150" fill="#26ad6a">Northern Mountain</text><circle id="b8Circle" cx="25" cy="170" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="b8Text" x="45" y="175" fill="#26ad6a">Bunker 8</text><circle id="cliffCircle" cx="25" cy="195" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="cliffText" x="45" y="200" fill="#26ad6a">Cliffside Path</text><circle id="b7Circle" cx="25" cy="220" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="b7Text" x="45" y="225" fill="#26ad6a">Bunker 7</text><circle id="sMountCircle" cx="25" cy="245" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="sMountText" x="45" y="250" fill="#26ad6a">Southern Mountain</text><circle id="b6Circle" cx="25" cy="270" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="b6Text" x="45" y="275" fill="#26ad6a">Bunker 6</text><circle id="nSwampCircle" cx="25" cy="295" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="nSwampText" x="45" y="300" fill="#26ad6a">Northern Swamp</text><circle id="b5Circle" cx="25" cy="320" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="b5Tet" x="45" y="325" fill="#26ad6a">Bunker 5</text><circle id="sSwampCircle" cx="25" cy="345" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="sSwampText" x="45" y="350" fill="#26ad6a">Southern Swamp</text><circle id="b4Circle" cx="25" cy="370" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="b4Text" x="45" y="375" fill="#26ad6a">Bunker 4</text><circle id="nForestCircle" cx="25" cy="395" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="nForestText" x="45" y="400" fill="#26ad6a">Northern Forest</text><circle id="b3Circle" cx="25" cy="420" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="b3Text" x="45" y="425" fill="#26ad6a">Bunker 3</text><circle id="sForestCircle" cx="25" cy="445" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="sForestText" x="45" y="450" fill="#26ad6a">Southern Forest</text><circle id="b2Circle" cx="25" cy="470" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="b2Text" x="45" y="475" fill="#26ad6a">Bunker 2</text><circle id="trailCircle" cx="25" cy="495" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="trailText" x="45" y="500" fill="#26ad6a">Game Trail</text><circle id="b1Circle" cx="25" cy="520" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="b1Text" x="45" y="525" fill="#26ad6a">Bunker 1</text><circle id="roadCircle" cx="25" cy="545" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="roadText" x="45" y="550" fill="#26ad6a">Road</text><circle id="armoryCircle" cx="25" cy="570" r="8" stroke="#26ad6a" stroke-width="3" fill="red" /><text id="armoryText" x="45" y="575" fill="#26ad6a">Armory</text></svg></div></div>');
	$("#game-companion-stats").hide();	
}

//-------------------------------------------------------------------------------------
//                                  GAME BASICS     
//-------------------------------------------------------------------------------------
let pageLocation = 'landing';
let turnCount = 0;
let companionPresent = false;
let droppedWeapon = {};
let droppedEquip = {};

function addTurn() {
	$("#game-stats").empty();
	turnCount = turnCount + 1;
	console.log("Turn Count: " + turnCount);
	$("#game-stats").html("<h2>Turn Count: " + turnCount + "</h2>")
}

//-------------------------------------------------------------------------------------
//                                 PLAYER        
//-------------------------------------------------------------------------------------
//create an object to hold all of the player variables
var player = {
	name: "Lt. Pat Jenkins",
	hp: 150,
	dmgMod: 1,
	location: "Armory",
	weapon: {},
	equip: {},
	inventory: [],
}
//-------------------------------------------------------------------------------------
//                                 ENEMIES         
//-------------------------------------------------------------------------------------
//Create enemy objects in their respective zone lists-
//constructor to build Animals
var Animal = function (name, hp, damage, defeated) {
	this.name = name,
	this.hp = hp,
	this.damage = damage,
	this.defeated = defeated
}
//lists to hold the enemies by area
var zone1Enemies = [];
var zone2Enemies = [];
var zone3Enemies = [];
var zone4Enemies = [];
//plug in zone 1 enemies
zone1Enemies.push(new Animal("Stag Moose", 250, 20, false));
zone1Enemies.push(new Animal("Dire Wolf", 70, 45, false));
zone1Enemies.push(new Animal("Meth Addled Koala", 25, 200, false));
zone1Enemies.push(new Animal("Tasmanian Tiger", 80, 50, false));
//plug in zone 2 enemies
zone2Enemies.push(new Animal("Dark Flying Fox", 10, 5, false));
zone2Enemies.push(new Animal("Short Faced Bear", 400, 50, false));
zone2Enemies.push(new Animal("Auroch", 250, 45, false));
zone2Enemies.push(new Animal("Sabertooth Tiger", 200, 75, false));
zone2Enemies.push(new Animal("New Zealand Moa", 50, 10, false));
//plug in zone 3 enemies
zone3Enemies.push(new Animal("American Crocodile", 150, 70, false));
zone3Enemies.push(new Animal("Florida Panther", 100, 40, false));
zone3Enemies.push(new Animal("Great Heron", 50, 10, false));
zone3Enemies.push(new Animal("Megalania", 200, 90, false));
//plug in zone 4 enemies
zone4Enemies.push(new Animal("Andean Mountain Cat", 60, 25, false));
zone4Enemies.push(new Animal("Haast's Eagle", 200, 90, false));
zone4Enemies.push(new Animal("Round Island Burrowing Boa", 80, 30, false));
zone4Enemies.push(new Animal("Scimitar Cat", 70, 30, false));
zone4Enemies.push(new Animal("Pyrenean Ibex", 30, 15, false));

//-------------------------------------------------------------------------------------
//                         WEAPONS AND EQUIPMENT
//-------------------------------------------------------------------------------------
//Set up weapons and equipment
//constructor for weapon
var Weapon = function (name, damage, ammo) {
	this.name = name,
	this.damage = damage,
	this.ammo = ammo
};
//constructor for equipment
var Equip = function (name, use) {
	this.name = name,
	this.use = use
};
//lists to hold all weapons and equipment
startingWeapons = [];
findableWeapons = [];
companionWeapons = [];
startingEquipment = [];
findableEquipment = [];
companionEquipment = [];
//plug in weapons
//starting weapons
startingWeapons.push(new Weapon("9mm Pistol", 45, 10));
startingWeapons.push(new Weapon("Shotgun", 70, 6));
startingWeapons.push(new Weapon("Hunting Rifle", 100, 4));
startingWeapons.push(new Weapon("Hunting Knife", 40, 50));
startingWeapons.push(new Weapon("Longsword", 90, 50));
startingWeapons.push(new Weapon("Trident", 85, 50));
startingWeapons.push(new Weapon("Kitten Launcher", 0, 1));
//findable weapons
findableWeapons.push(new Weapon("Machete", 50, 50));
findableWeapons.push(new Weapon("9mm Pistol", 45, 10));
findableWeapons.push(new Weapon(".357 Magnum", 95, 5));
findableWeapons.push(new Weapon("Shotgun", 70, 6));
findableWeapons.push(new Weapon("Hunting Rifle", 100, 4));
findableWeapons.push(new Weapon("Acoustic Guitar", 10, 50));
//companion weapons
companionWeapons.push(new Weapon("Tranquilizer Gun", 0, 3));
companionWeapons.push(new Weapon("Baseball Bat", 30, 50));
companionWeapons.push(new Weapon("Shotgun", 70, 6));
companionWeapons.push(new Weapon(".357 Magnum", 95, 5));
//plug in equipment
//starting equip
startingEquipment.push(new Equip("Bandages", "Healing"));
startingEquipment.push(new Equip("Smoke Grenade", "Diversion"));
startingEquipment.push(new Equip("Hairspray and Lighter", "Diversion"));
startingEquipment.push(new Equip("Flashbang Grenade", "Diversion"));
startingEquipment.push(new Equip("XXX Magazine", "Junk"));
//findable equip
findableEquipment.push(new Equip("Bandages", "Healing"));
findableEquipment.push(new Equip("XXX Magazine", "Junk"));
findableEquipment.push(new Equip("Smoke Grenade", "Diversion"));
findableEquipment.push(new Equip("Kitten", "Diversion"));
findableEquipment.push(new Equip("Ice cold coffee", "Healing"));
//companion equip
companionEquipment.push(new Equip("Bandages", "Healing"));
companionEquipment.push(new Equip("Flashbang", "Diversion"));
companionEquipment.push(new Equip("Kitten", "Diversion"));

//-------------------------------------------------------------------------------------
//                              CREATE LOCATIONS
//---------------------------------------------------------------------------------------
// Location Setup
//constructor function for each location
var Location = function(name, enemy, compPresent, foundWeapon, foundEquip, searched) {
	this.name = name,
	this.enemy = enemy,
	this.compPresent = compPresent,
	this.foundWeapon = foundWeapon,
	this.foundEquip = foundEquip,
	this.searched = searched
}
//list to hold the locations
var locations = [];
//list of strings to plug in each location name
var locationStrings = ["Armory", "Bunker 1", "Road", "Game Trail", "Bunker 2", "South Forest", "Bunker 4","North Forest", "Bunker 5", "South Swamp", "Bunker 6", "North Swamp", "Bunker 7", "South Mountain", "Bunker 8", "Cliffside", "Bunker 9", "North Mountain", "Dock"];
//function to create the locations by running through the locationsStrings array
function createLocations() {
	for (i=0; i < locationStrings.length; i++) {
		locations.push(new Location(locationStrings[i], {name:"none", hp : 0, damage: 0}, false, {name:"weapon", damage: 0, ammo: 0}, {name:"equip", use: "use"}, false));
		var foundWeaponIndex = Math.floor(Math.random() * 6);
		var foundEquipIndex = Math.floor(Math.random() * 7);
		locations[i].foundWeapon = findableWeapons[foundWeaponIndex];
		locations[i].foundEquip = findableEquipment[foundEquipIndex];
		var spawnChance = Math.floor((Math.random() * 100) + 1);
		if (spawnChance > 50) {
			locations[i].enemyPresent = true;
			if(i<1) {
				console.log("No Enemy Spawned in First Area.");
			} else if (0 < i < 5) {
				spawnIndex = Math.floor(Math.random() * zone1Enemies.length);
				locations[i].enemy = zone1Enemies[spawnIndex];
				console.log("Zone 1 Enemy Spawned.");
			} else if (4 < i < 9) {
				spawnIndex = Math.floor(Math.random() * zone2Enemies.length);
				locations[i].enemy = zone2Enemies[spawnIndex];
				console.log("Zone 2 Enemy Spawned");
			} else if (8 < i < 14) {
				spawnIndex = Math.floor(Math.random() * zone3Enemies.length);
				locations[i].enemy = zone3Enemies[spawnIndex];
				console.log("Zone 3 Enemy Spawned");
			} else if (13 < i < 18) {
				spawnIndex = Math.floor(Math.random() * zone4Enemies.length);
				locations[i].enemy = zone4Enemies[spawnIndex];
				console.log("Zone 4 Enemy Spawned");
			} else if (i == 18) {
				console.log("No Enemy Spawned at the Dock.");
			}
		} else locations[i].enemyPresent = false;	
	}
};
createLocations();
//-------------------------------------------------------------------------------------
//                                SURVIVOR
//-------------------------------------------------------------------------------------
//Survivor Spawn 
//constructor function for survivor
var Survivor = function (name, firstName, lastName, profession, dmgMod, hp, loot, backstory, location, weapon, equip) {
	this.name = name,
	this.firstName = firstName,
	this.lastName = lastName,
	this.profession = profession,
	this.dmgMod = dmgMod,
	this.hp = hp,
	this.loot = loot,
	this.backstory = backstory,
	this.location = location,
	this.weapon = weapon,
	this.equip = equip
}
livingSurvivor = {};
//list to hold all survivors
allSurvivors = [];
//plug in survivors
allSurvivors.push(new Survivor("Steve Mason", "Steve", "Mason", "Dentist", 0.5, 90, "Photo of the Mason family", "Steve Mason is a dentist on an excursion with his family. He saw them ripped apart by crocodiles.", "Unknown"));
allSurvivors.push(new Survivor("Justin Dangleford", "Justin", "Dangleford", "Animal Cloning Technician", 0.75, 90, "DNA Sample", "Justin is a low level technician working at an unpaid internship right out of Rutgers Univerisy.", "Unknown"));
allSurvivors.push(new Survivor("Alison Beckberts", "Alison", "Beckett", "Environmental Scientist", 1.0, 100, "Key to my heart", "the best woman ever.", "Unknown"))
//added firstname lastname and broke shit

//function to place survivor in bunkers 2-8
function placeSurvivor() {
	//determine which location
	survivorLocation = Math.floor(Math.random() * 6);
	//determine which survivor
	whichSurvivor = Math.floor(Math.random() * allSurvivors.length);
	livingSurvivor = allSurvivors[whichSurvivor];
	//update both the location and livingSurvivor to reflect where the survivor is located
	switch (survivorLocation){
		case 0:
			locations[4].compPresent = true;
			livingSurvivor.location = "Bunker 2";
			break;
		case 1:
			locations[6].compPresent = true;
			livingSurvivor.location = "Bunker 3";
			break;
		case 2:
			locations[8].compPresent = true;
			livingSurvivor.location = "Bunker 4";
			break;
		case 3:
			locations[10].compPresent = true;
			livingSurvivor.location = "Bunker 5";
			break;
		case 4:
			locations[12].compPresent = true;
			livingSurvivor.location = "Bunker 6";;
			break;
		case 5:
			locations[14].compPresent = true;
			livingSurvivor.location = "Bunker 7";;
			break;
		case 6:
			locations[16].compPresent = true;
			livingSurvivor.location = "Bunker 8";;
			break;
	}
}
placeSurvivor();

//-------------------------------------------------------------------------------------
//                       ACTION BAR BUTTON FUNCTIONS
//-------------------------------------------------------------------------------------
//All the buttons- Heal, Search, Next, Previous, Attack, Flee, Equipment
//when enemy is present, only buttons availiable will be Heal, Attack, Flee, Equipment
//when no enemy is present, only Heal, Search, Next, and Previous will be availiable

function search() {
	if (currentLocation.searched == false){
		addTurn();
		weaponOnGround = currentLocation.foundWeapon;
		equipOnGround = currentLocation.foundEquip;
		console.log("Found Weapon: " + weaponOnGround.name);
		console.log("Found Item: " + equipOnGround.name);
		$("#game-image").empty();
		$("#game-image").html("<div id='search-window'><div id='foundItemText'>You found a " + currentLocation.foundWeapon.name + " and a " + currentLocation.foundEquip.name +"</div><div id='swapButtons'><button id='swapWeaps' onclick='swapWeap()'>Swap Weapons</button><button id='swapEquips' onclick='swapEquip()'>Swap Equipment</button></div></div>");
		currentLocation.searched = true;
	} else {
		console.log("Area Already Searched.");
		$("#game-image").empty();
		$("#game-image").html("<div id='search-window'><div id='foundWeaponPic'>You found a " + weaponOnGround.name + "</div><div id='foundEquipPic'> and a " + equipOnGround.name + ".</div><div id='swapWeaponButton'><button id='swapWeaps' onclick='swapWeap()'>Swap Weapons</button></div><div id='swapEquipButton'><button id='swapEquips' onclick='swapEquip()'>Swap Equipment</button></div><div><h2>Area Already Searched</h2></div></div>");
	}
}

function nextArea() {
	addTurn();
	$("#game-image").empty();
	$("#game-output").empty();
	switch (player.location){
		case 'Armory':
			loadRoad();
			break;
		case 'Road':
			loadB1();
			break;
	}
}

function loadB1() {
	player.location = "Bunker 1";
	currentLocation = locations[2];
	roadCircle.style.fill = '#333333';
	b1Circle.style.fill = 'red';
	if (currentLocation.enemy.name == "none") {
		$("#game-image").html("<img src='./images/bunker_1.jpg' style='height: 250px; width: 600px;'>");
		$("#game-output").html("After following the gravel road, you come to the first bunker door. Everything seems very quiet, the only sounds you can hear are your breathing and the pounding of your heart. The large metal door stands open in front of you, it's halls filled with inky darkness. What will you do?");
	}
}


//add a previous area button to go backwards, but only once we have everything done.
//function previousArea() {

//}
//---------------------------------------------------
//       COMBAT FUNCTIONS
//---------------------------------------------------

function heal() {
	addTurn();
	if (companionPresent === true) {
		if (player.equip.name === "Bandages") {
			playerHealth = playerHealth + 25;
			console.log("Bandages used");
			player.equip = {name: "nothing", use: "none"};
		} else if (livingSurvivor.equipment.name === "Bandages") {
			playerHealth = playerHealth + 25;
			console.log("Bandages used");
			livingSurvivor.equipment = {name: "nothing", use: "none"};
		} else {
			console.log("No Bandages Availiable");
		}
	} else {
		if (playerEquip.name === "Bandages") {
			playerHealth = playerHealth + 25;
			console.log("Bandages used");
			playerEquip = {};

		} else {
			console.log("No Bandages Availiable");
		}
	}
	if (playerHealth > 200) {
		playerHealth = 200;
	}
	$("#game-player-stats").empty();
	$("#game-player-stats").html('<p>Player Health: ' + player.hp + '</p> <p>Weapon: ' + player.weapon.name + '</p> <p>Equip: ' + player.equip.name + '</p>')
	console.log("Player Health: " + player.hp);
}



function attack() {

}

function flee () {

}

function useEquipment () {

}








//-------------------------------------------------------------------------------------
//                             HTML LOADING
//-------------------------------------------------------------------------------------
//                           MISSION BRIEFING
//-------------------------------------------------------------------------------------
function loadBriefing(){
	$('#app-wrapper').empty();
	$('#app-wrapper').html('<div id="briefing-wrapper"><div id="briefing-title">Mission Briefing</div><div id="briefing-text"><p style="margin-top:20px;">&nbsp &nbsp &nbsp &nbspAs you look up at the large, glass rotating doors of the BELO Corporation tower, you re-read the letter you received a few days ago:</p><p>	Greetings Lt. Pat Jenkins,<br><br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp We here at the BELO Corporation would like to thank you for you tenacity in going through our rigorous screening process. We realize and understand that most positions would not require six interviews(two of which required polygraph tests), two physicals, a pyschological evaluation, an in -depth drug screening, and twelve personal references who were each individually interviewed. However, we stand by our thorough screening process to ensure that we employ only the best, most qualified personnel.</p><p style="padding:0px;">&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp With that being stated, I am happy to announce that your application for the role of On - Site Security Officer at BELO Corporation has been approved.We would like to begin your on - boarding process as soon as possible; to that end, please report to our headquarters in Miami, Florida to meet with me on September 8, 1972 at 9:00am. It is recommended that you bring a suitcase packed with everything you will need for a two week deployment.We are very excited to bring someone with your background onboard as an asset to our team, and I look forward with meeting with you.</p><p>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Head of Recruitment,<br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Mr. Lucius Monroe</p></div><div id="briefing-button"><div id="briefing-index">1</div><i id="next" class="fa fa-forward" onclick="nextBrief()"></i></div></div>');
	pageLocation = 'briefing-1';
}

function nextBrief () {
	$('#briefing-text').empty();
	$('#briefing-index').empty();
	if (pageLocation === 'briefing-1') {
		$('#briefing-text').html('<p style="padding: 0px; margin-top:20px;">&nbsp &nbsp &nbsp &nbspYou take a deep breath and then walk into the tower. After taking the elevator to the 34th floor, you walk down the hallway and enter a large office and see a young man sitting behind a large oak desk. He is in his late twenties, and is dressed in a sharp blue suit; His piercing green eyes shine behind black rimmed glasses, and his clean cut looks match his almost monotone voice.</p><p style="padding: 0px;"> &nbsp &nbsp &nbsp &nbsp"Good Morning, Lt.Jenkins.I have been looking forward to meeting you. Today I will be walking you through the full responsibilities of your position. Please have a seat." He motions for you to sit in one of the highback chairs lined with black leather. "You have been hired to tour our new Island Reserve compound, assess any possible security risks to visitors or the creatures contained on said compound. We have hired two game guides who will lead you on your excursion through the park. From here you\'ll be taken to the our private docks to board our company vessel helmed by our mute captain. Patricia will see you to your escorts." He then calls out, "Patricia! Please take our newest employee down to Marcus, so he can send him on his way."</p><p style="padding: 0px;">&nbsp &nbsp &nbsp &nbsp After a few You are then led out of the room by a young woman, who takes you down several flights of stairs before leading you into a room which has a large pier and a few men walking around in tan uniforms.</p> <p>');
		$('#briefing-index').html('2');
		pageLocation = 'briefing-2';
	} else if (pageLocation === 'briefing-2') {
		$('#briefing-text').html('<p style="padding:0px; margin-top:100px; margin-bottom:0px;">&nbsp &nbsp &nbsp &nbspOne of the burly men in tan uniforms walks over to you, and thrusts out his hand while saying, "Hello there, I\m Marcus. You must be Lieutenant Jenkins. I\'m sure you have plenty of questions, but I don\'t have time to answer them, unfortunately. Henry is piloting the ship to take you to our fancy island resort, he\'s ornery, but gets the job done. He\'s waiting on you though, so you\'d best get moving unless you want the silent treatment the whole ride."</p><p style="padding:0px;"> &nbsp &nbsp &nbsp &nbspYou hustle your way down the long pier and down to a small ship. The captain holds up his hand briefly in a friendly greeting, he doesn\'t seem ornery at all. His namebadge says "Henry", and you remember that Mr. Monroe said that the captain was a mute. As the ship trundles out of the indoor harbor with the loud gurgling roar of the diesel engines, you look back at the pier to see Marcus laughing. You realize that there was no rush, and he was simply pranking you into running off with a captain who won\'t talk. You\'ll have to have a few words with him when you get back.');
		$('#briefing-index').html('3');
		pageLocation = 'briefing-3';
	} else if (pageLocation === 'briefing-3') {
		$('#briefing-text').html('<p  style="padding:0px; margin-top:100px; margin-bottom:0px;">&nbsp &nbsp &nbsp &nbspThe trip to the island should take 3 days of sailing. And over the course of those 3 days, you have been studying a map of the island given to you by Captain Henry. It seems poorly drawn, but it serves it\s purpose.  Each day comes and goes without much incident. On the second day, Captain Henry pulls out a few fishing poles, and the two of you fish off the sides of the ship while still heading for your destination.</p><p style="padding:0px">&nbsp &nbsp &nbsp &nbsp On the afternoon of the third day, the island finally appears on the Horizon. A wave of anticipation washes over you, as well as relief that soon you\'ll be able to talk to someone again who can speak back. As you near the island, you see several incredibly large birds circling the islands peak. The ship slowly pulls up to the dock, and Captain Henry is clearly irked that no one has come out to help you moor the boat. You grab the mooring line and prepare to jump to the dock.</p>');
		pageLocation = 'briefing-4';
		$('#briefing-index').html('4');
	} else if (pageLocation === 'briefing-4') {
		$('#briefing-text').html('<img src="images/isleOfExtinctionBase.jpg" style="width:125% height:125%; padding-top: 40px;" >');
		pageLocation = 'briefing-map';
		$('#briefing-index').html('5');
	} else if (pageLocation === 'briefing-map') {
		loadGame();
	}
}

//                               LOADING GAME
//-------------------------------------------------------------------------------------
function loadGame () {
	player.weapon = locations[0].foundWeapon;
	player.equip = locations[0].foundEquip;
	companionStartingWeaponIndex =  Math.floor(Math.random() * companionWeapons.length);
	companingStartingEquipIndex	= Math.floor(Math.random() * companionEquipment.length);
	livingSurvivor.weapon = companionWeapons[companionStartingWeaponIndex];
	livingSurvivor.equip = companionEquipment[companingStartingEquipIndex];
	currentLocation = locations[0];
	window.scrollTo(0,0);
	$('#app-wrapper').empty();
	$('#app-wrapper').html('<div id="game-wrapper"><div id="game-stats"><h2>Turn Count: ' + turnCount + '</h2></div><div id="game-player-stats"><p>Player Health: ' + player.hp + '</p><p>Weapon: ' + player.weapon.name + '</p><p>Equip: ' + player.equip.name + '</p><p>Location: ' + player.location + '</p></div><div id="game-companion-stats"><p>Survivor: ' + livingSurvivor.name + '</p><p>Location: ' + livingSurvivor.location + '</p></div><div id="logo"><h2>Sole Survivor</h2></div><div id="game-image"><img src="./images/armory.jpeg" style="height: 250px; width: 600px;"></div><div id="game-output"><p>As the boat pulls up to the dock, you make the leap onto the dock, carrying the boats mooring line, and attempt to tie it off. The mute captain just throws his end of the rope off his boat and turns around, leaving you on the dock.</p><p>You begin to walk towards the welcome center across the small path at the end of the dock, hoping to find someone to assist you. As you open the door, you hear a throaty growling roar. Suddenly a large jungle cat leaps up from behind the receptionists desk, blood oozing from its maw. You slowly turn, and run like hell. You see a building with the word "Armory" emblazoned above the door in bright yellow paint, and decide that would be a good place to hide for a minute, resupply, and get your bearings.</p><p>As you arrive at the open door to the armory, a loud piercing shriek of an eagle causes you to look into the sky. You see an eagle the size of a Volkswagen diving straight at you! With cat-like reflexes, you throw yourself inside the open armory door, and slam the heavy metal door closed. You spin the heavy wheel in the center of the door, which slides four thick slabs into their locking mechanisms. With the door closed, the room falls pitch black. Almost at the same sound of the click of the locks, a sound like a thunderclap booms from the solid door, followed by the sounds of talons and a massive beak scraping at the door, attempting to peel away your layer of safety. </p><p>After a minute or two, the sounds subside. You peer around the dark silence surrounding you, pleasant sound after the ear shattering cry of the eagle. What is your next course of action?</p></div><div id="game-action-bar"><button style="grid-column:2;" id="ArmorySearchButton" class="actionButton" onclick="armorySearch()"> Search The Armory </button><button style="grid-column:4;" id="ArmoryNoSearchButton" class="actionButton" onclick="leaveArmoryNoSearch()"> Leave the Armory Now </button></div><div id="game-map"><svg height="700" width="180"><text x="35" y="30" fill="#26ad6a" style="font-size: 24px; text-decoration: bold;"> CURRENT </text ><text x="30" y="50" fill="#26ad6a" style="font-size: 24px; text-decoration: bold;"> LOCATION </text><line x1="10" y1="55" x2="180" y2="55" style="stroke:#26ad6a;stroke-width:2" /><circle id="armoryCircle" cx="25" cy="95" r="8" stroke="#26ad6a" stroke-width="3" fill="red" /><text id="armoryText" x="45" y="100" fill="#26ad6a">Armory</text><circle id="roadCircle" cx="25" cy="120" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="roadText" x="45" y="125" fill="#26ad6a">Road</text><circle id="b1Circle" cx="25" cy="145" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="b1Text" x="45" y="150" fill="#26ad6a">Bunker 1</text><circle id="trailCircle" cx="25" cy="170" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="trailText" x="45" y="175" fill="#26ad6a">Game Trail</text><circle id="b2Circle" cx="25" cy="195" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="b2Text" x="45" y="200" fill="#26ad6a">Bunker 2</text><circle id="sForestCircle" cx="25" cy="220" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="sForestText" x="45" y="225" fill="#26ad6a">Southern Forest</text><circle id="b3Circle" cx="25" cy="245" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="b3Text" x="45" y="250" fill="#26ad6a">Bunker 3</text><circle id="nForestCircle" cx="25" cy="270" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="nForestText" x="45" y="275" fill="#26ad6a">Northern Forest</text><circle id="b4Circle" cx="25" cy="295" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="b4Text" x="45" y="300" fill="#26ad6a">Bunker 4</text><circle id="sSwampCircle" cx="25" cy="320" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="sSwampText" x="45" y="325" fill="#26ad6a">Southern Swamp</text><circle id="b5Circle" cx="25" cy="345" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="b5Text" x="45" y="350" fill="#26ad6a">Bunker 5</text><circle id="nSwampCircle" cx="25" cy="370" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="nSwampText" x="45" y="375" fill="#26ad6a">Northern Swamp</text><circle id="b6Circle" cx="25" cy="395" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="b6Text" x="45" y="400" fill="#26ad6a">Bunker 6</text><circle id="sMountCircle" cx="25" cy="420" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="sMountText" x="45" y="425" fill="#26ad6a">Southern Mountain</text><circle id="b7Circle" cx="25" cy="445" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="b7Text" x="45" y="450" fill="#26ad6a">Bunker 7</text><circle id="cliffCircle" cx="25" cy="470" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="cliffText" x="45" y="475" fill="#26ad6a">Cliffside Pass</text><circle id="b8Circle" cx="25" cy="495" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="b8Text" x="45" y="500" fill="#26ad6a">Bunker 8</text><circle id="nMountCircle" cx="25" cy="520" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="nMountText" x="45" y="525" fill="#26ad6a">Northern Mountain</text><circle id="b9Circle" cx="25" cy="545" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="b9Text" x="45" y="550" fill="#26ad6a">Bunker 9</text><circle id="dockCircle" cx="25" cy="570" r="8" stroke="#26ad6a" stroke-width="3" fill="#333333" /><text id="dockText" x="45" y="575" fill="#26ad6a">Dock</text></svg></div></div>');
	$("#game-companion-stats").hide();
	pageLocation = 'game-armory';
}

function armorySearch() {
	$('#game-output').empty();
	$('#game-output').html('<p style="padding:0px; margin-top:40px; margin-bottom:0px;">After feeling your way around in the dark for a few minutes, you find a flashlight on the floor, it is sticky with an almost syrupy substance. As you click the light on, taking a look around, you see a small room, perhaps thirty feet wide and forty feed deep, with multiple gun racks, all empty. The room has clearly recently been cleaned out, though after some thorough searching, you were able to find a ' + locations[0].foundWeapon.name + ' and a ' + locations[0].foundEquip.name +', and a backpack.<p style="padding:0px; margin-top:0px;">As you pick up your weapon and equipment, a loud crackling noise in the far corner grabs your attention. "Hello?" a voice crackles through a walkie-talkie. "Please God, is anyone out there? I saw a ship come in, but it turned back before I could signal them. Oh God, I\'m going to die on this god forsaken island!"</p></p>');
	$('#game-action-bar').empty();
	$('#game-action-bar').html('<button id="respondVoice" class="actionButton" style="grid-column: 2;" onclick="respondWalkie()">Respond to the Voice</button> <button id="ignoreVoice" class="actionButton" style="grid-column: 4;" onclick="ignoreWalkie()">Ignore the Voice</button>');
	player.inventory.push("Flashlight");
}

function leaveArmoryNoSearch() {
	$('#game-output').empty();
	$('#game-action-bar').empty();
	$('#game-image').empty();
	$('#game-image').html('<img src="images/deathPenguin.jpg" style="height: 250px; width: 600px;">')
	$('#game-output').html('<p>You open the door to the armory, as you peer your head out to check if the coast is clear, you hear a chirping sound above you. Glancing up, you see a beak the size of a beartrap quickly snapping shut around your head. Your limp body falls to the ground.</p>');
	$('#game-action-bar').html('<button id="reset" onclick="reset()">Start over</button>');
}	

function respondWalkie() {
	//gets directions from survivor. finds out which bunker the survivor is in.
	//continures on to road
	$('#game-output').empty();
	$('#game-output').html('<p style="padding:0px; margin-top:40px; margin-bottom:0px;">You walk over to the corner the noise is coming from. Flashing your light back and forth, you see a walkie-talkie on a back shelf. You pick it up, and say, "Hello?" into the hand-held radio. After what seems like an eternity, but was really about five seconds, a voice erupts out of the walkie talkie excitedly.</p><p>"Oh thank God someone else survived! Where are you? We need to meet up and make it to the west dock. There\s a boat there that we can use to escape this hell-hole." is the response you get through the walkie. "Who is this? What is going on?" you ask. "What? I\m ' + livingSurvivor.name + '. I\'m hiding out in ' + livingSurvivor.location + '. I was able to find a ' + livingSurvivor.weapon.name + ' and a ' + livingSurvivor.equip.name + ' to help me make it this far. Early last night there was some kind of meteor that crashed into the ocean just offshore, and all of the animals across the island went nuts and started to attack each other as well as any human they see. Where are you? We need to meet up together if we want to survive this." </p><p>You respond, telling '+ livingSurvivor.firstName +' "I\'m in the armory right now, I was chased in here by some huge bird. I also saw some kind of lion eating whom I assume was the receptionist." "The Armory?!"' + livingSurvivor.firstName + ' exclaims. "Are there any guns left?" "Only a  '+ player.weapon.name +' and a ' + player.equip.name + '." you respond. After a few seconds of silence '+ livingSurvivor.firstName +' says, "You\'re on the opposite side of the island you want to be. You should come meet up with me and we\'ll go to the west dock together. We have a much better chance of survival that way."</p>');
	$('#game-action-bar').empty();
	$('#game-action-bar').html('<button id="agreeVoice" class="actionButton" style="grid-column: 2;" onclick="helpComp()">Meet up & Survive Together</button> <button id="declineVoice" class="actionButton" style="grid-column: 4;" onclick="refuseComp()">Refuse to Help</button>');
	player.inventory.push("Walkie-Talkie");
}

//secondary path to be added in later for now it'll just point back 
function ignoreWalkie() {
	//no directions
	$('#game-output').empty();
	$('#game-output').html('<p style="padding:0px; margin-top:40px; margin-bottom:0px; padding-left:100px;">This is a game, come on, take the obvious hook. I\ll put in the crazy no directions soon. for now, play it like a normal person.</p>');
	$('#game-action-bar').empty();
	$('#game-action-bar').html('<button id="asshatButton" class="actionButton" style="grid-column:3; margin-left:0px;" onclick="respondWalkie()">Don\'t be an asshat.');

}

function helpComp() {
	$('#game-output').empty();
	$('#game-output').html('<p style="padding:0px; margin-top:40px; margin-bottom:0px;">After a minute of consideration, you decide that as the new Head of Security, it\s probably in your contract that you have to help this person. You let them know you\'ve decide to help. "' + livingSurvivor.firstName + ', I\m heading to you. Stay where you are, and I\'ll be there as soon as I can." "Thank you so much. If I were you, I would try to just hop from bunker to bunker. That\'s probably the safest way to get here." ' + livingSurvivor.firstName + ' replies. You put the walkie talkie and ' + player.equip.name + ' in your backpack, and set your ' + player.weapon.name + ' on the floor next to the door, and unlock the door. You pick you ' + player.weapon.name + ' and open the door. Even though you\'ve only been inside for about thirty minutes, the sun has begun to descend. Looking at your watch, its 7:45pm. You gather your courage, tighten your grip on the '+player.weapon.name+' begin to head down the road.');
	$('#game-action-bar').empty();
	$('#game-action-bar').html('<button id="loadRoadButton" class="actionButton" style="grid-column: 2;" onclick="loadRoad()">Head out into the fading evening light</button>');
}

function refuseComp() {
	$('#game-output').empty();
	$('#game-output').html('<p style="padding:0px; margin-top:40px; margin-bottom:0px; padding-left:100px;">This is a game, come on, take the obvious hook. I\ll put in the crazy no directions soon. for now, play it like a normal person.</p>');
	$('#game-action-bar').empty();
	$('#game-action-bar').html('<button id="asshatButton" class="actionButton" style="grid-column:3; margin-left:0px;" onclick="respondWalkie()">Don\'t be an asshat.');
}


function loadRoad() {
	player.location = "Road";
	currentLocation = locations[1];
	armoryCircle.style.fill = "#333333";
	roadCircle.style.fill = 'red';
	$('#game-image').empty();
	$('#game-action-bar').empty();
	if (currentLocation.enemyPresent == true){
		if (currentLocation.enemy.name == "Stag Moose") {
			$("#game-image").html("<img src='./images/gameTrail.jpg' style='height: 250px; width: 600px;'>");
			$("#game-output").html("As you walk down the game trail, you hear a branch snap under the weight of some creature off to your left. You turn, raising your flashlight, to see a gigantic moose. It's head is nearly nine feet off the ground, a tower of lean muscle, with huge, wide, flat antlers. It stamps it's hoof in challenge, and snorts loudly, before making a load growling shriek-like sound.");
			$('#game-action-bar').html('<button id="attackMooseButton" class="actionButton" style="grid-column: 1;" onclick="attack()">Attack the Moose</button><button id="runAwayRoadButton" class="actionButton" style="grid-column: 2;" onclick="runAwayRoad()">Run for the next bunker</button><button id="usePlayerEquipButton" class="actionButton" style="grid-column: 3;" onclick="usePlayerEquip()">Use '+player.equip.name+'</button>');
		} else if (currentLocation.enemy.name == "Dire Wolf") {
			$("#game-image").html("<img src='./images/gameTrail.jpg' style='height: 250px; width: 600px;'>");
			$("#game-output").html("As you walk down the game trail, you hear a branch snap under the weight of some creature off to your left. You turn, raising your flashlight, to see a massive wolf. It's head is as high as your chest, his yellow eyes stare deep into yours as he growls deeply.");
			$('#game-action-bar').html('<button id="attackWolfButton" class="actionButton" style="grid-column: 1;" onclick="attack()">Attack the Wolf</button><button id="runAwayRoadButton" class="actionButton" style="grid-column: 2;" onclick="runAwayRoad()">Run for the next bunker</button><button id="usePlayerEquipButton" class="actionButton" style="grid-column: 3;" onclick="usePlayerEquip()">Use ' + player.equip.name + '</button>');
		} else if (currentLocation.enemy.name == "Meth Addled Koala") {
			$("#game-image").html("<img src='./images/gameTrail.jpg' style='height: 250px; width: 600px;'>");
			$("#game-output").html("As you walk down the game trail, you hear a branch snap under the weight of some creature off to your left. You turn, raising your flashlight, to see a koala bear wielding a meth pipe. As it screams an unholy battle cry, you realize that you've already lost this fight. Within seconds, it has torn your face off.");
			$('#game-action-bar').html('<button id="reset" onclick="reset()">Start over</button>');
		} else if (currentLocation.enemy.name == "Tasmanian Tiger") {
			$("#game-image").html("<img src='./images/gameTrail.jpg' style='height: 250px; width: 600px;'>");
			$("#game-output").html("As you walk down the game trail, you hear a branch snap under the weight of some creature off to your left. You turn, raising your flashlight, to see a small tiger stalking up behind you. It growls, and prepares to pounce.");
			$('#game-action-bar').html('<button id="attackMooseButton" class="actionButton" style="grid-column: 1;" onclick="attack()">Attack the Tiger</button><button id="runAwayRoadButton" class="actionButton" style="grid-column: 2;" onclick="runAwayRoad()">Run for the next bunker</button><button id="usePlayerEquipButton" class="actionButton" style="grid-column: 3;" onclick="usePlayerEquip()">Use ' + player.equip.name + '</button>');
		} 
	} else if (currentLocation.enemyPresent == false) {
			$("#game-image").html("<img src='./images/gameTrail.jpg' style='height: 250px; width: 600px;'>");
			$("#game-output").html("As you leave the safety of the Armory, you begin to walk down a dirt road leading to the first bunker. The trees stretch high up above you, forming a thick canopy, allowing very little moonlight to fall. The deafening silence is only punctuated by your footsteps on the gravel roadway. It takes nearly a half an hour, but you finally see the entrance to the first bunker ahead.");
			$('#game-action-bar').html('<button id="loadB1Button" class="actionButton" style="grid-column: 2;" onclick="loadB1()">Head into the first bunker.</button>');	
	}
}
function attack() {

}

function reset() {
	turnCount = 0;
	currentLocation = locations[0];
	companionPresent = false;
	droppedWeapon = {};
	droppedEquip = {};
	livingSurvivor = {};
	locations = [];
	player = {
		name: "Lt. Pat Jenkins",
		hp: 150,
		dmgMod: 1,
		location: "Armory",
		weapon: {},
		equip: {},
		inventory: [],
	};
	createLocations();
	loadGame();
}


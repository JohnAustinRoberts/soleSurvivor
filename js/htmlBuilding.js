let pageLocation = 'landing';

function loadBriefing() {
    $('#app-wrapper').empty();
    $('#app-wrapper').html('<div id="briefing-wrapper"><div id="briefing-title">Mission Briefing</div><div id="briefing-text">This is the placeholder man.</div><div id="briefing-button"><div id="briefing-index">1</div><i id="next" class="fa fa-forward" onclick="nextBrief()"></i></div></div>');
    pageLocation = 'briefing-1';
}

function nextBrief() {
    $('#briefing-text').empty();
    if (pageLocation === 'briefing-1') {
        $('#briefing-text').html('This is the second page placeholder');
        $('#briefing-index').empty();
        $('#briefing-index').html('2');
        pageLocation = 'briefing-2';
    } else if (pageLocation === 'briefing-2') {
        $('#briefing-text').html('This is the third page placeholder');
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

function loadGame() {
    $('#app-wrapper').empty();
    $('#app-wrapper').html('<div id="game-wrapper"><div id="game-stats">game</div><div id="game-player-stats">player</div><div id="game-companion-stats">companion</div><div id="game-location-stats">location</div><div id="logo">Sole Survivor</div><div id="game-image"><img src="./images/armory.jpeg" style="height: 250px; width: 600px;"></div><div id="game-output">You arrive at the armory. The door lies swung open, and silence awaits you inside it\'s dark corridors. It\'s a pleasant sound after the ear shattering </div><div id="game-action-bar"><button style="width:100px;" id="attackButton"> attack </button> <button style="width:100px;" id="healButton"> heal </button> <button style="width:100px;" id="searchButton"> search </button></div><div id="game-map"><img src="./images/armoryMap.jpg"></div></div>');
    console.log('loading game');
}
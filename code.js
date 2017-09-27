var NB_TERRITORIES = 42;
var NB_MISSIONS = 12;
var NB_TUNED_IN_SOLDIERS = [4, 6, 8, 10, 12, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70];

var STATUS_INACTIVE = 0;
var STATUS_ACTIVE_FOR_TUNE_IN = 1;
var STATUS_ACTIVE_FOR_DISTRIBUTION = 2;
var STATUS_ACTIVE_FOR_ATTACK = 3;
var STATUS_ACTIVE_FOR_FORTIFICATION = 4;
var STATUS_ACTIVE_FOR_FIRST_DISTRIBUTION = 10;

//To be modified
var SYMBOL_ON_CARD = [	
	0, 1, 2, 0, 1, 2, 
	0, 1, 2, 0, 1, 2, 
	0, 1, 2, 0, 1, 2, 
	0, 1, 2, 0, 1, 2, 
	0, 1, 2, 0, 1, 2, 
	0, 1, 2, 0, 1, 2, 
	0, 1, 2, 0, 1, 2 
];

var NB_INITIAL_SOLDIERS = [0, 0, 40, 35, 30, 25];

var TERRITORIES = [
	"ALASKA", "NORTH-WEST TERRITORY", "ONTARIO", "EASTERN CANADA", "GREENLAND", "ALBERTA",
	"WESTERN UNITED STATES", "EASTERN UNITED STATES", "CENTRAL AMERICA",  "VENEZUELA", "BRAZIL", "PERU",
	"ARGENTINA", "ICELAND", "GREAT BRITAIN", "SCADINAVIA", "NORTHERN EUROPE", "WESTERN EUROPE",
	"SOUTHERN EUROPE", "UKRAINE", "NORTH_AFRICA", "EGYPT", "EASTERN_AFRICA", "CONGO",
	"SOUTHERN AFRICA", "MADAGASCAR", "MIDDLE EAST", "AFGHANISTAN", "URAL", "SIBERIA", 
	"CHINA", "INDIA", "YAKUTSK", "IRKUTSK", "MONGOLIA", "KAMCHATKA", 
	"JAPAN", "SOUTHEAST ASIA", "INDONESIA", "NEW GUINEA", "WESTERN AUSTRALIA", "EASTERN AUSTRALIA"	
];


var NEIGHBORS = [
	[1, 5, 35], 				[0, 2, 4, 5], 				[1, 3, 4, 5, 6, 7], 		[2, 4, 7], 				[1, 2, 3, 13], 				[0, 1, 2, 6],
	[5, 2, 7, 8], 				[3, 2, 6, 8], 				[6, 7, 9], 					[8, 10, 11], 			[9, 11, 12, 20], 			[9, 10, 12],
	[10, 11],	 				[4, 14, 15], 				[13, 15, 16, 17], 			[13, 14, 16, 19], 		[14, 15, 17, 18, 19], 		[14, 16, 18, 20],
	[16, 17, 19, 20, 21, 26], 	[15, 16, 18, 26, 27, 28], 	[10, 17, 18, 21, 22, 23], 	[18, 20, 22, 26], 		[20, 21, 23, 24, 25, 26], 	[20, 22, 24],
	[22, 23, 25], 				[22, 24], 					[18, 19, 21, 22, 27, 31], 	[19, 26, 28, 30, 31], 	[19, 27, 29, 30], 			[28, 30, 32, 33, 34],
	[27, 28, 29, 31, 34, 37], 	[26, 27, 30, 37], 			[29, 33, 35], 				[29, 32, 34, 35], 		[29, 30, 33, 35, 36], 		[0, 32, 33, 34, 36],
	[34, 35], 					[30, 31, 38], 				[37, 39, 40], 				[38, 40, 41], 			[38, 39, 41], 				[39, 40]
];

var ORIGINAL_COORDINATES = [
    [27, 80, 88, 135], 		[94, 80, 250, 120],		[194, 152, 251, 200],	[266, 151, 319, 219],	[314, 40, 401, 109], 	[114, 134, 181, 193],
    [119, 209, 200, 251],	[192, 260, 276, 290],	[137, 305, 199, 385],	[204, 391, 299, 406],	[285, 434, 356, 503],	[236, 493, 275, 515], 
    [239, 561, 303, 614],	[422, 125, 473, 151],	[366, 196, 469, 244],	[487, 88, 569, 152],	[494, 219, 557, 255],	[413, 273, 484, 359],
    [491, 283, 570, 312],	[588, 127, 673, 201],	[427, 440, 546, 497],	[539, 403, 595, 430],	[584, 480, 660, 514], 	[528, 532, 597, 550],
    [540, 602, 613, 658],	[653, 598, 707, 670],	[614, 327, 715, 418],	[679, 236, 758, 275],	[710, 133, 756, 198],	[764, 56, 823, 156],
    [795, 285, 912, 337],	[737, 353, 813, 424],	[851, 53, 911, 91],		[841, 141, 884, 182],	[826, 218, 916, 260],	[927, 60, 1022, 119],
    [956, 197, 1010, 293],	[835, 377, 889, 443], 	[824, 506, 921, 553],	[943, 477, 1008, 520],	[873, 621, 980, 656],	[950, 553, 1052, 614]
]

var BEGIN_NORTH_AMERICA = 0;
var END_NORTH_AMERICA = 8;
var NORTH_AMERICA_VALUE = 5;

var BEGIN_SOUTH_AMERICA = 9;
var END_SOUTH_AMERICA = 12;
var SOUTH_AMERICA_VALUE = 2;

var BEGIN_EUROPE = 13;
var END_EUROPE = 19;
var EUROPE_VALUE = 5;

var BEGIN_AFRICA = 20;
var END_AFRICA = 25;
var AFRICA_VALUE = 3;

var BEGIN_ASIA = 26;
var END_ASIA = 37;
var ASIA_VALUE = 7;

var BEGIN_AUSTRALIA = 38;
var END_AUSTRALIA = 41;
var AUSTRALIA_VALUE = 2;

var MISSIONS = [ 
	"CONTROL NORTH AMERICA AND AUSTRALIA",
	"CONTROL EUROPE AND AUSTRALIA",
	"CONTROL NORTH AMERICA AND AFRICA",
	"CONTROL ASIA AND SOUTH AMERICA",
	"CONTROL ASIA AND AFRICA",
	"CONTROL 18 TERRITORIES WITH 2 SOLDIERS ON EACH",
	"CONTROL 24 TERRITORIES",
	"KILL ALL RED",
	"KILL ALL BLUE",
	"KILL ALL YELLOW",
	"KILL ALL GREEN",
	"KILL ALL BLACK"
];

var HUMAN = 0;
var HORSE = 1;
var CANON = 2;

var COLOR = ['red', 'green', 'blue', 'orange', 'black'];

var original_width = 1200;
var original_height = 711;
var margin_left = 10;
var margin_top = 10;
var canvas_width = 800;
var canvas_height = 440;

var current_player = -1;
var active_player = 0;

var nb_players;
var names;
var territories_by_player;
var nb_soldiers_on_territory;
var mission_of_player;
var battle_status;
var available_soldiers_to_add;
var cards_held_by_player;
var double_shuffled_cards;
var current_card;
var attack_dices;
var defend_dices;
var next_tune_in_index;
var save;
var attacking;
var attacking_territory_from;
var attacking_territory_to;
var last_card;
var last_card_order;
var last_card_taken;
var sound;

var deactivated = 0;
var active_player_changed = 0;

window.onload = function(){
	setInterval(function(){
		loadDoc("getinfo.php")
	}, 2000);		
}

function loadDoc(url) {
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("private_data").innerHTML = this.responseText;
			reload();
		}
	};
	xhttp.open("GET", url, true);
	xhttp.send();
}

function reload() {
	console.log("load and see " + deactivated);
	if (!deactivated){
		deactivated = 1;
		if (getCookie('userName') == 'SUPERADMIN'){
			document.getElementById("namestring").style.display = 'block';
			document.getElementById("reset").style.display = 'block';
			deactivated = 0
			return;
		} else {
			document.getElementById("reset").style.display = 'none';
		}

		parseDataFromPHP()
	
		printMap();
	
		printPlayerMap();
	
		printDeck();
	
		printCards();
		
		printMission();
		
		printDices();
		
		printNotification();

		printNextTuneInInformation();
		
		printUpdateZone();
		deactivated = 0;
	}
}


function resetnow(){
	
	names = document.getElementById("namestring").value.split("-");
	shuffle(names);
	nb_players = names.length;
	
	territories_by_player = new Array(42+1).join('0').split('').map(parseInt);
	
	var shuffled_cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41];
	shuffle(shuffled_cards);
	
	for (var i = 0; i < NB_TERRITORIES; ++i){
		territories_by_player[shuffled_cards[i]] = i % nb_players;
	}
	
	nb_soldiers_on_territory = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ]
	
	var allmissions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
	
	if (nb_players < 5){
		allmissions.splice(7 + nb_players, 5 - nb_players);
	}
	
	shuffle(allmissions);
	
	mission_of_player = new Array(nb_players+1).join('0').split('').map(parseInt);
	
	if (nb_players < 5){
		allmissions.splice(nb_players, 5 - nb_players);
	}
	
	for (var player = 0; player < nb_players; ++player){
		mission_of_player[player] = allmissions[player];
		if (mission_of_player[player] == 7 + player){
			mission_of_player[player] = allmissions[5 + player]
		}
	}
	//OK
	next_tune_in_index = 0;
	battle_status = new Array(nb_players+1).join('0').split('').map(parseInt);
	
	battle_status.fill(10);
	
	default_available_soldiers = [0, 0, 40, 35, 30, 25]
	
	available_soldiers_to_add = new Array(nb_players+1).join('0').split('').map(parseInt);
	for (var player = 0; player < nb_players; ++player){
		available_soldiers_to_add[player] = default_available_soldiers[nb_players] - getTerritoriesOccupedBy(player).length;
	}
	
	cards_held_by_player = [];
	for (var player = 0; player < nb_players; ++player){
		cards_held_by_player.push([]);
	}
	
	
	double_shuffled_cards = [];
	for (var i = 0; i < shuffled_cards.length; ++i){
		double_shuffled_cards.push(shuffled_cards[i]);
	}
	
	for (var i = 0; i < shuffled_cards.length; ++i){
		double_shuffled_cards.push(shuffled_cards[i]);
	}
	
	current_card = 0;
	attack_dices = [0, 0, 0];
	defend_dices = [0, 0];

	save = 0;
	attacking = 0;
	attacking_territory_from = -1;
	attacking_territory_to = -1;
	
	last_card_order = 25 + Math.floor(Math.random() * 17);
	last_card = double_shuffled_cards[last_card_order];

	last_card_taken = 0;
	sound = 0;
	
	var s = "";
	s += "nb_players=" + nb_players;
	s += "&current_card=" + current_card;
	s += "&next_tune_in_index=" + next_tune_in_index;
	s += "&save=" + save;
	
	s += "&attacking=" + attacking;
	s += "&attacking_territory_from=" + attacking_territory_from;
	s += "&attacking_territory_to=" + attacking_territory_to;
	s += "&last_card=" + last_card;
	s += "&last_card_order=" + last_card_order;
	s += "&last_card_taken=" + last_card_taken;
	s += "&sound=" + sound;
	s += "&names=" + names.join();
	s += "&territories_by_player=" + territories_by_player.join();
	
	for (var i = 0; i < NB_TERRITORIES; ++i){
		s += "&t" + i + "=" + nb_soldiers_on_territory[i];
	}
	
	s += "&mission_of_player=" + mission_of_player.join();
	s += "&battle_status=" + battle_status.join();
	
	for (var i = 0; i < nb_players; ++i){
		s += "&r" + i + "=" + available_soldiers_to_add[i];
	}
	
	s += "&double_shuffled_cards=" + double_shuffled_cards.join();
	s += "&attack_dices=" + attack_dices.join();
	s += "&defend_dices=" + defend_dices.join();
	
			
	s += "&cards_held_by_player=" + cards_held_by_player[0].join();
	for (var i = 1; i < nb_players; ++i){
		s += ";";
		s += cards_held_by_player[i].join();
	}
	
	updateSql(s);
}

function parseDataFromPHP(){
	nb_players = parseInt(document.getElementById("r_nb_players").value);
	
	names = document.getElementById("r_names").value.split(",");
	
	var territories_by_player_str = document.getElementById("r_territories_by_player").value.split(",");
	territories_by_player = [];
	for (var i = 0; i < NB_TERRITORIES; ++i){
		territories_by_player.push(parseInt(territories_by_player_str[i]))
	}
	
	nb_soldiers_on_territory = [];
	for (var i = 0; i < NB_TERRITORIES; ++i){
		nb_soldiers_on_territory.push(parseInt(document.getElementById("r_t" + i).value))
	}
	
	var mission_of_player_str = document.getElementById("r_mission_of_player").value.split(",");
	mission_of_player = [];
	for (var i = 0; i < nb_players; ++i){
		mission_of_player.push(parseInt(mission_of_player_str[i]))
	} 
	
	var battle_status_str = document.getElementById("r_battle_status").value.split(",");
	battle_status = [];
	for (var i = 0; i < nb_players; ++i){
		battle_status.push(parseInt(battle_status_str[i]));
	} 

	available_soldiers_to_add = [];
	for (var i = 0; i < nb_players; ++i){
		available_soldiers_to_add.push(parseInt(document.getElementById("r_r" + i).value))
	} 
	
	cards_held_by_player = []
	var cards_held_by_player_bigstr = document.getElementById("r_cards_held_by_player").value.split(";");
	for (var i = 0; i < nb_players; ++i){
		cards_held_by_player.push([]);
		if (cards_held_by_player_bigstr != null && cards_held_by_player_bigstr[i] != ""){
			var cards_held_by_player_str = cards_held_by_player_bigstr[i].split(",");
			for (var j = 0; j < cards_held_by_player_str.length; ++j){
				cards_held_by_player[i].push(parseInt(cards_held_by_player_str[j]));
			}
		}	
	}
	
	var double_shuffled_cards_str = document.getElementById("r_double_shuffled_cards").value.split(",");
	double_shuffled_cards = []
	for (var i = 0; i < double_shuffled_cards_str.length; ++i){
		double_shuffled_cards.push(parseInt(double_shuffled_cards_str[i]))
	} 
	
	current_card = parseInt(document.getElementById("r_current_card").value);
	
	var attack_dices_str = document.getElementById("r_attack_dices").value.split(",");
	attack_dices = []
	for (var i = 0; i < attack_dices_str.length; ++i){
		attack_dices.push(parseInt(attack_dices_str[i]))
	} 
	
	var defend_dices_str = document.getElementById("r_defend_dices").value.split(",");
	defend_dices = []
	for (var i = 0; i < defend_dices_str.length; ++i){
		defend_dices.push(parseInt(defend_dices_str[i]))
	} 
	
	next_tune_in_index = parseInt(document.getElementById("r_next_tune_in_index").value);
	save = parseInt(document.getElementById("r_save").value);
	attacking = parseInt(document.getElementById("r_attacking").value);
	attacking_territory_from = parseInt(document.getElementById("r_attacking_territory_from").value);
	attacking_territory_to = parseInt(document.getElementById("r_attacking_territory_to").value);
	last_card = parseInt(document.getElementById("r_last_card").value);
	last_card_order = parseInt(document.getElementById("r_last_card_order").value);
	last_card_taken = parseInt(document.getElementById("r_last_card_taken").value);
	sound = parseInt(document.getElementById("r_sound").value);
	
	active_player = currentActivePlayer();
	
	if (battle_status[active_player] == 1 && !ableToTurnIn(active_player)){
		finishTuneIn(active_player);
	}
	
	for (var i = 0; i < nb_players; ++i){
		if (getCookie('userName') == names[i]){
			current_player = i;
		}
	}
}

function printMap(){
	for (var i = 0; i < NB_TERRITORIES; ++i){
		
		if (attacking_territory_from == i || attacking_territory_to == i){
			document.getElementById('territory' + i).style.opacity = 0.5
		}
		else
			document.getElementById('territory' + i).style.opacity = 1
	}
	
}

function printPlayerMap(){
	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');
	
	context.clearRect(0, 0, canvas_width, canvas_height);
	
	for (var i = 0; i < NB_TERRITORIES; ++i){
	/*
	 * When a territory is clickable?
	 * 	1.	When another territory was chosen:
	 * 		1.1 If it was chosen for attacking from, then all its neighbors belonging to other players will be clickable for the attacker
	 * 		1.2	If it was chosen to move regiments from, then all its connected territories belonging to the attacker will be clickable for the attacker
	 * 	2.	While attacking
	 * 		The attacked territory will be clickable for the defender
	 * 	3.	In first distribution
	 * 		The territories belonging to a player will be clickable for that player
	 *  4.	If a player is able to attack somewhere or to move regiments from
	 *  	The territories belonging to a player will be clickable for that player
	 */
		var area_i = document.getElementById('area' + i);
		var clickable = 0;
		
		var x0 = Math.floor(ORIGINAL_COORDINATES[i][0] / original_width * canvas_width);
		var y0 = Math.floor(ORIGINAL_COORDINATES[i][1] / original_height * canvas_height);
		var x1 = Math.floor(ORIGINAL_COORDINATES[i][2] / original_width * canvas_width);
		var y1 = Math.floor(ORIGINAL_COORDINATES[i][3] / original_height * canvas_height);
		
		if (save && !attacking){
			if (attacking_territory_from >= 0 && NEIGHBORS[attacking_territory_from].indexOf(i) >= 0 && territories_by_player[i] != current_player && battle_status[current_player] == STATUS_ACTIVE_FOR_ATTACK)
				clickable = 1;
				
			if (battle_status[current_player] == STATUS_ACTIVE_FOR_FORTIFICATION && attacking_territory_from >= 0 && areConnected(attacking_territory_from, i))
				clickable = 1;				
		}
			
		else if (attacking && attacking_territory_to == i && current_player == territories_by_player[i]){
			clickable = 1;
		}
		
		else if (territories_by_player[i] == current_player && battle_status[current_player] == STATUS_ACTIVE_FOR_FIRST_DISTRIBUTION){ 
			clickable = 1;
			}
		else if (!attacking && current_player == active_player && territories_by_player[i] == current_player){
			clickable = 1;
		} 
		
			
		if (clickable){
			area_i.shape = 'rect';
			area_i.onmouseover = function(arg) { return function(){ brighten(arg) }}(i);
			area_i.onmouseout = function(arg) { return function(){ darken(arg) }}(i);
			area_i.coords = x0 + "," + y0 + "," + x1 + "," + y1;
		} else {
			area_i.shape = '';
			area_i.coords = '';
		}
		
		printCircles(i);		
	}
};

function printCircles(i){
				
	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');

	var x0 = Math.floor(ORIGINAL_COORDINATES[i][0] / original_width * canvas_width);
	var y0 = Math.floor(ORIGINAL_COORDINATES[i][1] / original_height * canvas_height);
	var x1 = Math.floor(ORIGINAL_COORDINATES[i][2] / original_width * canvas_width);
	var y1 = Math.floor(ORIGINAL_COORDINATES[i][3] / original_height * canvas_height);

	var centerX = (x0 + x1) / 2 + 5;
	var centerY = (y0 + y1) / 2 + 5;
	var radius = 10;

	context.beginPath();

    context.arc(centerX, centerY, Math.min(radius + parseInt(nb_soldiers_on_territory[i])*1 , 20), 0, 2 * Math.PI, false);
    context.fillStyle = COLOR[parseInt(territories_by_player[i])];
    context.fill();
    context.lineWidth = 0.25;
    context.strokeStyle = COLOR[parseInt(territories_by_player[i])];
    context.stroke();

    context.font = Math.min(Math.floor(8 + 0.6*parseInt(nb_soldiers_on_territory[i])), 20) + 'pt Calibri';
    context.fillStyle = 'white';
    context.textAlign = 'center';
    context.textBaseline = "middle"; 
    context.fillText(parseInt(nb_soldiers_on_territory[i]), centerX, centerY);
}

function printDeck(){
	if (battleStatusSum() >= STATUS_ACTIVE_FOR_FIRST_DISTRIBUTION){
		document.getElementById("last_card").style.display = "none";
		document.getElementById("full_deck").style.display = "block";
		document.getElementById("deck" + last_card_order).style.border = "2px solid #FF0000";
		document.getElementById("deck" + last_card_order).style.width = "136px";
		document.getElementById("deck" + last_card_order).style.height = "216px";
		
	} else {
		document.getElementById("last_card").style.display = "block";
		document.getElementById("full_deck").style.display = "none";
	}
}
	
function printCards(){
	if (finished()){
		checkFinish();
		return;
	}
    
	for (var i = 0; i < cards_held_by_player[current_player].length; ++i){
		var card = document.getElementById('card' + i);
		card.style.display = 'block';
		if (battle_status[current_player] != STATUS_ACTIVE_FOR_TUNE_IN){
			card.style.opacity = 1;
		}
		card.onclick = function(a1, a2, a3) { return function(){ updowncard(a1, a2, a3) }}(current_player == active_player ? 1 : 0, current_player, i);
    }
	
	for (var i = cards_held_by_player[current_player].length; i < 5; ++i){
		var card = document.getElementById('card' + i);
		card.style.display = 'none';
	}
    	
    if (battle_status[current_player] == STATUS_ACTIVE_FOR_TUNE_IN){
		document.getElementById('submit_for_tune_in').style.display = 'block';
    } else {
		document.getElementById('submit_for_tune_in').style.display = 'none';
	}
};


function checkFinish(){
	if (!finished())
		return;
	
	var m = 0;
    for (var player=0; player < nb_players; ++player){
       	if (missionCompleted(player)){
    		document.getElementById('winner').innerHTML = names[player] + " has accomplished his mission!";
			m = 1;
    	}
    }
    
	if (!m)
		document.getElementById('winner').innerHTML = winner().join(", ") + " won with the most number of territories.";
    	
    for (var player=0; player < nb_players; ++player){
		document.getElementById('card' + player).style.display = 'block';
    	document.getElementById('card' + player).src = 'Img/M' + mission_of_player[player] + ".png";
		document.getElementById('card' + player).onclick = '';
		document.getElementById('final_mission' + player).style.display = 'block';
		document.getElementById('final_mission' + player).innerHTML = names[player];
    }
	
	for (var player = nb_players; player < 5; ++player){
		document.getElementById('card' + player).style.display = 'none';
	}
}
		
function printMission(){
	document.getElementById("last_card").src = 'Img/C' + last_card + ".png";
};
		
function printDices(){
	var X = [850, 920, 990];
	var Y = [330, 400];
	
	for (var dice = 0; dice < attack_dices.length; dice++){
    	if (attack_dices[dice] > 0){
			var current_dice = document.getElementById('A' + dice);
			current_dice.class = 'adice';
			current_dice.src = 'Img/A' + attack_dices[dice] + '.png';
		} else {
			var current_dice = document.getElementById('A' + dice);
			current_dice.class = '';
			current_dice.src = 'Img/A0.png';
		}
    }
	
	for (var dice = attack_dices.length; dice < 3; dice++){
		var current_dice = document.getElementById('A' + dice);
		current_dice.class = '';
		current_dice.src = 'Img/A0.png';
    }
    	
	for (var dice = 0; dice < defend_dices.length; dice++){
    	if (defend_dices[dice] > 0){
			var current_dice = document.getElementById('D' + dice);
			current_dice.class = 'ddice';
			current_dice.src = 'Img/D' + defend_dices[dice] + '.png';
		} else {
			var current_dice = document.getElementById('D' + dice);
			current_dice.class = '';
			current_dice.src = 'Img/D0.png';
		}
    }
	
	for (var dice = defend_dices.length; dice < 2; dice++){
		var current_dice = document.getElementById('D' + dice);
		current_dice.class = '';
		current_dice.src = 'Img/D0.png';
    }
};
		
function printNotification(){
	var pseudo_names = "";
	if (active_player_changed){
		ele = document.getElementById("whoseturn")
		while (ele.hasChildNodes()) {
			ele.removeChild(ele.firstChild);
		}
		active_player_changed = 0;
	}
	if (document.getElementById("whoseturn").childElementCount == 0){
		for (var i = 0; i < names.length; ++i){
			var node = document.createElement("div");
			node.style.color = COLOR[i];
			node.style.display = "inline";
			var inc = "";
			if (i < nb_players - 1)
				inc = " - "
			node.innerHTML = names[i];
			if (battle_status[active_player] < 10 && i == active_player)
				node.innerHTML = "<u>" + names[i] + "</u>" + inc;
			else
				node.innerHTML = names[i] + inc;
			document.getElementById("whoseturn").appendChild(node);
		}	
	}

	//FIRST DISTRIBUTION
	if (battleStatusSum() >= STATUS_ACTIVE_FOR_FIRST_DISTRIBUTION){
		document.getElementById("whichstep").innerHTML = "Initial distribution";
		document.getElementById("regimentsleft").innerHTML = "Number of regiments left: <strong>" + available_soldiers_to_add[current_player] + "</strong>";
		document.getElementById("regimentsleft").style.display = "block";
		document.getElementById("number").style.display = "block";
    }
	
	//TUNE IN 
	else if (current_player == active_player && battle_status[active_player] == STATUS_ACTIVE_FOR_TUNE_IN){
        if (cards_held_by_player[current_player].length < 5)
        	document.getElementById("whichstep").innerHTML = "Check if you can turn in, or skip";
        else
        	document.getElementById("whichstep").innerHTML = "Time to turn in.";
    	if (cards_held_by_player[current_player].length < 5){
        	document.getElementById("finish").style.display = "block";
			document.getElementById("finish").innerHTML = "SKIP";
			document.getElementById("finish").onclick = function(a1) { return function(){finishTuneIn(a1) }}(current_player);
		}
	}
	
	//DISTRIBUTION
	else if (current_player == active_player && battle_status[active_player] == STATUS_ACTIVE_FOR_DISTRIBUTION){
    	document.getElementById("whichstep").innerHTML = "You have bonus regiments.";
		document.getElementById("regimentsleft").innerHTML = "Number of regiments left: <strong>" + available_soldiers_to_add[current_player] + "</strong>";
		document.getElementById("regimentsleft").style.display = "block";
		document.getElementById("number").style.display = "block";
		document.getElementById("finish").style.display = "none";
		document.getElementById("attacking_from").style.display = "none";
		document.getElementById("attacking_to").style.display = "none";
		document.getElementById("number_range").style.display = "none";
	}
	
	//ATTACK
	else if (battle_status[active_player] == STATUS_ACTIVE_FOR_ATTACK){
		document.getElementById("whichstep").innerHTML = "Attack";
		document.getElementById("regimentsleft").style.display = "none";
		document.getElementById("number").style.display = "none";
		
		if (save){
			document.getElementById("attacking_from").innerHTML = "From: " + TERRITORIES[attacking_territory_from];
			document.getElementById("attacking_from").style.display = "block";
			document.getElementById("finish").style.display = "none";
		}
		
		if (attacking){
			document.getElementById("attacking_to").innerHTML = "To: " + TERRITORIES[attacking_territory_to];
			document.getElementById("attacking_to").style.display = "block";
			document.getElementById("number_range").style.display = "none";
			document.getElementById("number_sign").style.display = "none";
			document.getElementById("finish").style.display = "none";
		}
		
		if (save && !attacking && current_player == active_player){
			var localmax = Math.min(3, nb_soldiers_on_territory[attacking_territory_from] - 1);
    		if (localmax >= 1){
				document.getElementById("number_range").max = "" + localmax;
				document.getElementById("number_range").value = "" + localmax;
				document.getElementById("number_range").style.display = "block";
				document.getElementById("number_sign").innerHTML = localmax;
				document.getElementById("number_sign").style.display = "inline";
				document.getElementById("finish").style.display = "none";
    		}
		}
		
		if (active_player == current_player && !save){
			document.getElementById("finish").style.display = "block";
			document.getElementById("finish").innerHTML = "Finish attack";
			document.getElementById("finish").onclick = function() { finishAttack(current_player) };
			document.getElementById("attacking_from").style.display = "none";
			document.getElementById("attacking_to").style.display = "none";
			document.getElementById("number_range").style.display = "none";
			document.getElementById("number_sign").style.display = "none";
		}
	}
	
	//FORTIFICATION
	else if (battle_status[active_player] == STATUS_ACTIVE_FOR_FORTIFICATION){
    	document.getElementById("whichstep").innerHTML = "Fortification";
		document.getElementById("number_range").style.display = "none";
    		
    	if (current_player == active_player){
    		
    		if (save){
				document.getElementById("attacking_from").innerHTML = "From: " + TERRITORIES[attacking_territory_from];
				document.getElementById("attacking_from").style.display = "block";
				document.getElementById("number").style.display = "block";
				document.getElementById("finish").style.display = "none";
    		}

    		else{
				document.getElementById("attacking_from").style.display = "none";
				document.getElementById("attacking_to").style.display = "none";
				document.getElementById("number").style.display = "none";
    			document.getElementById("finish").style.display = "block";
				document.getElementById("finish").innerHTML = "Finish fortification";
				document.getElementById("finish").onclick =  function(a1) { return function(){finishFortification(a1) }}(current_player);
    		}
    	} else {
			document.getElementById("attacking_from").style.display = "none";
			document.getElementById("attacking_to").style.display = "none";
			document.getElementById("number").style.display = "none";
			document.getElementById("number_range").style.display = "none";
			document.getElementById("number_sign").style.display = "none";
			document.getElementById("finish").style.display = "none";
		}
	}
	
	else {
		document.getElementById("regimentsleft").style.display = "none";
		document.getElementById("number").style.display = "none";
		document.getElementById("number_range").style.display = "none";
		document.getElementById("number_sign").style.display = "none";
		document.getElementById("finish").style.display = "none";
		document.getElementById("whichstep").innerHTML = "";
	}
};


function printNextTuneInInformation(){
	document.getElementById("nextturnin").innerHTML = "Next turn in: <strong>" + NB_TUNED_IN_SOLDIERS[next_tune_in_index] + "</strong> regiments.";
};
		
function printUpdateZone(){
	if (save && !attacking && current_player == active_player){
    	document.getElementById("undo").style.display = "inline";
    } else {
		document.getElementById("undo").style.display = "none";
	}
	
	if (attacking && territories_by_player[attacking_territory_to] == current_player && sound >= 1){
		document.getElementById("gunsound").src = "gun.wav";
		sound = (sound + 1)%3;
		s = "sound=" + sound;
		updateSql(s);
	} else {
		document.getElementById("gunsound").src = "";
	}
};


function currentActivePlayer(){
	var current_active_player = -1;
	for (var p = 0; p < nb_players; p++){
		if (battle_status[p] > 0){
			current_active_player = p;
			break;
		}
	}
		
	return current_active_player;
}


function battleStatusSum(){
	return battle_status.reduce(function(pv, cv) { return pv + cv; }, 0);
}


//BRIGHTEN-DARKEN
function brighten(i){
	document.getElementById("territory" + i).style.opacity = 0.5;
	
	var b = battle_status[current_player];
	
	if (b == STATUS_ACTIVE_FOR_DISTRIBUTION || b == STATUS_ACTIVE_FOR_FIRST_DISTRIBUTION){
		var number = parseInt(document.getElementById("number").value);
		if (document.getElementById("area" + i)!= null){
			document.getElementById("area" + i).onclick = function(a1, a2, a3) { return function(){ addMany(a1, a2, a3) }}(current_player, i, number);
		}
		return;
	}
	
	b = battle_status[active_player];
	
	if (b == STATUS_ACTIVE_FOR_ATTACK){
		if (attacking){
			if (document.getElementById("area" + i)!= null)
				document.getElementById("area" + i).onclick = function(a1, a2, a3) { return function(){ defend(a1, a2, a3) }}(current_player, attacking_territory_from, i);
		}
		
		else if (save){
			if (document.getElementById("area" + i)!= null && document.getElementById("number_range") != null){
				var number_range = parseInt(document.getElementById("number_range").value);
				document.getElementById("area" + i).onclick = function(a1, a2, a3, a4) { return function(){ attack(a1, a2, a3, a4) }}(current_player, attacking_territory_from, i, number_range);
			}
		}
		else {
			if (document.getElementById("area" + i)!= null)
				document.getElementById("area" + i).onclick = function(a1, a2) { return function(){ tosave(a1, a2) }}(current_player, i); 
		}
		return;
	}
	
	if (b == STATUS_ACTIVE_FOR_FORTIFICATION){
		if (attacking_territory_from >= 0){
			var number = document.getElementById("number").value;
			if (number > 0 && document.getElementById("area" + i)!= null){
				var number = parseInt(document.getElementById("number").value);
				document.getElementById("area" + i).onclick = function(a1, a2, a3, a4) { return function(){ fortify(a1, a2, a3, a4) }}(current_player, attacking_territory_from, i, number);
			}
			
		} else {
			if (document.getElementById("area" + i)!= null)
				document.getElementById("area" + i).onclick = function(a1, a2) { return function(){ tosave(a1, a2) }}(current_player, i); 
		}
		return;
	}
}

function darken(i){
	if ((attacking && attacking_territory_to == i) || (save && attacking_territory_from == i))
		document.getElementById("territory" + i).style.opacity = 0.5;
	else{
		document.getElementById("territory" + i).style.opacity = 1;
	}
}

function updowncard(active, player, card){
	var src = document.getElementById("card" + card).src;
	var b = battle_status[active_player];
	if (src.endsWith('Img/CA.png')){
		document.getElementById("card" + card).src = 'Img/C' + cards_held_by_player[player][card] + '.png'
	}
	
	if (active == 1 && b == STATUS_ACTIVE_FOR_TUNE_IN){
		var card_1 = document.getElementById("tune_in_card_1").value;
		var card_2 = document.getElementById("tune_in_card_2").value;
		var card_3 = document.getElementById("tune_in_card_3").value;		
		
		if (card_3 != ''){
			document.getElementById("card" + card_1).style.opacity = 1;
			document.getElementById("tune_in_card_1").value = '';
			document.getElementById("card" + card_2).style.opacity = 1;
			document.getElementById("tune_in_card_2").value = '';
			document.getElementById("card" + card_3).style.opacity = 1;
			document.getElementById("tune_in_card_3").value = '';
			document.getElementById("card" + card).style.opacity = 0.5;
			document.getElementById("tune_in_card_1").value = card;
			document.getElementById("submit_for_tune_in").href = '';
		}
		
		else if (card_2 != ''){
			if (card != card_2){
				document.getElementById("card" + card).style.opacity = 0.5;
				document.getElementById("tune_in_card_3").value = card;
				document.getElementById("submit_for_tune_in").onclick = function(a1, a2, a3, a4) { return function(){ tuneIn(a1, a2, a3, a4) }}(current_player, cards_held_by_player[player][card_1], cards_held_by_player[player][card_2], cards_held_by_player[player][card]);
			}
		}
		
		else if (card_1 != ''){
			if (card != card_1){
				document.getElementById("card" + card).style.opacity = 0.5;
				document.getElementById("tune_in_card_2").value = card;
				document.getElementById("submit_for_tune_in").href = '';
			}
		}
		
		else{
			document.getElementById("card" + card).style.opacity = 0.5;
			document.getElementById("tune_in_card_1").value = card;
			document.getElementById("submit_for_tune_in").href = '';
		}
		
	}
	
	else if (!src.endsWith('Img/CA.png')){
		document.getElementById("card" + card).src = 'Img/CA.png';
	}
}

function updownmission(){
	var src = document.getElementById("mission").src;
	
	if (src.endsWith('Img/MA.png')){
		document.getElementById("mission").src = 'Img/M' + mission_of_player[current_player] + '.png'
	} else {
		document.getElementById("mission").src = 'Img/MA.png';
	}
}


//ADDMANY-----------------------------------

function addMany(player, territory, number){
	if (!deactivated){
		deactivated = 1;
		
		if (okForAddMany(player, territory, number)){
			nb_soldiers_on_territory[territory] += number;
			available_soldiers_to_add[player] -= number;
		}		
		
		if (available_soldiers_to_add[player] == 0){
			if (battleStatusSum() >= 10){
				battle_status[player] = 0;
				if (battleStatusSum() == 0){
					battle_status[0] = 1;
				}
			}
			
			else {
				if (battleStatusSum() < 10 && battle_status[current_player] <= 2)
				goToNextStep();
			}
		}
	
		var s = "";
		s += "t" + territory + "=" + nb_soldiers_on_territory[territory];
		s += "&r" + player + "=" + available_soldiers_to_add[player];
		s += "&battle_status=" + battle_status.join();
		
		updateSql(s);
	} 
}

function okForAddMany(player, territory, number){
	if (battle_status[player] != STATUS_ACTIVE_FOR_DISTRIBUTION && battleStatusSum() < 10){
		return false;
	}
		
	if (territories_by_player[territory] != player){
		return false;
	}
		
	if (available_soldiers_to_add[player] < number){
		return false;
	}
		
	if (battle_status[player] == STATUS_ACTIVE_FOR_DISTRIBUTION && number <= 0){
		return false;
	}
		
	if (battleStatusSum() >= 10 && nb_soldiers_on_territory[territory] + number < 1){
		return false;
	}	
	return true;
}

function goToNextStep(){
	if (finished()){
		return;
	}
		
	//If not fortified, remain the same player
	if (battle_status[active_player] < STATUS_ACTIVE_FOR_FORTIFICATION){
		battle_status[active_player] += 1;
	}
		
	//If fortified, next player. If tune in and player lost, go to next player until get an alive player
	else if (battle_status[active_player] == STATUS_ACTIVE_FOR_FORTIFICATION){
		battle_status[getNextPlayer(active_player)] = 1;
		battle_status[active_player] = 0;
	}
		
	//First distribution case
	else if (battle_status[active_player] == STATUS_ACTIVE_FOR_FIRST_DISTRIBUTION && active_player == nb_players - 1 && available_soldiers_to_add[0] == 0){
		battle_status[getNextPlayer(active_player)] = 1;
		battle_status[active_player] = 0;
	}
		
	else{
		battle_status[getNextPlayer(active_player)] = 10;
		battle_status[active_player] = 0;
	}
}

function getNextPlayer(player){
	var i = 1;
	while (isDead((player + i) % nb_players)){
		i++;
	}
	return (player + i) % nb_players;
}

function isDead(player){
	return getTerritoriesOccupedBy(player).length == 0;
}

function getTerritoriesOccupedBy(player){
	var res = [];
	for (var i = 0; i < NB_TERRITORIES; i++){
		if (territories_by_player[i] == player)
			res.push(i)
	}
	return res;
}

//------------------------------------------


function tuneIn(player, card1, card2, card3){
	if (!deactivated){
		deactivated = 1;
	
		if (battle_status[player] != STATUS_ACTIVE_FOR_TUNE_IN){
			deactivated = 0;
			return;
		}
		
		if (!ableToTurnIn(player)){
			deactivated = 0;
			finishTuneIn(player);
			return;
		}
	
		var a = SYMBOL_ON_CARD[card1];
		var b = SYMBOL_ON_CARD[card2];
		var c = SYMBOL_ON_CARD[card3];
		
		if ((a==b && b==c) || a*a + b*b + c*c == 5){
			//Only one of the following will have effects
			for (var i = cards_held_by_player[player].length - 1; i >= 0 ; --i){
				if (cards_held_by_player[player][i] == card1 || cards_held_by_player[player][i] == card2 || cards_held_by_player[player][i] == card3)
					cards_held_by_player[player].splice(i, 1);
				}
				available_soldiers_to_add[player] += NB_TUNED_IN_SOLDIERS[next_tune_in_index];
				next_tune_in_index ++;
			}
	
		deactivated = 0;
		finishTuneIn(player);
	}
}

function ableToTurnIn(player){
	if (battle_status[player] != STATUS_ACTIVE_FOR_TUNE_IN){
		return false;
	}
		
	var symbols = [];
	for (var i = 0; i < cards_held_by_player[player].length; ++i){
		symbols.push(SYMBOL_ON_CARD[cards_held_by_player[player][i]]);
	}
		
	return hasThreeOfSameKind(symbols, player, HUMAN) || hasThreeOfSameKind(symbols, player, HORSE) || hasThreeOfSameKind(symbols, player, CANON) || hasThreeOfDifferentKinds(symbols, player);		
}

function hasThreeOfSameKind(symbols, player, kind){
	var count = 0;
	for (var i = 0; i < symbols.length; ++i){
		if (symbols[i] == kind)
			count += 1
	}
	return count >= 3;
}

function hasThreeOfDifferentKinds(symbols, player){
	return symbols.indexOf(HUMAN) >= 0 && symbols.indexOf(HORSE) >= 0 && symbols.indexOf(CANON) >= 0;
}

function finishTuneIn(player){
	if (!deactivated){
		deactivated = 1;
	
		if (!okForFinishTuneIn(player)){
			deactivated = 0;
			return;
		}
		
		if (!obligedToTuneIn(player)){
			available_soldiers_to_add[player] += pointsFromTerritories(player) + pointsFromContinents(player);
			goToNextStep();
		} else {
			deactivated = 0;
			return;
		}
	
		var s = "";
		s += "cards_held_by_player=" + cards_held_by_player[0].join();
		for (var i = 1; i < nb_players; ++i){
			s += ";";
			s += cards_held_by_player[i].join();
		}
		s += "&r" + player + "=" + available_soldiers_to_add[player];
		s += "&battle_status=" + battle_status.join();
		s += "&next_tune_in_index=" + next_tune_in_index;
		
		updateSql(s);
	}
}

function obligedToTuneIn(player){
	return cards_held_by_player[player].length >= 5;
}

function okForFinishTuneIn(player){
	if (battle_status[player] != STATUS_ACTIVE_FOR_TUNE_IN){
		return false;
	}
		
	return true;
}

function pointsFromTerritories(player){
	return Math.max(Math.floor(getTerritoriesOccupedBy(player).length / 3), 3);
}

function pointsFromContinents(player){
	var res = 0;
		
		
	if (isNorthAmericaControlledBy(player))
		res += NORTH_AMERICA_VALUE;
		
		
	if (isSouthAmericaControlledBy(player))
		res += SOUTH_AMERICA_VALUE;
		

	if (isEuropeControlledBy(player))
		res += EUROPE_VALUE;
		
		
	if (isAfricaControlledBy(player))
		res += AFRICA_VALUE;
		
		
	if (isAsiaControlledBy(player))
		res += ASIA_VALUE;
		

	if (isAustraliaControlledBy(player))
		res += AUSTRALIA_VALUE;

	return res;
}

function isNorthAmericaControlledBy(player){
	var occupied = true;
	for (var i = BEGIN_NORTH_AMERICA; i <= END_NORTH_AMERICA; i++){
		if (territories_by_player[i] != player){
			occupied = false;
			break;
		}
	}		
	return occupied;
}

function isSouthAmericaControlledBy(player){
	var occupied = true;
	for (var i = BEGIN_SOUTH_AMERICA; i <= END_SOUTH_AMERICA; i++){
		if (territories_by_player[i] != player){
			occupied = false;
			break;
		}
	}		
	return occupied;
}

function isEuropeControlledBy(player){
	var occupied = true;
	for (var i = BEGIN_EUROPE; i <= END_EUROPE; i++){
		if (territories_by_player[i] != player){
			occupied = false;
			break;
		}
	}		
	return occupied;
}

function isAfricaControlledBy(player){
	var occupied = true;
	for (var i = BEGIN_AFRICA; i <= END_AFRICA; i++){
		if (territories_by_player[i] != player){
			occupied = false;
			break;
		}
	}		
	return occupied;
}

function isAsiaControlledBy(player){
	var occupied = true;
	for (var i = BEGIN_ASIA; i <= END_ASIA; i++){
		if (territories_by_player[i] != player){
			occupied = false;
			break;
		}
	}		
	return occupied;
}

function isAustraliaControlledBy(player){
	var occupied = true;
	for (var i = BEGIN_AUSTRALIA; i <= END_AUSTRALIA; i++){
		if (territories_by_player[i] != player){
			occupied = false;
			break;
		}
	}		
	return occupied;
}

//---------------------------------

function tosave(player, territory){
	if (!deactivated){
		deactivated = 1;
	
		attacking_territory_from = territory;
		save = 1;
		resetDices();
	
		var s = "save=" + save;
		s += "&attack_dices=" + attack_dices.join();
		s += "&defend_dices=" + defend_dices.join();
		s += "&attacking_territory_from=" + attacking_territory_from;
		
		updateSql(s);
	}
}

function resetDices(){
	attack_dices = [0, 0, 0];
	defend_dices = [0, 0];
}
//---------------------------------

function attack(player, territory_from, territory_to, number){
	if (!deactivated){
		deactivated = 1;
	
		if (okForAttack(player, territory_from, territory_to, number)){
			attacking_territory_to = territory_to;
			attacking = 1;

			attack_dices = Array(number).fill(0).map(makeARandomNumber);
			attack_dices.sort(function(x, y){ return y - x} );
		}
	
		var s = "attacking=" + attacking;
		s += "&attack_dices=" + attack_dices.join();
		s += "&attacking_territory_to=" + attacking_territory_to;
		s += "&sound=1";
		
		updateSql(s);
	}
}


var makeARandomNumber = function(){
    return Math.floor(Math.random() * 6) + 1;
}


function okForAttack(player, territory_from, territory_to, number){
	if (battle_status[player] != STATUS_ACTIVE_FOR_ATTACK){
		save = 0;
		attacking_territory_from = -1;
		attacking_territory_to = -1;
		return false;
	}
	
	if (attacking){
		return false;
	}
	
	if (territories_by_player[territory_from] != player){
		save = 0;
		attacking_territory_from = -1;
		attacking_territory_to = -1;
		return false;
	}	
	
	if (NEIGHBORS[territory_from].indexOf(territory_to) < 0){
		save = 0;
		attacking_territory_from = -1;
		attacking_territory_to = -1;
		return false;
	}
	
	if (territories_by_player[territory_to] == player){
		save = 0;
		attacking_territory_from = -1;
		attacking_territory_to = -1;
		return false;
	}

	if (nb_soldiers_on_territory[territory_from] <= number){
		save = 0;
		attacking_territory_from = -1;
		attacking_territory_to = -1;
		return false;
	}
	
	return true;
}

function defend(player, territory_from, territory_to){
	if (!deactivated){
		deactivated = 1;
	
		defend_dices = Array(Math.min(2, nb_soldiers_on_territory[territory_to])).fill(0).map(makeARandomNumber); 
		defend_dices.sort(function(x, y){ return y - x} );
	
		var res_of_attack = compare(attack_dices, defend_dices);
	
		nb_soldiers_on_territory[territory_from] += res_of_attack[0];
		nb_soldiers_on_territory[territory_to] += res_of_attack[1];
	
		if (nb_soldiers_on_territory[territory_to] == 0){
			territories_by_player[territory_to] = territories_by_player[territory_from];
			nb_soldiers_on_territory[territory_to] += Math.min(3, nb_soldiers_on_territory[territory_from] - 1);
			nb_soldiers_on_territory[territory_from] -= Math.min(3, nb_soldiers_on_territory[territory_from] - 1);
		}
	
		attacking = 0;
		save = 0;
		attacking_territory_from = -1;
		attacking_territory_to = -1;
	
		var s = "attacking=" + attacking;
		s += "&save=" + save;
		s += "&attacking_territory_from=" + attacking_territory_from;
		s += "&attacking_territory_to=" + attacking_territory_to;
		s += "&defend_dices=" + defend_dices.join();
		s += "&territories_by_player=" + territories_by_player.join();
		s += "&t" + territory_from + "=" + nb_soldiers_on_territory[territory_from];
		s += "&t" + territory_to + "=" + nb_soldiers_on_territory[territory_to];
		s += "&sound=0";
		
		updateSql(s);
	}
}

function okForDefend(player, territory_from, territory_to){
	if (!attacking){
		return false;
	}
	
	if (territories_by_player[territory_to] != player){
		return false;
	}
	
	return true;
}

function compare(a, b){
	var res = [0, 0];
	for (var i = 0; i < Math.min(a.length, b.length); i++){
		if (a[i] > b[i]){
			res[1] -= 1;
		}
		else {
			res[0] -= 1;
		}
	}
	return res;
}

function finishAttack(player){
	if (!deactivated){
		deactivated = 1;
	
		if (battle_status[player] != STATUS_ACTIVE_FOR_ATTACK){
			resetDices();
			return;
		}
	
		resetDices();
		goToNextStep();

		var s="attack_dices=" + attack_dices.join();
		s += "&defend_dices=" + defend_dices.join();
		s += "&battle_status=" + battle_status.join();
			
		updateSql(s);
	}
}

//-------------------------------------------------

function fortify(player, territory_from, territory_to, number){
	if (!deactivated){
		deactivated = 1;

		if (okForFortification(player, territory_from, territory_to, number)){
			nb_soldiers_on_territory[territory_from] -= number;
			nb_soldiers_on_territory[territory_to] += number;
		}
	
		attacking_territory_from = -1;
		attacking_territory_to = -1;
		
		save = 0;
	
		var s="t" + territory_from + "=" + nb_soldiers_on_territory[territory_from];
		s += "&t" + territory_to + "=" + nb_soldiers_on_territory[territory_to];
		s += "&save=" + save;
		s += "&attacking_territory_from=" + attacking_territory_from;
		s += "&attacking_territory_to=" + attacking_territory_to;
		
		updateSql(s);
	}
}

function okForFortification(player, territory_from, territory_to, number){
		
	if (battle_status[player] != STATUS_ACTIVE_FOR_FORTIFICATION){
		return false;
	}
		
	if (territories_by_player[territory_from] != player){
		return false;
	}		
		
	if (territories_by_player[territory_to] != player){
		return false;
	}

	if (number > this.nb_soldiers_on_territory[territory_from] - 1){
		return false;
	}
		
	if (!areConnected(territory_from, territory_to)){
		return false;
	}
	
	return true;
}


function areConnected(i, j){
	return getConnectedComponent(i).indexOf(j) >= 0;
}

function getConnectedComponent(territory){
	var res = [];
	return explore(res, territory, territories_by_player[territory]);
}

function explore(res, territory, player){
	res.push(territory);
	for (var i = 0; i < NEIGHBORS[territory].length; ++i){
		if (territories_by_player[NEIGHBORS[territory][i]] == player && res.indexOf(NEIGHBORS[territory][i]) < 0){
			res = explore(res, NEIGHBORS[territory][i], player);
		}
	}		
	return res;
}

function finishFortification(player){
	if (!deactivated){
		deactivated = 1;
	
		if (battle_status[player] != STATUS_ACTIVE_FOR_FORTIFICATION){
			deactivated = 0;
			return;
		}
		
		takeACard(player);
		goToNextStep();
	
		var s="battle_status=" + battle_status.join();
		s += "&double_shuffled_cards=" + double_shuffled_cards.join();
		s += "&last_card_taken=" + last_card_taken;
		s += "&current_card=" + current_card;
		s += "&cards_held_by_player=" + cards_held_by_player[0].join();
		for (var i = 1; i < nb_players; ++i){
			s += ";";
			s += cards_held_by_player[i].join();
		}
		
		active_player_changed = 1;
		
		updateSql(s);
	}
}

function takeACard(player){
	var random_card = double_shuffled_cards[0];
	current_card += 1;
	double_shuffled_cards.splice(0,1);
	if (last_card_order == current_card){
		last_card_taken = 1;
	}
		
	cards_held_by_player[player].push(random_card);
	document.getElementById("card" + (cards_held_by_player[player].length - 1)).style.opacity = 1.0
}

//--------------------------------------



function myundo(){
	if (!deactivated){
		deactivated = 1;
	
		attacking_territory_from = -1;
		save = 0;
	
		var s="attacking_territory_from=" + attacking_territory_from;
		s += "&save=" + save;
		
		updateSql(s);
	}
}

function changerange(){
	document.getElementById("number_sign").innerHTML = document.getElementById("number_range").value
}

function updateSql(s, free=true){
	var xhttp2 = new XMLHttpRequest();
	
	xhttp2.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(s);
			document.getElementById("private_data").innerHTML = this.responseText;
			reload();
			deactivated = 0;
		}
	};

	xhttp2.open("GET", "updateSql.php?" + s, true);
	xhttp2.send();
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function finished(){
	if (last_card_taken)
		return true;
	
	for (var player = 0; player < nb_players; player++){
		if (missionCompleted(player))
			return true;
		if (getTerritoriesOccupedBy(player).length == NB_TERRITORIES)
			return true;
	}
		
	return false;
}

function missionCompleted(player){
	if (mission_of_player[player] == 0 && isNorthAmericaControlledBy(player) && isAustraliaControlledBy(player))
		return true;
	if (mission_of_player[player] == 1 && isEuropeControlledBy(player) && isAustraliaControlledBy(player))
		return true;
	if (mission_of_player[player] == 2 && isNorthAmericaControlledBy(player) && isAfricaControlledBy(player))
		return true;
	if (mission_of_player[player] == 3 && isAsiaControlledBy(player) && isSouthAmericaControlledBy(player))
		return true;
	if (mission_of_player[player] == 4 && isAsiaControlledBy(player) && isAfricaControlledBy(player))
		return true;
		
	if (mission_of_player[player] == 5 && getTerritoriesOccupedBy(player).length >= 18){
		var count = 0;
		var tb = getTerritoriesOccupedBy(player);
		for (var i = 0; i < tb.length; ++i){
			if (nb_soldiers_on_territory[tb[i]] >= 2){
				count += 1;
			}
		}
		if (count >= 18)
			return true;
	}
		
	if (mission_of_player[player] == 6 && getTerritoriesOccupedBy(player).length >= 24)
		return true;
		
	for (var concurrent = 0; concurrent < nb_players; concurrent++)
		if ( (mission_of_player[player] == 7 + concurrent) && getTerritoriesOccupedBy(concurrent).length == 0){
			return true;
		}
		
	return false;
}

function winner(){
	var winners = [];
	for (var player = 0; player < nb_players; player++){
		if (missionCompleted(player)){
			winners.push(player);
			return names[winners];
		}
	}

	var max = 0;
	for (var player = 0; player < nb_players; player++){
		if (getTerritoriesOccupedBy(player).length > max){
			max = getTerritoriesOccupedBy(player).length;
		}			
	}
		
	for (var player = 0; player < nb_players; player++){
		if (getTerritoriesOccupedBy(player).length == max){
			winners.push(names[player]);
		}			
	}
		
	return winners;
}


function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
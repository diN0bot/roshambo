var ROCK = "rock";
var PAPER = "papers";
var SCISSORS = "scissors";

var BG = {};
BG[ROCK] = "#4186D3";
BG[PAPER] = "#FFD440";
BG[SCISSORS] = "#FF8240";

var computer_choice = function() {
    return [ROCK, PAPER, SCISSORS][Math.floor(Math.random() * 3)];
};

var init = function() {
    $("#rock").text(ROCK).css("background", BG[ROCK]);
    $("#paper").text(PAPER).css("background", BG[PAPER]);
    $("#scissors").text(SCISSORS).css("background", BG[SCISSORS]);
};

var score = function(a, b) {
    if (a === ROCK && b === ROCK) {
	return 0;
    } else if (a === ROCK && b === PAPER) { 
	return -1;
    } else if (a === ROCK && b === SCISSORS) { 
	return 1;

    } else if (a === PAPER && b === ROCK) {
	return 1;
    } else if (a === PAPER && b === PAPER) { 
	return 0;
    } else if (a === PAPER && b === SCISSORS) { 
	return -1;

    } else if (a === SCISSORS && b === ROCK) {
	return -1;
    } else if (a === SCISSORS && b === PAPER) { 
	return 1;
    } else if (a === SCISSORS && b === SCISSORS) { 
	return 0;
    }
    else {
	console.log("er what? "+a+" "+b);
	return 0;
    }
}

$( document ).ready(function() {
	init();
	$(".choice").click(function() {
		var yourchoice = $(this).text();
		var compchoice = computer_choice();
		$("#youpicked").text(yourchoice).css("background", BG[yourchoice]);
		$("#computerpicked").text(compchoice).css("background", BG[compchoice]);

		var yourscore = parseInt($("#yourscore").text());
		var computerscore = parseInt($("#computerscore").text());
		$("#yourscore").text(yourscore + score(yourchoice, compchoice));
		$("#computerscore").text(computerscore + score(compchoice, yourchoice));
	    });
});
'use strict';

const rollButton = document.querySelector(".btn-roll")
const diceImg = document.querySelector(".dice")
const holdButton = document.querySelector(".btn-hold");
const newGameButton = document.querySelector(".btn-new");
const players = document.querySelectorAll(".player");
const scores = document.querySelectorAll(".score"); 
const currentScores = document.querySelectorAll(".current-score"); 

let curDice, let roundScore, let activePlayer;

function init() {
	activePlayer = 0;
	curDice = -1;
	roundScore = 0;
	diceImg.style.display = "none"
}
init();
const reset = function() {
	currentScores[activePlayer].textContent = "0";
	roundScore = 0;
}
	
const passTurn = function() {
	reset()
	for (let i = 0; i < players.length; i++) {
		if (players[i].classList.contains("player-active")) {
			players[i].classList.remove("player-active")
		} else {
			players[i].classList.add("player-active")
		}
	}
	activePlayer = (activePlayer + 1) % 2
}

const rollDice = function() {
	const roll = Math.floor(Math.random() * 6) +1
	console.log(roll);
	return roll;
}

const setImg = function(num) {
	if (diceImg.style.display === "none") diceImg.style.display = "inline"
	diceImg.src = "assets/dice-" + String(num) + ".png";
}

rollButton.addEventListener("click", () => {
	curDice = rollDice();
	setImg(curDice);
	if (curDice === 1) {
		passTurn()
	} else {
		roundScore += curDice;
		currentScores[activePlayer].textContent = Number(currentScores[activePlayer].textContent) + curDice
	}
});

holdButton.addEventListener("click", () => {
	scores[activePlayer].textContent = 	Number(scores[activePlayer].textContent) + roundScore;
	reset();
	passTurn();
});

newGameButton.addEventListener("click", () => {
	for (let i = 0; i < 2; i++) {
		scores[i].textContent = "0"
		currentScores[i].textContent = "0"
	}
	init();
	if (!players[0].classList.contains("player-active")) {
		players[0].classList.add("player-active")
		players[1].classList.remove("player-active")
	}
});

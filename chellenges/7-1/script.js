"use strict";

//73 DOM manipulation
/*
const message = document.querySelector(".message");
console.log(message);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

console.log(document.querySelector(".guess").value);
document.querySelector(".guess").value = 2;
*/
//74 event listner


let secretNumber = Math.floor((Math.random() * 20) + 1); 			// random number between 1 - 20
let score = 20;
let highscore = -1;

document.querySelector(".check").addEventListener("click", () => {
		const guess = Number(document.querySelector(".guess").value);
		if (!guess || guess > 20 || guess < 0) {
			document.querySelector(".message").textContent = "Not a Valid Entry!";
			return;
		}
		if (score < 1) return;
		if (guess === secretNumber) {
			document.querySelector(".message").textContent = "Winner"
			document.querySelector("body").style.backgroundColor = "#60b347";

			document.querySelector(".number").textContent = String(secretNumber); 
			document.querySelector(".number").style.width = "30rem"; 

			//set highscore
			if (score > highscore) {
				highscore = score;
				document.querySelector(".label-highscore").textContent = "highscore: " + String(highscore);
			}
		} else {
				if (guess > secretNumber) {
				document.querySelector(".message").textContent  = "Too High";
			} else {
				document.querySelector(".message").textContent = "Too Low";
			}
			score--;
			document.querySelector(".score").textContent = score;
			if (score == 0) document.querySelector(".message").textContent = "you Lost";
		}

});

document.querySelector(".again").addEventListener("click", () => {
	score = 20;
	secretNumber = Math.floor((Math.random() * 20) + 1);	
	document.querySelector(".message").textContent = "Start Guessing...";
	document.querySelector(".score").textContent = score;
	document.querySelector(".guess").value = "";
	document.querySelector(".number").textContent = "?";
	document.querySelector(".number").style.width = "15rem";
	document.querySelector("body").style.backgroundColor = "#222";
});

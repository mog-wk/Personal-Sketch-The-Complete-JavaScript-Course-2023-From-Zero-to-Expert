"use strict"

const tests = [
	[[44, 23, 71], [65, 54, 49]],
	[[85, 54, 41], [23, 34, 27]],
]

const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function(avgDolphins, avgKoalas) {
	const winner = (avgDolphins > avgKoalas) ? "dolphins" : "koalas";
	console.log(`${winner} won by ${abs(avgDolphins - avgKoalas)} (${avgDolphins} vs ${avgKoalas})`);
}

const abs = function(x) {
	return (x < 0) ? x * -1 : x;
}
for (let test of tests) {
	const avgDolphins = calcAvg(test[0][0], test[0][1], test[0][2])
	const avgKoalas = calcAvg(test[1][0], test[1][1], test[1][2])
	console.log(`dolphins: ${avgDolphins}`)
	console.log(`koalas: ${avgKoalas}`)
	checkWinner(avgDolphins, avgKoalas);
}



function main(d1, d2, d3, k1, k2, k3) {
	const dolphinsAvg = (d1 + d2 + d3) / 3;
	const koalasAvg = (k1 + k2+ k3) / 3;
	if (dolphinsAvg == koalasAvg && dolphinsAvg > 99 && koalasAvg > 99) console.log("draw");
	else if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) console.log("dolphinswon");
	else if (koalasAvg >= 100) console.log("koalaswon");
	else console.log("not a winner");
}

const data = [
	[96, 108, 89, 88, 91, 110],
	[97, 112, 101, 109, 95, 123],
	[97, 112, 101, 109, 95, 106],
];

data.forEach(d => {
	main(d[0], d[1], d[2], d[3], d[4], d[5]); 
});


"use strict"

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = []

const calcTips = function (pay){
	return pay > 50 && pay < 200 ? pay * 0.15 : pay * 0.20;
}

const calcAvg = function (arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) 
		sum += arr[i];
	return sum / arr.length
}

//bills.forEach( el => {	
//	const tip = tips.push(calcTips(el));
//	totals.push(tips[tip-1] + el);
//});

for (let i = 0; i < bills.length; i++) {
	const tip = tips.push(calcTips(bills[i]));
	totals.push(tips[tip-1] + bills[i]);
	console.log(`interation: ${i}`);
	console.log("elements:	",
		bills[i],
		tips[i],
		totals[i],
	);
	console.log("avgs:		",
		calcAvg(bills),
		calcAvg(tips),
		calcAvg(totals),
	);
}


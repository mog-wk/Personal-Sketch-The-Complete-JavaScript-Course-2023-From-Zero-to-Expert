

function calcBill (x) {
	const bill = x
	const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

	console.log(`the bill was ${bill}, the tip was ${tip}, the total was ${bill + tip}`);
}


const tests = [
	275.40,
	430,
];

tests.forEach(test => {
	calcBill(test);
});

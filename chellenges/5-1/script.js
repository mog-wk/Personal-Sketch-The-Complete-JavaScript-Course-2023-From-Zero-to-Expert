"use strict"

const tests = [
	[17, 21, 23],
	[12, 5, -5, 0, 4],
];
const printForecast = function(arr) {
	for (let i = 0; i < arr.length; i++) 
		console.log(`${arr[i]} C in ${i} days`);
}

tests.forEach(test => console.log(printForecast(test)));

/*
1. understanding
	temp. unit (celcius, farhthint..., kelvin
2. divide et impera
	2.1 loop arr
	2.2 log contents
3. research
4. pseudo-code
for element in array
	print pritty message
*/

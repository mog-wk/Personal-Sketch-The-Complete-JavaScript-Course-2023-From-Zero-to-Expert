

function main(markMass, markHeight, johnMass, johnHeight) {
	const markBMI = markMass / markHeight**2;
	const johnBMI = johnMass / johnHeight**2;

	//02
	if (markBMI > johnBMI) {
		console.log(`mark has ${markBMI - johnBMI} mode BMI than john`);
	} else {
		console.log(`john has ${(markBMI - johnBMI) * 1} mode BMI than mark`);
	}
}


const tests = [
	[78, 1.69, 92, 1.95],
	[95, 1.88, 85, 1.76],
];

tests.forEach(test => {
	main(test[0], test[1], test[2], test[3]); 
});

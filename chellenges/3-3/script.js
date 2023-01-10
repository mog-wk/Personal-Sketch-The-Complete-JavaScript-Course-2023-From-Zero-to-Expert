"use strict"

const mark = {
	name: "mark pogger",
	mass: 78,
	height: 1.69,
	
	calcBMI: function() {
		this.BMI = this.mass / this.height ** 2;
		return this.BMI;
	},

}
mark.calcBMI();
const john = {
	name: "john pepega",
	mass: 92,
	height: 1.95,

	calcBMI: function() {
		this.BMI = this.mass / this.height ** 2;
		return this.BMI;
	},
}
john.calcBMI();

console.log(
	mark,
	john,
);

if (mark.BMI > john.BMI) {
	console.log(mark.name + " BMI: " + mark.BMI);
} else {
	console.log(john.name + john.BMI)
}



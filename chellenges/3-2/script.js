"use strict"

const calcTip = bill => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [];
for (let i = 0; i < 3; i++)	total[i] = bills[i] + tips[i];

console.log(bills, tips, total);

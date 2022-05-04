const firstName = ["Daniele", "Marco", "Giuseppe", "Mirko"];
const secondName = ["Ciccarelli", "Rossi", "Verdi", "Esposito"];

let list = [];

const item = firstName[Math.floor(Math.random() * firstName.length)];
const secondItem = secondName[Math.floor(Math.random() * firstName.length)];
list.push(item + " " + secondItem);
console.log(list);
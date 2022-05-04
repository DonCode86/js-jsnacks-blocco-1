const numbersBox = []
let userNumber;
for (let i = 0; i < 6; i++) {
    userNumber = Number(prompt("inserisci un numero"));
    if (userNumber % 2 === 1) {
        numbersBox.push(userNumber);
    }
}
console.log(numbersBox);
// const firstNumber = Number(prompt("inserisci il primo numero"));
// const secondNumber = Number(prompt("inserisci il secondo numero"));
// const thirdNumber = Number(prompt("inserisci il terzo numero"));
// const fourthNumber = Number(prompt("inserisci il quarto numero"));
// const fifthNumber = Number(prompt("inserisci il quinto numero"));
// const sixthNumber = Number(prompt("inserisci il sesto numero"));
// const seventhNumber = Number(prompt("inserisci il settimo numero"));
// const eighthNumber = Number(prompt("inserisci l'ottavo numero"));
// const ninthNumber = Number(prompt("inserisci il nono numero"));
// const tenthNumber = Number(prompt("inserisci il decimo numero"));

let total = 0;

for (let i = 0; i < 10; i++) {
    const userNumber = Number(prompt("inserisci un numero"));
    total += userNumber;
}

console.log(total);
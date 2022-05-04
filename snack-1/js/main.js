const firstNumber = Number(prompt("Inserisci il primo numero"));
const secondNumber = Number(prompt("Inserisci il primo numero"));

if (firstNumber === secondNumber) {
    console.log("I due numeri sono uguali")
} else if (firstNumber > secondNumber) {
    console.log(firstNumber)
} else {
    console.log(secondNumber)
}
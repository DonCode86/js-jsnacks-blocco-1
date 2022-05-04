const firstWord = prompt("inserisci la prima parola");
const secondWord = prompt("inserisci la seconda parola");

if (firstWord.length > secondWord.length) {
    console.log(secondWord, firstWord);
} else if (firstWord.length < secondWord.length) {
    console.log(firstWord, secondWord);
} else {
    console.log("le due parole sono uguali")
}
const firstWord = prompt("inserisci la prima parola");
const secondWord = prompt("inserisci la seconda parola");

if (firstWord.length > secondWord.length) {
    console.log(secondWord, firstWord);
} else {
    console.log(firstWord, secondWord);
}
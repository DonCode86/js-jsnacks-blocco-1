const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let even = 0;
let odd = 0;

for (let i = 0; i < Numbers.length; i++) {
    if (i % 2 === 0) {
        even += Numbers[i];
    }
}

console.log("La somma dei numeri dispari e': " + even);
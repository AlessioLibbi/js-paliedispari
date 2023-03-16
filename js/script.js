// **Palindroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.






// // Chiedo all'utente di inserire una parola
// const word = prompt("Inserisci una parola");

// // Creo una funzione per capire se la parola è palindroma
// function isPalindrome(reverseWord) {
//   return reverseWord === reverseWord.split("").reverse().join("");
// }

// // Stampo il risultato
// if (isPalindrome(word)) {
//   console.log(`${word} è una parola palindroma`);
// } else {
//   console.log(`${word} non è una parola palindroma`);
// }


// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
let userNumber;
let userOddEven ;
do {
    userOddEven = prompt("Scegli pari o dispari").toLowerCase()
} while (userOddEven !== "pari" && userOddEven !== "dispari")
console.log (userOddEven);

do {
    userNumber = (parseInt(prompt("Inserisci un numero da 1 a 5")))
} while (isNaN(userNumber) || userNumber < 1 || userNumber > 5 ) {
    console.log (userNumber);
}

console.log(userNumber);

let randomNumber = pcRandomNumber (1, 5)
//Creo la funzione per il numero casuale
function pcRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) +min;
}
// Sommo i due numeri
let resultSumm = userNumber + randomNumber;
console.log(resultSumm);
// Funzione per capire se e pari o dispari 
function OddEven (resultSumm) {
    if (resultSumm % 2 === 0) {
       return "pari"
    }else {
        return "dispari"
    }
}

let OddEvenResult = OddEven(resultSumm)
console.log(OddEven(resultSumm));
// Capisco chi ha vinto
if (userOddEven === OddEvenResult) {
    console.log("Hai vinto");

}else {
    console.log("Hai perso")
}
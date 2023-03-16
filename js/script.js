// **Palindroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.






// Chiedo all'utente di inserire una parola
const word = prompt("Inserisci una parola");

// Creo una funzione per capire se la parola è palindroma
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

// Stampo il risultato
if (isPalindrome(word)) {
  console.log(`${word} è una parola palindroma`);
} else {
  console.log(`${word} non è una parola palindroma`);
}

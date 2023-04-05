/*
chiedere all'utente il numero di km che vuole percorrere e età del passeggero
moltiplicare i km inseriti (variabile dei km) per 0.21 € per avere la somma totale del viaggio
SE età dell' utente < 18  {
    sconto del 20%
} ALTRIMENTI SE età dell'utente > 65 {
    sconto 40%
}
risultato stampato in pagina con solo 2 decimali
*/

const kmToTravel = parseInt(prompt('Quanti km vuoi percorrere?'));
const age = parseInt(prompt(`Quanti anni hai?`));

const sum = kmToTravel + age 
console.log(`Somma km + età:` + sum)

let price = sum * 0.21;
console.log(`Somma km + età moltiplicato per 0.21€:` + price)

const discount20 = price * 0.2;
const discount40 = price * 0.4;

// if (isNaN(kmToTravel) || isNaN(age)) {
//     document.getElementById (`finalPrice`).innerHTML = `Non hai inserito un valore corretto, ricarica la pagina!`
// } else 

if (age < 18) {
    price = price - discount20;
    console.log(`Prezzo con sconto 20%` + price)
} else if (age > 65) {
    price = price - discount40;
    console.log(`Prezzo con sconto 40%` + price)
}

document.getElementById (`finalPrice`).innerHTML = `Il costo del biglietto è: ${price.toFixed(2)} €`
    
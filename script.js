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
console.log(sum)

const price = sum * 0.21 
console.log(price)
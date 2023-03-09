/*

Descrizione:
scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica ma usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il riepilogo dei dati inseriti e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

*/

/* Strumenti:
    - number() prompt
    - const / let
    - console-log
    - .toFixed()
    - if / else
    - getElementById / querySelector
    - addEventListener
    - function ()
*/

//chiedere all'utente il nome e cognome con input e registrarla
const inputTextEl = document.getElementById('user');
console.log(inputTextEl.innerText);
//chiedere all'utente i km da percorrere con input e registrarli
const inputNumberEl = document.getElementById('km');
console.log(inputNumberEl.innerText);

//chiedere all'utente la fascia d'età con select e registrarla
const selectAgeRangeEl = document.getElementById('ageRange').value = 'minorenne';
console.log(selectAgeRangeEl.innerText);

//definire la variabile del prezzo al chilomentro (euro 0,21)
const pricePerKilometre = 0.21;
console.log(pricePerKilometre);

//calcolare il prezzo del biglietto moltiplicando il numero di chilometri per il prezzo al chilometro
let price = inputNumberEl.innerText * pricePerKilometre;
console.log(price);

//verificare se l'utente ha un'età inferiore ai 18 anni ed applicare lo sconto del 20% o se l'utente ha un'età superiore ai 65 anni ed applicare lo sconto del 40%

/*
if (userAge < 18) {
    price -= (price * 0.20);
    console.log(price);

} else if (userAge > 65) {
    price -= (price * 0.40);
    console.log(price);
}
*/

// transformare il prezzo in modo che abbia un massimo di due numeri decimali
//price = price.toFixed(2);

//aggiungere un h1 con id per mostrare il prezzo in schermata

//selezionare e salvare in una variabile l'elemento della dom con getElementById
//const element = document.getElementById('finalPrice');

//comunicare all'utente il costo del biglietto
//element.innerHTML=`Il prezzo per il tuo biglietto è di ${price} euro`;
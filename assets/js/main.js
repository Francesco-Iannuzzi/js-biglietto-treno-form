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
    - element.value
    - addEventListener
    - function ()
    - Math.floor
    - Math.random
*/


//far inviare i dati dall'utente cliccando sul bottone "genera"
const buttonSubmitEl = document.getElementById('submit')
buttonSubmitEl.addEventListener('click',

    function () {

        //chiedere all'utente il nome e cognome con input e registrarla
        const nameValue = document.getElementById('user').value;
        console.log(document.getElementById('user').value);

        //chiedere all'utente i km da percorrere con input e registrarli
        const kmValue = document.getElementById('km').value;
        console.log(document.getElementById('km').value);

        //chiedere all'utente la fascia d'età con select e registrarla
        const ageValue = document.getElementById('ageRange').value;
        console.log(document.getElementById('ageRange').value);

        //definire la variabile del prezzo al chilomentro (euro 0,21)
        const pricePerKilometre = 0.21;
        console.log(pricePerKilometre);

        //calcolare il prezzo del biglietto moltiplicando il numero di chilometri per il prezzo al chilometro
        let price = document.getElementById('km').value * pricePerKilometre;
        console.log(price);

        //verificare se l'utente ha un'età inferiore ai 18 anni ed applicare lo sconto del 20% o se l'utente ha un'età superiore ai 65 anni ed applicare lo sconto del 40%
        if (document.getElementById('ageRange').value == 'minorenne') {
            price -= (price * 0.20);
            console.log(price);

        } else if (document.getElementById('ageRange').value == 'over65') {
            price -= (price * 0.40);
            console.log(price);
        }

        //transformare il prezzo in modo che abbia un massimo di due numeri decimali
        price = price.toFixed(2);

        //stampiamo il biglietto indicando il prezzo ed il tipo di biglietto usando getElementById
        const h5PassengerEl = document.getElementById ('namePassenger');
        h5PassengerEl.innerText = `${nameValue}`;

        //indicare sul biglietto se è un biglietto per minorenni, maggiorenni o over 65
        const spanPlanEl = document.getElementById ('plan');
        if (document.getElementById('ageRange').value == 'minorenne') {
           spanPlanEl.innerText = `Biglietto Minorenni`

        } else if (document.getElementById('ageRange').value == 'maggiorenne') {
            spanPlanEl.innerText = `Biglietto Standard`;

        } else if (document.getElementById('ageRange').value == 'over65') {
            spanPlanEl.innerText = `Biglietto Over 65`;
        }

        //generare un numero casuale con math.floor(Math.random() * 9) + 1) per la carrozza e stamparlo a schermo
        const randomCarriage = Math.floor(Math.random() * 9) + 1;
        console.log(randomCarriage);
        const spanCarriageEl = document.getElementById(carriage);
        carriage.innerText = `${randomCarriage}`

        //generare un numero casuale con math.floor(Math.random() * 10000) + 1) per il codice cp e stamparlo a schermo
        const randomCodeCP = Math.floor(Math.random() * 99999) + 1;
        console.log(randomCodeCP);
        const spanCodeCPEl = document.getElementById(codeCP);
        codeCP.innerText = `${randomCodeCP}`

        //stampare il prezzo finale sul biglietto
        const spanFinalPriceEl = document.getElementById ('finalPrice');
        spanFinalPriceEl.innerText = `€ ${price}`;

    }

);

//cancellare il testo negli input
const buttonResetEl = document.getElementById('reset')
buttonResetEl.addEventListener('click',

    function () {
        const inputEl = document.querySelector('input')
        inputEl.innerHTML = 'ciao'
    }

);




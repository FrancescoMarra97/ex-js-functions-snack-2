/* Snack 1:  Crea una funzione che somma due numeri.

Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.

Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile

Quindi, riscrivi la funzione somma con la sintassi delle arrow functions. */

function somma(a, b) {
    return a + b;
}
console.log(somma(1, 2));


const sum = function (a, b) {
    return a + b
}

const funzioneSomma = (a, b) => a + b;

/* Snack 2: Crea una arrow function che calcola il quadrato di un numero.

Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga. */

const quadrato = (a) => a * a;

/* Snack 3: Crea una funzione eseguiOperazione
Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback).
La funzione deve eseguire l'operazione fornita sui due numeri. */

const sottrazione = (a, b) => a - b;
const divisione = (a, b) => a / b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b);
console.log(eseguiOperazione(4, 2, sottrazione));
console.log(eseguiOperazione(15, 3, divisione));

/* Snack 4:  Crea un generatore di funzioni creaTimer
Scrivi una funzione creaTimer che accetta un tempo (in ms) 
e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!". */
/* Crea una funzione che somma due numeri.

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
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
console.log(sum(3, 5));

const funzioneSomma = (a, b) => a + b;
console.log(funzioneSomma(2, 2));

/* Snack 2: Crea una arrow function che calcola il quadrato di un numero.

Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga. */

const quadrato = (a) => a * a;
console.log(quadrato(16));

/* Snack 3: Crea una funzione eseguiOperazione
Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback).
La funzione deve eseguire l'operazione fornita sui due numeri. */

const sottrazione = (a, b) => a - b;
const divisione = (a, b) => a / b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b);
console.log(eseguiOperazione(8, 2, sottrazione));
console.log(eseguiOperazione(15, 3, divisione));

/* Snack 4:  Crea un generatore di funzioni creaTimer
Scrivi una funzione creaTimer che accetta un tempo (in ms) 
e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!". */

function creaTimer(tempo) {
    return function () {
        setTimeout(() => {
            console.log("tempo scaduto");
        }, tempo)
    }
}

const timer = creaTimer(2000);
timer()

/* Snack 5: Crea una funzione stampaOgniSecondo con setInterval.
Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script. */

function stampaOgniSecondo(message) {
    let count = 0;
    const interval = setInterval(() => {
        console.log(message);
        count++;
        if (count === 5) {
            clearInterval(interval)
            console.log("stop");
        }
    }, 1000)
}

stampaOgniSecondo("ciao")

/*Snack 6: Crea un contatore automatico con setInterval
Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval,
 incrementando un contatore e stampandolo. */

function creaContatoreAutomatico(interval) {
    let contatore = 0;
    return function () {
        const intervallo = setInterval(() => {
            contatore++
            console.log(contatore);
            if (contatore === 10) {
                clearInterval(intervallo)
                console.log("contatore fermato");

            }
        }, interval)

    }
}

const avviaContatore = creaContatoreAutomatico(1000)
avviaContatore()

/* Snack 7: Crea una funzione che ferma un timer dopo un certo tempo
Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. 
Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop. */

function eseguiEferma(message, start, end) {
    const timeStart = setInterval(() => {
        console.log(message);
    }, start);

    setTimeout(() => {
        clearInterval(timeStart)
    }, end);
}
eseguiEferma("Messaggio stampato ogni secondo", 1000, 5000);

/* Snack 8 (Bonus): Crea una funzione che simula un conto alla rovescia
Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0,
con un intervallo di 1 secondo tra ogni numero.
Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer. */

function contoAllaRovescia(number) {
    let count = number;
    const intervallo = setInterval(() => {
        console.log(count);
        count--;
        if (count === 0) {
            clearInterval(intervallo)
            console.log("tempo scaduto!");

        }
    }, 1000);
}
contoAllaRovescia(10)
/* Snack 9 (Bonus) Creare una funzione che esegue una sequenza di operazioni con ritardi
Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.

Esempio di utilizzo:
sequenzaOperazioni([
  () => console.log("Operazione 1"),
  () => console.log("Operazione 2"),
  () => console.log("Operazione 3")
], 2000);
Output atteso:
Operazione 1
Operazione 2
Operazione 3*/

function sequenzaOperazioni(operazioni, tempo) {
    operazioni.forEach((operzione, index) => {
        setTimeout(() => {
            operzione();
        }, tempo * index);
    });
}

sequenzaOperazioni([
    () => console.log("Operazione 1"),
    () => console.log("Operazione 2"),
    () => console.log("Operazione 3")
], 2000)


/* Snack 10 (Bonus)
Creare un throttler per limitare l’esecuzione di una funzione
Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.
Esempio di utilizzo:
const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);
​
throttledLog(); // ✅ "Eseguito!"
throttledLog(); // ❌ Ignorato (chiamato troppo presto)
setTimeout(throttledLog, 2500); // ✅ "Eseguito!" (dopo 2.5 secondi)
  */ 
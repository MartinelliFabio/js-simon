"use strict";
/*  -----------------------------------------------------------------------------------------------
    Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
    Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite una casella di input e un bottone
    Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
--------------------------------------------------------------------------------------------------- */

// Creo l'array per raccogliere i numeri randomici
let numeri = [];
const numeriDiNumeri = 5; // Creo la variabile assegnando il numero di numeri casuali da visualizzare

// Uso un ciclo per generare i numeri e popolarli nell'array
function createNumbers () {
    while(numeri.length < numeriDiNumeri) {
        const numeroGenerato = randomNumber(1, 100);
            // Controllo se ci sono numeri uguali
            if(!numeri.includes(numeroGenerato)) {
                numeri.push(numeroGenerato);
            }
    }
    console.log(numeri); // Stampo il contenuto dell'array
    
    // Prendo il div#numeri e stampo il risultato dell'array
    const numeriHTML = document.getElementById('numeri');
    numeriHTML.innerHTML = `Questi sono i 5 numeri generati casualemente: <br> ${numeri}`;
}
createNumbers(); // Richiamo la funzione

// Creo la variabile timer assegnando un intervallo di 3 secondi
const timer = setInterval(timerNumeri, 3000);

// Funzione per far scomparire il div#numeri 
function timerNumeri () {
    document.getElementById("numeri").classList.add('invisible');
}

const pushaInputHTML = document.getElementById('pusha-input');
const arrInputUtente = [];

function pushaNumero() {

    let inputNumber = parseInt(document.getElementById('input').value);
    
    if(input.value == "") {
        alert('Devi Scrivere qualcosa');
    } else if(arrInputUtente.length < numeriDiNumeri) {
        arrInputUtente.push(inputNumber);
        console.log(arrInputUtente);
        const outputNumeriHTML = document.getElementById('output-numeri');
        outputNumeriHTML.innerHTML = 'Hai inserito il numero: ' + arrInputUtente;
    }
    input.value = '';
}
pushaInputHTML.addEventListener('click', () => {
    pushaNumero();
})

const verificaInputHTML = document.getElementById('verifica-input');
const risultatoHTML = document.getElementById('risultato');
let contatore = 0;

function verificaNumeri() {
    for(let i = 0; i < numeriDiNumeri; i++) {
        if(arrInputUtente.includes(numeri[i])) {
            risultatoHTML.innerHTML = 'Hai indovinato tutti i numeri!';
        } else {
            contatore++;
            console.log('no');
            risultatoHTML.innerHTML = 'Hai mancato: ' + contatore + ' numeri!';
        }
    }
}
verificaInputHTML.addEventListener('click', () => {
    verificaNumeri();
});


const generaNumeriHTML = document.getElementById('genera-numeri')

function generaNumeri() {
    numeri = [];
    createNumbers();
    document.getElementById("numeri").classList.remove('invisible');
    document.getElementById("numeri").classList.add('visible');
}
generaNumeriHTML.addEventListener('click', () => {
    generaNumeri();
});

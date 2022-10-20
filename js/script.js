"use strict";
/*  -----------------------------------------------------------------------------------------------
    Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 3 secondi.
    Dopo 3 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite una casella di input e un bottone
    Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
--------------------------------------------------------------------------------------------------- */

//Sezione delle function()

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


// Creo la variabile timer assegnando un intervallo di 3 secondi
const timer = setInterval(timerNumeri, 3000);

// Funzione per far scomparire il div#numeri 
function timerNumeri () {
    document.getElementById("numeri").classList.add('invisible');
}

// Dopo i 3 secondi del timer e che i numeri randomici sono scomparsi, chiedi all'utente di inserire e indovinare i 5 numeri precedentemente stampatia schermo
const pushaInputHTML = document.getElementById('pusha-input');
let arrInputUtente = []; // Creo un array vuoto dove inserirò i 5 numeri inseriti
const outputNumeriHTML = document.getElementById('output-numeri');

function pushaNumero() {
    let inputNumber = parseInt(document.getElementById('input').value);
    
    // Operatore condizionale if per vedere se l'utente inserisce un numero e/o il limite di 5 numeri da inserire
    if(input.value == "") {
        alert('Devi Scrivere qualcosa');
    } else if(arrInputUtente.length < numeriDiNumeri) {
        arrInputUtente.push(inputNumber);
        console.log(arrInputUtente);
        outputNumeriHTML.innerHTML = 'Hai inserito il numero: ' + arrInputUtente;
    }
    input.value = '';
}

// Ora verifico se i numeri inseriti dall'utente siano uguali a quelli generati randomicamente
const verificaInputHTML = document.getElementById('verifica-input');
const risultatoHTML = document.getElementById('risultato');
let contatore = 0; // contatore per vedere quanti elementi ha mancato l'utente

function verificaNumeri() {
    const numeriGiusti = []; // array per racchiudere i numeri indovinati dall'utente
    for(let i = 0; i < numeriDiNumeri; i++) {
        // Operatore condizionale if per vedere se i numeri inseriti dall'utente siano uguali a quelli randomici
        if(arrInputUtente.includes(numeri[i])) {
            numeriGiusti.push(arrInputUtente[i]);
            risultatoHTML.innerHTML = 'Hai indovinato tutti i numeri! <br> I numeri indovinati sono: ' + numeri;
        } else {
            contatore++;
            console.log('no');
            risultatoHTML.innerHTML = 'Hai mancato: ' + contatore + ' numeri! <br> I numeri indovinati sono: ' + numeriGiusti;
        }
    }
    console.log(numeriGiusti);
}

// Funzione per rigenerare i numeri randomici e svuotare i vari array e elementi html
const generaNumeriHTML = document.getElementById('genera-numeri')

function generaNumeri() {
    numeri = [];
    createNumbers();
    document.getElementById("numeri").classList.remove('invisible');
    document.getElementById("numeri").classList.add('visible');
    outputNumeriHTML.innerHTML = '';
    risultatoHTML.innerHTML = '';
    arrInputUtente = [];
    contatore = 0;
}


// Sezione per il richiamo delle funzioni
createNumbers(); // Richiamo la funzione creazione numeri

// Richiamo la funzione al click del bottone per pushare i numeri
pushaInputHTML.addEventListener('click', () => {
    pushaNumero();
});

// Richiamo la funzione al click del bottone per verificare i numeri
verificaInputHTML.addEventListener('click', () => {
    verificaNumeri();
});

// Richiamo la funzione al click del bottone per rigenerare i numeri
generaNumeriHTML.addEventListener('click', () => {
    generaNumeri();
});




// DICHIARAZIONI VARIABILI

// nome utente
const nome = document.getElementById('name');

// cognome utente
const cognome = document.getElementById('lstname');

// colore preferito
const colore = document.getElementById('color');

// input btn
const btn1 = document.getElementById('btn1');

// output testo
const output = document.getElementById('pwd');


// pwd generator
const pwdweak = nome + cognome + colore + 21;



// input by user

function f1() {
    output.innerText = pwdweak;
}

btn1.addEventListener('click',f1);
//Dichiarazione funzione

function saluta(nome,cognome){
    console.log('Ciao stronzo ancora più ' + nome +cognome);
}

saluta('stronzo','Merda');  //per utilizzare una funzione, questa deve essere richiamata

const ris = function (x){
    return x*x;
}

console.log(ris(5));

// IIFE (immediately invoked function expression)
(function saluta_2(nome){
    console.log(nome + ' mi ha invocato subito');
})('Luigi')
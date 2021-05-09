// for loop

/* for(statement 1; statement 2; statement 3){
    code
}
statement 1 --> eseguito la prima volta che si entra in loop prima di eseguire il codice interno
statement 2 --> definisce la condizione affinchè venga eseguito il codice interno
statement 3 --> eseguito ogni volta dopo aver eseguito il blocco di codice interno al for
*/

function fattoriale(n){
    var ris=1;
    for(var i=n;i!=0;i--){
        ris*=i;
    }
    return ris;
}

console.log('Fattoriale: ',fattoriale(9));

// while loop

/*
while(condition){
    code
}
condition --> finchè la condizione è rispettata viene eseguito il codice interno
*/

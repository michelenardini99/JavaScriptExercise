const num1 = 25;
const num2 = 6;

let risultato

//operazioni di base

console.log('num1 + num2 = ',num1+num2);
console.log('num1 - num2 = ', num1-num2);
console.log('num1 * num2 = ',num1*num2);
console.log('num1 / num2 =',num1/num2);

//modulo --> da come risultato il resto della divisione

console.log('num1 % num2 = ',num1%num2);

//Oggetto Math

console.log('Math.PI ',Math.PI); //stampa il pi greco
console.log('Math.round ',Math.round(42.534));   //effettua arrotondamento
console.log('Math.sqrt ',Math.sqrt(36));   //effettua la radice
console.log('Math.abs ',Math.abs(-45));  //ritorna il numero assoluto
console.log('Math.pow',Math.pow(3,2));  //effettua la potenza usando il primo argomento come base e il secondo come esponente
console.log('Math.min',Math.min(5,2,7,1,0,-3)); //trova il minimo tra i valori inseriti, viceversa con max
console.log('Math.random',Math.floor(Math.random()*100));   //stampa un numero casuale tra 0 e 100, Math.floor arrotonda per difetto

//Cópia rasa de arrays

let orig = [1,2,3,4,5];
let copia = [...orig];

console.log(orig);
console.log(copia);
console.log(orig === copia); //falso (objsetos diferentes)


let cut = orig.slice();

console.log(cut);
console.log(orig === cut); //false (objsetos diferentes)
console.log(copia === cut); //false (objsetos diferentes)

let concatena = [].concat(orig);

console.log(concatena);
console.log(orig === concatena); //false (objsetos diferentes)

//modificar elementos no array copiado não altera o original

copia.push(6);

console.log(orig);
console.log(copia);
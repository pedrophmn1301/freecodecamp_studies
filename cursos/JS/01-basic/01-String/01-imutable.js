
//Strings não são mutáveis, são constantes, potanto seu valor não se altera, apenas concatena.

let letras = "Pedro";

console.log(letras);

letras = "Henrique";

console.log(letras);

let teste = "Este é um teste, "+letras+"."; //Assume a última alteração da String:

console.log(teste)
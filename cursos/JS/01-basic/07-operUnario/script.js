
//Operadores unários: 

//Operador unário + ou -: converte qualquer valor em número:

const str = "10";

console.log(typeof str);    //string

const converteString = +str;

console.log(typeof converteString);     //number

console.log(str + 10);      //concatena string

console.log(converteString + 10);   //soma os números, pois a string foi convertida

const converteStringNegative = -str;

console.log(converteStringNegative);

//############################################################################

//Operador unário NOT → !
//Inverte o valor recebido

const verb = true;

console.log(verb);

console.log(!verb);

// bit a bit do operar NOT: ~   Usado apenas para manipulação de bit a bit
//  esse operardor inverte a posição de bit do número representado.
//  ex.: o número 0 representa o primeiro número positivo. O -1 representa o primeiro número negativo.
//  O sinal de ~ inverte esses valores, o número positivo em sua posição será invertido para o número negativo da mesma posição
//  outro exemplo: o número ~10 == 9

const num = -6;

console.log(num);
console.log(~num);
console.log(~-10 == 9);


//############################################################################

//O operador unário void é utilizado para undefined

const result = void(2 + 2);

console.log(result);

//Operardor void é comumente utilizado em hiperlinks para evitar navegação:
// <a href="javascript:void(0);">Click Me</a>

//ele não leva há lugar algum

//############################################################################

//  Operador typeof

const x = 10;

const letter = "string";

console.log(typeof x);

console.log(typeof letter);
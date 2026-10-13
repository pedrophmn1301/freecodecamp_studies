
//Objeto Math

//Alguns métodos:

//Math.random gera um número de 0 a 1, excluindo o 1

let numRandom = Math.random();  

console.log(numRandom);


//O Math.max retorna o maior número informado.

let numMax = Math.max(1,5,11,9,2);  

console.log(numMax);    //11


//O Math.min retorna o menor número informado.

let numMin = Math.min(5,11,9,2);  

console.log(numMin);    //2


//Math.ceil(): arredonda para cima

console.log(Math.ceil(10.1));   //11


//Math.floor(): arredonda para baixo

console.log(Math.floor(10.8));  //10


//Math.round(): arredonda para o número mais próximo.

console.log(Math.round(5.4));   //5

console.log(Math.round(5.5));   //6


//Math.trunc(): remove a casa decimal mantendo apenas o número inteiro sem arrendondar

console.log(Math.trunc(9.9));   //9


//Raiz quadrada

console.log(Math.sqrt(9));


//Raíz cúbica

console.log(Math.cbrt(27));


//Valor absoluto

console.log(Math.abs(-10));     //Transforma negativos em positivos


//Potencia

console.log(Math.pow(4,2));
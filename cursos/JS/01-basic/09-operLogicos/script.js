
//Operadores lógicos: && → e - || → ou

//  && → caso o resultado seja verdadeiro, ele retorna o valor da direita;

const result = "hello" && true;

console.log(result);

const result2 = true && "hello";

console.log(result2);

//  Caso o resultado seja falso, ele retorna esse resultado

const num = 3 && 0; //  0 é falso

console.log(num);

//  Caso ambos sejam falso, retorna o primeiro resultado

const x = 8;

console.log((x > 10) && 0);


//##############################################################

//  Operador OR:

console.log((x > 10) || 0);

//  Caso ambas expressões sejam falsas, retorna a segunda.


//##############################################################

//  Operador Coalescência   →   ??

const resultado = null ?? "Teste!";

console.log(resultado);



//!!!! UMA DAS AULAS MAIS IMPORTANTES DE JAVASCRIPT!!!!!

// TIPOS PRIMITIVOS:
// string
// number
// boolean
// null
// undefined
// bigint   → Números sem limite (apenas para inteiros)
// symbol

//Cópia de VALOR primitivo é uma cópia independente
let num1 = 5;
let num2 = num1;
console.log(num1);
console.log(num2);

num1 = 10;
console.log("Num 1 fica = "+num1);
console.log("num2 continua = "+num2+" pois é uma cópia.");


//TIPOS NÃO PRIMITIVOS (todos os objetos):
// Object
// Array
// Function


//Cópia de REFERÊNCIA, portanto tudo é alterado em ambos
let arr1 = [1,2];
let arr2 =arr1;
console.log(arr1);
console.log(arr2);
arr1.unshift(0);    //Alteração é feita em ambos
console.log(arr1);
console.log(arr2);


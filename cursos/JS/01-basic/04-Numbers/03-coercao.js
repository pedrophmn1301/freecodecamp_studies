
//coerção de tipos: misturando String com Number

console.log('Cuidado com o operador "+"! Ele pode concatenar: ');

const NumStrSoma = "10" + 10;

console.log("String + Number: ",NumStrSoma);

console.log("\nOs outros operadores funcionam normalmente!")


const NumStrSub = "10" - 5;
const NumStrMult = "10" * 2;
const NumStrDiv = "10" / "2"  // ou 2;

console.log(NumStrSub);
console.log(NumStrMult);
console.log(NumStrDiv);
console.log(typeof NumStrDiv)

//Booleanos + number

const testeBool = true + 10;    //True == 1
const testeBool2 = false + 10;  //False == 0

console.log(testeBool);
console.log(testeBool2);

console.log(true+"Hello");


//null = 0

const nullNumb = null + 5;  //0 + 5

console.log(nullNumb);

const undNumb = undefined + 10;

console.log(undNumb);
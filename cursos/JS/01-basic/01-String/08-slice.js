

//Extraindo substring de String

//Usando slice()


let msg = "Hello, World!";

console.log(msg.slice(0,5));    //retorna todas as substring da posição < 5

console.log(msg.slice(7));      //retorna todas as strings >= 7

//númneros negativos no slice

let msg2 = "JavaScript is fun!";

console.log(msg2.slice(10,-4));

let msg3 = "I love JavaScript!"

console.log(msg3.slice(7,17));
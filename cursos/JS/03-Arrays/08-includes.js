

//Método includes verifica se há um elemento exatamente no array.

let nums = ["um","2","tres","cinco","sete","nove","onze"];

console.log(nums.includes("um")); //true
console.log(nums.includes("dois")) //false
console.log(nums.includes("Cinco")); //false - case sensitive

//Procura a partir de um índice

console.log(nums.includes("sete",3)); //true a partir do 3

console.log(nums.includes(2)); //false - 2 != "2"
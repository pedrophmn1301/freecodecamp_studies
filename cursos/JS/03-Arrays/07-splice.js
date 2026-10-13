
let frutas = ["orange","grape","banana","apple","peace"];

// (início da remoção, quantidade a ser removida)
let remove = frutas.splice(1,3);

console.log(frutas);
console.log(remove);


let colors = ["green","white","black","red","orange","blue"];
//(inicio,quantidade,substitutos)
let substituiCor = colors.splice(2,3,"pink","brown","greenyellow","aliceblue");

console.log(colors);
console.log(substituiCor);


let names = ["Pedro","Henrique","Melo","Neves"];

//Adiciona sem remover (inicio,0, adição)
let addName = names.splice(4,0,"Morais");

console.log(names);
console.log(addName);

//Evita mutação do original

let nums = [1,2,3,4,5];

let modific = [...nums];

modific.splice(5,0,6);

console.log(nums); //continua original
console.log(modific); //recebe a alteração


//Remover item específico com indexOf()

let frutas2 = ["orange","grape","banana","apple","peace"];

let removeIndex = frutas2.indexOf("banana");

frutas2.splice(removeIndex,2);
console.log(frutas2);


//Remove todos os itens do array

frutas2.splice(0);

console.log(frutas2);
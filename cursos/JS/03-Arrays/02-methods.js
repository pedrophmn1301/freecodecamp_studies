
let colors = ["green","red","yellow"];
console.log("Array inicial: \n"+colors);
//Adicionando uma cor no final

colors.push("blue","orange");
console.log("\nArray adicionado: \n"+colors);

const del = colors.pop();
console.log("\n Último removido: \n"+del);

//Adiciona no início
const add = colors.unshift("brown");
console.log("Novo array: \n"+colors);

//Remove o primeiro ítem
const firtDel = colors.shift();
console.log("Novo array: \n"+colors);
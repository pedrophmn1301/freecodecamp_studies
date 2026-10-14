
//Formas de criação de objetos:

const obj = new Object();   //Cria um objeto vazio 
//const obj = Object();     //é a mesma coisa
console.log(obj);   

const obj1 = {};    //Cria objeto vazio
console.log(obj1);      

//Mais comum atualmente
const person = {
    name: "Pedro"
};
console.log(person);


//Funcções do Object();
//Ele também serve para trasnformar outros tipos em objetos

const num = 22;
const objNum = Object(num);

console.log(typeof num);
console.log(typeof objNum);

const person = {
    name: "Pedro",
    lstName: "Neves",
    age: 36
}

// ##Forma antiga:

//Verifica se o objeto possui uma propriedade
console.log(Object.hasOwn(person, "lstName"));

//Verifica se uma propriedade existe
console.log(person.hasOwnProperty("name"));


//  ##Forma moderna:

console.log(Object.hasOwn(person, "name"));
console.log(Object.hasOwn(person, "job"));



//Outra forma de verificação:

console.log("age" in person);
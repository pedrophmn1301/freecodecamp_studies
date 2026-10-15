
const person = {
    name:"Pedro",
    age:36
};

let {name, age} = person;
//equivalente a → const name = person.name

console.log(name, age);

name = "Neves";
console.log(name);

//Extraindo a propriedade e renomeando

let {
    name: personName,
    age: personAge,
    city = "unknow"    //Criando valor padrão para a variável
                        //evitando undefined
} = person

console.log(personName); //Pedro

personName = "Melo";
console.log(personName);

console.log(city);
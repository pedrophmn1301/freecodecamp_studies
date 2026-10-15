
//  ?. → Retorna undefined invés de erro
//Substitui o if else

const person = {
    name:"Pedro",
    age: 36,
    city: "Brasília",
    greet:function(){
        return "Hello!";
    }
};

console.log(person?.name);

console.log(person?.address?.street);    //undefined

// console.log(person.address.street); //TypeError: Cannot read properties of undefined

console.log(person.greet?.());
console.log(person.sayHello?.());
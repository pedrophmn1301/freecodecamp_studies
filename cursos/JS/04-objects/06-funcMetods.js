
//Função (fica sozinha):
//é independente:

function great(name) {
    return "Hello, "+name+"!";
}

// Chamada: great();
console.log(great("Pedro"));




//Método (dentro de um objeto):
//Função que pertence ao objeto

const person = {
    name: "Pedro",

    sayHello: function(){
        return "Hello! My name is "+this.name+"!";
    }
}
//Chamada: person.sayHello;
console.log(person.sayHello());

// outro exemplo

const car = {
    brand: "Ferrari",

    start(){
        return this.brand + " started!";
    }
}

console.log(car.start());

//for in → utilizado para percorrer objetos

// for in é utilizado para percorrer as propriedades (chaves) dos objetos

const fruits = {
    name: "apple",
    color: "red",
    price: 0.99
}

//retornando a propriedade: 

for(const prop in fruits){
    console.log(prop);
}

//retornando o valor da propriedade:

for(const prop in fruits){
    console.log(fruits[prop]);
}

//objeto aninhado

const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown"
  }
};

for(const prop in person){
    if(typeof person[prop] === "object"){
        for(const nestProp in person[prop]){
            console.log(person[prop][nestProp]);
        }
    }else{
        console.log(person[prop]);
    }
}

const name = "Pedro";
const age = 36;


//criando objeto da forma tradicional:
const person = {
    name: name,
    age: age
};

console.log(person);

//Criando objeto da forma abreviada:
const person1 = {
    name,
    age
};

console.log(person1);

//Muito comum em função

const city = "Brasília";
const country = "Brazil";

function createObjAddress(newCity,newCountry){
    return{
        newCity,
        newCountry
    };
};

console.log(createObjAddress(city,country));

newCity = "Minas Gerais";

console.log("Nova cidade: "+newCity);
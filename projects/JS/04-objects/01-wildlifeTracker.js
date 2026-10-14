
const tiger = {
    species:"Tiger",
    age: 5,
    isEndangered: true,   
};

const elephant = {
    species: "Elephant",
    age: 10,
    isEndangered: true,
};

const getSpecies = (animal) =>{
    return animal.species;
};

console.log(getSpecies(tiger));

function getAge(animal){
    return animal.age;
};

console.log(getAge(tiger));

function addHabitat(animal,newHabitat){
    animal.habitat = newHabitat;   //Adiciona nova propriedade
    return animal;          //Retorna o obejeto atualizado
};

console.log(addHabitat(tiger,"Rainforest"));

const updateAge = (animal, newAge) => {
    animal.age = newAge;
    return animal;
};
console.log(updateAge(elephant,12));

const removeEndangeredStatus = (animal) =>{
    delete animal.isEndangered;
    return animal;
};

console.log(removeEndangeredStatus(tiger));

function hasHabitat(animal){
    return animal.hasOwnProperty("habitat");
};

console.log(hasHabitat(tiger));
console.log(hasHabitat(elephant));

const getProperty = (animal, propertyName) =>{
    return animal[propertyName];
}

console.log(getProperty(tiger,"species"));
console.log(getProperty(elephant,"age"));
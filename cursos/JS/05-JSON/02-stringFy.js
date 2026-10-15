
//transformar JS em JSON

//Usado para enviar dados para a API, salvar dados no localStorage salvar arquivos JSON

//Obejeto:
const person={
    name: "Pedro",
    age: 36,
    city: "Brasília"
};

//String JSON:
const jsonTrasnform = JSON.stringify(person);

console.log(jsonTrasnform);
console.log(typeof jsonTrasnform)

//String JSON
const jsonString =
'{"lastName":"Neves","address":"SPO"}';

//Objeto
const objectTrasnform = JSON.parse(jsonString);

console.log(objectTrasnform);
console.log(typeof objectTrasnform)

//Parâmetro opcional

console.log(JSON.stringify(person, ["name"]));

//Organização na visualização do JSON:
console.log(JSON.stringify(person, null, 2));


//for of → utilizado para percorrer Arrays e strings

const nums = [1,2,3,4,5];

// FOR TRADICIONAL: quando for necessário o índice

for(let n = 0; n < nums.length; n++){   //n = posição no objeto. Sempre com let
    console.log(nums[n]);       //imprime n da posição atual
};

//  FOR OF: quando for percorrer o array ou objeto

for(const n of nums){ //percorre todo o array
    console.log(n);
};

// Com string

const str = "Pedro";

for(const char of str){ //Extrai letra por letra da string
    console.log(char);
};

// →const: devo usar quando não vou alterar o valor da variável
// →let: devo usar quando vou alterar o valor da variável

for(let n of nums){
    n++;        //n recebe 1 antes de iniciar
    console.log(n);
};

//Arrays de objetos

const people = [
  { name: "Pedro", age: 36 },
  { name: "Jane", age: 25 },
  { name: "Jim", age: 40 }
];

for(person of people){      //Listar todos os objetos em ordem organizadamente
    console.log(`${person.name} is ${person.age} years old.`);
};
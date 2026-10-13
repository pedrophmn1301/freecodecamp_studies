
let fruits = ["apple","grape","orange"];

//Destruturação de array:
let [one, two, three] = fruits;

console.log(one);
console.log(two);
console.log(three);

//Pulando elementos

let [first, , third] = fruits;

console.log(first);
console.log(third);


let numbs = [1,2];
//define valor padrão
let [x,y,z = 3] = numbs

console.log(x);
console.log(y);
console.log(z);

//Elemento rest (...) **Deve ser sempre o último**
//Mostra os demais elementos do array
let colors = ["orange","blue","green","yellow","gray","pink"];

let [cOne, ,cThree, ...others] = colors;

console.log(cOne);
console.log(cThree);
console.log(others);
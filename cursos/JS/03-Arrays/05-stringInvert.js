
let str = "javascript";
console.log("Original:\n"+str);

//separando as letras da String:
let div = str.split("");
console.log("Original separadas:\n"+div);

let arrayRevert = div.reverse();
console.log("Invertida separadas:\n"+arrayRevert);

let stringRevert = arrayRevert.join("");

console.log("Invertida: \n"+stringRevert);


//Separando em apenas uma linha:
function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString("Programing"));

//substring → parte contida em uma string

let language = "Hello, JavaScript World!";

let search = language.includes("Java");

console.log(search);    //true

console.log(language.includes("javaScript"));   //false

console.log(language.includes("JavaScript",7));   //true → o número se refere ao índice de início da procura pela substring
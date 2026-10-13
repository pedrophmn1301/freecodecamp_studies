
//ASCII → American Standard Code for Information Intercharge
    // Código Padrão Americano para Intercâmbio de Informação

//Padrão de condificação de caracteres em números para que seja universalmente reconhecido por computadores

//Abrange 128 caracteres, incluindo letras maiúsculas e minúsculas de A a z, números de 0 a 9, símbolos, novas linhas, tabulação

// charCodeAt(0) → retorna o código ASCII 

// fromCharCode(80) → retorna o caractere referenciado pelo código ASCII

let name = "P";

console.log(name.charCodeAt(0));

name = "p";

console.log(name.charCodeAt(0));

console.log(String.fromCharCode(80));   // P


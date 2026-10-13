

//###### Função com seta. sintaxe:

const greeting = (name) =>{
    return "Hello, "+name+"!";
}

console.log(greeting("Peter"));

//###### Caso tenha apenas um parâmetro, podemos remover o parêntese

const greet = name =>{
    console.log("Hello, "+name+"!");
}

greet("Melo");

//####### Sem padrâmetros

const test = () =>{
    console.log("Testando...");
}

test();


// #### Se a função tiver apenas um parâmetro

const oneLine = texto => console.log("Texto: "+texto+""); 

oneLine("Testando função de uma linha apenas...");


// ### Mais de um parâmetro

const mult = (x,y) => x * y;

console.log(mult(11,2));
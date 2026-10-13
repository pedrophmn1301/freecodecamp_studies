
//valores falsos por padrão:
//null, 0 (zero), "" (string vazia), undefined, NaN (Não é um número)

if(null){
    console.log("This will not run.");
}

if("JavaScript!"){
    console.log("This will run!");
}

const age = 22;

if(age >= 18){
    console.log("You're eligible to vote!");
}else{
    console.log("You're not eligible to vote!");
}

const nota = 9.5;

if(nota >= 6.5){
    console.log("Você está aprovado! ");
}else if(nota < 5){
    console.log("Você está reprovado!");
}else{
    console.log("Você está de recuperação!");
}
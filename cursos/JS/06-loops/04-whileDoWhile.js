
//executa o código enquanto uma função é verdadeira

let counter = 1;

while (counter < 6) {
  console.log(counter);
  counter++;
}

//While primeiro verifica:

while(false){
    console.log("Hello!");
};



//Código é executado pelo menos uma vez antes de verificar a condição

let cont = 0;

do{
    console.log(cont);
    cont++;
}while(cont < 5);


do{
    console.log("Hello!");
}while(false);
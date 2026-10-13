
// #### Funções definidas com valores padrões
// Caso não passe nenhum parâmetro, o apontado será exibido


function greetings(name="Guest"){
    console.log("Hello, "+name+"!");
}

greetings(); //Assume o valor do atributo
greetings("Pedro"); //substitui o valor padrão do atibuto


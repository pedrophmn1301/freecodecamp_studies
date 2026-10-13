

// ###### Escopo global

let global = "Variável global";

function printGlobal(){
    console.log(global);
}

printGlobal();
console.log(global);

// ##### Escopo local

function local(){
    let msg = "Variável local";
    console.log(msg);
}

local();


// ##### Escopo bloqueado

if(true){
    let block = "Escopo bloqueado";
    console.log(block);
}
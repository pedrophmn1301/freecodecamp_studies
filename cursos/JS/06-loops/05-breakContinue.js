
// break deve ser usado quando o que procurava foi encontrado

for(let i =0;i < 10; i++){
    if(i == 5){
        break;
    }
    console.log(i);
}


//continue

const obj = ["A","B","C","Z","D","E"];

for(const o of obj){
    if(o === "Z"){      
        continue;   //Pula a condição encontrada
    }
    console.log(o);
}

//Dando nome ao loop

firstLoop:
for(let i =0;i <3;i++){
    for(let j=0;j<3;j++){
        if(i === 1 && j === 1){
            break firstLoop;    //para e não executa nada mais
        }
        console.log(i,j);
    }
}
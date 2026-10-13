
function hideEmail(email){
    const firtChar = email[0];  //exibe o primeiro caractere da string
    // return firtChar;
    
    const simbol = email.indexOf("@"); //conta exatamente quantas casas existem até o @ - iniciando no 0;
    // return simbol
    
    const domain = email.slice(simbol); //.slice(início...) → mostra tudo a partir do argumento;
    // return domain;

    const userName = email.slice(0,simbol); //.slice(primeiro,ultimo) → exibe tudo desse intervalo;
    // return userName;

    const lastChar = userName[userName.length - 1]; //mostra última letra do nome
    // return lastChar;

    const insert = "*".repeat(userName.length - 2); //.repeat(qntDeRepetições)
    // return insert;

    return firtChar + insert + lastChar + domain;   //Concatenando tudo.
}

console.log(hideEmail(("pedro.phmn@pf.gov.br")));
console.log(hideEmail(("pedro.phmn@outlook.com")));
console.log(hideEmail(("pedro1301@gmail.com")));
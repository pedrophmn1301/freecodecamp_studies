
//Fatorial é um número inteiro multiplicado por todos seus inferiores
//ex: 5*4*3*2*1 = 120

let num = 7;

const factorialCalculator = (n) =>{
    let result = 1; 
    for(let i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}

let factorial = factorialCalculator(num);

let resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);
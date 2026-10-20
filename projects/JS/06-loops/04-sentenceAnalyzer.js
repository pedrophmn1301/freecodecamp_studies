
const vogais = ["a","e","i","o","u"];

function getVowelCount(sentence){
    let qntVog = 0;
    for(let char = 0;char < sentence.length; char++){
        if(vogais.includes(sentence[char]) || vogais.includes(sentence[char].toUpperCase)){
            qntVog++
        }
    }
    return qntVog;
}

console.log(getVowelCount("Apples are tasty fruits"));
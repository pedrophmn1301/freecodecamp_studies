
// const vogaisMi = ["a","e","i","o","u"];
// const vogaisMa = ["A","E","I","O","U"];

// function getVowelCount(sentence){
//     let qntVog = 0;
//     for(let char = 0;char < sentence.length; char++){
//         if(vogaisMi.includes(sentence[char]) || vogaisMa.includes(sentence[char])){
//             qntVog++
//         }
//     }
//     return qntVog;
// }


//Simplificando:

// function getVowelCount(sentence){
//     const vowels = "aeiouAEIOU";
//     count = 0;
//     for(const char of sentence){
//         if(vowels.includes(char)){
//             count++
//         }
//     }
//     return count;
// }

// ou

function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;
    // console.log(sentence.toLowerCase());
        //Passa toda a string para letras minúsculas e verifica
  for (const char of sentence.toLowerCase()) {  
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits");

console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence){
    const vowels = "aeiou"; 
    //ou const consonant = "bcdfghjklmnpqrstvxwyz";
    let count = 0;
    for(const char of sentence.toLowerCase()){
        if(/[a-zA-Z]/.test(char) && !vowels.includes(char)){
            count++;
        }
    }
    return count;
}

// console.log(getConsonantCount("Hello, World!"));

const consonantCount = getConsonantCount("Coding is fun");

console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence){
    // const punctuation = ".,!?;:-()[]{}\"'–";
    let count = 0;
    for(const char of sentence){
        // if(punctuation.includes(char)){
        if(char !== " " & !/[a-zA-Z0-9]/.test(char)){
            count++;
        }
    }
    return count;
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");

console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence) {
  if (sentence.trim() === "") {
    return 0;
  }
  
  const words = sentence.trim().split(" ");
  let count = 0;

  for (const word of words) {
    if (word !== "") {
      count++;
    }
  }

  return count;
}

const wordCount = getWordCount("I love freeCodeCamp");

console.log(`Word Count: ${wordCount}`);
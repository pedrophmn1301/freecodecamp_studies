function findLongestWordLength(string){
    const words = string.split(" ");
    let longest = 0;
    let wordLongest = "";
    for(let word of words){
        if(word.length > longest){
            longest = word.length;
        }
        if(word.length === longest){
            wordLongest =  word;
        }
    }
    return wordLongest; //Maior palavra encontrada
    // return longest; //Quantidade de caracter da maior palavra encontrada
}

console.log(findLongestWordLength("Bom dia! Hoje é dia vinte e dois de Outubro."));

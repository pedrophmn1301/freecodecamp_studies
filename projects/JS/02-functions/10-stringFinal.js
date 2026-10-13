
function confirmEnding(str,letter){
    return str.slice(-letter.length) === letter;
}

console.log(confirmEnding("Faremos teste para você ficar ciente","inte"));

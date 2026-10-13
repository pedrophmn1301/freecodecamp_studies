
// ##Jogo de cassino

let count = 0;

function cardCounter(card){
    if(card >= 2 && card <=6){
        count++;
    }else if(card == 10 || card == "A" || card == "J" || card == "K" || card == "Q"){
        count--;
    }
    // não há a necessidade de decalarar os intervalos inalterados.

    if(count > 0){
        return count+" Bet";
    }else{
        return count+" Hold";
    }
}

console.log(cardCounter(10));
console.log(cardCounter("A"));
console.log(cardCounter(3));
console.log(cardCounter(5));
console.log(cardCounter("x"));
console.log(cardCounter("5"));
console.log(cardCounter("6"));


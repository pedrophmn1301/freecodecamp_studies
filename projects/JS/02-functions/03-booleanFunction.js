

// ### verificar se o argumento é booleano;

function booWho(arg){
    return typeof arg === "boolean";
}
console.log(booWho(false));
console.log(booWho(10));
console.log(booWho("true"));
console.log(booWho(NaN));
console.log(booWho(undefined));
console.log(booWho(typeof arg === Boolean));
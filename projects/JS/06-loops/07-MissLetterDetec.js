function fearNotLetter(str){  
    for(let n=0;n < str.length; n++){
        if(str.charCodeAt(n+1) - str.charCodeAt(n) > 1){
            return String.fromCharCode(str.charCodeAt(n)+ 1);
        }
    }
    return undefined;
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
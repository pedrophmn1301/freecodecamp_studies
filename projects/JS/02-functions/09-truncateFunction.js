

function truncateString(str,numb){
    const leng = str.length;
    // console.log(leng);
    const newLeng = str.slice(0,numb);
    if(leng <= numb){
        return str;
    }else{
        return newLeng + "...";
    }
}

console.log(truncateString("Peter",2));
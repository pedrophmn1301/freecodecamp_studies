let lunches = [];

function addLunchToEnd(arr,str){
    arr.push(str);
    console.log(str+" added to the end of the lunch menu.");
    return arr;
}

addLunchToEnd(lunches,"Frango");

function addLunchToStart(arr,str){
    arr.unshift(str);
    console.log(str+" added to the start of the lunch menu.");
    return arr;
}

addLunchToStart(lunches,"beef");

function removeLastLunch(arr){
    if(arr.length < 1){
        console.log("No lunches to remove.");
    }else{
        const cutEnd = arr.pop();
        console.log(cutEnd+" removed from the end of the lunch menu.");
    }
    return arr;
}

function removeFirstLunch(arr){
    if(arr.length < 1){
        console.log("No lunches to remove.");
    }else{
        const cutStart = arr.shift();
        console.log(cutStart+" removed from the start of the lunch menu.");
    }
    return arr;
}

function getRandomLunch(arr){
    if(arr.length < 1){
        console.log("No lunches available.");
    }else{
        const rdm = Math.floor(Math.random() * arr.length);
        const item = arr[rdm];
        console.log("Randomly selected lunch: "+item);
    }
}

function showLunchMenu(arr){
    if(arr.length < 1){
        console.log("The menu is empty.");
    }else{
        console.log("Menu items: "+arr.join(", "));
    }
}

showLunchMenu(lunches);
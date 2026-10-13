
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par,tacadas){
    switch(true){
        case (tacadas === 1):
            return names[0];
        case (tacadas <= par-2):
            return names[1];
        case (tacadas === par -1):
            return names[2];
        case (tacadas === par):
            return names[3];
        case (tacadas === par + 1):
            return names[4];
        case (tacadas === par + 2):
            return names[5];
        case (tacadas >= par + 3):
            return names[6];
    }       
}

console.log(golfScore(5,5));

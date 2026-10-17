const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

//função deve retornar obj records completo
//value == "", prop deve ser removida
//Se prop != traks && value != "" add valor a prop desse album
//se prop == tracks e value != "", mas o album não tem tracks, criar um array vazio pra ele
//se prop == tracks e value != "", add value ao final de tracks existente;
//Nã alterar objeto recordColletion, então copiá-lo;

console.log(recordCollection);

const updateRecords = (records,id,prop,value) =>{
    if(value === ""){
        delete records[id][prop];
    }else if(prop !== "tracks"){
        records[id][prop] = value;
    }else if(!records[id][prop]){
                records[id][prop] = [];
                records[id][prop].push(value);
            }else{
                records[id][prop].push(value);
            }

    return records;
}

updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");

console.log(recordCollection);

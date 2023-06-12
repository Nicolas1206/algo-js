const readlineSync = require("readline-sync");
function askTvSerie(){
    let showname = readlineSync.question("What is the name of the tv show? ")
    let year = readlineSync.question("what is the year of prodution? ")
    let n = readlineSync.question("How many cast members? ");
    let array = [];

    for (let i = 0; i < n; i++){
        array.push(readlineSync.question("Name of the members: "))
    }
    return myObject = {
        "tvName": showname,
        "yearProduction": year,
        "castName": array
    }
}

function randomizeCast(tvSerie){
    for (i = tvSerie.castName.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    [tvSerie.castName[i], tvSerie.castName[j]] = [tvSerie.castName[j], tvSerie.castName[i]];
  }
  return tvSerie.castName;
}


let answer = askTvSerie();
let randomizer = randomizeCast(answer);
console.log(randomizer);



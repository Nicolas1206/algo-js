const readlineSync = require("readline-sync");
function askTvSerie(){
    let n = readlineSync.question("How many cast members? ");
    let array = [];
    for (let i = 0; i < n; i++){
        array.push(readlineSync.question("Name of the members: "))
    }
    let myObject = {
        tvName: readlineSync.question("What is the name of the tv show? "),
        yearProduction: readlineSync.question("what is the year of prodution? "),
        castName: array
    }
    return myObject;
}

console.log(askTvSerie());
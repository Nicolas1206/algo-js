const readlineSync = require("readline-sync");

let minAge = readlineSync.question("Enter minimal age: ");
let maxAge = readlineSync.question("Enter maximal age: ");
let currentAge = readlineSync.question("Enter your current age: ");

if(minAge>maxAge){
    console.log("You don't understand anything.");
    return false;
}
if(currentAge>minAge && currentAge<maxAge){
    console.log("Your age is between the minimal and the maximal age.");
    return true;
}


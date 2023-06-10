const readlineSync = require("readline-sync");

let integer1 = readlineSync.question("Whats your first integer number? ");
let integer2 = readlineSync.question("Whats your second integer number? ");

let result = integer1%integer2;

console.log("The result is " + result);
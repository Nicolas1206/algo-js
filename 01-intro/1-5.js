const readlineSync = require("readline-sync");
let number1 = readlineSync.question("Whats the first number?");
let number2 = readlineSync.question("whats the second number");

let integer = Math.trunc(number1);

let result = integer*number2;

console.log("Your result is " + result);
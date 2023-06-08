const readlineSync = require("readline-sync");
let username = readlineSync.question("Whats your name pls?");
console.log("Hello " + username);
const readlineSync = require("readline-sync");
let username = readlineSync.question("Whats your name pls?");
let userfirstname = readlineSync.question("Whats your first name pls ?");
let city = readlineSync.question("Where do you live?");
console.log("Your name is " + userfirstname + " " + username + " and you live in " + city + ".");
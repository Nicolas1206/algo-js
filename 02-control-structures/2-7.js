const readlineSync = require("readline-sync");

let n = parseInt(readlineSync.question("Enter a number "));
let sum = 0
for(let i=0; i<=n; i+=1){
    let x = parseInt(readlineSync.question("Enter an other number "));
    sum+=x;
}
console.log("Here is the sum of the number: " + sum);
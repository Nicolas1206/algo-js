const readlineSync = require('readline-sync');
 let n = parseInt(readlineSync.question("Max element of the array? "));
 let array1 = [];

 for(let i = 0; i < n; i++){
    array1[i] = parseInt(readlineSync.question("Enter the number that the array will contain: "));
 }

let minvalue = Math.min(...array1);
let maxvalue = Math.max(...array1);

console.log("Minimum value is: "+minvalue);
console.log("Maximum value is: "+maxvalue);
const readlineSync = require('readline-sync');
 let n = parseInt(readlineSync.question("Max element of the array? "));
 let array1 = [];

 for(let i = 0; i < n; i++){
    array1[i] = parseInt(readlineSync.question("Enter the number that the array will contain: "));
 }
 let duplicatearray1 = array1.slice();
console.log(array1);
console.log(duplicatearray1);
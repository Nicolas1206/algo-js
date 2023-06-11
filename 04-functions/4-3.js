const readlineSync = require('readline-sync');
 let n = parseInt(readlineSync.question("Max element of the array? "));
 let array = [];
/**
 * 
 * @param {*} n 
 * @returns 
 */
function multiRand(n){
    for (let i = 0; i < n; i++){
        array[i] = rand10();
    }
    return array
}
/**
 * 
 * @returns 
 */
function rand10(){
    return Math.floor(Math.random()*10);
}
multiRand(n);
console.log(array);
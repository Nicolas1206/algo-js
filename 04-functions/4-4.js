const readlineSync = require('readline-sync');
 let n = parseInt(readlineSync.question("Max element of the array? "));
 let array = [];
 
/**
 * 
 * @param {*} array 
 * @returns 
 */
function average(array){
    let sum = 0;
    for(let elem of array){
        sum += elem;
    }
    return sum/n;
}
/**
 * 
 * @param {*} array 
 * @returns 
 */
function min(array){
    return Math.min(...array);
}
/**
 * 
 * @param {*} array 
 * @returns 
 */
function max(array){
    return Math.max(...array);
}
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
console.log(multiRand(n));
console.log("Average of the array: " + average(array));
console.log("Minimum of the array: " + min(array));
console.log("Maximum of the array: " + max(array));
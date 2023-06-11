const readlineSync = require('readline-sync');
let a = readlineSync.question("Length? ");
let b = readlineSync.question("width? ");

/**
 * 
 * @param {*} length 
 * @param {*} width 
 * @returns 
 */
function calcSurface(length, width){
    return length*width;
}

console.log("The surface is: " +calcSurface(a, b));
const readlineSync = require("readline-sync");
let a = readlineSync.question("Give me a number and i'll give you the factorial: ");

function factorial(a){
    if (a>=1){
        return a*factorial(a-1);
    }else{
        return 1;
    }

}

console.log(factorial(a));
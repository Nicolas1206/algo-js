const readlineSync = require("readline-sync");
let usernumber = readlineSync.question("Whats your favorite number? ");
/*if(usernumber === 42){
    console.log("YEAY");
}else{
    console.log("Are you sure?");
}*/

while(usernumber!=42){
    usernumber = readlineSync.question("are you sure?");
}
console.log("YEAH");
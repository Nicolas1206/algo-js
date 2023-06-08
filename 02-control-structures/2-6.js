const readlineSync = require("readline-sync");
let i = parseInt(readlineSync.question("choose a number between 1 and 7 :) "));
/*if(i===1){
    console.log("Monday");
}else if(i===2){
    console.log("Tuesday");
}else if(i===3){
    console.log("Wednesday");
}else if(i===4){
    console.log("thursday");
}else if(i===5){
    console.log("Friday");
}else if(i===6){
    console.log("Saturday");
}else{
    console.log("Sunday");
}*/

switch (i){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("IT IS NOT A NUMBER BETWEEN AND SEVEN IDIOT!!!")
        break;
}
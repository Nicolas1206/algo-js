let array1 = [1, 2, 3, 4, 5];
let array2 = [100, 101, 102];

let sum = 0;
let sum1 = 0;

for(let elem of array1){
    sum += elem;
}

for(let elem of array2){
    sum1 += elem;
}

let average = sum / array1.length;
let average1 = sum1 / array2.length;

console.log("Average of array1: " + average);
console.log("Average of array2: " + average1);
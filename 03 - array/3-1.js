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

console.log("Sum of array1: " + sum);
console.log("Sum of array2: " + sum1);

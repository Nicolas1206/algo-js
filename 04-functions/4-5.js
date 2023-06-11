function calcDistance(a, b){
    let [x1, y1] = a
    let [x2, y2] = b
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

console.log(calcDistance([1, 1], [2, 2]));
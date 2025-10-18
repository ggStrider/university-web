function calculateByUserFunc(calculateFunc, num1, num2) {
    return calculateFunc(num1, num2);
}

function sum(a, b) {
    return a + b;
}

console.log(calculateByUserFunc(sum, 3, 3));
console.log(calculateByUserFunc(sum, 1, 2));
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

let number = 5
number += 3
number -= 2
number *10
number /5

console.log(number)

function increment(n) {
    return (n+=1)
}

function decrement(n) {
    return (n-=1)
}

function makeInt(n) {
    return parseInt(n, 10)
}

function preserveDecimal(n) {
    return parseFloat(n, 10)
}
const prompt = require('prompt-sync')();

const numberString = prompt('Type a number: ');
const number = Number(numberString)

const numberSqrt = Math.sqrt(number)

const numberPow = Math.pow(number,2)

if (number % 2 == 0) {
    console.log(`${number} it's an even number and his square root is ${numberSqrt}.`)
}else {
    console.log(`${number} it's an odd number and elevated to squared is ${numberPow}`)
}
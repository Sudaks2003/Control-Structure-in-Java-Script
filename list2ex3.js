const prompt = require('prompt-sync')();

const ageString = prompt('Type your age: ');
const age = Number(ageString)

if (age >= 10 && age <= 14) {
    console.log('Infantil.')
} else if (age > 14 && age <= 17) {
    console.log('Juvenil.')
} else if (age > 17 && age <= 25) {
    console.log('Adulto.')
}
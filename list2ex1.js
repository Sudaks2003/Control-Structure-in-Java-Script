const prompt = require('prompt-sync')();

    const n1String = prompt('Type the first number: ')
    const n1 = parseInt(n1String)

    const n2String = prompt('Type the second number: ')
    const n2 = parseInt(n2String)

    const n3String = prompt('Type the third number: ')
    const n3 = parseInt(n3String)

    if (n1 > n2 && n1 > n3) {
    console.log(`${n1} is the biggest number.`)
    }   else if (n2 > n1 && n2 > n3) {
    console.log(`${n2} is the biggest number.`)
    }   else {
    console.log(`${n3} is the biggest number.`)
    } 

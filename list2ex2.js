const prompt = require('prompt-sync')();

    const n1String = prompt ('Type the first number: ')
    const n1 = Number(n1String)

    const n2String = prompt('Type the second number: ')
    const n2 = Number(n2String)

    const n3String = prompt('Type the third number: ')
    const n3 = Number(n3String)

    if (n1 > n2 && n2 > n3) {
        console.log(`A ordem crescente é ${n3}, ${n2} e ${n1}`)
    }
    else if (n3 > n2 && n2 > n1) {
        console.log(`A ordem crescente é ${n2}, ${n2} e ${n3}`)
    }
    else if (n3 < n2 && n2 < n1) {
        console.log(`A ordem crescente é ${n3}, ${n2} e ${n1}`)
    }
    else if (n1 < n2 && n2 > n3) {
        console.log(`A ordem crescente é ${n3}, ${n1} e ${n2}`)
    }
    else if (n1 > n2 && n2 < n3) {
        console.log(`A ordem crescente é ${n2}, ${n1} e ${n3}`)
    }
    else if (n3 > n1 && n2 < n1) {
        console.log(`A ordem crescente é ${n2}, ${n1} e ${n3}`)
    }
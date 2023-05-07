

function findOddNumbers(numbers) {
    a = numbers.filter(number => number % 2 == 0);
    b = numbers.filter((number) => number % 2 !== 0)
    return `juft ${a} toq ${b} `
}

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const oddNumbers = findOddNumbers(numbers);
console.log(oddNumbers); // [1, 3, 5, 7, 9]

// const a = [1,2,3,4,5,6,100,1001]
// b = a.sort((a,b)=> b-a)
// console.log(`max ${b[0]} min ${ b.slice(-1)}`);


// let one = 'Asadbek'
// b = one.split('').reverse().join('')
// console.log(b);

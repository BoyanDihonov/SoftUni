function sumOfNumbers(a, b) {

    let num1 = Number(a)
    let num2 = Number(b)
    let sum = 0
    for (let i = num1; i <= num2; i++) {
        sum += i
    }
    console.log(sum)
}

sumOfNumbers('1', '5')
sumOfNumbers('-8', '20')
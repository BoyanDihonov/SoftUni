function biggerNum(a, b) {
    if (a != b) {
        return Math.max(a, b)
    }
    return (`The numbers are equal`)
}

console.log(biggerNum(2, 5))
console.log(biggerNum(-3, -6))
console.log(biggerNum(-3, -3))

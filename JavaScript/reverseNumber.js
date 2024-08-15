function reverseNum(n) {
    n = n + ""
    return n.split("").reverse().join("")
}

console.log(reverseNum(123456789))
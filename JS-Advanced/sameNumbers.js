function sameNumbers(input) {
    let same = true
    let numAsStr = String(input)
    let count = Number(numAsStr[0])
    for (let i = 1; i < numAsStr.length; i++) {
        if (numAsStr[i - 1] == numAsStr[i]) {
            same = true
        } else {
            same = false
        }
        count += Number(numAsStr[i])
    }
    console.log(same)
    console.log(count)
}

sameNumbers(2222222);
sameNumbers(1234)
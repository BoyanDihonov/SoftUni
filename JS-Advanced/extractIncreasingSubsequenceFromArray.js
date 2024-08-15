function extractIncreasingSubsequenceFromArray(arr) {

    let result = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= result[result.length - 1]) {
            result.push(arr[i])
        }
    }
    return result
}

extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)
console.log(`-----------------`)
extractIncreasingSubsequenceFromArray([1,
    2,
    3,
    4]
)
console.log(`-----------------`)
extractIncreasingSubsequenceFromArray([20,
    3,
    2,
    15,
    6,
    1]
)
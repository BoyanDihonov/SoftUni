function sortingNumbers(arr) {
    arr.sort((a, b) => a - b)
    let result = []
    while (arr.length > 0) {
        result.push(arr[0])
        arr.shift()
        if (arr.length > 0) {
            result.push(arr[arr.length - 1])
            arr.pop()
        }
    }
    return result

}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
console.log(`----------`)
sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18])
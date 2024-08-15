function aggregateElements(arr) {
    let a = 0
    let b = 0
    let c = ''
    for (let i = 0; i < arr.length; i++) {
        a += arr[i]
        b += 1 / arr[i]
        c += String(arr[i])
    }
    console.log(a)
    console.log(b)
    console.log(c)
}

aggregateElements([2, 4, 8, 16])
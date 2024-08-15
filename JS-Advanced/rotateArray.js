function rotateArray(arr, rotations) {
    for (let i = 1; i <= rotations; i++) {
        let result = arr.pop()
        arr.unshift(result)
    }
    console.log(arr.join(' '))
}

rotateArray(['1',
    '2',
    '3',
    '4'],
    2
)
console.log(`-------`)
rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
)


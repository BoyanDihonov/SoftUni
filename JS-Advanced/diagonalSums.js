function diagonalSums(matrix) {
    let one = 0
    let two = 0

    for (let i = 0; i < matrix.length; i++) {
        one += matrix[i][i]
        two += matrix[i][matrix.length - 1 - i]
    }
    console.log(one, two)
}

diagonalSums([[20, 40],
[10, 60]]
)
console.log(`------------`)
diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
)
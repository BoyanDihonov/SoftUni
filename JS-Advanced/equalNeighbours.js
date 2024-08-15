function sameNeighbours(matrix) {
    let matrixRows = matrix.length;
    let matrixCols = matrix[0].length;
    let neighbours = 0;

    while(matrixRows > 0) {
        matrixRows--;
        matrixCols = matrix[matrixRows].length;
        while(matrixCols > 0) {
            matrixCols--;
            if(matrix[matrixRows][matrixCols] === matrix[matrixRows][matrixCols - 1]) {
                neighbours++;
            }
            if(matrixRows > 0 && matrix[matrixRows][matrixCols] === matrix[matrixRows - 1][matrixCols]) {
                neighbours++;
            }
        }
    }

    console.log(neighbours);
}

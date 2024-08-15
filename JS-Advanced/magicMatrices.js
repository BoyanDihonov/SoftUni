// function magicMatrices(mtrx) {

//     let [row, col, count] = [0, 0, 0];
//     const equalBenchmark = mtrx[0].reduce((a, b) => {
//         a += b;
//         return a; 
//     }, 0)

//     for (let step = 0; step < mtrx.length; step++) {
//         let rowCheck = 0;
//         let colCheck = 0;

//         mtrx[step].forEach(el => rowCheck += el);
//         rowCheck === equalBenchmark ? row += rowCheck : row = null;
       
//         mtrx.forEach(el => colCheck += el[step]);
//         colCheck === equalBenchmark ? col += colCheck : col = null;
        
//         if (row === col && row != null && col != null) { count++ };
//     }

//     console.log(count === mtrx.length);
// }

function magicMatrices(mtrx){
    
    let [row1,row2,col1,col2] =[0,0,0,0];
    
    for (let step=0; step<mtrx.length-1; step++){
        mtrx[step].forEach(el=>row1+=el);
        mtrx[step+1].forEach(el=>row2+=el);
        mtrx.forEach(el=>col1+=el[step]);
        mtrx.forEach(el=>col2+=el[step+1]);
        if(row1 === row2 && col1 === col2){return true;}
        else{return false;}
    }
    
}

magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
)
console.log(`--------`)
magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
)
console.log(`--------`)
magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
)
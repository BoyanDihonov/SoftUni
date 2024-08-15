function sortArray(arr, sortType){

    let asc = ((a,b) => a-b)
    let desc = (a,b) => b-a

    let sort = {
        asc :asc,
        desc : desc
    }

    return arr.sort(sort[sortType])
}

sortArray([14, 7, 17, 6, 8], 'asc')
console.log(`------------`)
sortArray([14, 7, 17, 6, 8], 'desc')

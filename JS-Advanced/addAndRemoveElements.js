function addAndRemoveElements(arr) {
    let n = 1;
    let result = [];

    arr.forEach(x => {
        x == 'add' ? result.push(n) : result.pop()
        n++
    })
    return result.length ? result.join('\n') : "Empty"
   
}

addAndRemoveElements(['add',
    'add',
    'add',
    'add']

)
console.log(`--------------`)
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
)
console.log(`--------------`)
addAndRemoveElements(['remove',
    'remove',
    'remove']
)

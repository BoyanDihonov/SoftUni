function printAnArrayWithAGivenDelimiter(arr, str) {
    console.log(arr.join(str))

}

printAnArrayWithAGivenDelimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
)

console.log(`=============`)
printAnArrayWithAGivenDelimiter(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'
)
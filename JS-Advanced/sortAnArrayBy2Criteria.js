function sortAnArrayBy2Criteria(arr) {
    let twoCriteriaSort = (one, two) =>
        one.length - two.length || one.localeCompare(two);
    arr.sort(twoCriteriaSort);
    console.log(arr.join('\n'));
}

sortAnArrayBy2Criteria(['alpha',
    'beta',
    'gamma']
)
console.log(`-----------`)
sortAnArrayBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
)
console.log(`-------------`)
sortAnArrayBy2Criteria(['test',
    'Deny',
    'omen',
    'Default']
)
function listOfNames(arr) {

    arr.sort((a, b) => a.localeCompare(b))
        .forEach((value, i) => {
            console.log(`${i + 1}.${value}`)
        })
}

listOfNames(["John", "Bob", "Christina", "Ema"])
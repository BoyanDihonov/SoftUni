function mirrorWords([input]) {

    let pattern = /(\@|\#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/gm
    let mirrorWords = []
    let matches = [...input.matchAll(pattern)]
    for (const match of matches) {
        let firstWord = match[2]
        let secondWord = match[3]
        let reverseWord = secondWord.split('').reverse().join('')
        if (firstWord === reverseWord) {
            mirrorWords.push(firstWord + " <=> " + secondWord)
        }

    }
    if (matches.length === 0) {
        console.log('No word pairs found!')
        console.log('No mirror words!')
    } else {
        console.log(`${matches.length} word pairs found!`)
        if (mirrorWords.length === 0) {
            console.log('No mirror words!')
        } else {
            console.log('The mirror words are:')
            console.log(mirrorWords.join(', '))
        }
    }
}


mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]
)
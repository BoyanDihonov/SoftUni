function theImitationGame(arr) {

    let secretMsg = arr.shift()

    let command = arr.shift()
    while (command != 'Decode') {
        let curCommand = command.split('|')
        if (curCommand[0] == 'Move') {
            let count = Number(curCommand[1])

            let lettersToMove = secretMsg.substring(0, count);
            secretMsg = secretMsg.replace(lettersToMove, '')
            secretMsg = secretMsg.split('')
            secretMsg.push(lettersToMove)
            secretMsg = secretMsg.join('')
        } else if (curCommand[0] == 'Insert') {
            let index = Number(curCommand[1])
            let value = curCommand[2]

            secretMsg = secretMsg.split('')
            secretMsg.splice(index, 0, value);
            secretMsg = secretMsg.join('')
        } else if (curCommand[0] == 'ChangeAll') {
            let substring = curCommand[1];
            let replacement = curCommand[2];

            while (secretMsg.includes(substring)) {

                secretMsg = secretMsg.replace(substring, replacement);
            }
        }
        command = arr.shift()
    }
    console.log(`The decrypted message is: ${secretMsg}`)
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]
)
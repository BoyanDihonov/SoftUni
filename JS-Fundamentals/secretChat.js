function secretChat(input) {
    let msg = input.shift()
    let command = input.shift()

    while (command != 'Reveal') {
        let [curCommand, arg1, arg2] = command.split(':|:')
        if (curCommand == 'InsertSpace') {
            let left = msg.substring(0, arg1)
            let right = msg.substring(arg1)
            msg = left + ' ' + right
            console.log(msg)
        } else if (curCommand == 'Reverse') {
            if (msg.includes(arg1)) {
                let index = msg.indexOf(arg1)
                let secondPart = msg.substring(index, index + arg1.length).split('').reverse().join('')
                let firstPart = msg.substring(0, index)
                let thirdPart = msg.substring(index + arg1.length)
                msg = firstPart + secondPart + thirdPart
                console.log(msg)
            } else {
                console.log('error')
            }
        } else if (curCommand == 'ChangeAll') {

            msg = msg.split(arg1).join(arg2)
            console.log(msg)
        }
        command = input.shift()

    }

    console.log(`You have a new text message: ${msg}`)
}


secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  

)
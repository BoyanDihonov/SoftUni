function game(input){
let msg = input.shift()

let commands = input.shift()
while (commands != 'Decode'){
let [command , arg1, arg2] = commands.split('|')
    if (command == 'Move'){
        let count = Number(arg1)
        let lettersToMove = msg.substring(0,count)
        msg = msg.replace(lettersToMove , '')
        msg = msg + lettersToMove
    }else if (command == 'Insert'){

        let index = Number(arg1)
        let value = arg2

        let left = msg.substring(0,index)
        let right = msg.substring(index)
        msg = left+value + right
        

    }else {
        let substring = arg1
        let replacement = arg2
        msg = msg.split(substring).join(replacement)
    }
commands = input.shift()
}
console.log(`The decrypted message is: ${msg}`)
}

game([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?','Decode'
  ]
  
  )
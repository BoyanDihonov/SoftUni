function DecryptingCommands(input) {
    let origMsg = input.shift()
    let commands = input.shift()
    while (commands != 'Finish') {
        let [command, arg1, arg2] = commands.split(' ')
        switch (command) {
            case 'Replace':
                let currentChar = arg1
                let newChar = arg2
                let newMsg = origMsg.split(currentChar).join(newChar)
                origMsg = newMsg
                console.log(origMsg)
                break;

            case 'Cut':
                let startIndex = Number(arg1)
                let endIndex = Number(arg2)
                if (origMsg.hasOwnProperty(startIndex) && origMsg.hasOwnProperty(endIndex)) {
                    let newMsg = origMsg.slice(startIndex, endIndex - startIndex)
                    origMsg = newMsg
                    console.log(origMsg)
                } else {
                    console.log(`Invalid indices!`)
                }


                break;

            case 'Make':
                if (arg1 == 'Upper') {
                    origMsg = origMsg.toUpperCase()
                    console.log(origMsg)
                } else {
                    origMsg = origMsg.toLowerCase()
                    console.log(origMsg)
                }
                break;

            case 'Check':
                let string = arg1
                if (string.hasOwnProperty(origMsg)) {
                    console.log(`Message contains ${string}`)
                } else {
                    console.log(`Message doesn't contain ${string}`)
                }
                break;

            case 'Sum':
                let start = arg1
                let end = arg2
                if (start < 0 || end < 0 || start >= origMsg.length || end >= origMsg.length) {
                    console.log('Invalid indices!');
                    return;
                }
                let substring = origMsg.substring(start, end + 1);
                let asciiSum = 0;

                for (let i = 0; i < substring.length; i++) {
                    asciiSum += substring.charCodeAt(i);
                }

                console.log(asciiSum);
                break;

        }


        commands = input.shift()
    }
    console.log(origMsg)
}
DecryptingCommands(["ILikeSoftUni", "Replace I We", "Make Upper", "Check SoftUni", "Sum 1 4", "Cut 1 4", "Finish"])
function passRes(input) {
    let pass = input.shift()
    let line = input.shift()
    let newPass = ''
    while (line != 'Done') {
        let [command, arg1, arg2] = line.split(' ')
        if (command == 'TakeOdd') {
            for (let i = 0; i < pass.length; i++) {
                if (i % 2 != 0) {
                    newPass += pass[i]
                }
            }
            pass = newPass
            console.log(pass)

        } else if (command == 'Cut') {
            let index = Number(arg1)
            let length = Number(arg2)
            let toCut = pass.substring(index, index + length)
            pass = pass.replace(toCut, '')

            console.log(pass)
        } else if (command == 'Substitute') {
            let substring = arg1
            if (pass.includes(substring)) {
                pass = pass.split(arg1).join(arg2)
                console.log(pass)
            } else {
                console.log(`Nothing to replace!`)
            }
        }

        line = input.shift()
    }
    console.log(`Your password is: ${pass}`)
}

passRes(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])


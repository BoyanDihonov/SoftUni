function valueOfAString(input) {
    let str = input.shift();
    let letterCase = input.shift();
    let sum = 0;

    if (letterCase === 'UPPERCASE') {
        let pattern = /[A-Z]/g;
        let uppercaseLetters = str.match(pattern);

        if (uppercaseLetters) {
            sum = uppercaseLetters.reduce((acc, char) => acc + char.charCodeAt(0), 0);
        }
    } else {
        let pattern = /[a-z]/g;
        let lowercaseLetters = str.match(pattern);

        if (lowercaseLetters) {
            sum = lowercaseLetters.reduce((acc, char) => acc + char.charCodeAt(0), 0);
        }
    }

    console.log(`The total sum is: ${sum}`);
}

valueOfAString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE'])
// valueOfAString(['AC/DC', 'UPPERCASE'])
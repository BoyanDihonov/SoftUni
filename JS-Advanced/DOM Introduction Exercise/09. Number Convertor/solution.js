function solve() {
    const input = document.getElementById('input');
    const selectMenuTo = document.getElementById('selectMenuTo');
    const button = document.getElementsByTagName('button')[0];
    const result = document.getElementById('result');

    function createOption(value, text) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = text;
        return option;
    }

    const binaryOption = createOption('binary', 'Binary');
    const hexadecimalOption = createOption('hexadecimal', 'Hexadecimal');

    selectMenuTo.appendChild(binaryOption);
    selectMenuTo.appendChild(hexadecimalOption);

    button.addEventListener('click', () => {
        const number = Number(input.value);
        let resultNumber = '';

        switch (selectMenuTo.value) {
            case 'binary':
                resultNumber = number.toString(2);
                break;
            case 'hexadecimal':
                resultNumber = number.toString(16).toUpperCase();
                break;
            default:
                resultNumber = 'Invalid conversion';
        }

        result.value = resultNumber;
    });
}
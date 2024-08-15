function subtract() {
    let one = document.getElementById('firstNumber').value
    let two = document.getElementById('secondNumber').value
    let result = document.getElementById('result')

    result.textContent = one - two
}
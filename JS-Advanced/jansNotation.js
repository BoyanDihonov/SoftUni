function jansNotation(input) {
    let stack = [];

    function applyOperation(firstOperand, secondOperand, operator) {
        switch (operator) {
            case '+':
                return firstOperand + secondOperand;
            case '-':
                return firstOperand - secondOperand;
            case '*':
                return firstOperand * secondOperand;
            case '/':
                return firstOperand / secondOperand;
            default:
                throw new Error(`Invalid operator: ${operator}`);
        }
    }

    for (let element of input) {
        if (typeof element === 'number') {
            stack.push(element);
        } else {
            if (stack.length < 2) {
                return 'Error: not enough operands!';
            }
            let secondOperand = stack.pop();
            let firstOperand = stack.pop();
            stack.push(applyOperation(firstOperand, secondOperand, element));
        }
    }

    if (stack.length > 1) {
        return 'Error: too many operands!';
    }

    return stack[0].toString();
}
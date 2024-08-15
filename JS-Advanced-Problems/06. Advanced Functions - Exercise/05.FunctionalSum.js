function add(addend) {

    let sum = addend;

    function calc(nextAddend) {
        sum += nextAddend;
        return calc;
    }

    calc.toString = () => sum;
    return calc;
    }
    add(1)
    add(1)(6)(-3)
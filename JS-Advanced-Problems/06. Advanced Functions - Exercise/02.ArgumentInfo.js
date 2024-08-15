function argumentInfo(...input) {

    let typeCounter = {}

    input.forEach(arg => {
        let type = typeof arg;
        console.log(`${type}: ${arg}`);

        typeCounter[type] = (typeCounter[type] || 0) + 1;

    })
    Object.entries(typeCounter)
        .sort((a, b) => b[1] - b[2])
            .forEach(([type, count]) => console.log(`${type} = ${count}`))
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); })
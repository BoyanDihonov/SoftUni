function cityRecord(name, population, treasury) {

    let record = {
        name: name,
        population: population,
        treasury: treasury
    }
    return record
}

cityRecord('Tortuga',
    7000,
    15000
)
console.log(`---------`)
cityRecord('Santo Domingo',
    12000,
    23500
)
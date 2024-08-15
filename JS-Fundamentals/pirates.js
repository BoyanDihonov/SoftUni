function pirates(input) {
    let cities = {}
    let commands = input.shift()
    while (commands != 'Sail') {
        let [cityName, population, gold] = commands.split('||')
        if (cities.hasOwnProperty(cityName)) {
            population = parseInt(population)
            gold = parseInt(gold)
            cities[cityName].population += population
            cities[cityName].gold += gold
            commands = input.shift()
        } else {
            cities[cityName] = { population, gold }
            commands = input.shift()
        }
    }

console.log(cities)
}

pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Tortuga||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])

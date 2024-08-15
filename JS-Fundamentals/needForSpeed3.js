function NFS3(input) {
    let n = input.shift()
    let cars = {}
    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = input[i].split('|')
        mileage = Number(mileage)
        fuel = Number(fuel)
        cars[car] = { mileage, fuel }
    }
    for (let i = n; i < input.length; i++) {
        let [command, car, arg1, arg2] = input[i].split(' : ')
        arg1 = Number(arg1)
        arg2 = Number(arg2)

        switch (command) {
            case 'Stop': break;
            case 'Drive':
            
                let distance = arg1
                let fuelNeeded = arg2
                if (cars[car].fuel < fuelNeeded) {
                    console.log(`Not enough fuel to make that ride`)

                } else {
                    cars[car].fuel -= fuelNeeded
                    cars[car].mileage += distance
                    console.log(`${car} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`)
                    if (cars[car].mileage >= 100000) {
                        console.log(`Time to sell the ${car}!`)
                        delete cars[car]

                    }
                }
                break;
            case 'Refuel':
                let fuelToAdd = Number(arg1)
                if (cars[car].fuel + fuelToAdd > 75) {
                    let addedFuel = 75 - cars[car].fuel
                    cars[car.fuel] = 75
                    console.log(`${car} refueled with ${addedFuel} liters`)
                } else {
                    console.log(`${car} refueled with ${fuelToAdd} liters`)
                }

                break;
            case 'Revert':
                let km = Number(arg1)
                if (cars[car].mileage - km >= 10000) {
                    cars[car].mileage -= km
                    console.log(`${car} mileage decreased by ${km} kilometers`)
                } else {
                    cars[car].mileage = 10000

                }
                break;
        }


    }
    Object.keys(cars).forEach((car) => {
        console.log(`${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`)
    })

}

NFS3([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]

)
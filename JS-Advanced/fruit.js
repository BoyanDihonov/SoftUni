function fruit(fruit, grams, pricePerKg) {

    console.log(`I need $${(grams * pricePerKg / 1000).toFixed(2)} to buy ${(grams / 1000).toFixed(2)} kilograms ${fruit}.`)

}

fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)
function storeProvision(curStock, delivery) {

    let products = {}

    for (let i = 0; i < curStock.length; i += 2) {
        let productName = curStock[i]
        let qty = Number(curStock[i + 1])

        products[productName] = qty
    }
    for (let i = 0; i < delivery.length; i += 2) {
        let productName = delivery[i]
        let qty = Number(delivery[i + 1])

        if (productName in products) {
            products[productName] += qty
        } else {
            products[productName] = qty
        }
    }
    let entries = Object.entries(products);
    for (let entry of entries) {
        console.log(entry.join(' -> '))
    }
}

storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',

    '14', 'Pasta', '4', 'Beer', '2'

],

    [

        'Flour', '44', 'Oil', '12', 'Pasta', '7',

        'Tomatoes', '70', 'Bananas', '30'

    ])
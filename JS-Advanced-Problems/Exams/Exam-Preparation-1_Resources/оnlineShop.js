class onlineShop {
    warehouseSpace;
    products = [];
    sales = []
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace
    }
    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw new Error("Not enough space in the warehouse.")
        }

        if (this.products.find(p => p.product == product)) {
            return;
        }
        this.products.push({
            product,
            quantity
        });
        this.warehouseSpace -= spaceRequired

        return (`The ${product} has been successfully delivered in the warehouse.`)
    }

    quantityCheck(product, minimalQuantity) {
        const data = this.findProduct(product)
        if (!data) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }
        if (minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.")
        }

        if (data.quantity >= minimalQuantity) {
            return `You have enough from product ${product}.`
        } else {
            const difference = minimalQuantity - data.quantity
            data.quantity = minimalQuantity
            return `You added ${difference} more from the ${product} products.`
        }
    }
    sellProduct(product) {
        const data = this.findProduct(product)

      
        data.quantity--;

        this.sales.push({
            product,
            quantity
        })
        
    


        return `The ${product} has been successfully sold.`
    }
    revision() {
        if (this.sales.length == 0) {
            throw new Error(`There are no sales today!`)
        } else {
            const result = [
                `You sold ${this.sales.length} products today!`
                    `Products in the warehouse:`
            ]
            for (let { product, quantity } of this.products) {
                result.push(`${product}-${quantity} more left`)
            }
        }
        return result.join('\n')
    }
    findProduct(product) {
        const data = this.products.find(p => p.product == product);

        if (!data) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }
    }
}

const myOnlineShop = new onlineShop(500)

console.log(myOnlineShop.loadingStore('headphones', 10, 200));

console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.loadingStore('TV', 40, 500))
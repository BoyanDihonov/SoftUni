class RefurbishedSmartphones {
    constructor(retailer) {
        this.availableSmartphones = []
        this.soldSmartphones = []
        this.revenue = 0
        this.smartPhone = {}
    }
    addSmartphone(model, storage, price, condition) {
        if (model == '' || storage < 0 || price < 0 || condition == '') {
            throw new Error('Invalid smartphone!')
        }else {
            this.availableSmartphones.push({model, storage, price, condition})
            return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.otFixed(2)}$`
        }

    }
    sellSmartphone (model, desiredStorage){
        let soldPrice = 0
        let foundPhone = this.availableSmartphones.find(x => x.model == model )
        if (!foundPhone){
            throw new Error (`${model} was not found!`)
        }else if (foundPhone.storage >= desiredStorage){
            soldPrice = foundPhone.price
        }else if (desiredStorage - foundPhone.storage <= 128) {
            soldPrice -= foundPhone.price*0.90
        }else if (desiredStorage - foundPhone.storage > 128){
            soldPrice -= foundPhone.price*0.80
        }

    }
}


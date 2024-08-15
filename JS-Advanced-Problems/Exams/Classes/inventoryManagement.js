class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error(`Quantity must be greater than zero.`);
        }
        if (this.items.length >= this.capacity) {
            throw new Error(`The inventory is already full.`);
        }
        let existingItem = this.items.find(item => item.name === itemName);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ name: itemName, quantity: quantity });
        }
        return `Added ${quantity} ${itemName}(s) to the inventory.`;
    }

    sellItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error(`Quantity must be greater than zero.`);
        }
        let existingItem = this.items.find(item => item.name === itemName);
        if (!existingItem) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        }
        if (existingItem.quantity < quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`);
        }
        existingItem.quantity -= quantity;
        if (existingItem.quantity === 0) {
            this.outOfStock.push(itemName);
            this.items.splice(this.items.indexOf(existingItem), 1);
        }
        return `Sold ${quantity} ${itemName}(s) from the inventory.`;
    }

    restockItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error(`Quantity must be greater than zero.`);
        }
        let existingItem = this.items.find(item => item.name === itemName);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ name: itemName, quantity: quantity });
        }
        if (this.outOfStock.includes(itemName)) {
            this.outOfStock.splice(this.outOfStock.indexOf(itemName), 1);
        }
        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
    }
    getInventorySummary() {
        let summary = `Current Inventory:\n`;
        summary += `${this.items.map(({ name, quantity }) => `${name}: ${quantity}`).join('\n')}`;
        if (this.outOfStock.length > 0) {
            summary += `\nOut of Stock: ${this.outOfStock.join(", ")}`;
        }
        return summary;
    }

}

const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));






import { expect } from "chai";
import { onlineStore } from "../03.Online Store/onlineStore.js";

 
describe("Tests for onlineStore", function() {
    describe("isProductAvailable", function() {
        it("should return out of stock message when stockQuantity is 0", function() {
            const result = onlineStore.isProductAvailable("Laptop", 0);
            expect(result).to.equal("Sorry, Laptop is currently out of stock.");
        });

        it("should return available message when stockQuantity is greater than 0", function() {
            const result = onlineStore.isProductAvailable("Headphones", 10);
            expect(result).to.equal("Great! Headphones is available for purchase.");
        });

        it("should throw an error for invalid input", function() {
            expect(() => onlineStore.isProductAvailable("Mouse", "invalid")).to.throw("Invalid input.");
        });
    });

    describe("canAffordProduct", function() {
        it("should return successful purchase message when funds are sufficient", function() {
            const result = onlineStore.canAffordProduct(50, 100);
            expect(result).to.equal("Product purchased. Your remaining balance is $50.");
        });

        it("should return insufficient funds message when funds are not sufficient", function() {
            const result = onlineStore.canAffordProduct(200, 150);
            expect(result).to.equal("You don't have sufficient funds to buy this product.");
        });

        it("should throw an error for invalid input", function() {
            expect(() => onlineStore.canAffordProduct("invalid", 100)).to.throw("Invalid input.");
        });
    });

    describe("getRecommendedProducts", function() {
        const productList = [
            { name: "Camera", category: "Photography" },
            { name: "Laptop", category: "Electronics" },
            { name: "Headphones", category: "Electronics" }
        ];

        it("should return recommended products in the specified category", function() {
            const result = onlineStore.getRecommendedProducts(productList, "Electronics");
            expect(result).to.equal("Recommended products in the Electronics category: Laptop, Headphones");
        });

        it("should return no recommended products message when no products in the category", function() {
            const result = onlineStore.getRecommendedProducts(productList, "Clothing");
            expect(result).to.equal("Sorry, we currently have no recommended products in the Clothing category.");
        });

        it("should throw an error for invalid input", function() {
            expect(() => onlineStore.getRecommendedProducts("invalid", "Electronics")).to.throw("Invalid input.");
        });
    });
});
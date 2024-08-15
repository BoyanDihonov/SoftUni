describe("Tests for planYourTrip object", function() {
    describe("choosingDestination()", function() {
        it("should return a message indicating the perfect time to visit Ski Resort in Winter", function() {
            expect(planYourTrip.choosingDestination("Ski Resort", "Winter", 2024)).to.equal("Great choice! The Winter is the perfect time to visit the Ski Resort.");
        });

        it("should return a message suggesting to visit Ski Resort during Winter for the best experience", function() {
            expect(planYourTrip.choosingDestination("Ski Resort", "Summer", 2024)).to.equal("Consider visiting during the Winter for the best experience at the Ski Resort.");
        });

        it("should throw an error for an invalid year", function() {
            expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2023)).to.throw(Error, "Invalid Year!");
        });

        it("should throw an error for an invalid destination", function() {
            expect(() => planYourTrip.choosingDestination("Beach", "Summer", 2024)).to.throw(Error, "This destination is not what you are looking for.");
        });

        it("should suggest visiting Beach in Summer for the best experience", function() {
            expect(planYourTrip.choosingDestination("Beach", "Summer", 2024)).to.equal("Great choice! The Summer is the perfect time to visit the Beach.");
        });

        it("should suggest visiting Mountains in Spring for the best experience", function() {
            expect(planYourTrip.choosingDestination("Mountains", "Spring", 2024)).to.equal("Great choice! The Spring is the perfect time to visit the Mountains.");
        });

        it("should suggest visiting Countryside in Autumn for the best experience", function() {
            expect(planYourTrip.choosingDestination("Countryside", "Autumn", 2024)).to.equal("Great choice! The Autumn is the perfect time to visit the Countryside.");
        });

        it("should throw an error when destination is undefined", function() {
            expect(() => planYourTrip.choosingDestination(undefined, "Winter", 2024)).to.throw(Error, "Invalid Information!");
        });

        it("should throw an error when season is undefined", function() {
            expect(() => planYourTrip.choosingDestination("Ski Resort", undefined, 2024)).to.throw(Error, "Invalid Information!");
        });

        it("should throw an error when year is undefined", function() {
            expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", undefined)).to.throw(Error, "Invalid Information!");
        });
    });

    describe("exploreOptions()", function() {
        it("should remove an activity from the array and return the changed array as a string", function() {
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1)).to.equal("Skiing, Winter Hiking");
        });

        it("should throw an error for invalid activities parameter", function() {
            expect(() => planYourTrip.exploreOptions("Skiing", 1)).to.throw(Error, "Invalid Information!");
        });

        it("should throw an error for invalid activityIndex", function() {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], -1)).to.throw(Error, "Invalid Information!");
        });

        it("should throw an error for non-integer activityIndex", function() {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1.5)).to.throw(Error, "Invalid Information!");
        });

        it("should return an empty string when only one activity is present", function() {
            expect(planYourTrip.exploreOptions(["Skiing"], 0)).to.equal("");
        });

        it("should throw an error when only one activity is present and index is out of bounds", function() {
            expect(() => planYourTrip.exploreOptions(["Skiing"], 1)).to.throw(Error, "Invalid Information!");
        });

        it("should throw an error when activities is undefined", function() {
            expect(() => planYourTrip.exploreOptions(undefined, 1)).to.throw(Error, "Invalid Information!");
        });

        it("should throw an error when activityIndex is undefined", function() {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], undefined)).to.throw(Error, "Invalid Information!");
        });
    });

    describe("estimateExpenses()", function() {
        it("should return a budget-friendly message for total cost less than or equal to $500", function() {
            expect(planYourTrip.estimateExpenses(100, 4)).to.equal("The trip is budget-friendly, estimated cost is $400.00.");
        });

        it("should return a plan accordingly message for total cost greater than $500", function() {
            expect(planYourTrip.estimateExpenses(300, 3)).to.equal("The estimated cost for the trip is $900.00, plan accordingly.");
        });

        it("should throw an error for invalid distanceInKilometers", function() {
            expect(() => planYourTrip.estimateExpenses("abc", 3)).to.throw(Error, "Invalid Information!");
        });

        it("should throw an error for invalid fuelCostPerLiter", function() {
            expect(() => planYourTrip.estimateExpenses(100, "abc")).to.throw(Error, "Invalid Information!");
        });

        it("should throw an error for zero distanceInKilometers", function() {
            expect(() => planYourTrip.estimateExpenses(0, 3)).to.throw(Error, "Invalid Information!");
        });

        it("should throw an error for zero fuelCostPerLiter", function() {
            expect(() => planYourTrip.estimateExpenses(undefined, 0)).to.throw(Error, "Invalid Information!");
        });

        it("should throw an error for zero fuelCostPerLiter", function() {
            expect(() => planYourTrip.estimateExpenses(100, 0)).to.throw(Error, "Invalid Information!");
        });

        it("should throw an error for negative distanceInKilometers", function() {
            expect(() => planYourTrip.estimateExpenses(-100, 3)).to.throw(Error, "Invalid Information!");
        });

        it("should throw an error for negative fuelCostPerLiter", function() {
            expect(() => planYourTrip.estimateExpenses(100, -3)).to.throw(Error, "Invalid Information!");
        });

        it("should return a plan accordingly message for high fuel cost", function() {
            expect(planYourTrip.estimateExpenses(200, 20)).to.equal("The estimated cost for the trip is $4000.00, plan accordingly.");
        });

        it("should throw an error when distanceInKilometers is undefined", function() {
            expect(() => planYourTrip.estimateExpenses(undefined, 3)).to.throw(Error, "Invalid Information!");
        });

        it("should throw an error when fuelCostPerLiter is undefined", function() {
            expect(() => planYourTrip.estimateExpenses(100, undefined)).to.throw(Error, "Invalid Information!");
        });
    });
});

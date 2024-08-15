import { createCalculator } from "../07.AddAndSubtract.js"
import { expect } from "chai"

describe('createCalculator', function () {
    let calc;

    beforeEach(function () {
        calc = createCalculator();
    });
    it('should return 0 for get; ', function () {
        let value = calc.get();
        expect(value).to.be.equal(0)
    })
    it('should return 6 after adding; ', function () {
        calc.add(2)
        calc.add(4)
        let value = calc.get()
        expect(value).to.be.equal(6)
    })
    it('should return 5.5; ', function () {
        calc.add(6)
        calc.subtract(0.5)
        let value = calc.get()
        expect(value).to.be.equal(5.5)
    })
    it("should return NaN for add(string)", function () {
        calc.add('hello');
        let value = calc.get();
        expect(value).to.be.NaN;
    });
    it("should return NaN for subtarct(string)", function () {
        calc.subtract('hello');
        let value = calc.get();
        expect(value).to.be.NaN;
    });
})
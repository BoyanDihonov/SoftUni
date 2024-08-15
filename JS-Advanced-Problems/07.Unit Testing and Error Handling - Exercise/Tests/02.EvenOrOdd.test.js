import { isOddOrEven } from "../02.EvenOrOdd.js"
import { expect } from "chai"
import { assert } from "chai"

describe('isOddOrEven', () => {
    it('should return undefined with a number parameter', () => {
        assert.equal(isOddOrEven(13), undefined);
    });
    it('should return undefined with an object parameter', () => {
        assert.equal(isOddOrEven({ name: 'Pesho' }), undefined);
    });
    it('should return correct result with an even length', () => {
        assert.equal(isOddOrEven('roar'), 'even');
    });
    it('should return correct result with an odd length', () => {
        assert.equal(isOddOrEven('Peter'), 'odd');
    });
    it('should return correct result with multiple consecutive checks', () => {
        assert.equal(isOddOrEven('cat'), 'odd');
        assert.equal(isOddOrEven('alabala'), 'odd');
        assert.equal(isOddOrEven('is it even'), 'even');
    });
});
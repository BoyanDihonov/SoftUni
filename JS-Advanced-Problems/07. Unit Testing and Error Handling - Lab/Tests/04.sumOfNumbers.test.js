import { expect } from 'chai'
import { sum } from '../04.SumOfNumbers.js'

describe('Suite', function () {
    it('works with number array', () => {
        let arr = [1, 1, 1];

        expect(sum(arr)).to.equal(3)
    })
    it('works with one number', () => {
        let arr = [1]
    })
    it ('works with empty arr', () => {
        let arr=[]
    })
});
import { expect } from "chai"
import { assert } from "chai"
import { lookupChar } from "../03.CharLookup.js"

describe('lookupChar function tests', () => {
    it('should return undefined if the first parameter is not a string', () => {
      const result = lookupChar(123, 0);
      expect(result).to.be.undefined;
    });
  
    it('should return undefined if the second parameter is not a number', () => {
      const result = lookupChar('test', '0');
      expect(result).to.be.undefined;
    });
  
    it('should return "Incorrect index" if the index is a negative number', () => {
      const result = lookupChar('test', -1);
      expect(result).to.equal('Incorrect index');
    });
  
    it('should return "Incorrect index" if the index is equal to the string length', () => {
      const result = lookupChar('test', 4);
      expect(result).to.equal('Incorrect index');
    });
  
    it('should return "Incorrect index" if the index is greater than the string length', () => {
      const result = lookupChar('test', 5);
      expect(result).to.equal('Incorrect index');
    });
  
    it('should return the character at the specified index', () => {
      const result = lookupChar('test', 1);
      expect(result).to.equal('e');
    });
  
    it('should return the character at the specified index when index is 0', () => {
      const result = lookupChar('test', 0);
      expect(result).to.equal('t');
    });
  });
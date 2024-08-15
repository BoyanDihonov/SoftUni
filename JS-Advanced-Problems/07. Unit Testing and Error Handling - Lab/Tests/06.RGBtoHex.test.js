import { expect } from "chai"
import { rgbToHexColor } from "../06.RGBtoHex.js"


describe('rgbToHexColor', () => {
    it('should return the correct hex color for valid input', () => {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
    });

    it('should return undefined for invalid input types', () => {
        expect(rgbToHexColor('255', 0, 0)).to.be.undefined;
        expect(rgbToHexColor(255, '0', 0)).to.be.undefined;
        expect(rgbToHexColor(255, 0, '0')).to.be.undefined;
    });

    it('should return undefined for out-of-range values', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(255, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(255, 256, 0)).to.be.undefined;
        expect(rgbToHexColor(255, 0, -1)).to.be.undefined;
        expect(rgbToHexColor(255, 0, 256)).to.be.undefined;
    });

    it('should return undefined for non-integer values', () => {
        expect(rgbToHexColor(255.5, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(255, 0.5, 0)).to.be.undefined;
        expect(rgbToHexColor(255, 0, 0.5)).to.be.undefined;
    });
});
import { assert, expect } from "chai"
import {recipeSelection} from "./03. Recipe Selection_Author's Solution/recipeSelection.js";
describe("Tests for recipeSelection object", function() {
    describe("isTypeSuitable function", function() {

        it("should return 'This recipe is not suitable for vegetarians' for type 'Meat' and dietaryRestriction 'Vegetarian'", 
function(){
        assert.equal(recipeSelection.isTypeSuitable("Meat"))
}
            
        });
     });


});

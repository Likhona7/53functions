var assert = require('assert');
//TODO: import the module after you created it.
var upper = require('../upper');

describe("upperCase words ", function(){

    it("should return uppercase 'ZEBRAS' ", function(){
        //TODO: call your function and use assert to check the result
        var result = upper("zebras");
        assert.equal(result, "ZEBRAS");
    });

});

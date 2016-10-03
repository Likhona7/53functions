var avg = require("../avg");

var assert = require("assert");





describe("takes a sentence as a parameter and returns the average word length rounded up", function(){

it("should returns the average word length rounded up", function(){
var result = avg("i love this interesting function because of its use ability");

assert.equal(result, 5);

})





})

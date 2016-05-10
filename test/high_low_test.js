var assert = require("assert");
var high_low = require("../high_low");



describe("should return highest and lowest numbers", function(){

it("should return minimum ", function(){

var result = high_low.minimum([1,2,3,4,5]);
assert.equal(result, 1);


})

it("should return maximum ", function(){

  var result = high_low.maximum([1,2,3,4,5]);
assert.equal(result, 5);

})





})

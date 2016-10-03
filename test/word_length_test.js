var  word_length = require("../word_length");
var assert = require("assert");



describe("takes a sentence as a parameter and returns the average word length rounded up and rounded down", function(){



it("should returns the average word length rounded up", function(){
var roundUp = new word_length("likhona was here to code");
var result = roundUp.rounded_up();
assert.equal(result,4);

})




it("should returns the average word length rounded down", function(){
var roundDown = new word_length("likhona was here to code");
var result = roundDown.rounded_down();
assert.equal(result,4);
})

})

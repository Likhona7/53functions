var sum_word_length = require("../sum_word_length");
var assert = require("assert");



describe("should takes a sentence as a parameter and returns the sum of the length of words in it", function(){

var lee = "I like programming and it is coolest way of learn to communicate with a computer";
it("should return the sum of words", function(){
  var result = sum_word_length(lee);
  //console.log(result);
assert.equal(result, 338);

})
})

var count_words = require("../count_words");
var assert = require("assert");



describe("should takes a sentence as a parameter and returns the number of words in the sentence", function(){
  var lee = "I like and programming is cool";
    it("should return the words in number", function(){
        var result = count_words(lee);
assert.equal(result, 6);
    });
});

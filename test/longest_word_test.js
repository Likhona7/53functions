var longest_word = require("../longest_word");
var assert = require("assert");



describe("should takes a sentence as a parameter and returns the longest word in it, and the length of the word", function(){

var lee = "likhona was here to code";

it("should return the longest word and length", function(){
var result = longest_word(lee);
assert.equal(result, "likhona");


})
it("should return the length of the longest word", function(){


var result = longest_word(lee);
assert.equal(result, 7);


})
})

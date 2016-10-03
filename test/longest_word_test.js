var longest_word = require("../longest_word");
var assert = require("assert");
describe("should takes a sentence as a parameter and returns the longest word in it, and the length of the word", function(){

it("should return the longest word and length", function(){
var longWord = new longest_word("likhona was here to code");
var result = longWord.longestWord();
assert.equal(result, "likhona");
})

it("should return the length of the longest word", function(){
var WordLength = new longest_word("likhona was here to code");
var result = WordLength.longWordLength();
assert.equal(result, 7);

})

})

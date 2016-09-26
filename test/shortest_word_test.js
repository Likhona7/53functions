var shortest_word = require("../shortest_word");
var assert = require("assert");

describe("should takes a sentence as a parameter and returns the shortest word in it, and the length of the word", function(){

var lee = "likhona was here to code"

it("should return the shortest word", function(){
var result = shortest_word(lee);
assert.equal(result, "to")
})

it("should return the length of the word which is short", function(){
var result = shortest_word(lee);
assert.equal(result, 2)
})


  })

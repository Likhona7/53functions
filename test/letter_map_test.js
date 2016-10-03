var letter_map = require("../letter_map");

var assert = require("assert");


describe("Write a function that takes a sentence as a parameter.The function should return a map", function(){


it("should return a map", function(){

var result = letter_map("Let's do this today");
assert.equal(result,{"L" : ["Let's"], "d" : ["do"], "t" : ["this", "today"]})


})




})

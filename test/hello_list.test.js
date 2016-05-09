var hello_list = require("../hello_list");
var assert = require("assert");




describe("takes a number as parameter and returns a list of hello world entries equal to the number supplied", function() {

  it("should return list of hello world!", function() {
          var vee = ['hello world!',
                      'hello world!',
                      'hello world!',
                      'hello world!',

                      'hello world!'];
    var result = hello_list(5);
    assert.deepEqual(result, vee)


    // var result = number_list(5);
    // assert.deepEqual(result, [1,2,3,4,5])


  })


})

module.exports = function(n){




var multiArray = [];

var word = n.split(" ").forEach(function(array){
var array2 = [];
array2.push(array);
multiArray.push(array2);
})

console.log(multiArray);

//  var myArray = ['adam', 'bianca', 'cat', 'dennis'];

// // var myFunc = function (letter) {
// //     for (var i = 0; i < letter.length; i = i + 1) {

// //         // Use the index i here
// //         console.log(letter[i].charAt(0));
// //     }
// // }

// // Call your function, passing in the array you defined:

// // a
// // b
// // c
// // d
// var array = [];
// myArray.forEach( function(word){
//    var first = word.charAt(0);
//  if(first == myArray){
//    return {
//      first : myArray
//    }
//    console.log(first);
//  }



// });

// console.log(array


var sentence = "let's do this today";



  var words = sentence.split(' ');
  var letterMap = {};

  words.forEach(function(word) {
         // console.log(word[0]);

    if (letterMap[word[0]] === undefined) {
      letterMap[word[0]] = [word];
    } else {
      letterMap[word[0]].push(word);
    }
  })
console.log(letterMap)



}

module.exports = function(n){

//var max = -Infinity;
var longestWord = [];
var wordsL = [];

  var arr = n.split(" ").forEach(function(words){
wordsL.push(words.length);
});
//console.log(wordsL);

var longestWord = Math.max.apply(null,wordsL);
var lee = wordsL.indexOf(longestWord);

//console.log(lee);


this.longest_Word = function(){
  console.log(arr.lee);
  return arr.lee;
}

this.longestLength = function(){
console.log(longestWord);
  return longestWord;
}



  };




// exports.maximum = function(ObjectData) {
//
//     var max = -Infinity;
//     var maxObj = {};
//     ObjectData.forEach(function(obj) {
//       if (obj.data > max) {
//         max = obj.data;
//         maxObj = obj;
//       }
//     })
//     console.log(maxObj)
//     return maxObj;
//   }

// module.exports = function(sentence){
// var longestWord = [];
// var wordsLength = [];
//   var arr = sentence.split(" ");
//
//   arr.forEach(function(words){
// wordsLength.push(words.length);
// });
// console.log(arr);
// var longestWord = Math.max.apply(null,wordsLength);
// var lee = wordsL.indexOf(longestWord);
// this.longestWord = function(){
//   return wordsLength[lee];}
// this.longestLength = function(){
//   return longestWord;
// }};
////////////////////////////////////////////////////////////////////////////////
module.exports = function(sentence) {
var longestString = [];
var words = sentence.split(' ');
var wordLengths = [];
words.forEach (function(word){
wordLengths.push(word.length);
})
var longestLength = Math.max.apply(null,wordLengths);
var pos = wordLengths.indexOf(longestLength);
//console.log(words[pos]);
this.longestWord = function() {
return words[pos];
}
this.longWordLength = function() {
return longestLength;
}
}

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

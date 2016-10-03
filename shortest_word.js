module.exports = function(n){
var shortestWord = [];
var wordlength = [];

  var arr = n.split(" ");

  arr.forEach(function(words){
 wordlength.push(words.length);
})
var shortestLength = Math.min.apply(null,wordlength);
var pos = wordlength.indexOf(shortestLength);
// console.log(shortestLength);
// console.log(arr[pos],"llllllllllllllllll");

this.shortest_word = function(){
  return arr[pos];
}

this.shortest_length = function(){
  return shortestLength;
}
}

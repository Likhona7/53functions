module.exports = function(n){

var shortestWord = [];
var wordlength = [];

  var arr = n.split(" ");


  console.log(arr);

  arr.forEach(function(words){
 wordlength.push(words.length);


})



var shortestWord = Math.min.apply(null,wordlength);


var lee = wordlength.indexOf(shortestWord);

console.log(lee);


this.shortest_word = function(){
  console.log(arr.lee);
  return arr.lee
}
this.shortest_length = function(){
  console.log(shortestWord);
  return shortestWord;
}

}

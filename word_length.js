module.exports = function(n){
  // test...
  var total = 0;
var wordLength = [];
var word = n.split(" ").forEach(function(array){
wordLength.push(array.length);

})
// console.log(total);
// console.log(wordLength / wordlength.length);
wordLength.forEach(function(number){
total = total + number;
  // console.log(total);
})
 averageLength = (total / wordLength.length);
//console.log(averageLength);
var roundUp = Math.ceil(averageLength);
var roundDown = Math.floor(averageLength);
// console.log(roundUp);
// console.log(roundDown);
// var upAvgWordLength = Math.ceil(avgWordLength)
//   var downAvgWordLength = Math.floor(avgWordLength)
//
this.rounded_up = function(){
  return roundUp;
}
this.rounded_down = function(){
  return roundDown;
}

}

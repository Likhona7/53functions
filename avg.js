module.exports = function(n){

var total = 0;
var wordLength = [];

var word = n.split(" ").forEach(function(array){

wordLength.push(array.length)
})


wordLength.forEach(function(length){

total += length;

// console.log(total);
})

var average = (total / wordLength.length);

//console.log(average);
// console.log(wordLength);
var roundUp = Math.floor(average);

//console.log(roundUp);

return roundUp;


}

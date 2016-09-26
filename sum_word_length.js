module.exports = function(n){

// var arr = n.split(" ");
// var total = 0;
// total = total + arr.length;
// console.log(total);


var word = "Apple"
var sum = 0;
n.toUpperCase().split('').forEach(function(alphabet) {
  //console.log(alphabet);
    sum += alphabet.charCodeAt(0) - 64;
});
//console.log(sum);
return sum;
}

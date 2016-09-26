module.exports = function(n){

var max = -10;
var most = "";
  var arr = n.split(" ").forEach(function(words){

if(words > max){

  max = words;
most = words;

}
  })
console.log(max, "llllllllllllllllllllllll");

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

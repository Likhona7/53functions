exports.minimum = function(n){

var min = Infinity;

n.forEach(function(array){
if(array < min){

min = array;

}
})

console.log(min);
return min;
};

exports.maximum = function(m){
var max = -Infinity;
//var maxValue = Math.max.apply(Math, n);
m.forEach(function(array2){
if(array2 > max){

  max = array2;
}

})
console.log(max)
return max;
};

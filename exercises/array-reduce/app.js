// 1) Turn an array of numbers into a total of all the numbers:
// function total(arr) {
//    total.reduce(a, b)
//  }
 
//  console.log(total([1,2,3])); // 6

 var total = [1, 2, 3];
 var newTotal = total.reduce(function(a, b){
    return a + b
 })
 console.log(newTotal);
//  2) Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
    return stringConcat.reduce(stringConcat);
 }
 
 console.log(stringConcat([1,2,3])); // "123"

//  var stringConcats= [1, 2, 3];
  
//  var newStringConcat = function stringConcat
// simple array sum
function simpleArraySum(ar) {
  let sum = 0;
  for (var i = 0; i < ar.length; i++){
     sum += ar[i]
  }
  return sum
}
// Compare the Triplets
function compareTriplets(a, b) {
  let scoreA = 0;
  let scoreB = 0;
  for (let i = 0; i < 3; i++) {
      if (a[i] > b[i]) {
          scoreA = scoreA + 1;
      } else if (a[i] < b[i]) {
          scoreB = scoreB + 1;
      }
  }
  return [scoreA, scoreB]
}

// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
  var sum = ar.reduce(add, 0);
   function add(accumulator, ar) {
       return accumulator + ar;
   }
   return (sum);
}

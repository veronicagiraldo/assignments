// Several people are standing in a row and need to be divided into two teams. 
// The first person goes into team 1, the second goes into team 2, the third goes 
// into team 1 again, the fourth into team 2, and so on.
// You are given an array of positive integers - the weights
// of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.
function alternatingSums(a) {
  var sumEven = 0;
  var sumOdd= 0;
  for( var i = 0; i < a.length; i++){
   if( i%2 == 0){
    sumEven += a[i];
   }else{
    sumOdd += a[i];
   }
  }
  return [sumEven, sumOdd];
 }
//  console.log(alternatingSums)

//  Given a rectangular matrix of characters, add a border of asterisks(*) to it.
              picture = ["abc",
                        "ded"]
            function addBorder(picture) {
              var width = picture[0].length +2;
               return [
                '*'.repeat(width),
                ...picture.map(line => `*${line}*`), 
                '*'.repeat(width)
               ];
              }
              console.log(picture)
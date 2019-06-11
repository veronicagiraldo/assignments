// var text = 'outside';
// function logIt(){
//     console.log(text);
//     var text = 'inside';
// };
// logIt();

function largestNumber(numbers){
  var solution = [7,2,6,3 ] 

   for(var i = 0; i < 4; i++){
       for(var j= 0; j < 4; j++){
           if(numbers[i][j] > largestNumber[i]){
               largestNumber[i] = numbers[i][j];
           }
       }
    return largestNumber;
   }
};
solution([7, 2, 6, 3])


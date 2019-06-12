// uses nested loops

function insertionSort(array){
  let i
  let j
  for(i =1; i < array.length; i++){
    for(j = 0; j < i; j++){
      if(array[i] < array[j]){
        const [item]= array.splice(i, 1)
        array.splice(j, 0, item)
      }
    }
  }
  return array
}
const numbers =[ 2,3,5,6,7,8,19,]
insertionSort(numbers)
// 
function mergeSort(array){
  if(array.length < 2){
  return array
}
const middle = Math.floor(array.length /2)
const left = array.slice(0, middle)
const right = array.slice(middle)

return merge(mergeSort(left), mergeSortO(right))
}

function merge(left, right){
const sorted =[]

while(left.length && right.length){
  if(left[0]<= right[0]){
    sorted.push(left.shift())
  }else{
    sorted.push(right.shift())
  }
  }
  const results = [...sorted, ...left, ...right]
  console.log(results)
  return results
}
const numbers = [1,24,45,6,7,8,9,34,]
mergeSort(numbers)




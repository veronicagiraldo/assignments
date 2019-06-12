// pivot /recursive

function quickSort(array){
  if(array.length < 2){
    return array
  }
  const pivotIndex = array.length -1
  const pivot = array[pivotIndex]
  const left=[]
  const right =[]

  for(let i =0; i < pivotIndex; i++){
    const currentitem = array[i]
    currentitem < pivot
    ? left.push(currentitem)
    : right.push(currentitem)
  }
  return[
    ...quickSort(left),
    pivot,
    ...quickSort(right)
  ]
}
const numbers=[1,2,3,5,6,8,4,8]
quickSort(numbers)
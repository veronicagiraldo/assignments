function createBinaryNode(key){
  return{
    key,
    left: null,
    right: null,
    addLeft(leftkey){
      const newLeft = createBinaryNode(leftkey)
      this.left = newLeft
      return newLeft
    },
    addRight(rightKey){
      const newRight = createBinaryNode(rightKey)
      this.left = newRight
      return newRight
    }
  }
}

function createBinaryTree(rootKey){
  const root = createBinaryNode(rootKey)
  return{
    root,
    print(){
      let result = ''
    }

  }
}
// loop through the array
// if this item> next item, sweap them 
// const {printArray} =require('.../utls');
function bubbleSort(array){
  let swapped = false

  do {
    swapped = false
    array.forEach((item, index) => {
      // printArray(array)
      if(item > array[index +1]){
        const temp = item

        array[index] =array[index +1]
        array[index +1] = temp
        swapped = true 
      }
    })
  } while(swapped)

  return array
}

const numbers =[10,5,6,7,3,4,6,8,1]
bubbleSort(numbers)
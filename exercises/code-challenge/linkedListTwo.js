var addTwoNumbers = function(l1, l2){
  this.length = 0;
  this.head = 0;
  
    const node = {
      value,
      next: null
    }
  
  if(this.length ===0){
    this.length =1
    this.head =node
    return
  }
  let current = this.head

  while(current.next !==null){
    current = current.next
  }
  current.next = node
  this.length++
}
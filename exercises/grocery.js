var shopper ={
    firstName: 'Veronica' ,
    age: 31 ,
    isAlive: true , 
    fullName: function() {
        console.log(this.firstName) 
    },
    groceryCart: ['milk', 'oranges', 'apples', 'meat'] ,
}
 shopper.fullName()





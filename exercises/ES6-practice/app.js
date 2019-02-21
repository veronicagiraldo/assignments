// let ownerName = "John"
// const age = 101
// const pets = ["cat", "dog"]
// let petObjects = []

// function runForLoop() {
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         if (pets[i] === "cat") {
//             let name = "fluffy"
//         } else {
//             let name = "spot"
//         }
//         pet.name = name
//         petObjects.push(pet)
//     }
//     return name
  
// }

// console.log(runForLoop());
// console.log(name)
// const numbers = [1, 2, 3]

// numbers.map(function(number) {
//     return 2 * number;
    
// });

// numbers.map(number => 2 * number);


// console.log(numbers);


// Task 1
// Re-write this .map() using an arrow function:

// Be aware that if JavaScript sees a { directly after the => it will think 
//     it's starting a function, and not starting an object, so the : will be an unexpected symbol.
// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }


// const arr = ["bright orange", "ripe", "rotten"]

// const mapVegetables = arr.map(carrot => [{type: "carrot", name: carrot}])

// console.log(arr);

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// const filterForFriendly = people.filter(person => !!person.friendly)
        
// console.log(filterForFriendly);

// Task 3
// Re-write the following functions to be arrow functions:
// function doMathSum(a, b) {
//     return a + b
// }
// const doMathSumTwo= (a, b) => (a + b)
// const produceProduct = (a, b) => (a * b)
// console.log(produceProduct(2, 4))/console.log(doMathSumTwo)

// Task 4
// Write a printString function that takes firstName, lastName, and age as parameters 
// and returns a string like the following:

// function printString (firstName, lastName, age){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
   
// }
// printString.prototype.speak = function(){
//     console.log("Hi Kat Stark, how does it feel to be 40?")
// }
// const jane = new printString("jane", "Doe", 40)
// console.log(jane)

// console.log(`hi $firstName ${lastName}, how does it feel to be ${age}`)

// task 5: 
// Use the shorthand syntax to make the following filter take up one line. 
// Copy and paste the array to test it.
// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 
//  function filterForDogs(arr) {
//      return arr.filter(animal => {
//          if (animal.type === "dog") {
//              return true
//          } else {
//              return false
//          }
//      })
//  }
 
//  const filterForDogs(arr) => arr.filter(animals => {
//      if(animals.type === "dog"){
//          return true 
//      }
//  })
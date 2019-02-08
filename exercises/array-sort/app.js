// 1) Sort an array from smallest number to largest;
function leastToGreatest(arr) {
    // your code here
  }
  
  console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90] 

var leastToGreatest = [1, 3, 5, 2, 90, 20];

leastToGreatest.sort(function(a, b){
    return a - b
})
console.log(leastToGreatest);

// 2) Sort an array from largest number to smallest;
// function greatestToLeast(arr) {
//   }
  
//   console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1] 
  
var greatestToLeast = [1, 3, 5, 2, 90, 20]
greatestToLeast.sort(function(a, b){
    return b- a 
})
console.log(greatestToLeast);

// 3) Sort an array from shortest string to longest
function lengthSort(arr) {
  return arr.sort(function(a, b){
    return a.length - b.length;
  })
}
  console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"] 
//   var lengthSort = ["dog", "wolf", "by", "family", "eaten"]
//   lengthSort.sort(function(a, b){
//       return a.length - b.length;
//   })
//   console.log(lengthSort);
// 4) Sort an array alphabetically:
// function alphabetical(arr) {
//     return arr.sort(function(a, b){
//         return a - b 
//     })
// }

// console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]
// var alphabetical = ["dog", "wolf", "by", "family", "eaten"];
// alphabetical.sort()

// console.log(alphabetical);

// 5) Sort the objects in the array by age


persons = [
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]
newArr = persons.sort(function(personA,personB){
    return personA.age - personB.age
})
  
console.log(newArr)

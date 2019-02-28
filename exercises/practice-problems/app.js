// Q1:Make a function that takes a string and returns that string reversed.
// Input: "Hello World"
// Output: "dlroW olleH"

// let reverseStr = function(str) {

// }
// console.log(str);


function reverseString(str) {
    var newArr = str.split("")
   return newArr.reverse().join("");
}
console.log(reverseString("hello world"));

// Q2: Make a function that takes a string and returns true if the string 
// could be a number else return false.

Input: "3"
Output: true

Input: "three"
Output: false

let isNum = function(str) {

}

// Q3: Make a function that takes a number and 
// returns true if the number is even else return false.

Input: 4
Output: true

Input: 3
Output: false

let isEven = function(num) {
  
}

// Q4: Make a function that takes an array and returns the average of the array.

Input: [1, 2, 3]
Output: 2

Input: [5, -10, 10, 20]
Output: 6.25

let averageArray = function(arr) {
  
}

// Q5: Make a function that takes two arrays and returns a single array 
// of the items from the arrays added alternatingly.

Input: ["a", "b", "c"] and [1, 2, 3]
Output: ["a", 1, "b", 2, "c", 3]

let combineArrays = function(arr1, arr2) {

}
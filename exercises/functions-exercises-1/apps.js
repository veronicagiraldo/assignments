// Write a function that accepts two numbers as parameters, and returns the sum.
// function addNumbers(numOne, numTwo){
//     return (numOne + numTwo)
// }
// console.log(addNumbers(1,2)); 

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

// function findMax(a, b, c){
//     return Math.max(a, b, c)
// }
// console.log(findMax(1, 50, 200));

// Write a function that accepts one number as a parameter, 
// and returns whether that number is even or odd. (Return the string "even" or "odd");

// function name(a) {
//     if(a%2 === 0){
//     return "even"
//     } else { return "odd"}
// }
// console.log(name(7));

// Write a function that accepts a string as a parameter. If the length of 
// the string is less than or equal to twenty characters long, return the 
// string concatenated with itself (string + string). If the string is more 
// than twenty characters long, return the first half of the string.

function doubleHalfString(str){
    // length is less than 20 characters
    if(str.length <= 20){
        // return the string concatenated with itself
        // (string + string)
        // return str + str;
        return str.concat(str);
    } else {
        return str.slice(0,str.length / 2); 
    }
}
// console.log(doubleHalfString("hello "));
console.log(doubleHalfString("Hello World. This is a very long string."));

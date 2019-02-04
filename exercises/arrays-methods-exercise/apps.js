// Create a new JavaScript file and put these two arrays at the beginning. 
// You will write a single function that performs many operations on them.
// After every command, use console.log() to inspect your arrays.
var fruit = ["banana" , "apple" , "orange" , "watermelon"];
var vegetables = ['carrot' , 'tomato' , 'pepper' , 'lettuce'];

function myArray(fruit, vegetables) {
    vegetables.pop();// Q1:Remove the last item from the vegetable array. === lettuce; vegetables:  [ 'carrot', 'tomato', 'pepper' ]
    fruit.shift();// Q2:Remove the first item from the fruit array. === banana; [ 'apple', 'orange', 'watermelon' ]
    fruit.push(fruit.indexOf("orange")); // Q3:Find the index of "orange."   === 2// Q4:Add that number to the end of the fruit array.
    vegetables.push(vegetables.length);// Add that number to the end of the vegetable array // Use the length property to find the length of the vegetable array.
    var food = fruit.concat(vegetables);// Put the two arrays together into one array. Fruit first. Call the new Array "food".
    food.splice(4,2); // Remove 2 elements from your new array starting at index 4 with one method.
    food.reverse();// Reverse your array.
    return food.join(',');// Turn the array into a string and return it.
}

console.log(myArray(fruit, vegetables));
// console.log("fruit: " , fruit);
// console.log("vegetables: " , vegetables); 
// console.log(vegetables.length);
// console.log(food);
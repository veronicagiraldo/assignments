// Q1: Make a function that will return any given string into all 
// caps followed by the same string all lowercase.
function capilizeAndLowerCase(str) {
    return str.toUpperCase()+str.toLowerCase();
}
console.log (capilizeAndLowerCase("Hello")); //HELLOhello

// function capFirstWord(str){
//     var firstWord = str.toUpperCase().slice(0, str.length / 2);
//     var secondWord = str.toLowerCase().slice(0, str.length / 2);
//     return firstWord + secondWord;
// }
// console.log(capFirstWord("Hello World")); //HELLOhello

// Q2: Make a function that returns a number half the length, 
// and rounded down. You'll need to use Math.floor().

// function findMiddleIndex(str) {
//     var length =str.length;
//     var half = length / 2;
//     var resultFloored = Math.floor(half);
//     return resultFloored;
// }
function findMiddleIndex(str){
    return Math.floor(str.length / 2);
}


console.log(findMiddleIndex("Hello")) //=>2
console.log(findMiddleIndex("Hello World")) //==5

// Q3: Make a function that uses slice() 
// and the other functions you've written to return the first half of the string

function returnFirstTwo(str){
    var newStr = str.slice(0,2);
    return newStr;
}
console.log(returnFirstTwo("Hello World"));//He

function returnFirstHalf(str){
    var newStr = str.slice(0,5);
    return newStr;
}
console.log(returnFirstHalf("Hello World")); //Hello

function capFirstTwo(str){
    var newHalf = str.toUpperCase().slice(0, str.length / 2);
    var secondHalf = str.toLowerCase().slice(str.length /2);
    return newHalf + secondHalf;
}
console.log(capFirstTwo("Hello")); //"HEllo"



// function firstHalfWord(str){
//     return str.slice(Math.floor(str.length / 2,)).toUpperCase(str.slice(0, Math.floor(str.length /2)));
// }

// Q4: Make a function that takes a string and returns that string 
// where the first half is capitalized, and the second half is lower cased. 
// (If the string length is odd, capitalize the shorter of the first half.)
// function firstHalfReturn(str){
//     return str.slice(0, Math.floor(str.length / 2));
// }
// console.log(firstHalfReturn("Hello"))

function firstHalfReturn(str){
    return str.slice(0, Math.floor(str.length / 2)).toUpperCase() + str.slice(Math.floor(str.length / 2, -1)).toLowerCase();
 
 }
 console.log(firstHalfReturn("Hello World"))
 
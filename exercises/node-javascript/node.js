var readline = require("readline-sync");
var num1 = readline.question('Please enter your first number?  ');
var num2 = readline.question('Please enter your second number?  ');
function addTwo (num1, num2){
    console.log(num1 + num2);
}
addTwo(Number(num1), Number(num2));
// addTwo(+num1, +num2) 
function subTwo (num1, num2){
    console.log(num1 - num2);
}
subTwo(Number(num1), Number(num2));

function multiTwo (num1, num2){
    console.log(num1 * num2);
}
multiTwo(Number(num1), Number(num2));

function divTwo (num1, num2){
    console.log(num1 / num2);
}
divTwo(Number(num1), Number(num2));
// operators? if statement 
var operator = readline.question('Please enter the opertation to perform? (sub, add, mul, div)  :');
if( operator === "sub"){
    subTwo(Number(num1), Number(num2));
}
if( operator === "add"){
    addTwo(Number(num1), Number(num2));
}
if( operator === "mul"){
    multiTwo(Number(num1), Number(num2));
}
if( operator === "div"){
    divTwo(Number(num1), Number(num2));
}

var result = readline.question('The Result is: ');
if( result === "sub"){
    subTwo(Number(num1), Number(num2));
}
if( result === "add"){
    addTwo(Number(num1), Number(num2));
}
if( result === "mul"){
    multiTwo(Number(num1), Number(num2));
}
if( result === "div"){
    divTwo(Number(num1), Number(num2));
}





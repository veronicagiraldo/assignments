var ask = require('readline-sync');
console.log('Hello! My name is Veronica. Help me get to know you!\n');
var firstName = ask.question('What is your first name? ');
console.log(`Hello ${firstName.toUpperCase()}`);
var lastName = ask.question(`What is your last name? `);
var firstLastName = firstName.concat(' ',lastName);
console.log(`Awesome, Nice to meet you ${firstLastName}!`);

// var firstLastName = ask.question(`Interesting name ${firstLastName}...`)
var age = ask.question(`I am 65 years old. What is your age? `);
console.log(`Cool, so far, I know your name is ${firstName} ${lastName} and you're ${age} years old.`);
var background = ask.question(`Give me a short background about yourself and I'll repeat back what I remember:`);
console.log(`${background}`);
var numCharacters = ask.question(`The information you gave me is ${background.length} characters long.\n This was the last half: `);
console.log(`${numCharacters}`);

var lastHalf = background.slice(background.length/2)
console.log(lastHalf);
var text = ask.question(`would you like me to start from somewhere else in your info? Choose a number in the range[0 - ${background.length}]?`);
console.log(text.splice(background.length));


// var text = ask.question(`(background.length/2)`)
// var lastHalf =background.splice(parseInt(background.length)/2)
// console.log(`${lastHalf}`)
// var numRange = ask.question(`would you like me to start from somewhere else in your info? Choose a number in the range[0 - ${numRange}]:')
// `would you like me to start from somewhere else in your info? Choose a number in the range[0 - ${background.length}]?`);

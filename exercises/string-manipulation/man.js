var ask = require('readline-sync');
console.log('Hello! My name is Veronica. Help me get to know you!\n');
var firstName = ask.question('What is your first name? ');
console.log(`Hello ${firstName.toUpperCase()}`);
var lastName = ask.question(`What is your last name? `);
console.log(`Awesome, Nice to meet you ${firstName.toUpperCase()}.`);
var age = ask.question(`I am 65 years old. What is your age? `);
console.log(`Cool, so far, I know your name is ${firstName} ${lastName} and you're ${age} years old.`);
var background = ask.question(`Give me a short background about yourself and I'll repeat back what I remember:`);
console.log(`${background}`);
var numCharacters = ask.question(`The information you gave me is ${background.length} characters long.`);


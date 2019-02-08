// 1) Make an array of numbers that are doubles of the first array
// function doubleNumbers(arr){

// }

// doubleNumbers([2, 5, 100]); 

var doubleNumbers = [2, 5, 100]

var newArr = doubleNumbers.map(function(doubleNumber){
    return doubleNumber * 2
})
console.log(newArr);

// 2) Take an array of numbers and make them strings
function stringItUp(arr){
}
stringItUp([2, 5, 100]);

var stringItUps = [2, 5, 10]

var newStringItUps = stringItUps.map(function(stringItUp){
    return stringItUp.toString();
})
console.log(newStringItUps);
// 3) Capitalize each of an array of names:
function capitalizeNames(arr){

}
// ["John", "Jacob", "Jingleheimer", "Schmidt"]
var capitalizeNames = (["john", "JACOB", "jinGleHeimer", "schmidt"]); 

var capitalNames = capitalizeNames.map(function(capitalizeName){
    return capitalizeName.toUpperCase();
})
console.log(capitalNames);

// 4) Make an array of strings of the names
function namesOnly(arr){

}

var namesOnlys =([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]) 
var newNamesOnly = namesOnlys.map(function(namesOnly){
    return namesOnly.name;
})
console.log(newNamesOnly)

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
 
 var makeStrings = ([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]) 

var newMakeStrings = makeStrings.map(function(makeString){
    if(makeString.age >= 18){
     return makeString.name + " can go to the Matrix"
    } else {
      return makeString.name + " is under age!!"
    }
 })

// console.log("");
console.log(newMakeStrings);

// 6) Make an array of the names in h1s, and the ages in h2s:

var readyToPutInTheDOMS = ([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]) 

var newReadyToPutInTheDOMS = readyToPutInTheDOMS.map(function(readyToPutInTheDOM){
    
    return `<h1> ${readyToPutInTheDOM.name}</h1><h2> ${readyToPutInTheDOM.age} </h2>`
})
console.log(newReadyToPutInTheDOMS);

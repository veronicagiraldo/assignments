// Write an if statement that prints "is greater than" if 5 is greater than 3
if(5 >= 3){
    console.log("is greater than");
}
// Write an if statement that prints "is the length" if the length of "cat" is 3
if("cat".length == 3){
    console.log("is the length");
}
// Write an if/else statement that checks if "cat" is equal to "dog" 
// and prints, "not the same" when they are not equal.
if("cat" === "dog"){
    console.log("the same");
}else {
    console.log("not the same");
}
// Using the below object, write an if statement that prints 
/* <theNameOfThePersonInObject> is allowed to go to the movie if they 
are old enough (18 or older), and the opposite if they are not older than 18. */
var person = {
    name: "Bobby",
    age: 12
  }

if( person.age >= 18){
    console.log("Old Enough");
}else {
    console.log("not old enough");
}
console.log(person.name)
// Using that same object, only allow them into the movie if their name starts with "B"
var searchB = function(person){
    return person.name === "B";
};
var personName = person.name 
if( personName === "B"){
    console.log("allow into the movie");
}else {
    console.log("not allowed into the movie");
}

// Using that same object, only allow them into the movie if their name starts 
// with "B" and they are older than 18.




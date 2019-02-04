// // #1 Loop through the following array and count how many "computers" there are. Log the final count:

// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
// // sum = 0

// // for (var i = 0; i < officeItems.length; i++){
// //     if (officeItems[i] === "computer") {
// // sum++}
// // }

// // console.log(sum)
// function finder(string){
//     sum = 0
//     for (var i = 0; i < officeItems.length; i++){
//         if (officeItems[i] === string) {
//     sum++}
//         }console.log(sum)
// }
// (finder("computer"));
// console.log(officeItems.length) // 10 
// officeItems.push("apple");
// console.log(officeItems) // apple to the end of the array
// // var poppedItem = officeItems.pop();
// // console.log(poppedItem); //apple is taken off 
// console.log(officeItems); // list new array 
// var poppedItem = officeItems.shift();
// console.log(officeItems); //takes off first element in array "staple"
// var newItems = officeItems.slice(2,4);
// console.log(newItems); // [desk, lamp]
// var newNew = officeItems.lastIndexOf("computer");
// console.log(newNew); //8 
// #2 Loop through the following array and log to the console "old enough" if they are 18 or older, 
// and "not old enough" if they aren't 18.
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
var oddAge = peopleWhoWantToSeeMadMaxFuryRoad;

console.log(oddAge);


// if (peopleWhoWantToSeeMadMaxFuryRoad.age <= 18){
//     return ("old enough")
//     } else { 
//     return ("not old enough")
//     }
// console.log(peopleWhoWantToSeeMadMaxFuryRoad.age);

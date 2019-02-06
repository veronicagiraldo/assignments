var readline = require("readline-sync");
var name = readline.question("What is your name? ");
console.log(`Hello ${name}, Welcome, seems like you are stuck in a locked room, Am I right?`); 

var isAlive = true;
var hasKey = false;

while(isAlive === true){
    var index = ask.keyInSelect(["Put hand in hole", "Find the key", "Open the door"], "Choose Wisely...")
    if(index === 0){
        console.log("Wasted")
        isAlive = false
    }
    if(index === 1){
        if(hasKey){
            console.log("no key here, check your pocket");
        } else {
            console.log("you found the key");
            hasKey = true;
        }
    }
    if(index === 2){
        if(hasKey){
            console.log("You're Free");
            break;
        } else {
            console.log("it's locked!");
            hasKey = true;
        }

}
    // write if statement for the find the key option
        // consider a nested if asking if they've already found the key

    // write an if statement for the open the door option
        // consider a nested if asking if they've found the key
}
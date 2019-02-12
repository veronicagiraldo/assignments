var readline = require("readline-sync")

var isAlive = true;
var hasWon = false;

// Character Creation / ////

// var player = {
//     name: '', 
//     health: 100,
//     inventory: ["gun", "knife", "whip"]
// }

function Hero (name){
    this.name = name;
    this.attack = Math.floor(Math.random()*35)+11;
    this.hp = 500;
    this.powers = [];
    this.isAlive = true;
    this.level = 1; 
}

var player = new Hero('Wolverine')

var powers = ["speed", "invisible", "custom web-shooters", "indestructible shield"];


function Enemy (name, attack, hp, weapon){
    this.name = name; 
    this.attack = attack; 
    this.hp = hp;
    this.weapon = weapon;
    // this.count = 0;
}
var attackLow = Math.floor(Math.random()*5)+10;
var attackMedium = Math.floor(Math.random()*10)+20;
var attackHigh = Math.floor(Math.random()*20)+40;

var badGuy = new Enemy("Toad", attackLow, 20, "Invisible");
var badTwo = new Enemy("Mystique", attackMedium, 50, "Form Changing");
var badThree = new Enemy("Magneto", attackHigh, 100, "Metals are your bitch now");

var enemies = [badGuy, badTwo, badThree]

// enemy.hp > 0 && enemy === 

// introduce the game// console.log( 'hello this is the game!')

//  Game Function// //

// function walk(){
//     // random number between 1 - 4
//     var chance = Math.floor(Math.random() * 4)
//     // if number is 1 === attack
//     if(chance === 1){
//        console.log("ATTTAAACK")
//     } else {
//         console.log("Nothing happened, uneventful day really.")
//     }
// }

/////////////////
/// GAME INTRO //

player.name = readline.question("What is your name? ");
console.log("\nWelcome " + player.name + " to Marvel Universe! Your quest, if you choose to accept,\n is to defeat the villains of the Universe \n")


/////////////
// GAME LOOP

function quit(){
    console.log("!!!!!!!!!!!!!!YOU DEAD!!!!!!!!!!!!!!")
    isAlive = false;
}
function printInventory(){
    console.log(player.name)
    console.log(player.powers)
    console.log(player.hp)
}

while(isAlive && !hasWon){
    var action = readline.keyIn("If you want to continue, click on ['w'] Walk, [p] Print inventory, [q] Quit Game  ", {limit: 'wpq'})
    if(action === 'w'){
        walk()
    } if(action ==='p'){
        printInventory()
    } else if(action === 'q'){  
        quit()
    }   
}

function walk(){
    var random = Math.floor(Math.random()*2)
    if(random === 1){
        conflict()
    } else{
        console.log("\nYou will pass by a few Mutants, but dont be let Mystique fool you..\n")
    } 
}
function conflict(){
    console.log("\nYou run into a Villan\n")
    var action = readline.keyIn("would you like to [R] Run or [F] Fight?  ", {limit: 'RF'})
    if(action === 'r'){
        run();
        }else{
        var enemy = enemySelector();
        while(enemy.hp > 0 && player.hp > 0){
            fight(enemy)
        }
            if(enemy.hp <= 0){
            console.log("\nGOOD JOB you killed the villan!!!");
            console.log(enemy.hp);
            console.log(enemy);
            // enemy.count++;
            // console.log("this is fucking up");
            }
            player.level++;
            if (player.hp <= 0){
            console.log("!!!!!!!!!!!!!!YOU DEAD!!!!!!!!!!!!!!")
            isAlive = false;
            } if(player.level === 3){
            hasWon = true;
                console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$  YOU WON  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
                console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$  YOU WON  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        
        }
    }
}

        // }else if (player.hp <= 0){
        //     console.log("!!!!!!!!!!!!!!YOU DEAD!!!!!!!!!!!!!!")
        //     isAlive = false;
        // }

    
            
            // else if (enemy.count > 0 && enemy === badGuy){
            //     enemy.hp = 20;
            //     console.log(enemy)
            // } else if (enemy.count > 0 && enemy === badTwo){
            //     enemy.hp = 50;
            //     console.log(enemy)
            // } else if(enemy.count > 0 && enemy === badThree){
            //     enemy.hp = 100;
            //     console.log(enemy)
            // } 
         
        
    
    // enemy.count++;
    // console.log("this is fucking up");
    // if (enemy.count > 0 && enemy === badGuy){
    //     enemy.hp = 20;
    // } else if (enemy.count > 0 && enemy === badTwo){
    //     enemy.hp = 50;
    // } else if(enemy.count > 0 && enemy === badThree){
    //     enemy.hp = 100;
    // }

    

function fight(enemy){
    var random = Math.floor(Math.random()*3)
    if(random ===1){
        miss()
    }else{
        player.hp -= enemy.attack
        enemy.hp -= player.attack 
        console.log(player.attack)
        console.log(`hey ${player.name} your hp is now ${player.hp}`)
        console.log(`You Hit ${enemy.name} and their hp is ${enemy.hp}`)
    } if(enemy.hp <= 0){
        var enemyWeapon = enemy.weapon;
         player.powers.push(enemyWeapon)
    }
    
}
function enemySelector(){
    var random = Math.floor(Math.random()*enemies.length)
    return enemies[random]
}
function miss(){
    console.log('YOU MISSED!')
}

function run(){
    var random = Math.floor(Math.random()*2)
    if(random === 1){
        console.log('you escaped')
        walk()
    } else {
        console.log('\nAHHHH!!!! look out another Villain!!!')
        conflict()
    }
}

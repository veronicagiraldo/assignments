// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and 
// return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array 
// in-place with O(1) extra memory.
var nums =[ 1,1,2];
var removeDuplicates = function(nums) {
    let l = r = 0;
    while (r < nums.length){
        nums[l] = nums[r];
        l++, r++;
        while (nums[r] == nums[r - 1]){
            r++;
        }
    }
    return l;
};

for(let i =0; i < 5; i++){
    console.log(i);
}
// let count= 1;
// while(count < 5){
//     console.log(count);
//     count++;
// }
let count=1;
while(count <3){
    console.log(count);
    count++;
}
// blackjack

let suits =['heart', 'clubs', 'diamonds', 'spades'];
let values=['ace', 'king','queen','jack','ten','nine'];
let deck =[];

for(let suitIdx=0; suitIdx < suits.length; suitIdx++){
    for(let valueIdx =0; valueIdx < values.length; valueIdx++){
        deck.push(values[valueIdx]+ ' of '+ suits[suitIdx]);
    }
}
for(let i = 0; i < deck.length; i++){
    console.log(deck[i])
}

let playerCards= [deck[0], deck[2]];

function showMessage(){
    console.log('hello')
}
showMessage(); //function will be called

function myFunction(message, favoriteNumber){
    message= message + 'world!';
    console.log(message, favoriteNumber)
}
myFunction('heelo', 42);
// myFunction();

function showMessage(){
    console.log('hello')
}
showMessage('first messg');
showMessage('second mes'); 

function showMessage(message, anotherMessage){
    console.log(message, anotherMessage)
}
showMessage()

function triplePlus(value){
    let newValue = value + value + value;
    return newValue;
}
console.log(triplePlus(3))

function myFunction(favoriteNumber){
    let newNumber = favoriteNumber + 100;
    return newNumber;
}
let result = myFunction(42);

console.log(result);

function triplePlus(value){
    let newValue = value + value + value;
    return newValue;
}
triplePlus(3);

let message ="first message";
function myFunction(){
    let message = "hello World";
    return message;
}
myFunction();
console.log(message);

// blackjack

let suits =['heart', 'clubs', 'diamonds', 'spades'];
let values=['ace', 'king','queen','jack','ten','nine'];

function createDeck(){
    let deck=[];
    for(let suitIdx=0; suitIdx < suits.length; suitIdx++){
        for(let valueIdx =0; valueIdx < values.length; valueIdx++){
            deck.push(values[valueIdx]+ ' of '+ suits[suitIdx]);
        }
    }
    return deck;
}

function getNextCard(){
    return deck.shift();
}

let deck = createDeck();

for(let i = 0; i < deck.length; i++){
    console.log(deck[i])
}
let playerCards= [ getNextCard(), getNextCard()];

// Object

let person ={
    name: 'john',
    age: 32,
    partTime: false
};
console.log(person.name);
console.log('------------------------------------');
console.log(person.age);
console.log('------------------------------------');
console.log(person.partTime)

function changeCard(card){
    card.suit = 'clubs';
}
let cards = [
    {
    suit: "hearts",
    value: 'queen'
    },
    {
    suit: 'clubs',
    value: 'kings'
    }
];

console.log(cards[0].suit);

// let res = Math.random() *52;
// res= Math.trunc(res);
// console.log(res);

// let res = new Date().toDateString();
// console.log(res)

// let res = "hello world";
// res= res.toUpperCase();
// console.log('------------------------------------');
// console.log(res);
// console.log('------------------------------------');

// let res = 0/0;
// console.log(Number.isNaN(res));

// let suits =['heart', 'clubs', 'diamonds', 'spades'];
// let values=['ace', 'king','queen','jack','ten','nine'];

// function createDeck(){
//     let deck=[];
//     for(let suitIdx=0; suitIdx < suits.length; suitIdx++){
//         for(let valueIdx =0; valueIdx < values.length; valueIdx++){
//             deck.push(values[valueIdx]+ ' of '+ suits[suitIdx]);
//         }
//     }
//     return deck;
// }

// function getNextCard(){
//     return deck.shift();
// }

// let deck = createDeck();

// for(let i = 0; i < deck.length; i++){
//     console.log(deck[i])
// }
// let playerCards= [ getNextCard(), getNextCard()];

// Object

// let person ={
//     name: 'john',
//     age: 32,
//     partTime: false
// };
// console.log(person.name);
// console.log('------------------------------------');
// console.log(person.age);
// console.log('------------------------------------');
// console.log(person.partTime)

// function changeCard(card){
//     card.suit = 'clubs';
// }
// let cards = [
//     {
//     suit: "hearts",
//     value: 'queen'
//     },
//     {
//     suit: 'clubs',
//     value: 'kings'
//     }
// ];

console.log(cards[0].suit);
// blackjack
let suits =['heart', 'clubs', 'diamonds', 'spades'];
let values=['ace', 'king','queen','jack','ten','nine'];

function createDeck(){
    let deck=[];
    for(let suitIdx=0; suitIdx < suits.length; suitIdx++){
        for(let valueIdx =0; valueIdx < values.length; valueIdx++){
            let card = {
                suit: suits[suitIdx],
                value: values[valueIdx]
            };
            deck.push(card);
        }
    }
    return deck;
}
function getCardString(card){
    return card.value = ' of ' + card.suit;
}

function getNextCard(){
    return deck.shift();
}

let deck = createDeck();

let playerCards= [ getNextCard(), getNextCard()];

console.log(' '+ getCardString(playerCards[0]))
// function sum(arr){
//   let total = 0
//   for (let i of arr){
//     total += i 
//   }
//   return total
// }
// console.log(sum([1,2,3,4,5]))

// function sum(arr){
//   if(arr.length === 0) return 0
//   return arr[0] + sum(arr.slice(1))
// }
// console.log(sum([1,2,3,4,5]))


// function that loops through array for largest number
// function that loops through list calling ^^, removing largest from list
const itemsToSort = [3, 2, 4, 1, 6]

function findLargestValue(list){
  let lrg = list[0]
  let indexOfLarge = 0
  for(let i = 1; i <= list.length; i++){
    if(lrg < list[i]){
      lrg = list[i]
      indexOfLarge = i 
    }
  }
  return indexOfLarge
}

function selectionSort(list){
  let newList =[]
  let lrgItem
  while(list.length){
    lrgItem = findLargestValue(list)
    newList.push(list[lrgItem])
    list.splice(lrgItem, 1)
  }
  return newList
}
console.log(selectionSort(itemsToSort))

// D&C algorithm that uses recursion 

function quickSort(array){
  if(array.length < 2 ) return array
  let pivotIndex = Math.floor(array.length /2)
  let pivot = array[pivotIndex]
  let less = []
  let greater = []
  for(let i in array ){
    if(i !=pivotIndex){
      array[i] > pivot ? greater.push(array[i]) : less.push(array[i])
    }
  }
  return [
    ...quickSort(less),
    pivot,
    ...quickSort(greater)
  ]
}
console.log(quickSort([3,4,5,6,2,1]))
// o(n)

const items = [1,5,2,7,3,12,6,10]


items.sort((a, b) => a - b)
console.log(items)

// function search(list, item){
//   let hasItem = null
//   let counter = 0

//   for(let e of list){
//     if(e === item){
//       hasItem = true
//       break
//     }
//   }
//   console.log(counter)
//   return hasItem
// }
// console.log((search,12))

function search(list, item){
  let low = 0
  let high = list.length
  let counter = 0

  while(low <= high){
    counter++
    let mid = Math.floor((low + high)/2)
    let guess = list[mid]
    if(guess === item) return true
    if(guess > item) high = mid - 1 
    else low = mid + 1

  }
  console.log(counter)
  return null
}
console.log(search(items,4))

const rope = {value: 1500, weight: 1}
const food ={value: 2000, weight: 2}
const tent ={value: 3000, weight: 4}

// reduce 

// Object.assign() => sort regression 

const stockPrices = [10, 7, 5, 8, 11, 9 ];

getMaxProfit(stockPrices);

function getMaxProfit(stockPrices){
  let maxProfit = 0;
  for(let outerTime = 0; outerTime < stockPrices.length; outerTime++){
    for(let innerTime = 0; innerTime < stockPrices.length; innerTime++){
      const earlierPrice = stockPrices[earlierTime];
      const laterPrice = stockPrices[laterTime];
      const potentialProfit = laterPrice - earlierPrice; 
      maxProfit = Math.max(maxProfit, potentialProfit);

    }
  }
  return maxProfit;
}

function getMaxProfit(stockPrices) {
  let maxProfit = 0;
  // Go through every price and time
  for (let earlierTime = 0; earlierTime < stockPrices.length; earlierTime++) {
    const earlierPrice = stockPrices[earlierTime];
    // And go through all the LATER prices
    for (let laterTime = earlierTime + 1; laterTime < stockPrices.length; laterTime++) {
      const laterPrice = stockPrices[laterTime];
      // See what our profit would be if we bought at the
      // min price and sold at the current price
      const potentialProfit = laterPrice - earlierPrice;
      // Update maxProfit if we can do better
      maxProfit = Math.max(maxProfit, potentialProfit);
    }
  }
  return maxProfit;
}

function getMaxProfit(stockPrices) {
  let minPrice = stockPrices[0];
  let maxProfit = 0;

  for (let i = 0; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];
    // Ensure minPrice is the lowest price we've seen so far
    minPrice = Math.min(minPrice, currentPrice);
    // See what our profit would be if we bought at the
    // min price and sold at the current price
    const potentialProfit = currentPrice - minPrice;
    // Update maxProfit if we can do better
    maxProfit = Math.max(maxProfit, potentialProfit);
  }
  return maxProfit;
}

function getMaxProfit(stockPrices) {
  if (stockPrices.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }
  // We'll greedily update minPrice and maxProfit, so we initialize
  // them to the first price and the first possible profit
  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];
  // Start at the second (index 1) time
  // We can't sell at the first time, since we must buy first,
  // and we can't buy and sell at the same time!
  // If we started at index 0, we'd try to buy *and* sell at time 0.
  // this would give a profit of 0, which is a problem if our
  // maxProfit is supposed to be *negative*--we'd return 0.
  for (let i = 1; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];
    // See what our profit would be if we bought at the
    // min price and sold at the current price
    const potentialProfit = currentPrice - minPrice;
    // Update maxProfit if we can do better
    maxProfit = Math.max(maxProfit, potentialProfit);
    // Update minPrice so it's always
    // the lowest price we've seen so far
    minPrice = Math.min(minPrice, currentPrice);
  }
  return maxProfit;
}

// binary search algorithm
function binarySearch(target, nums) {
  // See if target appears in nums

  // We think of floorIndex and ceilingIndex as "walls" around
  // the possible positions of our target, so by -1 below we mean
  // to start our wall "to the left" of the 0th index
  // (we *don't* mean "the last index")
  let floorIndex = -1;
  let ceilingIndex = nums.length;
  // If there isn't at least 1 index between floor and ceiling,
  // we've run out of guesses and the number must not be present
  while (floorIndex + 1 < ceilingIndex) {
    // Find the index ~halfway between the floor and ceiling
    // We have to round down, to avoid getting a "half index"
    const distance = ceilingIndex - floorIndex;
    const halfDistance = Math.floor(distance / 2);
    const guessIndex = floorIndex + halfDistance;

    const guessValue = nums[guessIndex];

    if (guessValue === target) {
      return true;
    }
    if (guessValue > target) {
      // Target is to the left, so move ceiling to the left
      ceilingIndex = guessIndex;
    } else {
      // Target is to the right, so move floor to the right
      floorIndex = guessIndex;
    }
  }

  return false;
}
// edabit questions/solutions:
function divisible(num) {
	if (num %100 === 0){
		return true
	}else{
			return false
	}
}
// Is the Number Less than or Equal to Zero?
function lessThanOrEqualToZero(num) {
	return (num <=0 ? true : false ) 
}
// Write a function to reverse an array.
function reverse(arr) {
	return arr.reverse()
}
// Write a function that takes the base and 
// height of a triangle and return its area.
function triArea(base, height) {
	return (base * height/2)
}
// Check if an Array Includes an Element
function check(arr, el) {
	return arr.includes(el)
}
// Compare Strings by Sum of Characters
function comp(str1, str2) {
	if(str1.length === str2.length){
		return true
	} 
		return false
}
// Return the Next Number from the Integer Passed
function addition(num) {
	return num+1
}

// Is the String Empty?
function isEmpty(s) {
	return s.length == 0;
}
// Write a function that returns true if k^k == n for input (n, k).
// Math.pow(base, exponent)
function kToK(n, k) {
	return Math.pow(k,k) === n;
}
// Given two strings, firstName and lastName, return a single string in the format "last, first".
function concatName(firstName, lastName) {
  firstName.concat(' ', lastName)
} return concatName
// Create a function that takes a name and returns a greeting. Don't use a normal function but use an 'Arrow Function'.
const helloName = name => "Hello " + name + "!"
// Create a function to concatenate two integer arrays.
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
function isPlural(word) {
	return word.endsWith("s")
}
// Create a function that returns the ASCII value of the passed in character.
function ctoa(c) {
  return	c.charCodeAt(ctoa)
  }

  // Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having 
  // an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to 
  // largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues 
  // to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
  function makeArrayConsecutive2(statues) {
    return Math.max(...statues) - Math.min(...statues)- statues.length + 1;
 }
// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by 
// removing no more than one element from the array.
 function almostIncreasingSequence(sequence) {
  var count = 0;
  
  for(var i = 0; i < sequence.length; i++) {
      if(sequence[i] <= sequence[i-1]) {
          count++;
          
          if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) return false;
          
      }
  }
  
  return count <= 1;
}

// Given matrix, a rectangular matrix of integers, where each 
// value represents the cost of the room, your task is to 
// return the total sum of all rooms that are suitable for the 
// CodeBots (ie: add up all the values that don't appear below a 0).
function matrixElementsSum(matrix) {
  var total = 0;
  
  // Navigate each column of rooms
  // i = current column, j = current floor in column
  for (var i = 0; i < matrix[0].length; i++) {
          
      for (var j = 0; j < matrix.length; j++) {
          if (matrix[j][i] === 0) {
              // This room is haunted, so we don't care about the rooms below it. 
              // Continue to the next column of rooms
              break;
          }
          total += matrix[j][i];
      }
      
  }
}
function matrixElementsSum(matrix) {
  for(var r=0,j=0;j<matrix[0].length;j++){
      for(var i=0;i<matrix.length;i++){
        if(matrix[i][j]===0) break
        else r+=matrix[i][j]
      }
  }
  return r
}

// Given an array of strings, return another array 
// containing all of its longest strings.
function allLongestStrings(inputArray) {
      let max = inputArray[0].length;
    inputArray.map(v => max = Math.max(max, v.length));
    result = inputArray.filter(v => v.length == max);
    return result;
}
function commonCharacterCount(s1, s2) {
  var count = 0;
  s1= s1.split('');
  s2= s2.split('');
  
  s1.forEach(e => {
      if(s2.includes(e)){
          count++;
          s2.splice(s2.indexOf(e), 1);
      }
  });
return count;
}
console.log(commonCharacterCount("aabcc", "adcaa"))

function isLucky(n) {
  const arr = String(n).split('');
  
  const firstHalf= sum(arr.slice(0, arr.length /2));
  const secondHalf = sum(arr.slice(arr.length/2));
  
  return firstHalf === secondHalf;
 }
 
 function sum(arr){
  return arr.reduce((prev, current) => {
   const _current = parseInt(current, 0);
   return prev += _current
  },0)
 }

 function sortByHeight(a) {
  var array2 = a;
  
  array2 = array2.filter((element) => {
   if(element !=-1){
    return element;
   }
  }).sort((a, b) =>{
   return a-b;
  });
  var indexVal =0;
   for(var i=0; i <a.length; i++){
    if(a[i] != -1){
     a[i] =array2[indexVal];
     indexVal++;
    }
   }
  return a
 }
 
// Write an efficient function that takes
//  stockPrices and returns the best profit I could 
// have made from one purchase and one sale of one 
// share of Apple stock yesterday. 

const stockPrices = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)

function getMaxProfit(stockPrices) {
  let maxProfit = 0;
  // Go through every time
  for (let outerTime = 0; outerTime < stockPrices.length; outerTime++) {
    // For each time, go through every other time
    for (let innerTime = 0; innerTime < stockPrices.length; innerTime++) {
      // For each pair, find the earlier and later times
      const earlierTime = Math.min(outerTime, innerTime);
      const laterTime = Math.max(outerTime, innerTime);
      // And use those to find the earlier and later prices
      const earlierPrice = stockPrices[earlierTime];
      const laterPrice = stockPrices[laterTime];
      // See what our profit would be if we bought at the
      // min price and sold at the current price
      const potentialProfit = laterPrice - earlierPrice
      // Update maxProfit if we can do better
      maxProfit = Math.max(maxProfit, potentialProfit);
    }
  }
  return maxProfit;
}
function getMaxProfit(stockPrices) {
  let minPrice = stockPrices[0];
  let maxProfit = 0;
  for (let i = 0; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];
    // Ensure minPrice is the lowest price we've seen so far
    minPrice = Math.min(minPrice, currentPrice);
    // See what our profit would be if we bought at the
    // min price and sold at the current price
    const potentialProfit = currentPrice - minPrice;
    // Update maxProfit if we can do better
    maxProfit = Math.max(maxProfit, potentialProfit);
  }
  return maxProfit;
}
function getMaxProfit(stockPrices) {
  if (stockPrices.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }
  // We'll greedily update minPrice and maxProfit, so we initialize
  // them to the first price and the first possible profit
  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];
  // Start at the second (index 1) time
  // We can't sell at the first time, since we must buy first,
  // and we can't buy and sell at the same time!
  // If we started at index 0, we'd try to buy *and* sell at time 0.
  // this would give a profit of 0, which is a problem if our
  // maxProfit is supposed to be *negative*--we'd return 0.
  for (let i = 1; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];
    // See what our profit would be if we bought at the
    // min price and sold at the current price
    const potentialProfit = currentPrice - minPrice;
    // Update maxProfit if we can do better
    maxProfit = Math.max(maxProfit, potentialProfit);
    // Update minPrice so it's always
    // the lowest price we've seen so far
    minPrice = Math.min(minPrice, currentPrice);
  }
  return maxProfit;
}
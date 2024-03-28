/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {
  // Your code here 
  const countObj = {}; // we initialized an empty object to store counts

for (let element of array) { // we interated through each element in the array 
  if (countObj[element] === undefined) { // we had check if the element exist as a key in the count object
  countObj[element] = 1; // If the element is not the count object then we are going to intilize its count 1
} else {
  countObj[element]++; // If the element is already in the count object, increment its count.
  }
}
return countObj; //last but not least return the count object 
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;

/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns 
an array of all the values within that Object. 


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/

function valuesInObject(obj) {
  // Your code here 
  let values1 = []
  // uses a for loop & interating over each key
   for (let key in obj) {  
    values1.push(obj[key]);  //  We push the value associated with the current key into values1 Array
   }
   //using Object.values()
   // We retrieve an array containing the values of the object properties
   let values2 = Object.values(obj);
   // We are returniing both arrays
   return [values1, values2];
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;

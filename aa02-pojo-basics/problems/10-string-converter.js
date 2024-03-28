/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {
  // Your code here 
    const countObj = {}; // We initialized empty object to store counts.

    for (let char of string) { // Interate through any character in the string.
      if (countObj[char] === undefined) { // we check if the character exist as a key in the count object.
        countObj[char] = 1; // If the character is not the count object , we initialize its count to 1.
      } else { 
        countObj[char]++; // If the character is already in the count object then we are going to increment its count.
      }
    }
return countObj; //last but not least return count object.
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;

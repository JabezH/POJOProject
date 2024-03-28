/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2:
let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***********************************************************************/

function countScores(people) {
  // Your code here 
  const scores = {}; // we initialized an empty object to store the total scores

  for (let person of people) { // we Iterate through each person in the array of score objects.
    // we extract the name and score of the person 
    const name = person.name;
    const score = person.score;
      
     if (scores[name] === undefined) { // We checked if the person already exist in the scores object.
      scores[name] = score; // If the person do not exist we are going to initialize their score 
     } else {
      scores[name] += score; // If the person exist, we are going to add their score to the existing total 
     }
  }
 return scores;  // we are going to return the object containing each person total score
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;

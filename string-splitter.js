// 5. String Splitter
// Write a recursive function that split a string based on a separator 
// (similar to String.prototype.split). Don't use JS array's split 
// function to solve this problem.

// Input: 02/20/2020
// Output: 02202020

// Questions:
// What is the input to the program? a string and splitter
// What is the output of the program? a new string concatenated at splitter points
// What is the input to each recursive call? a string without the first character, splitter
// What is the output of each recursive call? either the char or empty string

const stringSplitter = function(string, splitter) {
  if (string === '') {
    return '';
  }

  let char = string[0];

  if (char === splitter) {
    char = '';
  } 

  return char + stringSplitter(string.slice(1), splitter);
   
};

console.log(stringSplitter('02/20/2020', '/'));
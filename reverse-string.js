// 3. Reverse String
// Write a function that reverses a string. 
// Take a string as input, reverse the string, and return the new string.

// Questions:
// What is the input to the program? a string
// What is the output of the program? the string reversed
// What is the input to each recursive call? the string minus 1 character
// What is the output of each recursive call? the function + 1 character

const reverseString = function(string){
  if (string === '') {
    return;
  }

  let char = string[0];

  return reverseString(string.slice(1)) + char;

};

reverseString('whitney');


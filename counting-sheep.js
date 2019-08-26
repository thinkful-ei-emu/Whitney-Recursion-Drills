// 1. Counting Sheep
// Write a recursive function that counts how many sheep jump over the fence. 
// Your program should take a number as input. That number should be the number 
// of sheep you have. The function should display the number along with the 
// message "Another sheep jumps over the fence" until no more sheep are left.

// Input: 3
// Output:
// 3: Another sheep jump over the fence
// 2: Another sheep jump over the fence
// 1: Another sheep jump over the fence
// All sheep jumped over the fence

// Questions:
// What is the input to the program? A number (the number of sheep you have)
// What is the output of the program? number and string (number of sheep + string)
// What is the input to each recursive call? Num of sheep decremented
// What is the output of each recursive call? Current number of sheep + string

const countingSheep = function(num) {
  if (num === 0) {
    return console.log('All sheep jumped over the fence');
  }

  console.log(`${num}: Another sheep jumps over the fence`);
  
  countingSheep(num-1);
};

countingSheep();
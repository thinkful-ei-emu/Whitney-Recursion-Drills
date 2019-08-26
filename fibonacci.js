// 6. Fibonacci
// Write a recursive function that prints the Fibonacci sequence of 
// a given number. The Fibonacci sequence is a series of numbers in 
// which each number is the sum of the 2 preceding numbers. For example, 
// the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence 
// looks as follows: 1, 1, 2, 3, 5, 8, 13.

// Questions:
// What is the input to the program? number
// What is the output of the program? fibonacci sequence up to the number
// What is the input to each recursive call? 
// What is the output of each recursive call? 

const fibonacciSequence = function(num) {
  if (num === 0) {
    return 0;
  }

  if (num === 1) {
    return 1;
  }

  return fibonacciSequence(num-1) + fibonacciSequence(num-2)
};

console.log(fibonacciSequence(7));

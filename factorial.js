// 7. Factorial
// Write a recursive function that finds the factorial of a given number. 
// The factorial of a number can be found by multiplying that number by 
// each number between itself and 1. For example, the factorial of 
// 5 is 5 * 4 * 3 * 2 * 1 = 120.

// Questions:
// What is the input to the program? a number
// What is the output of the program? the factorial of that number
// What is the input to each recursive call? num -1
// What is the output of each recursive call? function(num-1)

const factorialFinder = function(num) {
  if (num === 1){
    return 1;
  }

  return (num * factorialFinder(num-1));
};

console.log(factorialFinder(5));
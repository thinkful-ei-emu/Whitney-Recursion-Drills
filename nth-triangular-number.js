// 4. nth Triangular Number
// Calculate the nth triangular number. 
// A triangular number counts the objects that can 
// form an equilateral triangle. The nth triangular 
// number is the number of dots composing a triangle 
// with n dots on a side, and is equal to the sum of 
// the n natural numbers from 1 to n. This is the 
// Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

// Questions:
// What is the input to the program? the nth triangle 
// What is the output of the program? how many stars make up the triangular num
// What is the input to each recursive call? 
// What is the output of each recursive call? 

const triangularNumber = function(nth) {
  if (nth === 0) {
    return '';
  }

  return nth + triangularNumber(nth-1);
};

triangularNumber(5);
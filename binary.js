
// 12. Binary Representation
// Write a recursive function that prints out the binary representation of a 
// given number. For example, the program should take 3 as an input and print 
// 11 as output, or 25 as an input and print 11001 as an output. Note that 
// the binary representation of 0 should be 0.

// Questions:
// What is the input to the program? num (3)
// What is the output of the program? binary (11)
// What is the input to each recursive call? the current num divided by 2
// What is the output of each recursive call? the mod2 of current num

const binary = function(num){
  //base case
  if (num <= 0) {
    return '';
  }

  let binary = num%2;
  return binary(Math.floor(num/2)) + binary;
};

binary(37);

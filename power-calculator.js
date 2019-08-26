// 2. Power Calculator
// Write a function called powerCalculator() that takes two parameters, an 
// integer as a base, and another integer as an exponent. The function returns 
// the value of the base raised to the power of the exponent. Use only exponents 
// greater than or equal to 0 (positive numbers)

// powerCalculatorRec(10,2) should return 100
// powerCalculatorRec(10,-2) should return exponent should be >= 0

// Questions:
// What is the input to the program? two integers, a base and an exponent
// What is the output of the program? the value of the base raised to the power of the exponent
// What is the input to each recursive call? base and exponent - 1
// What is the output of each recursive call? base * function(base, exponent - 1)

const powerCalculator = function(base, exponent) {
  // If exponent is less than 0, return
  if (exponent < 0) {
    return console.log('Exponent needs to be greater than or equal to 0');
  }
  // When to stop
  if (exponent === 1) {
    return base;
  }

  return base * powerCalculator(base, exponent-1);
  
};

powerCalculator(10, 2);
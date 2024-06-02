class Calculator {
  static async calculate(num1, num2) {
    // Ensure num1 and num2 are numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) throw new Error('Invalid numbers');

    // Perform the calculation (for example, addition)
    const result = num1 + num2;

    // Return the result in an object
    return {
      num1: num1,
      num2: num2,
      result: result
    };
  }
}

module.exports = Calculator;

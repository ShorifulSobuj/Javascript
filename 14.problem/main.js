function generateNumberRange(initialValue, finalValue) {
  if (initialValue > finalValue) {
    // console.error("Initial value should be less than or equal to the final value");
    return [];
  }

  const result = [];
  for (let i = initialValue; i <= finalValue; i++) {
    result.push(i);
  }
  return result;
}

// Example usage:
const numbers = generateNumberRange(1, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

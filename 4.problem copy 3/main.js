//4. Solve the problem with Javascript  to check whether a number is divisible by 10 or not.

function isDivisibleBy10(number) {
  if (number % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

// Example usage:
console.log(isDivisibleBy10(20));   // Output: true
console.log(isDivisibleBy10(15));   // Output: false
console.log(isDivisibleBy10(100));  // Output: true
console.log(isDivisibleBy10(7));    // Output: false

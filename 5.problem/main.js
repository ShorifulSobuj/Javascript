//5. Solve the problem with Javascript  to check whether a number is even or odd.

function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Example usage:
console.log(isEvenOrOdd(4));   // Output: "Even"
console.log(isEvenOrOdd(7));   // Output: "Odd"
console.log(isEvenOrOdd(12));  // Output: "Even"
console.log(isEvenOrOdd(101)); // Output: "Odd"

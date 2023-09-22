// 3.Solve the problem with Javascript  to check whether a number is negative, positive or zero.

function checkNumber(number) {
  if (number < 0) {
    console.log("Negative");
  } else if (number > 0) {
    console.log("Positive");
  } else {
    console.log("Zero");
  }
}

// Example usage:
checkNumber(-5);  // Output in console: "Negative"
checkNumber(10);  // Output in console: "Positive"
checkNumber(0);   // Output in console: "Zero"

// 2 Solve the problem with Javascript to find a maximum between three numbers.

function findMaximum(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

// Example usage:
const number1 = 10;
const number2 = 5;
const number3 = 8;
const maximum = findMaximum(number1, number2, number3);
console.log("The maximum number is: " + maximum);

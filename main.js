// 1 Solve the problem with Javascript  to find the maximum between two numbers.

function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2
    }
}

const num1 = 200;
const num2 = 100;
const maximum = findMaximum(num1, num2);
console.log("The maximum between two numbers: " + maximum)


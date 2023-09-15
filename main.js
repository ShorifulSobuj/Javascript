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

function findMaximum(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num2 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

const number1 = 23;
const number2 = 34;
const number3 = 93;
const maximum = findMaximum(number1, number2, number3);
console.log("The maximum between two numbers: " + maximum);
// 9. Find the random number between 1 to 10

const min = 1; // Minimum value (1 in this case)
const max = 10; // Maximum value (10 in this case)

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);

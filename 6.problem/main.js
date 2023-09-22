//6.Solve the problem with Javascript  to check whether a character is in the alphabet or not.

function isAlphabetCharacter(char) {
  // Create a regular expression to match any uppercase or lowercase alphabet letter
  var alphabetRegex = /^[A-Za-z]$/;

  // Test if the character matches the regular expression
  return alphabetRegex.test(char);
}

// Example usage:
console.log(isAlphabetCharacter('A'));   // Output: true
console.log(isAlphabetCharacter('z'));   // Output: true
console.log(isAlphabetCharacter('5'));   // Output: false
console.log(isAlphabetCharacter('$'));   // Output: false

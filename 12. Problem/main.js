//12.Using string.includes method search for a word if it is present in a sentence variable or not. (as shown in the class)

const sentence = "This is a sample sentence with some words.";
const wordToSearch = "sample";

if (sentence.includes(wordToSearch)) {
  console.log(`The word "${wordToSearch}" is present in the sentence.`);
} else {
  console.log(`The word "${wordToSearch}" is not present in the sentence.`);
}

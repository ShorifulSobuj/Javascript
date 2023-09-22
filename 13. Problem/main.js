//13.Slice a sentence of 50 words and show only the first 40 index of the sentence using string.slice method and …. At the console.log

const sentence = "This is a sample sentence with more than 50 characters. We are going to slice it to the first 40 characters and add ...";

const slicedSentence = sentence.slice(0, 40) + '...';

console.log(slicedSentence);

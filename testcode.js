const { MarkovMachine } = require('./markov.js');

const text = 'the cat in the hat is in the hat';
const text2 = "Alice could only see her. She is such a new pair of white kid gloves and the blades of grass, but she remembered the number of bathing machines in the kitchen that did not like the wind, and was just beginning to grow up any more if you’d like it put the Dormouse again, so she went nearer to make out that it was certainly English."

let test = new MarkovMachine(text);
let story = test.makeText(15);
console.log('test object: ', test)
console.log('Generated story: ', story);

console.log('*******************')
console.log('word count :', test.words.length);
console.log('chains size: ', test.chains.size);
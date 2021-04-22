const { MarkovMachine } = require('./markov.js');

// const text = 'the cat in the hat is in the hat';
// const text2 = "Alice could only see her. She is such a new pair of white kid gloves and the blades of grass, but she remembered the number of bathing machines in the kitchen that did not like the wind, and was just beginning to grow up any more if you’d like it put the Dormouse again, so she went nearer to make out that it was certainly English."

// let test = new MarkovMachine(text2);
// test.makeText(15);

describe('Testing Markov Methods', function() {
    // initialize variable
    let text;
    // set variable for each test
    beforeEach(function() {
        text = 'the cat in the hat is in the hat';
    });
    
    // Run tests on the MarkovMachine object
    test('Testing constructor from MarkovMachine', function() {
        let test = new MarkovMachine(text);
        let wordCount = test.words.length;
        let chainCount = test.chains.size;
        expect(wordCount).toBe(9);
        expect(chainCount).toBe(5);
    })

    // Run tests on the MarkoveMachine output
    test('Testing output from makeText method', function() {
        let test = new MarkovMachine(text);
        // Use a word length of 10
        let story1 = test.makeText(10);
        // Test default word length of 20
        let story2 = test.makeText();
        expect(story1.length).toBeGreaterThan(10);
        expect(story2.length).toBeGreaterThan(20);
    })

    
});
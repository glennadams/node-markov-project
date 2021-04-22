const { MarkovMachine } = require('./markov.js');

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
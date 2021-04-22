/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // create a set to store the first words.
    let chains = new Map();
    const firstWords = new Set();
    
    // add words to the set, dups automatically excluded
    this.words.forEach(word => firstWords.add(word));
    
    // find next words and build word table
    for (let word of firstWords) {
      let list = [];
      for (let i = 0; i < this.words.length; i++) {
        // Determine if word match and if at the end of the array
        if (word === this.words[i] && i !== this.words.length - 1) {
          //  console.log('index: ', i, ' word: ', this.words[i + 1]);
          list.push(this.words[i + 1]);
        }
        if (word === this.words[i] && i === this.words.length - 1) {
          list.push(null);        
        }
        if ( i === this.words.length - 1) {
          chains.set(word, list);
        }
      }
    }
    this.chains = chains;
    // clear the set
    firstWords.clear();
  }


  /** return random text from chains */

  makeText(numWords = 20) {
    let wordList = Array.from(this.chains.keys())
    let text = ''

    for (let i = 1; i <= numWords; i++) {
      let index = Math.floor(Math.random() * (wordList.length));
      let word = wordList[index];
      text = text + ' ' + word;
      
      let list = this.chains.get(word);
      let next = list[Math.floor(Math.random() * (list.length))]
      if (next !== null) {
        text = text + ' ' + next;
      }
      else {
        return text;
      }
    }
    return text;
  }
}

// const text = 'the cat in the hat is in the hat';


// let test = new MarkovMachine(text);
// test.makeText(10);

module.exports = {MarkovMachine};
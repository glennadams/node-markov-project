/** Command-line tool to generate Markov text. */

const { default: axios } = require('axios');
const fs = require('fs');
const { MarkovMachine } = require('./markov.js');

// Read arguments from command line
const args = process.argv;

// console.log('args', args);

// Extract the file argument from the command line
// NOTE:  First two arguments are node file paths
//        Third argument is the added file path

if (args.length === 3) {
    // Check if file name or url
    console.log('CHECK ARG', args[args.length - 1].slice(0,4));
    if (args[args.length - 1].slice(0,4)==='http') {
        webCat(args[args.length - 1]);
    }
    else {
        cat(args[args.length - 1]);
    }
}
else if (args.length < 3) {
    console.log('ERROR: need a file path');
}
else {
    console.log('ERROR: Too many arguments');
}

//  Writing a function that reads file 

function cat (path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`ERROR reading ${path}: ${err}`)
        }
        else {
            // Set up Markov Machine to generate text
            let text = new MarkovMachine(data);
            console.log(`... generated text from file '${path}' ...`);
            console.log(text.makeText(50));
        }
    })
}

async function webCat (path) {
    try {
        const res = await axios.get(path);
        // Set up Markov Machine to generate text
        let text = new MarkovMachine(res.data);
        console.log(`... generated text from file '${path}' ...`);
        console.log(text.makeText(50));
    }
    catch (err) {
        console.log(`ERROR fetching ${path}: `, err);
        process.exit(1);
    }
}
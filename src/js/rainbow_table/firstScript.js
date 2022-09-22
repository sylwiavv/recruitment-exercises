const {readFileSync} = require('fs');
const fs = require('fs');
const ourText = readFileSync('./data/pan_tadeusz.txt', 'utf-8').trim();
const words = ourText.split(/(\n| )/g);
const trimWords = words.map( word => word.trim());

const events = require('events');
const readline = require('readline');
const md5 = require("md5");

let text = "";
const fileName = process.argv[2] || 'word_list.txt'
const escapeRegExp = (string) =>  string.replace(/(\.|\?|-|—|,|\(|\)|\*|!|"|;|:|'|«|»|\/)/g, ''); // $& means the whole matched string
//helpers
const afterReg = trimWords.map( t =>  escapeRegExp(t));
const withoutEmptyWords = afterReg.filter(word => word !== '');

const mySet = new Set(withoutEmptyWords);

mySet.forEach((value) => text += value + "\n")

fs.writeFile(`./dataOutput/${fileName}`, text, function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
});

(async function processLineByLine() {
    const rainbowTableWords = fs.createWriteStream('./dataOutput/rainbow_word_list.txt');
    const wordList = fs.createReadStream('./dataOutput/word_list.txt');

    try {
        const rl = readline.createInterface({
            input: wordList,
            output: rainbowTableWords,
            crlfDelay: Infinity
        });

        const wordsWithHash = rl.on('line', (word) => {
            const hash = md5(`${word}`);
            rainbowTableWords.write(`${word}  ${hash} \n`)

        });

        await events.once(rl, 'close');
    } catch (err) {
        console.error(err);
    }
})();

// script
// node firstScript.js word_list.txt



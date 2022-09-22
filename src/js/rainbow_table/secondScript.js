const events = require('events');
const fs = require('fs');
const readline = require('readline');
const md5 = require("md5");
(async function processLineByLine() {
    const rainbowTableWords = fs.createWriteStream('./data/rainbow_word_list.txt');
    const wordList = fs.createReadStream('./data/word_list.txt');

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

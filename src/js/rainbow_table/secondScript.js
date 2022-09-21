const events = require('events');
const fs = require('fs');
const readline = require('readline');
var md5 = require("md5");
(async function processLineByLine() {
    try {
        const rl = readline.createInterface({
            input: fs.createReadStream('./data/word_list.txt'),
            crlfDelay: Infinity
        });

        var logger = fs.createWriteStream('./data/rainbow_word_list.txt', {
            flags: 'a' // 'a' means appending (old data will be preserved)
        })

        const lines = rl.on('line', (line) => {
            var hash = md5(`${line}`);

            console.log(`Line from file: ${hash}`);
            logger.write(`${line}   ${hash} \n`)

        });

        console.log(lines);


        await events.once(rl, 'close');
    } catch (err) {
        console.error(err);
    }
})();
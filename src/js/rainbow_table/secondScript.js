const fs = require("fs");
const entryFile = process.argv[2];
const entryHash = process.argv[3];

const rainbowTableWords = fs.createWriteStream('./dataOutput/result.txt');
let file = fs.readFileSync(`./dataOutput/${entryFile}`, "utf8");
let arr = file.split(/\r?\n/);

arr.forEach((line) => {
    if (line.includes(`${entryHash}`)){
        rainbowTableWords.write(`Mr. Wylon's password:\n${line}`);
        console.log('Result file is created successfully.');
    }
});

// script
// node secondScript.js rainbow_word_list.txt c8e095e2a26f8540afabb36dcdaee3b1
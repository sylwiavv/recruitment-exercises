const fs = require("fs");
let file = fs.readFileSync("./data/rainbow_word_list.txt", "utf8");
let arr = file.split(/\r?\n/);
const rainbowTableWords = fs.createWriteStream('./data/result.txt');

arr.forEach((line, idx)=> {
    if (line.includes("c8e095e2a26f8540afabb36dcdaee3b1")){
        rainbowTableWords.write(`Mr. Wylon's password:\n${line}`);
    }
});


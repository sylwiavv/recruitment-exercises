const {readFileSync} = require('fs');
const fs = require('fs');
const ourText = readFileSync('./data/shortContent.txt', 'utf-8').trim();
const words = ourText.split(/(\n| )/g);
const trimWords = words.map( word => word.trim());

let text = "";

//helpers
const escapeRegExp = (string) =>  string.replace(/(\.|\?|-|—|,|\(|\)|!|"|;|:|'|«|»|\/)/g, ''); // $& means the whole matched string

const afterReg = trimWords.map( t =>  escapeRegExp(t));
const notEmptyWords = afterReg.filter(word => word !== '');

console.log(notEmptyWords);

const mySet = new Set(notEmptyWords);

mySet.forEach((value) => text += value + "\n")

fs.writeFile('./data/word_list.txt', text, function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
});
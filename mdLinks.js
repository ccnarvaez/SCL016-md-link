const mdLinks= require('./index.js');
const path = './README.md';
const process = require('process');
let paths = process.argv[2];
console.log(paths);



mdLinks(path);










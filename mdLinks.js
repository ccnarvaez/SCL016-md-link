const mdLinks= require('./index.js');
const process = require('process');
const path = require('path');

const regExpInput = /(\,)/;

const pathWriten = process.argv.slice(2).toString();
const input = pathWriten.split(regExpInput).filter(pw => pw !== ',');

const paths = input [0];
const options= input [1];

const ext = path.extname(paths);
const extValidate = () =>{
    return (ext == '.md')? mdLinks(paths, options): console.log('El archivo debe ser tipo .md');
}

(paths!== '')? extValidate() : console.log('Por favor indica un archivo');







const mdLinks= require('./index.js');
const process = require('process');
const path = require('path');

global.paths = '';
global.options = '';
global.route = '';


// Writing file
const pathWriten = () =>{
    const pathWriten = process.argv.slice(2).toString();
    const regExpInput = /(\,)/;
    const input = pathWriten.split(regExpInput).filter(pw => pw !== ',');

    paths = input [0];
    options= input [1];
    route = path.resolve(paths);

}

// Identifying extension type
const extType = () =>{
    const ext = path.extname(paths);

    const extValidate = () => {
        return (ext == '.md')? mdLinks(paths, options): console.log('El archivo debe ser tipo .md');
    }

    (paths!== '')? extValidate() : console.log('Por favor indica un archivo');
    
}

// Callback functions
pathWriten();
extType();







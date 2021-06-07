// ** this is not working yet
// This file is trying to be a module

// Requires
const path = require('path');

// Global scope
global.paths = '';
global.options = '';
global.route = '';

const regExpInput = /(\,)/;

// Writing file
const pathWriten = process.argv.slice(2).toString();
const input = pathWriten.split(regExpInput).filter(pw => pw !== ',');

const pathFunc = {
    pathF: () =>{
       return paths = input [0];
    }, 

    optionsF :() =>{
        return options= input [1];

    },

    routeF :() =>{
        return route = path.resolve(paths);
    }   
}
console.log( pathFunc.pathF())

module.exports = () => {
    return pathFunc.pathF();
}



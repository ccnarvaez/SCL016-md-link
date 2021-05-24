// Here, i can read file line by line
const fs = require('fs');
const input = fs.createReadStream('./README.md');

global.linesArray = [];

const rl = require('readline').createInterface({
    input: input,
    terminal: false
});


rl.on('line', (line) => {
    linesArray.push(line);
});

rl.on('close', () => {
    const anyLink = global.linesArray;
    
    // Reference video https://www.youtube.com/watch?v=W7S_Vmq0GSs
    // According to the video, the match method show you the groups declared into the regular expression
    // So, to separate a markdown link, wrote in the format [text](url), we are going to take this property 
    const regExpTxt = /\[([\w\s\d\-]+)\]/g;
    const regExpUrl = /\(([^\)]+)\)/g;

    anyLink.forEach((line)=>{
        //Capture text in markdown structure
        const text = line.match(regExpTxt);
        //console.log('text:' + text); 
        const href = line.match(regExpUrl);
        //console.log('href:' +href);   
        const axios = require('axios');
        axios.get(href.toString()).then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.log(error)
        })
    })
        
});
    




// MAYBE USEFUL TO DIRECTORIES---
// Here, i can read files contented inside the actual location
// const files = fs.readdir('./', (error, files)=>{
//     if (error){
//         throw error;
//     }
//     console.log(files);
//     //const readFile = fs.readFileSync('./README.md', 'UTF-8');
//     const readingFiles = fs.readFile('./README.md', 'UTF-8', (error, README) => {
//          if (error){
//             throw error;
//         }
//         //console.log(README);
//     });
    
// });


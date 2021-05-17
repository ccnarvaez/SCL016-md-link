// Required
const fs = require('fs');
const readline = require('readline');
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

// Here, i can read file line by line

const input = fs.createReadStream('./README.md');
const rl = require('readline').createInterface({
    input: input,
    terminal: false
});

let singleLine ='';
rl.on('line', (line) => {
    singleLine = line;
    console.log('[L]'+''+singleLine);
    console.log(typeof singleLine);
});


// 2. Identify url's inside


// Regular expressions allows you to identify patterns. In this case, the regular expression was wrote in order to identify links structure
const regularExpressions = () => {
    const anyLink = 'www.algo.com';
    const regularExp = /(http:\/\/)?(www\.)[a-zA-Z0-9.-]+\.(com|net|cl)/;
        if (regularExp.test(anyLink)){
            console.log('es una URL');
        }else{
            console.log('NO es una URL');
        }  
}
regularExpressions();

  
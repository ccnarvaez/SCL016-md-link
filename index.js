module.exports = (path) => {
    return mdLinks(path);
}

// Global scope variables
global.linesArray = [];
global.texts = [];
global.hrefs = [];
global.response = [];
global.statusCod = [];


// Regular expressions to identify text, url's and status digits
const regExpTxt = /\[([\w\s\d\-]+)\]/g;
const regExpHref = /\(([^\)]+)\)/g;
const regExpdig = /(\d{3})/;

// Requires
const fs = require('fs');
const readline = require('readline');
const https = require('https');


const mdLinks = (path) => {

    return new Promise ((resolve,reject)=>{
        const input= fs.createReadStream(path);
        const rl= readline.createInterface({
            input,
            terminal: false
        });

        rl.on('line', (line) => { 
            linesArray.push(line);    
        })

        rl.on('close', () => {
            linesArray.forEach((line) => {    
                texts += line.match(regExpTxt);
                hrefs += line.match(regExpHref); 
                setTimeout(()=>{
                    response = {
                        text : texts,
                        href : hrefs,
                        status :''
                    }
                }, 1000)     
            })

            // texts = texts.split(regExpTxt).filter(text => text.length>0); 
            hrefs = hrefs.split(regExpHref).filter(href => href.length>0);
        

            // http method   
            hrefs.forEach((href)=>{
                const hrefStr =href.toString();
                https.get(hrefStr, (res) => {
                    statusCod += (res.statusCode).toString();
                    setTimeout(()=>{
                        response = {
                            text : texts,
                            href : hrefs,
                            status : statusCod.split(regExpdig).filter(text => text.length>0)
                        }
                    }, 1000)  
                })
            })

            // Response: [{text}, {href}, {status}]
            resolve(setTimeout(()=>{
                console.log(response)}, 
            2000) );
        })

    }) 
}






    
   






    









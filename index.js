module.exports = (path, options) => {
    return mdLinks(path, options);
}

// Global scope variables
global.linesArray = [];
global.texts = [];
global.hrefs = [];
global.statusCod = [];
global.status = [];


// Regular expressions to identify text, url's and status digits
const regExpTxt = /\[([\w\s\d\-]+)\]/g;
const regExpHref = /\(([^\)]+)\)/g;
const regExpdig = /(\d{3})/;

// Requires
const fs = require('fs');
const readline = require('readline');
const https = require('https');


const mdLinks = (path, options) => {

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
            })

            texts = texts.split(regExpTxt).filter(text => text.length>0); 
            hrefs = hrefs.split(regExpHref).filter(href => href.length>0);

             // http method   
            hrefs.forEach((href)=>{
                const hrefStr =href.toString();
                https.get(hrefStr, (res) => {
                    statusCod += (res.statusCode).toString(); 
                })
            })
            setTimeout(()=>{
                statusCod = statusCod.split(regExpdig).filter(text => text.length>0);
            }, 1000)

            const message = () =>{
                let txt ='';
                statusCod.forEach(()=>{
                    if (statusCod<'400'){
                        txt = 'ok';
                    }
                    else{
                         txt = 'fail'  
                    }
                })
                return txt;
            }

             // Validation responses
            if (options =='--validate'){
                for(let i=0 ; i< hrefs.length; i++){
                    setTimeout(()=>{
                        const constructor = {
                                text : texts[i],
                                hrefs : hrefs [i],
                                status: statusCod[i],
                                message : message()
                            }
                            console.log(constructor);  
                    }, 3000);
                }
            }
            
            else {
                for(let i=0 ; i< hrefs.length; i++){
                    setTimeout(()=>{
                        const constructor = {
                                text : texts[i],
                                hrefs : hrefs [i],
                        }
                            console.log(constructor);  
                    }, 3000);
                } 
            
            }

        })

    }) 
}
   






    









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

// Messages ok or fail
const message = () =>{
    let txt ='';
    
    for (let i=0; i< statusCod.length-1; i++){

        let temp = parseInt(statusCod[i]);
        if (temp == 200){
            return txt = 'ok';
        }
        else {
            return txt = 'fail';
        }
    }
        
}

// Reading md lines, identifying url's and getting links status
const mdLinks = (path, options) => {
    
    return new Promise ((resolve,reject)=>{
        const input= fs.createReadStream(path);
        const rl= readline.createInterface({
            input,
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

            
             // Validation responses
            if (options =='--validate'){
                for(let i=0 ; i< hrefs.length; i++){
                    setTimeout(()=>{
                        const constructor = {
                                text : texts[i],
                                hrefs : hrefs [i],
                                file : route,
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
                                file : route,
                        }
                            console.log(constructor);  
                    }, 3000);
                } 
            
            }

        })

    }) 
}




   









    









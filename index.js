module.exports = (path, options) => {
    return mdLinks(path, options);
}

// Global scope variables
global.linesArray = [];
global.texts = [];
global.hrefs = [];
global.statusCod = [];
global.status = [];
global.statusTxt = [];


// Regular expressions to identify text, url's and status digits
const regExpTxt = /\[([\w\s\d\-]+)\]/g;
const regExpHref = /\(([^\)]+)\)/g;
const regExpMsj = /(\*)/g;

// Requires
const fs = require('fs');
const readline = require('readline');
const https = require('https');


// Reading md lines, identifying url's and getting links status
const mdLinks = (path, options) => {
 
   new Promise ((resolve, reject) => {

        const input= fs.createReadStream(path);
        const rl= readline.createInterface({
            input,
        });

        rl.on('line', (line) => { 
            linesArray.push(line);    
        })

        rl.on('close', () => {
            // Separating lines
            linesArray.forEach((line) => {    
                texts += line.match(regExpTxt);
                hrefs += line.match(regExpHref);   
            })

            texts = texts.split(regExpTxt).filter(text => text.length>0); 
            hrefs = hrefs.split(regExpHref).filter(href => href.length>0);

             // http method   
            hrefs.forEach((href)=>{
                
                https.get(href.toString(), (res) => {
                    new Promise ((resolve, reject) => {
                        statusCod += (res.statusCode+'*').toString();
                        statusTxt += (res.statusMessage+'*').toString();
                        resolve(statusCod, statusTxt);
                        reject ((error) => {
                            if (error){
                                throw error;
                            }
                        })
                    })
                      
                })
            })
            setTimeout(()=>{
                statusCod = statusCod.split(regExpMsj).filter(text => text.length>1);
                statusTxt = statusTxt.split(regExpMsj).filter(text => text.length>1);
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
                                message : statusTxt [i],
                            }
                            console.log(constructor); 
                    
                    }, 3000);
                }
            }
            
            else {
                for(let i=0 ; i< hrefs.length; i++){
            
                    const constructor = {
                            text : texts[i],
                            hrefs : hrefs [i],
                            file : route,
                    }
                    console.log(constructor);  
                } 
            
            }
        })
        // Promise resolved
            resolve(constructor);

            reject ((error) =>{
                if(error){
                    throw error;
                }
        }) 

    }) 
}

   









    









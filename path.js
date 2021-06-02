//Este fragmento demuestra el uso de readfile y deberia encontrarse en el archivo origen
const fs = require('fs');

new Promise ((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            throw error
        }
        return resolve(
            linksObj = {data},
            console.log(linksObj)
        ); 
   })
})

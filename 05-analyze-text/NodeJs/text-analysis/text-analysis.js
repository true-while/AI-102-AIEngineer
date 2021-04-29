const dotenv = require('dotenv');
const path = require('path')
const fs = require('fs');
const log = console.log;

// import namespaces

async function main() {
    try { 
        // Get Configuration Settings
        const ENV_FILE = path.join(__dirname, '.env');
        dotenv.config({ path: ENV_FILE });
        var uri = process.env.COG_SERVICE_ENDPOINT;

        // Create client using endpoint and key
         
        // Analyze each text file in the reviews folder
        var testFolder = './reviews/';
        var data = [];
        fs.readdirSync(testFolder).forEach( (file) => {
            // Read the file contents
            data.push({ 'name' : file, 'content' : fs.readFileSync(testFolder + '/' + file, 'utf8')})
        });

        for(const file of data) {
             log('\n-------------\n' + file.name);
             log(file.content);
        
       
            // Get language


            // Get sentiment


            // Get key phrases


            // Get entities


            // Get linked entities

        }
        
   }
   catch  (error) {
        // Something went wrong, write the error
        log(error)
   }
}

main();
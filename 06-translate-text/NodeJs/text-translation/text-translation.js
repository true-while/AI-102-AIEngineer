const dotenv = require('dotenv');
const path = require('path')
var http = require('https');
const fs = require('fs');
const log = console.log;

var translator_endpoint; 
var cog_key; 
var cog_region; 

async function main() {
    const ENV_FILE = path.join(__dirname, '.env');
    dotenv.config({ path: ENV_FILE });

    // Get Configuration Settings
    translator_endpoint = 'api.cognitive.microsofttranslator.com'
    cog_key = process.env.COG_SERVICE_KEY
    cog_region = process.env.COG_SERVICE_REGION

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

        // Detect the language
        var language = await GetLanguage(file.content);
        log('Language:' + language);

        // Translate if not already English
        if (language != 'en') {
             translation = await Translate(file.content, language)
             log(`Translation:\n${translation}`)
        }
    }    
}

function GetLanguage(text){
    // Use the Translator detect function
}

function Translate(text, source_language) {
    // Use the Translator translate function
}

main();
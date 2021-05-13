const dotenv = require('dotenv');
const path = require('path')
var readline = require('readline');
var log = console.log;
const fs = require("fs");
const stream =  require('stream');

//Import namespaces

var cog_key;
var cog_region;
var sTranslationConfig;

function main() {
    try { 
        // Get Configuration Settings
        const ENV_FILE = path.join(__dirname, '.env');
        dotenv.config({ path: ENV_FILE });
        cog_key = process.env.COG_SERVICE_KEY;
        cog_region = process.env.COG_SERVICE_REGION;

        // Configure translation
           

        recursiveAsyncReadLine();

    }
    catch  (error) {
        // Something went wrong, write the error
        log(error)
    }
}


function  Translate(targetLanguage) {

    return new Promise(resolve => {
            // Translate speech
            


    });
    
}

function SpeechSynthesize(targetLanguage, toSynthesize) {
    return new Promise(resolve => {
        
        // Configure speech


        // Configure speech synthesis
        
    });
}


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var recursiveAsyncReadLine = async function () {
    rl.question('\nEnter a target language\n fr = French\n es = Spanish\n hi = Hindi\n Enter anything else to stop\n', async function (command) {
      if (command.toLowerCase() == 'quit') 
       return rl.close(); 
    
      var translated = await Translate(command);
      log(translated);
      
      await SpeechSynthesize(command,translated);

      recursiveAsyncReadLine();       
  });
};

main();
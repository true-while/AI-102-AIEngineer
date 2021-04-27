const { TextAnalyticsClient, AzureKeyCredential } = require("@azure/ai-text-analytics");
const dotenv = require('dotenv');
const path = require('path')
var readline = require('readline');
var log = console.log;
var client;

async function GetLanguage(text) {
    // Call the service to get the detected language
    const results = await client.detectLanguage([text], "none");
    return results[0].primaryLanguage.name
};


var recursiveAsyncReadLine = async function () {
    rl.question('Enter some text ("quit" to stop)\n', async function (command) {
      if (command.toLowerCase() == 'quit') 
        return rl.close(); 
    
      var lang  = await GetLanguage(command)
      log("\nLanguage:", lang)
      recursiveAsyncReadLine(); 
  });
};

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


async function main() {
    try { 
        // Get Configuration Settings
        const ENV_FILE = path.join(__dirname, '.env');
        dotenv.config({ path: ENV_FILE });
        var uri = process.env.COG_SERVICE_ENDPOINT;

        //Create client using endpoint and key
        client = new TextAnalyticsClient(uri, new AzureKeyCredential(process.env.COG_SERVICE_KEY));
        
        //Get user input (until they enter "quit")
        recursiveAsyncReadLine();
    }
    catch  (error) {
        // Something went wrong, write the error
        log(error)
    }
}

main();
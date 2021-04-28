const dotenv = require('dotenv');
const path = require('path');
const readline = require('readline');

const {DefaultAzureCredential, ManagedIdentityCredential} = require('@azure/identity');
const {SecretClient} = require('@azure/keyvault-secrets');

const { TextAnalyticsClient, AzureKeyCredential } = require("@azure/ai-text-analytics");
var log = console.log;


async function GetLanguage(text, endpoint, key) {
    // Create client using endpoint and key
    var client = new TextAnalyticsClient(endpoint, new AzureKeyCredential(key));
 
    // Call the service to get the detected language
    var results = await client.detectLanguage([text], "none");
    return results[0].primaryLanguage.name
};


var recursiveAsyncReadLine = async function (endpoint, key) {
    
    // Get user input (until they enter "quit")
    rl.question('\nEnter some text ("quit" to stop)\n', async function (command) {
      if (command.toLowerCase() == 'quit') 
        return rl.close(); 
    
      var lang  = await GetLanguage(command, endpoint, key)
      log("\nLanguage:", lang)
      recursiveAsyncReadLine(endpoint, key); 
  });
};

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {
    try {
        // Import required configuration.
        const ENV_FILE = path.join(__dirname, '.env');
        dotenv.config({ path: ENV_FILE });

        // Get Configuration Settings
        cog_endpoint = process.env.COG_SERVICE_ENDPOINT;
        key_vault_name = process.env.KEY_VAULT;
        app_tenant = process.env.TENANT_ID;
        app_id = process.env.APP_ID;
        app_password = process.env.APP_PASSWORD;

        // Get cognitive services key from keyvault using the service principal credentials
        var url = `https://${key_vault_name}.vault.azure.net`;
        var credential = new DefaultAzureCredential();
        var client = new SecretClient(url, credential);
        var cog_key = await client.getSecret('Cognitive-Services-Key');

        recursiveAsyncReadLine(cog_endpoint,cog_key.value);

    } catch (error) {
        log(error)
    }

}

main();
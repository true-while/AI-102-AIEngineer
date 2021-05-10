const dotenv = require('dotenv');
const path = require('path')
const stream =  require('stream');
const Speaker = require('speaker');
const log = console.log;

// Import namespaces


var cog_key;
var cog_region;
var speech_config;


function TranscribeCommand() {
    
    return new Promise(resolve => {
            var command = ''
            
            // Configure speech recognition
            
            // Process speech input
            

    }); 
}

function TellTime() {

    var now = new Date()
    var minute = ('0' + now.getMinutes()).slice(-2);
    var response_text = `-The time is ${now.getHours()}:${minute}`;

    log(response_text);

    // Configure speech synthesis
   

    // Synthesize spoken output
   
}

async function main() {
    try {

        // Get Configuration Settings
        const ENV_FILE = path.join(__dirname, '.env');
        dotenv.config({ path: ENV_FILE });
        cog_key = process.env.COG_SERVICE_KEY;
        cog_region = process.env.COG_SERVICE_REGION;

        // Configure speech service


        // Get spoken input
        var command = await TranscribeCommand() ;
        if (command != undefined && command.toLowerCase() == 'what time is it?') {
            TellTime();
        }
    }
    catch (ex) {
        log(ex)
    }

}
main();

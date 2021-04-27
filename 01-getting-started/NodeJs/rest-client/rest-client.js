const dotenv = require('dotenv');
const path = require('path')
var http = require('https');

var readline = require('readline');
var log = console.log;

function GetLanguage(text) {

  return new Promise(resolve => {
    try {        
          // Construct the JSON request body (a collection of documents, each with an ID and text)
          var jsonBody = {
              "documents":[
                  {"id": 1,
                  "text": text}
              ]
          }
  
          // Let's take a look at the JSON we'll send to the service
          jsonBody = JSON.stringify(jsonBody, indent=2)

          // Make an HTTP request to the REST interface
          var uri = process.env.COG_SERVICE_ENDPOINT.replace(/\/$/, '').replace('https://', '');
  
          // Add the authentication key to the request header
          var headers = {
              'Content-Type': 'application/json',
              'Ocp-Apim-Subscription-Key': process.env.COG_SERVICE_KEY
          }

          // Use the Text Analytics language API
          var options = {
              host: uri,
              path: '/text/analytics/v3.0/languages',
              method: 'POST',
              headers: headers             
          };
          
          // If the call was successful, print the response
          var callback = function(response) {
            var content = '';
            response.setEncoding('utf8');

              //another chunk of data has been received, so append it to `str`
              response.on('data', function (chunk) {
                  content += chunk;
              });
          
              //the whole response has been received, so we just print it out here
              response.on('end', function () {
                if (response.statusCode == 200) {
                  log('\n'+content);  
                  var document = JSON.parse(content);
                  var lang = document.documents[0].detectedLanguage.name
                  resolve(lang);
                }
                else {
                  // Something went wrong, write the error
                  throw new Error('Response unsuccessful:' + content);
                }
              });
          }
  
          var req =  http.request(options, callback);
          req.write(jsonBody);
          req.end();

      }
      catch  (error) {
        // Something went wrong, write the error
        log(error)
        Promise.reject()
      }
    });
}

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
    const ENV_FILE = path.join(__dirname, '.env');
    dotenv.config({ path: ENV_FILE });
    recursiveAsyncReadLine();
}

main();







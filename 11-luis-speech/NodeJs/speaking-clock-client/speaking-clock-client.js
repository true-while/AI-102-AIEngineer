const dotenv = require('dotenv');
const path = require('path')
var log = console.log;
const stream =  require('stream');
const date = require('date-and-time')
const dateFormat = require('dateformat');

const zeroPad = (num, places) => String(num).padStart(places, '0')


// Import namespaces


function main() {

    try{
        // Get Configuration Settings
        const ENV_FILE = path.join(__dirname, '.env');
        dotenv.config({ path: ENV_FILE });
        cog_key = process.env.COG_SERVICE_KEY;
        cog_region = process.env.COG_SERVICE_REGION;

        // Configure speech service and get intent recognizer


        // Get the model from the AppID and add the intents we want to use


        // Process speech input

 

    }
    catch (ex) {
        log(ex)
    }
}

function GetTime(location) {
    var time_string = ''

    /* Note: To keep things simple, we'll ignore daylight savings time and support only a few cities.
    In a real app, you'd likely use a web service API (or write  more complex code!)
    Hopefully this simplified example is enough to get the the idea that you
    use LU to determine the intent and entitites, then implement the appropriate logic
    */
    var now = new Date();
    if (location.toLowerCase() == 'local') {
        time_string = `${now.getHours()}:${zeroPad(now.getMinutes(),2)}`;
    }else if (location.toLowerCase() == 'london') {
        time_string = `${now.getUTCHours()}:${zeroPad(now.getUTCMinutes(),2)}`;
    }else if (location.toLowerCase() == 'sydney') {
        now = date.addHours(new Date(),11);
        time_string = `${now.getUTCHours()}:${zeroPad(now.getUTCMinutes(),2)}`;
    }else if (location.toLowerCase() == 'new york') {
        now = date.addHours(new Date(),-5);
        time_string = `${now.getUTCHours()}:${zeroPad(now.getUTCMinutes(),2)}`;
    }else if (location.toLowerCase() == 'nairobi') {
        now = date.addHours(new Date(),3);
        time_string = `${now.getUTCHours()}:${zeroPad(now.getUTCMinutes(),2)}` 
    }else if (location.toLowerCase() == 'tokyo') {
        now = date.addHours(new Date(),9);
        time_string = `${now.getUTCHours()}:${zeroPad(now.getUTCMinutes(),2)}` 
    }else if (location.toLowerCase() == 'delhi') {
        now = date.addHours(new Date(),5.5);
        time_string = `${now.getUTCHours()}:${zeroPad(now.getUTCMinutes(),2)}`
    } else {
        time_string = `I don't know what time it is in ${location}`
    }
    return time_string
}

function GetDate(day){
    var date_string = 'I can only determine dates for today or named days of the week.'

    var weekdays = [
        "monday",
        "tuesday",
        "wednesday",
        "thusday",
        "friday",
        "saturday",
        "sunday"
    ]

    var today = new Date()

    // To keep things simple, assume the named day is in the current week (Sunday to Saturday)
    var day = day.toLowerCase()
    if (day == 'today') {
        date_string = dateFormat(today, "mm/dd/yyyy");  //today.strftime("%m/%d/%Y")
    } else if (weekdays.includes(day)) {

        todayNum = today.getDay();
        weekDayNum = weekdays.indexOf(day);
        offset = weekDayNum - todayNum;
        date_string = dateFormat(date.addDays(today,offset+1), "mm/dd/yyyy"); 
    }
    return date_string
}

function GetDay(date_string){
    // Note: To keep things simple, dates must be entered in US format (MM/DD/YYYY)
    try{
        date_object = Date.parse(date_string);
        day_string =  dateFormat(date_object,"dddd");
    }catch (ex) {
        day_string = 'Enter a date in MM/DD/YYYY format.'
    }
    return day_string
}

main();
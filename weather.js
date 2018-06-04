const https = require('https');
const api = require('./api.json');

function printWeather(weather){
    const message = `Current weather in ${weather.location.city} is ${weather.current_observation.temp_f}F`;
    console.log(message);
}

function get(query){
    const request = https.get(`https://api.wunderground.com/api/${api.key}/geolookup/conditions/q/${query}.json`, // API query
        response => {
            let body = "";      // temp var, holds data
            // Read data from responding API
            response.on('data', chunk => {
                body += chunk;
            });
            response.on('end', () => {
                const weather = JSON.parse(body);   // parse information
                printWeather(weather);              // call weather function w/location info
            });
        });
}

module.exports.get = get;                           // export method to app.js
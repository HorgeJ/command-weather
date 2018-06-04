// Gets weather information based on query information
const weather = require("./weather");

const query = process.argv.slice(2).join("_").replace(' ', '_');

weather.get(query); // get weather information, and print to console
const fs = require('fs');
const request = require('request');

let userInput = process.argv[2];

request(userInput, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});
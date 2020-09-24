const fs = require('fs');
const request = require('request');

let url = process.argv[2];
let file = process.argv[3];

request(url, (error, response, body) => {
  fs.writeFile(file, body, (error) => {
    if (error) {
      return error;
    }
    let fileStats = fs.statSync(file);
    let fileSize = fileStats["size"];
    console.log(`Downloaded and saved ${fileSize} bytes to ${file}`)
  });
});
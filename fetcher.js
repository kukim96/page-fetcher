
const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);


request(args[0], (error, response, body) => {
    if (error) {
      return console.log(error);
    }
    fs.writeFile(args[1], body, (error) => {
      if (error) {
        return console.log(error);
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`);
    });
  });
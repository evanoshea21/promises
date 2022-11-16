/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
// console.log('filepath->', filePath);
   fs.readFile(filePath, 'utf8', (err, data) => {
      if(err) {
        cb(err);
      } else {
        // console.log('data->', data);
        const lines = data.split(/\r?\n/);
        // console.log('lines->', lines);
        cb(err, lines[0]);
      }
  })
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, cb) {
  // TODO
  // console.log('url->', url);
  request.get(url, (err, response) => {
    console.log('ERROR ----' , err)
    if(err) {
      cb(err);
    } else {
     console.log('err->', err);
      cb(err, response.statusCode);
    }
});


};

// var needle = require('needle');

// request.get('http://www.google.com', function(error, response) {
//   if (!error && response.statusCode == 200)
//     console.log(response.body);
// });




// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};

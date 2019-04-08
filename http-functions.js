var https = require("https");

module.exports = function getHTML(options, callback) {
    /* Your code here */
    var buffer = [];

    https.get(options, function(response) {
      response.setEncoding('utf8');
  
      response.on('data', function(data) {
        buffer.push(data);
      });
      response.on('end', function(){
        console.log("Response stream complete.");
        for (var i = 0; i < buffer.length; i++) {
          callback(buffer[i]);
        }
      });
    });
    
  };
var https = require("https");

function getHTML (options, callback) {

  /* Add your code here */
  var buffer = [];

  https.get(options, function(response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
      buffer.push(data);
    });
    response.on('end', function(){
      console.log("Response stream complete.");
      for (var i = 0; i < buffer.length; i++) {
        console.log(buffer[i]);
      }
    });
  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions,printHTML)
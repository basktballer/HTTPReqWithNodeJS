var getHTML = require("../http-functions")

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
}

function print1337 (html) {

  var conversion = {
    a : '4', 
    e : '3', 
    l : '1', 
    o : '0', 
    s : '5', 
    t : '7', 
    'ck' : 'x', 
    'er' : '0r', 
    'you' : 'j00'
  }

  /* Write your code here! */

  console.log(html.toLowerCase());

}

getHTML(requestOptions, print1337);
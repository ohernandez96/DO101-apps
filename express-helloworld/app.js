var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.type('text/plain');
  var randnumber = Math.random(1,21);
  res.send('You have decided to roll a D20 dice and you got...\n'+randnumber);

});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});


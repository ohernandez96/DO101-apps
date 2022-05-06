var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.type('text/plain');
  var randnumber = Math.floor(Math.random() * 20) + 1;
  res.send('You have decided to roll a D20 dice and you got...\n'+randnumber);

});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});


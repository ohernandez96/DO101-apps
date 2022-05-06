var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.type('text/plain');
  var randnumber = Math.floor(Math.random() * 20) + 1;
  if (randnumber > 10) {
    var prompt = "You pass!"
  } else {
    var prompt = "Oof, sorry. You failed."
  }

  res.send('You have decided to roll a D20 dice.\n'+
  'If you get 10 or less, you fail. Otherwise, you pass. And you got a...\n'+randnumber+'!'+
  '\n'+);

});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});


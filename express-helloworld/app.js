var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.type('text/plain');
  var randnumber = Math.floor(Math.random() * 20) + 1;
  if (randnumber == 1) {
    var prompt = "You got the lowest possible roll. You failed. Better luck next time! \n Refresh to roll again"
  }
  else if (randnumber < 11) {
    var prompt = "Sorry, you failed. Refresh to roll again!"
  }
  else if (randnumber < 20) {
    var prompt = "You passed! Refresh to roll again."
  }
  else {
    var prompt = "You got the highest possible roll! Congrats! \n Refresh to roll again."
  }

  res.send('You have decided to roll a D20 dice.\nIf you get 10 or less, you fail. Otherwise, you pass. And you got a...\n'+randnumber+'!'+
  '\n'+prompt);

});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});


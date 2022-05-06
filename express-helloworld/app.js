var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('You have decided to roll a d20 dice, and you recieved: ');
  const b = Math.random();
  console.log('\n',b);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});


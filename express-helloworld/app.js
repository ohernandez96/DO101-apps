var express = require('express');
app = express();

app.get('/', function (req, res) {
  const b = Math.random();
  console.log("You have decided to roll a D20 dice and you got...\n")
  res.send(b);

});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});


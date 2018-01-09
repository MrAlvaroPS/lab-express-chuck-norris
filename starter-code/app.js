const express = require('express');
const app = express();
const Chuck = require('chucknorris-io');
const client = new Chuck();


client.getRandomJoke()
  .then((response) => {
    console.log("jorl");
  }).catch((err) => {
    // handle error
  });



app.get('/', function(req, res) {
  res.send(getRandomJoke());
});


app.listen(3000, function() {
  console.log("listening")
});

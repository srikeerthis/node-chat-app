var express = require("express");
var bodyParser = require("body-parser");
app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());
// allow to view urlencoded data from form
app.use(bodyParser.urlencoded({ extended: false }));

// varaible to store messages
messages = [
  { name: "Tim", message: "hi" },
  { name: "Cook", message: "Hello" },
];

// route to recieve messages
app.get("/messages", (req, res) => {
  res.send(messages);
});

// route to post messages
app.post("/messages", (req, res) => {
  // add message sent from browser
  messages.push(req.body);
  res.sendStatus(200);
});

var server = app.listen(3000, () => {
  console.log("server listening on ", server.address().port);
});

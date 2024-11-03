var express = require("express");
app = express();

app.use("/", express.static(__dirname));

// varaible to store messages
messages = [
  { name: "Tim", message: "hi" },
  { name: "Cook", message: "Hello" },
];
// route to recieve messages
app.get("/messages", (req, res) => {
  res.send(messages);
});

var server = app.listen(3000, () => {
  console.log("server listening on ", server.address().port);
});

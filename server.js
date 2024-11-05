var express = require("express");
var bodyParser = require("body-parser");
app = express();
// web socket
var http = require("http").Server(app);
var io = require("socket.io")(http);
var mongoose = require("mongoose");
var dotenv = require("dotenv");
dotenv.config();

app.use(express.static(__dirname));
app.use(bodyParser.json());
// allow to view urlencoded data from form
app.use(bodyParser.urlencoded({ extended: false }));

// mongodb setup
var dbUrl = process.env.DB_URL;
var Message = mongoose.model("Message", {
  name: String,
  message: String,
});

// route to recieve messages
app.get("/messages", (req, res) => {
  Message.find({})
    .then((result) => {
      console.log("sent message");
    })
    .catch((err) => {
      console.log(err);
    });
});

// route to post messages
app.post("/messages", (req, res) => {
  // add message sent from browser
  var message = new Message(req.body);
  message
    .save()
    .then((result) => {
      io.emit("message", req.body);
      res.sendStatus(200);
    })
    .catch((err) => {
      sendStatus(500);
    });
});

// connection for user
io.on("connection", (socket) => {
  console.log("a user is connected");
});

mongoose
  .connect(dbUrl)
  .then((result) => {
    console.log("connected to Mongodb");
  })
  .catch((err) => {
    console.error(err);
  });

// listen to http calls
var server = http.listen(3000, () => {
  console.log("server listening on ", server.address().port);
});

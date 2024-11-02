var express = require("express");
app = express();

app.use("/", express.static(__dirname));
var server = app.listen(3000, () => {
  console.log("server listening on ", server.address().port);
});

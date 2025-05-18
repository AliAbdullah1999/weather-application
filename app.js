const express = require("express");
const https = require('https')
const app = express();

app.get("/", (req, res) => {
    https.get('')
  res.send("Hello World");

});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

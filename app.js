const express = require("express");
const app = express();

const api = app.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});

module.exports = api;
app.listen(3000);

const express = require("express");
const app = express();
var cors = require("cors");
var request = require("request");
const port = 8000;

app.use(cors());

app.get("/users/:pageIndex", (req, res) => {
  request({
    uri: `https://reqres.in/api/users?page=${req.params.pageIndex}`
  }).pipe(res);
});

app.get("/user/:userId", (req, res) => {
  request({
    uri: `https://reqres.in/api/users/${req.params.userId}`
  }).pipe(res);
});

app.listen(port, () =>
  console.log(`AdmanIT Test API listening on port ${port}!`)
);

const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hello"));

app.get("/:id/", (req, res) => {
  res.send("Hello" + req.params.id + req.query.name + req.query.city);
  console.log(req.params);
});

app.get("/", (req, res) => {
  res.send("Hello " + req.query.name + req.query.city);
  console.log(req.query);
});

app.listen(3000, () => console.log("server running"));

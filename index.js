// implement your API here
const express = require("express");

const db = require("./data/db.js");

const server = express();

server.get("/", (req, res) => {
  res.send("working");
});

server.listen(4000, () => {
  console.log("\n ** API up and running on port 4k  **");
});

// implement your API here
const express = require("express");
const db = require("./data/db.js");
const server = express();
server.use(express.json());

server.post("/api/users", (req, res) => {
  const user = req.body;
  if (user.name && user.bio) {
    db.insert(user)
      .then(user => {
        res.status(201).json(user);
      })
      .catch(error => {
        res.status(500).json({
          message: {
            error: "There was an error while saving the user to the database"
          }
        });
      });
  } else {
    res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." });
  }
});

server.get("/api/users", (req, res) => {
  db.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The users information could not be retrieved." });
    });
});

server.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res
          .status(404)
          .json({ message: "The user with the specified ID does not exist." });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "The user information could not be retrieved."
      });
    });
});

// server.delete('/', (req, res) => {

// });

// server.put('/', (req, res) => {

// });

server.listen(4000, () => {
  console.log("\n ** API up and running on port 4k  **");
});

const product = require("./product");

const express = require("express");

server = express();

router = express.Router();

router.get("/welcome", (request, response) => {
  response.status(200).send("Welcome to DevToolkit#2");
});

server.use(router);

server.listen(3000, () => {
  console.log("Server is running!");
});

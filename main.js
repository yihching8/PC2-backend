const product = require("./product");
const express = require("express");
const cors = require("cors");

server = express();
server.use(cors());
server.use(express.json());

// router = express.Router();

// router.get("/welcome", (request, response) => {
//   response.status(200).send("Welcome to DevToolkit#2");
// });

// server.use(router);

server.use(product.router);

server.listen(3000, () => {
  console.log("Server is running!");
});

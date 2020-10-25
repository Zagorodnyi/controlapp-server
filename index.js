const express = require("express");
const app = express();
const server = require("http").createServer(app);
// SOCKET
const io = require("socket.io")(server);
// MIDDLEWARE
const bodyparser = require("body-parser");
const MongoDb = require("./src/utils/MongoDb")();
const cors = require("cors");
require("dotenv").config();
const { start } = require("./src/sockets/socketEvents");
start(io);
// API
const API = require("./src/API/endpoints");

// middleware
app.use(cors());
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: false,
  })
);
app.use("/api", API);

app.get("/", (req, res) => {
  res.redirect("/confidence");
});
app.get("/confidence", (req, res) => {
  res.sendFile("index.html", { root: `${__dirname}/public` });
});

app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 80;

server.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

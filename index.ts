// MIDDLEWARE
const bodyparser = require("body-parser");
const cors = require("cors");
const morgan = require('morgan')

import express, { Request, Response } from 'express'
const app = express();
const server = require("http").createServer(app);

import MongoDb from "./src/utils/MongoDb"
import { socketStart } from "./src/sockets/socketEvents"
import API from "./src/API/endpoints"
// SOCKET
const io = require("socket.io")(server);

socketStart(io);
MongoDb()
require("dotenv").config();
// API

// middleware
app.use(cors());
app.use(morgan('combined'))
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: false,
  })
);
app.use("/api", API);

app.get("/", (req: Request, res: Response) => {
  res.redirect("/confidence");
});
app.get("/confidence", (req: Request, res: Response) => {
  res.sendFile("index.html", { root: `${__dirname}/public` });
});

app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 80;

server.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const http = require("http");
const { Server } = require("socket.io");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const gameEngineRouter = require("./routes/gameEngine");
const leaderboardsRouter = require("./routes/leaderboards");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/game-engine", gameEngineRouter);
app.use("/leaderboards", leaderboardsRouter);

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

module.exports = { app, server };

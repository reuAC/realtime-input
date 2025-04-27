const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

let sharedContent = "";

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.emit("updateInput", sharedContent);

  socket.on("editInput", (encodedContent) => {
    sharedContent = encodedContent;
    io.emit("updateInput", sharedContent);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

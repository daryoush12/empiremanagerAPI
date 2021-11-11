const http = require("http");
const cors = require("cors");
const { port } = require("./Config");
const { Server } = require("socket.io");

const httpserver = http.createServer();
const io = new Server(httpserver);

httpserver.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});

io.on("connection", (evt) => {
  console.log(`${evt.id} connected`);
});

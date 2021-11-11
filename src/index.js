import empires from "./EventGroups/empire.js";
import { createServer } from "http";
import { port } from "./Config/index.js";
import { Server } from "socket.io";

const httpserver = createServer();
const io = new Server(httpserver);

function RegisterHandlers(socket) {
  empires(socket, io);
}

httpserver.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});

io.on("connection", RegisterHandlers);

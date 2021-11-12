import empires from "./EventGroups/empire.js";
import chat from "./EventGroups/chat.js";
import { createServer } from "http";
import { port } from "./Config/index.js";
import { Server } from "socket.io";
import dotenv from "dotenv";

dotenv.config();
const httpserver = createServer();

const io = new Server(httpserver, {
  cors: {
    origin: "chrome-extension://fhadihbhhmleehfpnjhacmaegfakegah",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

function RegisterHandlers(socket) {
  empires(socket, io);
  chat(socket, io);
}

httpserver.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});

io.on("connection", RegisterHandlers);

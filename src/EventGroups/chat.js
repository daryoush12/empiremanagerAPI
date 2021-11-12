import { getRooms } from "../mongoclient.js";
import { createAdapter } from "@socket.io/mongo-adapter";

export default function chat(socket, io) {
  io.on("message", (evt) => {
    //Let everybody know message was received
    socket.emit("message:received", evt);
  });

  io.on("room:join", (evt) => {
    //Does room really exist:

    //Let him join the room
    socket.join(evt);
  });

  io.on("room:create", (evt) => {});

  io.adaptor(createAdapter(getRooms()));
}

/**
 * 
 *  setInterval(function () {
    getRooms()
      .then((rooms) => {
        socket.emit("room:list", rooms);
      })
      .catch((e) => {
        console.log(`Failed to emit rooms. Reason: ${e.message}`);
      });
  }, 10000);
 */

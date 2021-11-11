export default function empires(socket, io) {
  io.on("newEmpire", (evt) => {
    console.log("new empire!");
  });
}

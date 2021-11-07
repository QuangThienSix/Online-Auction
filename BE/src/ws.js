import WebSocket, { WebSocketServer } from "ws";
import { logger } from "./lib/utils";
import ProductController  from "./controllers/ProductController";
const WS_PORT = 45678;
const CLIENTS = [];

let socketServer;

if (!socketServer) {
  socketServer = new WebSocketServer({
    port: WS_PORT,
  });

  socketServer.on("connection", function (client) {
    logger.info("client connects successfully: ");
    CLIENTS.push(client);
    client.on("message", function incoming(message) {
      console.log("received: %s", message);
    });
  });
  logger.info(`WebSocket Server is running at ws://localhost:${WS_PORT}`);
}

export const broadcastAll = (msg,param) => {
  logger.info("Message send: ", msg);
  switch(msg.toLowerCase())
  {
    case "auction":
      ProductController.getProductById(param.id);
      break;

  }

  for (var i = 0; i < CLIENTS.length; i++) {
    if (CLIENTS[i].readyState === WebSocket.OPEN) CLIENTS[i].send(msg);
  }
};

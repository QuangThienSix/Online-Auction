import WebSocket, { WebSocketServer } from "ws";
import { logger } from "./lib/utils";
import {
  singleByProductId,
  addProduct,
  deleteProduct,
  updateProduct,
  top5Ratting,
  top5Price,
  top5Active,
  search,
  top5Recoment,
  ProductDetail,
  getTop5RelationByCategoryId,
  getProductByCategoryId,
} from "./models/products";
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

export const  broadcastAll =async (msg,param) => {
  let data = "";
  switch(msg.toLowerCase())
  {
    case "auction":
      data= await singleByProductId(param);
      break;

  }

  console.log(data);
  for (var i = 0; i < CLIENTS.length; i++) {
    if (CLIENTS[i].readyState === WebSocket.OPEN) CLIENTS[i].send(data);
  }
};

import WebSocket, { WebSocketServer } from "ws";
import { logger } from "./lib/utils";
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

export const broadcastAll = async (msg) => {
  // let data = "";
  // switch(msg.toLowerCase())
  // {
  //   case "auction":
  //     data= await singleByProductId(param);
  //     break;

  // }
  // console.log(msg);
  // const data = {
  //   id: msg.id,
  //   name: msg.name,
  //   ratting: msg.ratting,
  //   price: msg.price,
  //   current_price: msg.current_price,
  //   max_price: msg.max_price,
  //   count_quantity_bidder: msg.count_quantity_bidder,

  // }
  // console.log(111111);
  // console.log(data);
  // let pop = JSON.stringify(data);
  // console.log(pop);

  const message = "thien";

  for (var i = 0; i < CLIENTS.length; i++) {
    if (CLIENTS[i].readyState === WebSocket.OPEN)
      CLIENTS[i].send(JSON.stringify(msg));
  }
};

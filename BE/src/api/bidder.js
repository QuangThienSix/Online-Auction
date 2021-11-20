import { Router } from "express";
import bidderController from "../controllers/bidderController";

const bidder = () => {
  let api = Router();
  api.get("/getProductBidding", bidderController.getProductBidding);
  api.get("/getWonList", bidderController.getWonlist);
  return api;
};

export default bidder();

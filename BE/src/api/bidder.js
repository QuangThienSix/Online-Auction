import { Router } from "express";
import bidderController from "../controllers/bidderController";

const bidder = () => {
  let api = Router();
  api.get("/getProductBidding", bidderController.getProductBidding);
  return api;
};

export default bidder();

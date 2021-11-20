import { Router } from "express";
import sellerController from "../controllers/sellerController";

const seller = () => {
  let api = Router();
  api.get("/getProductSelling", sellerController.getProductSelling);
  api.get("/getProductSold", sellerController.getProductSold);
  return api;
};

export default seller();

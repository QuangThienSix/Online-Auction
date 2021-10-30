import { Router } from "express";
import ProductController from "../controllers/ProductController";
import { authMdw } from "../middleware/auth.mdw";
import { Validate } from "../middleware/validate.mdw";
import schema_auth from "../schemas/auth.json";
import schema_signup from "../schemas/signUp.json";
import schema_rfToken from "../schemas/rfToken.json";
import schema_verify from "../schemas/verify.json";
/**
 * Follow this format for normal routing
 */

const product = () => {
  let api = Router();
  api.post("/", ProductController.creatProduct);
  api.put("/",  ProductController.updateProduct);
  api.delete("/",  ProductController.deleteProduct);
  api.get("/", ProductController.getProductById);
  api.get("/top5-ratting", ProductController.getTop5ProductRatting);
  api.get("/top5-price", ProductController.getTop5ProductPrice);
  api.get("/top5-active", ProductController.getTop5ProductAcitve);
  api.get("/top5-recomment", ProductController.getTop5ProductRecoment);
  api.get("/search", ProductController.Query);
 
  return api;
};

export default product();

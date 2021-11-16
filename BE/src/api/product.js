import {
  Router
} from "express";
import ProductController from "../controllers/ProductController";
import {
  authMdw
} from "../middleware/auth.mdw";
/**
 * Follow this format for normal routing
 */

const product = () => {
  let api = Router();
  api.post("/", ProductController.creatProduct);
  api.post("/auction", ProductController.createAuction);
  api.put("/", ProductController.updateProduct);
  api.delete("/", ProductController.deleteProduct);
  api.get("/", ProductController.getProductById);
  api.get("/seller", authMdw, ProductController.getProductBySeller);
  api.get("/top5-ratting", ProductController.getTop5ProductRatting);
  api.get("/top5-price", ProductController.getTop5ProductPrice);
  api.get("/top5-active", ProductController.getTop5ProductAcitve);
  api.get("/top5-recomment", ProductController.getTop5ProductRecoment);
  api.get("/search", ProductController.Query);
  api.get("/ProductDetail/:product_id", ProductController.ProductDetail);
  api.get(
    "/getTop5RelationByCategoryId/:category_id/:product_id",
    ProductController.getTop5RelationByCategoryId
  );

  api.get(
    "/getProductByCategoryId/:category_id",
    ProductController.getProductByCategoryId
  );
  api.get(
    "/getProductByBrandId/:brand_id",
    ProductController.getProductByBrandId
  );

  return api;
};

export default product();
import { Router } from "express";
import categoryController from "../controllers/categoryController";
import { authMdw } from "../middleware/auth.mdw";
import { Validate } from "../middleware/validate.mdw";
import schema_auth from "../schemas/auth.json";
import schema_signup from "../schemas/signUp.json";
import schema_rfToken from "../schemas/rfToken.json";
import schema_verify from "../schemas/verify.json";
/**
 * Follow this format for normal routing
 */

const category = () => {
  let api = Router();
  api.post("/", categoryController.creatCategory);
  api.patch("/:id", categoryController.updateCategory);
  api.delete("/:id", categoryController.deleteCategory);
  api.get("/", categoryController.getCateroy);
  api.get("/nobrand", categoryController.getCateroyNoBrand);
  api.get("/:id", categoryController.getCateroyDetail);
  api.get(
    "/getListCategoryAndBrand",
    categoryController.getListCategoryAndBrand
  );
  return api;
};

export default category();

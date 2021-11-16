import { Router } from "express";
import authController from "../controllers/authController";
import { authMdw } from "../middleware/auth.mdw";
import { Validate } from "../middleware/validate.mdw";
import schema_auth from "../schemas/auth.json";
import schema_signup from "../schemas/signUp.json";
import schema_rfToken from "../schemas/rfToken.json";
import schema_verify from "../schemas/verify.json";
import 
  uploadcontroller
 from "../controllers/uploadController";
/**
 * Follow this format for normal routing
 */

const upload = () => {
  let api = Router();
  api.post("/", uploadcontroller.single);
  api.get("/:name", uploadcontroller.getFile);
  //api.post("/multer", Validate(schema_signup), authController.signUp);
  return api;
};

export default upload();

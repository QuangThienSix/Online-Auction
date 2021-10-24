import { Router } from "express";
import UsersController from "../controllers/usersController";
import { Validate } from "../middleware/validate.mdw";
import schema_auth from "../schemas/auth.json";
import schema_signup from "../schemas/signUp.json";
import schema_rfToken from "../schemas/rfToken.json";
import schema_verify from "../schemas/verify.json";
/**
 * Follow this format for normal routing
 */

const users = () => {
  let api = Router();
  api.get("/", UsersController.listUser);
  api.get("/:_page&_limit", UsersController.listUser);
  api.delete("/:user_id", UsersController.deleteUser);
  return api;
};

export default users();

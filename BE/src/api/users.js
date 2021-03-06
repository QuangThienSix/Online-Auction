import { Router } from "express";
import UsersController from "../controllers/usersController";
/**
 * Follow this format for normal routing
 */

const users = () => {
  let api = Router();
  api.get("/", UsersController.listUser);
  api.get("/:user_id", UsersController.listUser);
  api.get("/:_page&_limit", UsersController.listUser);
  api.delete("/:user_id", UsersController.deleteUser);
  api.patch("/:user_id", UsersController.updateUser);
  api.post("/", UsersController.addUser);
  api.post("/changepassword", UsersController.changePassUser);
  api.get("/point/:user_id", UsersController.pointRatting);
  return api;
};

export default users();

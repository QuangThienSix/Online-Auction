import { version } from "../../package.json";
import { Router } from "express";
import auth from "./auth";
import users from "./users";
import sendMail from "./senMail";
import { authMdw } from "../middleware/auth.mdw";

/**
 * API Resources
 */
export default () => {
  let api = Router();

  api.get("/", (req, res) => {
    res.json({
      version,
    });
  });

  // auth
  api.use("/auth", auth);

  // User && Admin

  api.use("/user", authMdw, users);
  api.use("/sendMail", authMdw, sendMail);

  return api;
};

import { version } from "../../package.json";
import { Router } from "express";
import users from "./users";
import sendMail from "./senMail";
import { authMdw } from "../middleware/auth.mdw";

import auth from "./auth";
import category from "./category";
import brand from "./brand";
import product from "./product";
import watchList from "./watch_list";
import comment from "./comment";
import transform from "./transform";
import userRole from "./user_role";
import upload from "./upload";
import bidder from "./bidder";
import seller from "./seller";

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

  api.use("/auth", auth);
  api.use("/category", category);
  api.use("/brand", brand);
  api.use("/product", product);
  api.use("/watch-list", watchList);
  api.use("/comment", comment);
  api.use("/transform", transform);
  api.use("/upload", upload);
  api.use("/bidder", bidder);
  api.use("/seller", seller);
  // bul

  api.use("/users", authMdw, users);
  api.use("/user_roles", userRole);
  api.use("/sendMail", authMdw, sendMail);

  return api;
};

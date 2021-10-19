import BaseController from "./baseController";
import { getTokenForUser, deCodeTokenForUser, sendMail } from "../lib/utils";
import logger from "../lib/utils/logger";
import {
  singleByUserName,
  updateRefreshToken,
  isValidRefreshToken,
  singleByMail,
  updateIslock,
  addUser,
} from "../models/user";
import bcrypt from "bcrypt";
import appConfig from "../config/env/app.dev.json";
import rn from "random-number";
import apiConfig from "../config/api";

var options = {
  // example input , yes negative values do work
  min: 1000,
  max: 9999,
};
class AuthController extends BaseController {
  constructor() {
    super();
    // pinning context, when used in routers
    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
    this.verify = this.verify.bind(this);
    this.refreshAccessToken = this.refreshAccessToken.bind(this);
  }

  async signUp(req, res) {
    logger.info("singUp");
    const { username, password, fullname, address, email, islock, roles_id } =
      req.body;

    const password_hash = bcrypt.hashSync(
      password,
      appConfig.authentication.saltRounds
    );

    delete req.body.password;

    var tokenMail = parseInt(rn(options));

    const entity = {
      username: username,
      password: password_hash,
      fullname: fullname,
      address: address,
      email: email,
      islock: islock,
      roles_id: roles_id,
      tokenMail: tokenMail,
    };
    // check user
    const user = await singleByUserName(username, password_hash);
    if (user) {
      logger.info("Username trùng");
      return this.responseError(res, "Username trùng");
    }
    // check mail
    const mail = await singleByMail(email);
    if (mail) {
      logger.info("Email trùng");
      return this.responseError(res, "Email trùng");
    }
    // add user
    try {
      const resUser = await addUser(entity);

      // send Email
      const html = `Hi ${fullname},
        <br/>
        Cảm ơn bạn đã đăng ký!
        <br/> <br/>
        Mã Xác Nhận: <b>${tokenMail}</b>
        Link Xác nhận : <a href="http://localhost:${apiConfig.port}/login/verify">http://localhost:${apiConfig.port}/login/verify</a>
        `;
      await sendMail("phamquangthien.it@gmail.com", email, "[OTP]", html);
    } catch (error) {
      logger.info("Failed add user", error);
      return this.responseError(res, "Failed add user");
    } finally {
      return this.responseSuccess(res, {
        success: true,
        email: email,
        message: "Register successfully",
      });
    }
  }

  async signIn(req, res) {
    logger.info("singin");
    const { username, password } = req.body;
    logger.info("User and Password login: ", req.body);

    const user = await singleByUserName(username);
    if (user === null) {
      return res.json({
        authenticated: false,
      });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return this.responseError(res, {
        authenticated: false,
        message: "username || password is incorrect",
      });
    }

    const refreshToken = bcrypt.hashSync(
      password,
      appConfig.authentication.saltRounds
    );

    try {
      await updateRefreshToken(user.user_id, refreshToken);
    } catch (error) {
      logger.info("Failed update refreshToken: ", error.sqlMessage);
    }

    const accessToken = getTokenForUser(user);

    if (accessToken) {
      this.responseSuccess(res, {
        authenticated: true,
        accessToken,
        refreshToken,
      });
    } else {
      logger.info("No accessToken");
      return this.responseError(res, "Failed Login");
    }
  }
  async refreshAccessToken(req, res) {
    const { accessToken, refreshToken } = req.body;
    const { payload } = deCodeTokenForUser(accessToken);
    const { user_id } = payload;

    const ret = await isValidRefreshToken(user_id, refreshToken);
    if (ret === true) {
      const newAccessToken = getTokenForUser(user_id);
      return res.json({
        accessToken: newAccessToken,
      });
    }
    res.status(400).json({
      message: "Invalid refresh token.",
    });
  }
  async verify(req, res) {
    logger.info("verify");
    const { email, tokenMail } = req.body;
    const user = await singleByMail(email);
    if (user) {
      if (user.tokenMail === tokenMail) {
        logger.info("token === user.tokenMail");
        await updateIslock(user.user_id);
        return this.responseSuccess(res);
      } else {
        logger.info("Token không đúng");
        return this.responseError(res, "Token không đúng");
      }
    } else {
      logger.info("Email không tồn tại");
      return this.responseError(res, "Email không tồn tại");
    }
  }
}

export default new AuthController();

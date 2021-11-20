import BaseController from "./baseController";
import { getTokenForUser, deCodeTokenForUser, sendMail } from "../lib/utils";
import { logger } from "../lib/utils";
import { getProductSelling, getProductSold } from "../models/seller";
var options = {
  // example input , yes negative values do work
  min: 1000,
  max: 9999,
};

class sellerController extends BaseController {
  constructor() {
    super();
    this.getProductSelling = this.getProductSelling.bind(this);
    this.getProductSold = this.getProductSold.bind(this);
  }

  async getProductSelling(req, res) {
    logger.info("get product selling");
    const token = req.headers["x-access-token"];

    const parseToken = deCodeTokenForUser(token);
    if (parseToken) {
      try {
        let sellerid = parseToken.payload.user_id;

        let result = await getProductSelling(sellerid);

        return this.responseSuccess(res, result);
      } catch (err) {
        return this.responseError(
          res,
          {
            message: err,
          },
          500
        );
      }
    }
  }

  async getProductSold(req, res) {
    logger.info("get product selling");
    const token = req.headers["x-access-token"];

    const parseToken = deCodeTokenForUser(token);
    if (parseToken) {
      try {
        let sellerid = parseToken.payload.user_id;

        let result = await getProductSold(sellerid);

        return this.responseSuccess(res, result);
      } catch (err) {
        return this.responseError(
          res,
          {
            message: err,
          },
          500
        );
      }
    }
  }
}

export default new sellerController();

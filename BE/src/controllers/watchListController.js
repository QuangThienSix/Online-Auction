import BaseController from "./baseController";
import {
  getTokenForUser,
  deCodeTokenForUser,
  sendMail
} from "../lib/utils";
import {
  logger
} from "../lib/utils";
import {
  addwatch_list,
  getwatch_list,
  getBidderHasMaxPrice,
} from "../models/watch_list";
import {
  getNow
} from "../db";
import bcrypt from "bcrypt";
import appConfig from "../config/env/app.dev.json";
import rn from "random-number";
import apiConfig from "../config/api";

var options = {
  // example input , yes negative values do work
  min: 1000,
  max: 9999,
};
class WatchListController extends BaseController {
  constructor() {
    super();
    // pinning context, when used in routers
    this.creatWatchList = this.creatWatchList.bind(this);
    this.getWatchListProduct = this.getWatchListProduct.bind(this);
    this.getBidderHasMaxPrice = this.getBidderHasMaxPrice.bind(this);
  }

  async creatWatchList(req, res) {
    logger.info("creatWatchList");
    const {
      accessToken,
      data
    } = req.body;

    const parseToken = deCodeTokenForUser(accessToken);
    if (parseToken) {
      //this.responseSuccess(res, parseToken);
      if (parseToken.payload.roles_id === 2) {
        try {
          data.bidder_name = parseToken.payload.fullname;
          data.bidder_id = parseToken.payload.user_id;
          data.created_at = getNow();
          data.updated_at = getNow();
          let result = await addwatch_list(data);
          return this.responseSuccess(res, result);
        } catch (exception) {
          return this.responseError(res, {
            message: exception
          }, 500);
        }
      } else {
        return this.responseError(
          res, {
            authenticated: false,
            message: "Method Not Allowed",
          },
          405
        );
      }

    } else {
      return this.responseError(
        res, {
          authenticated: false,
          message: "token incorrect",
        },
        400
      );
    }
  }

  async getWatchListProduct(req, res) {
    const token = req.headers["x-access-token"];
    const parseToken = deCodeTokenForUser(token);
    if (parseToken) {
      try {
        var bidder_id = parseToken.payload.user_id;
        const result = await getwatch_list(bidder_id);
        return this.responseSuccess(res, result);
      } catch (exception) {
        return this.responseError(
          res, {
            message: exception.message,
          },
          500
        );
      }
    } else {
      return this.responseError(
        res, {
          authenticated: false,
          message: "token incorrect",
        },
        400
      );
    }
  }

  async getBidderHasMaxPrice(req, res) {
    logger.info("getBidderHasMaxPrice");
    try {
      let result = await getBidderHasMaxPrice(req.params.product_id);
      return this.responseSuccess(res, result);
    } catch (error) {
      return this.responseError(
        res, {
          message: error,
        },
        500
      );
    }
  }
}

export default new WatchListController();
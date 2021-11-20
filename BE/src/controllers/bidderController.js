import BaseController from "./baseController";
import { getTokenForUser, deCodeTokenForUser, sendMail } from "../lib/utils";
import { logger } from "../lib/utils";
import {
  getProductBidding,
  getProductBidderCompleted,
  getProductBidderMaxPrice,
} from "../models/bidder";
import { getProductByProductId } from "../models/products";
var options = {
  // example input , yes negative values do work
  min: 1000,
  max: 9999,
};

class BidderController extends BaseController {
  constructor() {
    super();
    this.getProductBidding = this.getProductBidding.bind(this);
    this.getWonlist = this.getWonlist.bind(this);
  }

  async getProductBidding(req, res) {
    logger.info("get product bidding");
    const token = req.headers["x-access-token"];

    const parseToken = deCodeTokenForUser(token);
    if (parseToken) {
      try {
        let biiderid = parseToken.payload.user_id;

        let result = await getProductBidding(biiderid);

        return this.responseSuccess(res, result);
      } catch (err) {
        return this.responseError(
          res,
          {
            message: exception,
          },
          500
        );
      }
    }
  }

  async getWonlist(req, res) {
    logger.info("get  won list");
    const token = req.headers["x-access-token"];

    const parseToken = deCodeTokenForUser(token);

    if (parseToken) {
      try {
        let biiderid = parseToken.payload.user_id;
        let datas = [];

        let data = await getProductBidderCompleted(biiderid);

        if (data.length > 0) {
          for (let item of data) {
            let result = await getProductBidderMaxPrice(item.id);

            if (result.length > 0) {
              if (result[0].max_price == item.max_price) {
                let product = await getProductByProductId(item.id);

                datas.push(product);
              }
            }
          }
        }

        return this.responseSuccess(res, datas);
      } catch (err) {
        return this.responseError(
          res,
          {
            message: exception,
          },
          500
        );
      }
    }
  }
}

export default new BidderController();
